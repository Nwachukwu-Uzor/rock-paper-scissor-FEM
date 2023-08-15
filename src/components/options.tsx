import React from "react";

export const Options: React.FC = () => {
  return (
    <article className="max-w-[600px] mx-auto my-6 lg:my-12 flex flex-col gap-6 lg:gap-10">
      <div className="flex items-center justify-center">
        <img
          src="/assets/images/scissors.png"
          alt="Scissors"
          className="w-24 lg:w-40 active:opacity-60 active:scale-105 duration-150 hover:opacity-60 cursor-pointer relative z-20"
        />
      </div>
      <div className="flex items-center justify-between">
        <div className="relative">
          <img
            src="/assets/images/spock.png"
            alt="Spock"
            className="w-24 lg:w-44 active:opacity-60 active:scale-105 duration-150 hover:opacity-60 cursor-pointer relative z-20"
          />
          <div className="absolute top-0 translate-y-[-50%] right-0 h-48 lg:h-96 w-3 lg:w-4 bg-black/20 rotate-45"></div>
        </div>
        <div className="relative">
          <img
            src="/assets/images/paper.png"
            alt="Paper"
            className="w-24 lg:w-40 active:opacity-60 active:scale-105 duration-150 hover:opacity-60 cursor-pointer relative z-20"
          />
          <div className="absolute top-0 translate-y-[-50%]  h-48 lg:h-80 w-3 lg:w-4 bg-black/20 -rotate-45"></div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-6 lg:gap-20 relative">
        <div className="relative">
          <img
            src="/assets/images/lizard.png"
            alt="Lizard"
            className="w-24 lg:w-40 active:opacity-60 active:scale-105 duration-150 hover:opacity-60 cursor-pointer relative z-20"
          />
          <div className="absolute top-0 translate-y-[-50%] left-[25%] translate-x-[-25%] h-48 w-3 lg:w-4 bg-black/20 -rotate-45"></div>
        </div>
        <div className="relative">
          <img
            src="/assets/images/rock.png"
            alt="Rock"
            className="w-24 lg:w-40 active:opacity-60 active:scale-105 duration-150 hover:opacity-60 cursor-pointer relative z-20"
          />
          <div className="absolute top-0 right-[25%] translate-x-[25%] translate-y-[-50%] h-48 w-3 lg:w-4 bg-black/20 rotate-45"></div>
        </div>
        <div className="absolute h-3 lg:h-4 w-20 translate-y-[-50%] bg-black/20 top-[50%] bottom-[50%]"></div>
      </div>
    </article>
  );
};
