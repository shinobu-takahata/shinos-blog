'use client'
import { Button, Drawer } from "@mui/material";
import Link from "next/link";
import { useState } from "react";

// ヘッダー
const Head = () => {

  return (
    <header className="text-gray-600 bg-gray-800  body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col items-center">
        <Link  href={`/`}>
          <span className="text-3xl text-gray-300 font-fancy font-bold">しのぶろぐ</span>
        </Link>
        
        {/* <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl text-gray-400">Tailblocks</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 text-gray-400">Home</a>
          <a className="mr-5 text-gray-400">About</a>
        </nav> */}
      </div>
    </header>
  );
}

export default Head