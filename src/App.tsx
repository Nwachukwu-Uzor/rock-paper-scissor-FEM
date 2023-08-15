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
        <button onClick={handleToggleRulesModal}>Open Rules</button>
        <Modal open={openRulesModal} handleDismiss={handleToggleRulesModal}>
          <img src="/assets/images/rpsls-game-rules.png" alt="" />
        </Modal>
      </section>
    </main>
  );
};

export default App;
