import Link from "next/link";

export const Header: React.FC = () => {
  return (
    <header className="navbar bg-base-100 flex justify-center">
      <div className="navbar-start px-3">
        <Link href="/">LOGO</Link>
      </div>
      <div className="navbar-center flex">
        <div className="px-3">
          <Link href="/blog">Blog</Link>
        </div>
        <div className="px-3">
          <Link href="/resume">Resume</Link>
        </div>
        <div className="px-3">
          <Link href="/video">Video</Link>
        </div>
      </div>
      <div className="navbar-end"></div>
    </header>
  );
};
