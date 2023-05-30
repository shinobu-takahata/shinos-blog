'use client';
import Link from "next/link";
import { useState } from "react";

// ヘッダー
const Footer = () => {

  return (
    <footer className='border-t-4 flex justify-center items-center'>
        <div className="text-gray-300 font-medium">
            ©Copyright2023 
            <Link href={`/`}> Yasetai TECH Blog.</Link>
            All Rights Reserved.
        </div>
    </footer>
  );
};

export default Footer;