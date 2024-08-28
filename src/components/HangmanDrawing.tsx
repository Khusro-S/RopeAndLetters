const HEAD = (
  <div className="rounded-full w-[70px] h-[70px] border-[10px] border-greyBg absolute top-[49px] right-[-30px]" />
);
const BODY = (
  <div className="w-[10px] h-[150px] bg-greyBg absolute right-0 top-[118px]" />
);

const ARM_RIGHT = (
  <div className="w-[10px] h-[100px] bg-greyBg rotate-45 absolute right-[-37px] top-[100px]" />
);
const ARM_LEFT = (
  <div className="w-[10px] h-[100px] bg-greyBg -rotate-45 absolute right-[37px] top-[100px]" />
);

const LEG_RIGHT = (
  <div className="w-[10px] h-[100px] bg-greyBg rotate-[135deg] absolute right-[-37px] top-[248px]" />
);
const LEG_LEFT = (
  <div className="w-[10px] h-[100px] bg-greyBg rotate-[-135deg] absolute right-[37px] top-[248px]" />
);

export default function HangmanDrawing() {
  return (
    <div className="relative">
      {HEAD}
      {BODY}
      {ARM_RIGHT}
      {ARM_LEFT}
      {LEG_RIGHT}
      {LEG_LEFT}
      <div className="absolute w-[10px] h-[50px] bg-greyBg top-0 right-0" />
      <div className="h-[10px] w-[200px] bg-greyBg ml-[120px]" />
      <div className="h-[400px] w-[10px] bg-greyBg ml-[120px]" />
      <div className="h-[10px] w-[250px] bg-greyBg" />
    </div>
  );
}
