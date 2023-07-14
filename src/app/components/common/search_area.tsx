import { usesearchAreaOpenStore } from '../../state/store';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

// ハンバーガーメニュー
const SearchArea = () => {
    const searchAreaOpen = usesearchAreaOpenStore((state) => state.searchAreaOpen);
    const handlesearchAreaOpen = usesearchAreaOpenStore((state) => state.handlesearchAreaOpen);

    return (
        <div className={searchAreaOpen ? "fixed top-0 w-full h-full bg-black bg-opacity-60 z-50" : "invisible"}>
            <div className="mt-24 flex flex-col justify-center items-center">
                <div className="w-96 flex justify-end">
                    <FontAwesomeIcon icon={faXmark} size="2xl" style={{color: "#fafafa",}} onClick={() => handlesearchAreaOpen(searchAreaOpen)} className="hover:cursor-pointer transition-all duration-150"/> 
                </div>
                <div className="flex">
                    <input type="text" className="w-64 mr-2"/>
                    <button type="submit" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center">OK</button>
                </div>
            </div>
        </div>
    );
};

export default SearchArea;