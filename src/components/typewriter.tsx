import { TypewriterEffectSmooth } from "./animated/typewriter-effect";

export function Typewriter() {
  const words = [
    {
      text: "The",
    },
    {
      text: "Maze..",
    },
    {
      text: "Code",
      className: "text-teal-700",
    },
    {
      text: "Your",
      className: "text-teal-700",
    },
    {
      text: "Way",
      className: "text-teal-700",
    },
    {
      text: "Out!",
      className: "text-teal-700",
    },
  ];
  return (
    <div className="flex h-[40rem] flex-col items-center justify-center ">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
