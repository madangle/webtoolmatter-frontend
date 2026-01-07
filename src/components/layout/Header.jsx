import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="border-b bg-white">
      <nav className="max-w-7xl mx-auto flex items-center gap-6 px-4 py-4">
        <a href="/" className="text-xl font-bold">
          WebToolMatter
        </a>

        <a href="/blog" className="text-gray-600 hover:text-black">
          Blog
        </a>

        {/* <a href="/tools" className="text-gray-600 hover:text-black">
          Tools
        </a> */}
      </nav>
    </header>
  );
}

export default Header;
