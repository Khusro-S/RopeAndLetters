import { useContextData } from "../context/ContextProvider";

const HEAD = (
  <div className="rounded-full w-[60px] h-[60px] max-sm:w-[40px] max-sm:h-[40px] max-md:w-[50px] max-md:h-[50px] border-[5px] max-sm:border-[3px] max-md:border-[4px] border-greyBg absolute top-[38px] right-[-28px] max-sm:top-[27px] max-sm:right-[-19px] max-md:top-[30px] max-md:right-[-23px]" />
);
const BODY = (
  <div className="w-[5px] h-[100px] max-sm:w-[3px] max-sm:h-[66px] max-md:w-[4px] max-md:h-[82.5px] bg-greyBg absolute right-0 top-[98px] max-sm:top-[67px] max-md:top-[80px]" />
);

const ARM_RIGHT = (
  <div className="w-[5px] h-[60px] max-sm:w-[3px] max-sm:h-[40px] max-md:w-[4px] max-md:h-[50px] bg-greyBg rotate-45 absolute right-[-20px] top-[90px] max-sm:top-[60px] max-sm:right-[-14px] max-md:top-[75px] max-md:right-[-17.5px]" />
);
const ARM_LEFT = (
  <div className="w-[5px] h-[60px] max-sm:w-[3px] max-sm:h-[40px] max-md:w-[4px] max-md:h-[50px] bg-greyBg -rotate-45 absolute right-[20px] top-[90px] max-sm:top-[60px] max-sm:right-[14px] max-md:top-[75px] max-md:right-[17.5px]" />
);

const LEG_RIGHT = (
  <div className="w-[5px] h-[60px] max-sm:w-[3px] max-sm:h-[40px] max-md:w-[4px] max-md:h-[50px] bg-greyBg rotate-[135deg] absolute right-[-20px] top-[188px] max-sm:top-[125px] max-sm:right-[-14px] max-md:top-[154.5px] max-md:right-[-17.5px]" />
);
const LEG_LEFT = (
  <div className="w-[5px] h-[60px] max-sm:w-[3px] max-sm:h-[40px max-md:w-[4px] max-md:h-[50px] bg-greyBg rotate-[-135deg] absolute right-[20px] top-[188px] max-sm:top-[125px] max-sm:right-[14px] max-md:top-[154.5px] max-md:right-[17.5px]" />
);

const BODY_PARTS = [HEAD, BODY, ARM_RIGHT, ARM_LEFT, LEG_RIGHT, LEG_LEFT];

export default function HangmanDrawing() {
  const { numberOfGuesses } = useContextData();
  return (
    <div className="relative lg:mt-3">
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div className="absolute w-[5px] h-[40px] max-sm:w-[3px] max-sm:h-[27px] max-md:w-[4px] max-md:h-[34px] bg-greyBg top-0 right-0" />
      <div className="h-[5px] w-[150px] max-sm:w-[100px] max-sm:h-[3px] max-md:w-[125px] max-md:h-[4px] bg-greyBg ml-[82.5px] max-sm:ml-[53.5px] max-md:ml-[66.5px]" />
      <div className="h-[300px] w-[5px] max-sm:w-[3px] max-sm:h-[200px] max-md:w-[4px] max-md:h-[250px] bg-greyBg ml-[82.5px] max-sm:ml-[53.5px] max-md:ml-[66.5px]" />
      <div className="h-[5px] w-[170px] max-sm:w-[113px] max-sm:h-[3px] max-md:w-[141px] max-md:h-[4px] bg-greyBg" />
    </div>
  );
}
