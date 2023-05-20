'use client';
import { useState } from "react";

// ヘッダー
const Hamburger = (props:any) => {

    return (
        <div className={`fixed ${props.menuOpen ? "right-0" : "right-[-150px]"} top-0 h-screen text-gray-600 text-3xl bg-gray-800 transition-all duration-300`}>
            <div className="h-[120px] ">
            </div>
            <ul className="">
                <li>1. test1</li>
                <li>2. test2</li>
            </ul>
        </div>
    );
};

export default Hamburger;