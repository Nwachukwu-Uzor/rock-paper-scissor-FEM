import React from "react";
import { Header, Options } from "./components";

const App: React.FC = () => {
  return (
    <main className="flex items-center justify-center py-6 lg:py-8">
      <section className="w-[90%] max-w-[800px]">
        <Header score={0} />
        <Options />
      </section>
    </main>
  );
};

export default App;
