import Link from 'next/link';
import { useMenuOpenStore } from "../../state/store";

// ハンバーガーメニュー
const Hamburger = () => {
    const menuOpen = useMenuOpenStore((state) => state.menuOpen);
    const handleMenuOpen = useMenuOpenStore((state) => state.handleMenuOpen);

    return (
        <div>
            <div className={`z-30 fixed ${menuOpen ? "right-0" : "right-[-1000px]"} top-0 h-screen text-gray-600 text-3xl bg-gray-800 transition-all duration-300`}>
                <div className="h-[120px] ">
                </div>
                <ul className="w-[350px]">
                    <li className="text-center">
                        <Link  href={`/`} onClick={() => handleMenuOpen(menuOpen)}>
                            Home
                        </Link>
                    </li>
                    {/* <li className="text-center">Album</li> */}
                </ul>
            </div>
            <div className={menuOpen ? "fixed top-0 w-full h-full bg-black bg-opacity-30" : ""} onClick={() => handleMenuOpen(menuOpen)}>
            </div>
        </div>

    );
};

export default Hamburger;