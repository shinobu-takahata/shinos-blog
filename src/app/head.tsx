'use client';
import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Hamburger from "./hamburger";

// ヘッダー
const Head = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuOpen = () => {
    setMenuOpen(() => !menuOpen);
  };

  return (
    <header className="text-gray-600 bg-gray-800  ">
      <div className="h-full flex justify-center items-center">
        <Link  href={`/`} className="ml-5">
          <span className="text-3xl text-gray-300 font-montserrat font-bold">Yasetai TECH Blog</span>
        </Link>
        <div id="hamburger" className={`mr-5 right-0 hover:cursor-pointer z-40 ${menuOpen ? "fixed" : "absolute"}`}>
          {
            menuOpen 
            ? <FontAwesomeIcon icon={faXmark} size="2xl" style={{color: "#fafafa",}} onClick={handleMenuOpen} className="transition-all duration-150"/> 
            : <FontAwesomeIcon icon={faBars}  size="2xl" style={{color: "#fafafa",}} onClick={handleMenuOpen} />
          }
          
        </div>
      </div>
      
      <Hamburger menuOpen={menuOpen} onClick={handleMenuOpen}/>

    </header>
  );
};

export default Head;