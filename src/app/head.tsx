'use client';
import Link from "next/link";
import { useState } from "react";

// ヘッダー
const Head = () => {

  return (
    <header className="text-gray-600 bg-gray-800  flex justify-center items-center">
      <Link  href={`/`}>
        <span className="text-3xl text-gray-300 font-fancy font-bold">しのぶろぐ</span>
      </Link>
    </header>
  );
};

export default Head;