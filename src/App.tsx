import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

import { Header, Options, Modal } from "./components";

const App: React.FC = () => {
  const [openRulesModal, setOpenRulesModal] = useState(false);

  const handleToggleRulesModal = () => {
    setOpenRulesModal((opened) => !opened);
  };

  return (
    <>
      <main className="flex items-center justify-center pt-2 lg:pt-3">
        <section className="w-[90%] max-w-[800px]">
          <Header score={0} />
          <Options />

          <Modal
            open={openRulesModal}
            handleDismiss={handleToggleRulesModal}
            dismissible
          >
            <div className="bg-white px-3 lg:px-6 py-4 lg:py-8 w-full z-50 fixed right-0 top-0 bottom-0 left-0 md:static lg:h-auto md:w-[400px] md:rounded-md shadow-md">
              <div className="flex justify-center md:justify-between items-center py-4">
                <h1 className="text-[#3B4262] font-semibold text-lg md:text-xl">RULES</h1>
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
