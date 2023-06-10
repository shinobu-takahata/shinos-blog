'use client';
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Hamburger from "./hamburger";
import { useMenuOpenStore } from "../../state/store";

// ヘッダー
const Head = () => {

  const menuOpen = useMenuOpenStore((state) => state.menuOpen);
  const handleMenuOpen = useMenuOpenStore((state) => state.handleMenuOpen);

  return (
    <header className="text-gray-600 bg-gray-800  ">
      <div className="h-full flex justify-center items-center">
        <Link  href={`/`} className="ml-5">
          <span className="text-3xl text-gray-300 font-montserrat font-bold">Yasetai TECH Blog</span>
        </Link>
        <div id="hamburger" className={`mr-5 right-0 hover:cursor-pointer z-40 ${menuOpen ? "fixed" : "absolute"}`}>
          {
            menuOpen 
            ? <FontAwesomeIcon icon={faXmark} size="2xl" style={{color: "#fafafa",}} onClick={() => handleMenuOpen(menuOpen)} className="transition-all duration-150"/> 
            : <FontAwesomeIcon icon={faBars}  size="2xl" style={{color: "#fafafa",}} onClick={() => handleMenuOpen(menuOpen)} />
          }
          
        </div>
      </div>
      
      <Hamburger />

    </header>
  );
};

export default Head;