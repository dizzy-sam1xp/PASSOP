import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-[#0E141D] border-b border-[#202A36] flex justify-between items-center px-4 h-14">
      <div className="logo font-bold text-white text-2xl">
        <span className="text-[#03b80ffd]">&lt;</span>
        <span>Pass</span>
        <span className="text-[#03b80ffd]">OP/&gt;</span>
      </div>

      <ul>
        <li className="flex gap-6">
          <a
            className="text-[#CBD5E1] hover:text-[#22D3EE] transition-colors"
            href="/"
          >
            Home
          </a>

          <a
            className="text-[#CBD5E1] hover:text-[#22D3EE] transition-colors"
            href="#"
          >
            About
          </a>

          <a
            className="text-[#CBD5E1] hover:text-[#22D3EE] transition-colors"
            href="#"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
