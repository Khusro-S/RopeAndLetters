import github from "../assets/github.png";
export default function Header() {
  return (
    <nav className="flex justify-around items-center w-screen absolute top-0 right-0 pt-3">
      <h2 className="lg:text-3xl md:text-2xl sm:text-xl text-lg font-bold uppercase font-mono">
        Rope & Letters
      </h2>
      <a
        href="https://github.com/Khusro-S"
        target="_blank"
        rel="noopener noreferrer"
        className="lg:w-10 md:w-9 sm:w-8 w-7 hover:scale-110 transition-transform"
      >
        <img src={github} alt="github logo" />
      </a>
    </nav>
  );
}
