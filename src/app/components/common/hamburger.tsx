import Link from 'next/link';
import { useMenuOpenStore } from "../../state/store";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

// ハンバーガーメニュー
const Hamburger = () => {
    const menuOpen = useMenuOpenStore((state) => state.menuOpen);
    const handleMenuOpen = useMenuOpenStore((state) => state.handleMenuOpen);

    return (
        <div>
            <div className={`z-30 fixed ${menuOpen ? "right-0" : "right-[-1000px]"} top-0 h-screen text-gray-600 text-3xl bg-gray-800 transition-all duration-300`}>
                <div className='flex justify-end mr-5 mt-5'>
                    <FontAwesomeIcon icon={faXmark} size="xl" style={{color: "#fafafa",}} onClick={() => handleMenuOpen(menuOpen)} className="transition-all duration-150"/> 
                </div>
                <ul className="w-[350px] mt-8">
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