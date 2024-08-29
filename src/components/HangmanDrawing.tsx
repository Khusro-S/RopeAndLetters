const HEAD = (
  <div className="rounded-full w-[60px] h-[60px] border-[5px] border-greyBg absolute top-[38px] right-[-28px]" />
);
const BODY = (
  <div className="w-[5px] h-[100px] bg-greyBg absolute right-0 top-[98px]" />
);

const ARM_RIGHT = (
  <div className="w-[5px] h-[60px] bg-greyBg rotate-45 absolute right-[-20px] top-[90px]" />
);
const ARM_LEFT = (
  <div className="w-[5px] h-[60px] bg-greyBg -rotate-45 absolute right-[20px] top-[90px]" />
);

const LEG_RIGHT = (
  <div className="w-[5px] h-[60px] bg-greyBg rotate-[135deg] absolute right-[-20px] top-[188px]" />
);
const LEG_LEFT = (
  <div className="w-[5px] h-[60px] bg-greyBg rotate-[-135deg] absolute right-[20px] top-[188px]" />
);

const BODY_PARTS = [HEAD, BODY, ARM_RIGHT, ARM_LEFT, LEG_RIGHT, LEG_LEFT];

export default function HangmanDrawing({ numberOfGuesses }) {
  return (
    <div className="relative">
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div className="absolute w-[5px] h-[40px] bg-greyBg top-0 right-0" />
      <div className="h-[5px] w-[150px] bg-greyBg ml-[82.5px]" />
      <div className="h-[300px] w-[5px] bg-greyBg ml-[82.5px]" />
      <div className="h-[5px] w-[170px] bg-greyBg" />
    </div>
  );
}
