import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

import { Header, Options, Modal } from "./components";

interface SelectionType {
  beats: string[];
  imgUrl: string;
  key: string;
}

const App: React.FC = () => {
  const [score, setScore] = useState(0);
  const [openRulesModal, setOpenRulesModal] = useState(false);
  const [userSelection, setUserSelection] = useState<SelectionType | null>(
    null
  );
  const [CPUSelection, setCPUSelection] = useState<SelectionType | null>(null);
  const [winner, setWinner] = useState<"USER" | "CPU" | "TIE" | null>(null);

  const beatRules: Record<string, SelectionType> = {
    SPOCK: {
      beats: ["SCISSORS", "ROCK"],
      imgUrl: "/assets/images/spock.png",
      key: "SPOCK",
    },
    SCISSORS: {
      beats: ["LIZARD", "PAPER"],
      imgUrl: "/assets/images/scissors.png",
      key: "SCISSORS",
    },
    PAPER: {
      beats: ["ROCK", "SPOCK"],
      imgUrl: "/assets/images/paper.png",
      key: "PAPER",
    },
    ROCK: {
      beats: ["SCISSORS", "LIZARD"],
      imgUrl: "/assets/images/rock.png",
      key: "ROCK",
    },
    LIZARD: {
      beats: ["SPOCK", "PAPER"],
      imgUrl: "/assets/images/lizard.png",
      key: "LIZARD",
    },
  };

  const message = {
    USER: "YOU WIN",
    CPU: "YOU LOSE",
    TIE: "DRAW",
  };

  const CPUOptions = Object.keys(beatRules);

  const handleToggleRulesModal = () => {
    setOpenRulesModal((opened) => !opened);
  };

  const handleCPUSelection = (userChoice: SelectionType) => {
    const randomIndex = Math.floor(Math.random() * CPUOptions.length);
    const CPUChoice = beatRules?.[CPUOptions[randomIndex]];
    setTimeout(() => {
      setCPUSelection(CPUChoice);
      if (!userChoice) {
        return;
      }

      console.log(CPUChoice);

      if (userChoice.key === CPUChoice.key) {
        setWinner("TIE");
        return;
      }

      if (userChoice.beats.includes(CPUChoice.key)) {
        setWinner("USER");
        setScore((score) => score + 1);
        return;
      }
      setWinner("CPU");
      setScore((score) => score - 1);
    }, 2000);
  };

  const handleUserSelection = (selection: string) => {
    const userChoice = beatRules?.[selection];
    setUserSelection(userChoice);
    handleCPUSelection(userChoice);
  };

  const handlePlayAgainBtnClick = () => {
    setCPUSelection(null);
    setUserSelection(null);
    setWinner(null);
  };

  return (
    <>
      <main className="flex items-center justify-center pt-2 lg:pt-3">
        <section className="w-[90%] max-w-[800px]">
          <Header score={score} />
          {userSelection ? (
            <div className="min-h-[40vh] flex items-center ">
              <div className="flex justify-between items-center w-full">
                <div className="flex flex-col gap-2 items-center">
                  <p className="font-bold text-lg lg:text-xl text-white uppercase">
                    You Picked
                  </p>
                  <img
                    src={userSelection.imgUrl}
                    alt="User Selection"
                    className="w-24 lg:w-36 active:opacity-90 active:scale-110 duration-150 hover:scale-[1.05] cursor-pointer relative z-20"
                  />
                </div>
                {userSelection && CPUSelection && winner ? (
                  <div className="flex flex-col gap-2 justify-center items-center">
                    <p className="font-bold text-xl lg:text-2xl text-white uppercase">
                      {message?.[winner]}
                    </p>
                    <button
                      onClick={handlePlayAgainBtnClick}
                      className="text-[#3B4262] bg-white font-extrabold  px-4 lg:px-8 py-2 rounded-md border-2 border-white hover:opacity-80 active:scale-105 duration-150"
                    >
                      Play Again
                    </button>
                  </div>
                ) : null}
                <div className="flex flex-col gap-2 items-center">
                  <p className="font-bold text-lg lg:text-xl text-white uppercase">
                    The house picked
                  </p>
                  {CPUSelection ? (
                    <img
                      src={CPUSelection.imgUrl}
                      alt="User Selection"
                      className="w-24 lg:w-36 active:opacity-90 active:scale-110 duration-150 hover:scale-[1.05] cursor-pointer relative z-20"
                    />
                  ) : (
                    <div className="h-16 lg:h-20 w-16 lg:w-20 rounded-full bg-black/10 animate-ping duration-150 mt-auto"></div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <Options handleSelection={handleUserSelection} />
          )}

          <Modal
            open={openRulesModal}
            handleDismiss={handleToggleRulesModal}
            dismissible
          >
            <div className="bg-white px-3 lg:px-6 py-4 lg:py-8 w-full z-50 fixed right-0 top-0 bottom-0 left-0 md:static lg:h-auto md:w-[400px] md:rounded-md shadow-md">
              <div className="flex justify-center md:justify-between items-center py-4">
                <h1 className="text-[#3B4262] font-semibold text-lg md:text-xl">
                  RULES
                </h1>
                <AiOutlineClose
                  className="text-black cursor-pointer active:scale-105 duration-200 absolute bottom-6 left-[50%] translate-x-[50%] lg:static text-xl"
                  onClick={handleToggleRulesModal}
                />
              </div>
              <img src="/assets/images/rpsls-game-rules.png" alt="" />
            </div>
          </Modal>
        </section>
      </main>
      <div className="fixed bottom-0 right-0 flex justify-center lg:justify-end py-4 pr-6">
        <button
          onClick={handleToggleRulesModal}
          className="text-white px-4 py-2 rounded-md border-2 border-white hover:opacity-80 active:scale-105 duration-150"
        >
          Open Rules
        </button>
      </div>
    </>
  );
};

export default App;
