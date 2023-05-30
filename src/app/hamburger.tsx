import Link from 'next/link';

// ハンバーガーメニュー
const Hamburger = (props:any) => {

    return (
        <div>
            <div className={`z-30 fixed ${props.menuOpen ? "right-0" : "right-[-1000px]"} top-0 h-screen text-gray-600 text-3xl bg-gray-800 transition-all duration-300`}>
                <div className="h-[120px] ">
                </div>
                <ul className="w-[350px]">
                    <li className="text-center">
                        <Link  href={`/`}>
                            Home
                        </Link>
                    </li>
                    {/* <li className="text-center">Album</li> */}
                </ul>
            </div>
            <div className={props.menuOpen ? "fixed top-0 w-full h-full bg-black bg-opacity-30" : ""} onClick={props.onClick}>
            </div>
        </div>

    );
};

export default Hamburger;