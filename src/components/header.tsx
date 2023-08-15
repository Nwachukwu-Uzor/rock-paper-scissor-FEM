import React from "react";

interface Props {
  score: number;
}

const option = [
  {
    id: "1",
    name: "ROCK",
  },
  {
    id: "2",
    name: "PAPER",
  },
  {
    id: "3",
    name: "SCISSORS",
  },
  {
    id: "4",
    name: "LIZARD",
  },
  {
    id: "5",
    name: "SPOCK",
  },
];

export const Header: React.FC<Props> = ({ score }) => {
  return (
    <div className="border-2 border-[#D8D8D8] rounded-md py-2 px-4  flex justify-between items-center">
      <div>
        {option?.map((option) => (
          <p
            className="font-bold text-lg lg:text-xl text-white"
            key={option.id}
          >
            {option.name}
          </p>
        ))}
      </div>
      <div className="bg-white flex flex-col items-center justify-center gap-1 px-2 py-3 lg:py-4 rounded-md shadow-sm">
        <p className="text-[#2A45C2] font-semibold">Your Score</p>
        <h1 className="text-2xl lg:text-5xl font-extrabold text-[#565468]">
          {score}
        </h1>
      </div>
    </div>
  );
};
