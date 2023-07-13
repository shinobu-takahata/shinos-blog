import { usesearchAreaOpenStore } from '../../state/store';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

// ハンバーガーメニュー
const SearchArea = () => {
    const searchAreaOpen = usesearchAreaOpenStore((state) => state.searchAreaOpen);
    const handlesearchAreaOpen = usesearchAreaOpenStore((state) => state.handlesearchAreaOpen);

    return (
        <div className={searchAreaOpen ? "fixed top-0 w-full h-full bg-black bg-opacity-60 z-50" : ""}>
            <div className="mt-24 flex flex-col justify-center items-center">
                <div className="w-64 flex justify-end">
                    <FontAwesomeIcon icon={faXmark} size="2xl" style={{color: "#fafafa",}} onClick={() => handlesearchAreaOpen(searchAreaOpen)} className="hover:cursor-pointer transition-all duration-150"/> 
                </div>
                <input type="text" className="w-64"/>
            </div>
        </div>
    );
};

export default SearchArea;