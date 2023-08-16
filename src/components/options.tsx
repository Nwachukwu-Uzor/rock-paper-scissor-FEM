import React from "react";
import { Option } from ".";

interface Props {
  handleSelection: (selection: string) => void;
}

export const Options: React.FC<Props> = ({handleSelection}) => {
  return (
    <article className="md:w-[400px] lg:w-full max-w-[600px] mx-auto mt-4 lg:mt-4 flex flex-col gap-6 lg:gap-10">
      <div className="flex items-center justify-center">
        <Option img="/assets/images/scissors.png" alt="Scissors" onClick={() => handleSelection("SCISSORS")} />
      </div>
      <div className="flex items-center justify-between">
        <div className="relative">
          <Option img="/assets/images/spock.png" alt="Spock"  onClick={() => handleSelection("SPOCK")}/>
          <div className="absolute top-0 translate-y-[-50%] right-0 h-48 lg:h-80 w-3 lg:w-4 bg-black/20 rotate-45"></div>
        </div>
        <div className="relative">
          <Option img="/assets/images/paper.png" alt="Paper"  onClick={() => handleSelection("PAPER")}/>
          <div className="absolute top-0 translate-y-[-50%]  h-48 lg:h-80 w-3 lg:w-4 bg-black/20 -rotate-45"></div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-6 lg:gap-20 relative">
        <div className="relative">
          <Option img="/assets/images/lizard.png" alt="Lizard"  onClick={() => handleSelection("LIZARD")}/>
          <div className="absolute top-0 translate-y-[-50%] left-[25%] translate-x-[-25%] h-48 w-3 lg:w-4 bg-black/20 -rotate-45"></div>
        </div>
        <div className="relative">
          <Option img="/assets/images/rock.png" alt="Rock"  onClick={() => handleSelection("ROCK")}/>
          <div className="absolute top-0 right-[25%] translate-x-[25%] translate-y-[-50%] h-48 w-3 lg:w-4 bg-black/20 rotate-45"></div>
        </div>
        <div className="absolute h-3 lg:h-4 w-20 translate-y-[-50%] bg-black/20 top-[50%] bottom-[50%]"></div>
      </div>
    </article>
  );
};
