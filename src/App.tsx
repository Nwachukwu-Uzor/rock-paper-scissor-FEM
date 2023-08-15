import React, { useState } from "react";
import { Header, Options, Modal } from "./components";

const App: React.FC = () => {
  const [openRulesModal, setOpenRulesModal] = useState(false);

  const handleToggleRulesModal = () => {
    setOpenRulesModal((opened) => !opened);
  };

  return (
    <main className="flex items-center justify-center py-6 lg:py-8">
      <section className="w-[90%] max-w-[800px]">
        <Header score={0} />
        <Options />
        <div className="fixed bottom-0 right-0 flex justify-end py-4 pr-6">
          <button
            onClick={handleToggleRulesModal}
            className="text-white px-4 py-2 rounded-md border-2 border-white hover:opacity-80 active:scale-105 duration-150"
          >
            Open Rules
          </button>
        </div>
        <Modal
          open={openRulesModal}
          handleDismiss={handleToggleRulesModal}
          dismissible
        >
          <div className="bg-white px-2 lg:px-3 py-4 max-w-[400px] rounded-md shadow-md">
            <img src="/assets/images/rpsls-game-rules.png" alt="" />
          </div>
        </Modal>
      </section>
    </main>
  );
};

export default App;
