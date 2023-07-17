'use client';
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Hamburger from "./hamburger";
import SearchArea from "./search_area";
import { useMenuOpenStore, useSearchContentsStore } from "../../state/store";
import { useSearchAreaOpenStore } from '../../state/store';

// ヘッダー
const Head = () => {

  const menuOpen = useMenuOpenStore((state) => state.menuOpen);
  const handleMenuOpen = useMenuOpenStore((state) => state.handleMenuOpen);
  const searchAreaOpen = useSearchAreaOpenStore((state) => state.searchAreaOpen);
  const handlesearchAreaOpen = useSearchAreaOpenStore((state) => state.handlesearchAreaOpen);

  const searchContents = useSearchContentsStore((state) => state.searchContents);
  const handlesearchContents = useSearchContentsStore((state) => state.handlesearchContents);

  const handleReturnHome = () => {
    handleMenuOpen(!menuOpen);
    handlesearchContents([]);
  };

  return (
    <header className="text-gray-600 bg-gray-800">
      <div className="h-full flex justify-between items-center ml-5 mr-5">
        {/* ------------------ スマホ時、検索アイコン ------------------ */}
        <div id="search" className="hover:cursor-pointer visible sm:invisible">
          <FontAwesomeIcon icon={faMagnifyingGlass} size="2xl" style={{color: "#fafafa",}} onClick={() => handlesearchAreaOpen(searchAreaOpen)}/>
        </div>

        {/* ------------------ タイトル ------------------ */}
        <Link  href={`/`} onClick={handleReturnHome} className="">
          <span className="text-xl text-gray-300 font-montserrat font-bold">Yasetai TECH Blog</span>
        </Link>

        {/* ------------------ PC、検索とハンバーガーアイコン ------------------ */}
        <div className="flex">
          <div id="search" className="hover:cursor-pointer mr-5 hidden sm:block">
            <FontAwesomeIcon icon={faMagnifyingGlass} size="2xl" style={{color: "#fafafa",}} onClick={() => handlesearchAreaOpen(searchAreaOpen)}/>
          </div>
          <div id="hamburger" className="hover:cursor-pointer">
            <FontAwesomeIcon icon={faBars}  size="2xl" style={{color: "#fafafa",}} onClick={() => handleMenuOpen(menuOpen)} />
          </div>
        </div>
      </div>
      
      <SearchArea />
      <Hamburger />

    </header>
  );
};

export default Head;