import { useSearchAreaOpenStore, useSearchContentsStore } from '../../state/store';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

// 検索エリア
const SearchArea = () => {
    // 検索エリア 開閉状態
    const searchAreaOpen = useSearchAreaOpenStore((state) => state.searchAreaOpen);
    const handlesearchAreaOpen = useSearchAreaOpenStore((state) => state.handlesearchAreaOpen);

    // 検索結果
    const searchContents = useSearchContentsStore((state) => state.searchContents);
    const handlesearchContents = useSearchContentsStore((state) => state.handlesearchContents);

    // 検索文字列
    const [searchText, setSearchText] = useState("");
    const handleChangeSearchText = (event:any) => {
        setSearchText(event.target.value);
    };

    const handleSearch = async(event: any) => {
        event.preventDefault();
        const val = searchText;
        const search_blogs = await fetch("http://localhost:3000/api/blogs", {
            method: "POST",
            body: JSON.stringify({ val })
        });
        const res = await search_blogs.json();
        handlesearchContents(res.contents);
        handlesearchAreaOpen(searchAreaOpen);
    };

    return (
        <form action="" onSubmit={handleSearch}>
            <div className={searchAreaOpen ? "fixed top-0 w-full h-full bg-black bg-opacity-60 z-50" : "invisible"}>
                <div className="mt-24 flex flex-col justify-center items-center">
                    <div className="w-96 flex justify-end">
                        <FontAwesomeIcon icon={faXmark} size="2xl" style={{color: "#fafafa",}} onClick={() => handlesearchAreaOpen(searchAreaOpen)} className="hover:cursor-pointer transition-all duration-150"/> 
                    </div>
                    <div className="flex">
                        <input type="text" name="search_text" className="w-64 mr-2" onChange={handleChangeSearchText}/>
                        <button type="submit" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center">OK</button>
                    </div>
                </div>
            </div>
        </form>

    );
};

export default SearchArea;