import React from "react";

export const Options: React.FC = () => {
  return (
    <article className="max-w-[600px] mx-auto my-6 lg:my-12 flex flex-col gap-4 lg:gap-6">
      <div className="flex items-center justify-center">
        <img
          src="/assets/images/scissors.png"
          alt="Scissors"
          className="w-24 lg:w-40 active:opacity-60 active:scale-105 duration-150 hover:opacity-60 cursor-pointer"
        />
      </div>
      <div className="flex items-center justify-between">
        <img
          src="/assets/images/spock.png"
          alt="Spock"
          className="w-24 lg:w-40 active:opacity-60 active:scale-105 duration-150 hover:opacity-60 cursor-pointer"
        />
        <img
          src="/assets/images/paper.png"
          alt="Paper"
          className="w-24 lg:w-40 active:opacity-60 active:scale-105 duration-150 hover:opacity-60 cursor-pointer"
        />
      </div>
      <div className="flex items-center justify-center gap-4 lg:gap-12">
        <img
          src="/assets/images/lizard.png"
          alt="Lizard"
          className="w-24 lg:w-40 active:opacity-60 active:scale-105 duration-150 hover:opacity-60 cursor-pointer"
        />
        <img
          src="/assets/images/rock.png"
          alt="Rock"
          className="w-24 lg:w-40 active:opacity-60 active:scale-105 duration-150 hover:opacity-60 cursor-pointer"
        />
      </div>
    </article>
  );
};
