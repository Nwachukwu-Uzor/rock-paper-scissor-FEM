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
            <div className="bg-white px-2 lg:px-3 py-4 max-w-[400px] rounded-md shadow-md">
              <div className="flex justify-between items-center py-2">
                <h1>RULES</h1>
                <AiOutlineClose />
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
