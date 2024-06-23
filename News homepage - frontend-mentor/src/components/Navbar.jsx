import logo from "../assets/images/logo.svg"

function Navbar() {
  return (
    <nav className="flex items-center justify-between overflow-hidden mb-20">
        <div className="">
            <a href="#">
                <img src={logo}/>
            </a>
        </div>

            <input type="checkbox" id="menu" className="peer hidden"/>
            <label htmlFor="menu" className="bg-open-menu bg-cover w-6 cursor-pointer h-6 block z-10 lg:hidden peer-checked:bg-close-menu"></label>

        <div className="hidden  overflow-hidden  translate-x-full items-center justify-center absolute  top-0 right-0  bg-Off-white shadow-lg h-screen peer-checked:mobile:flex peer-checked:translate-x-0 transition-all ">
            <ul className="grid gap-6 mx-auto justify-center">
                <li className="hover:text-Soft-red px-[5rem]">
                    <a href="#">Home</a>
                </li>
                <li className="hover:text-Soft-red px-[5rem]">
                    <a href="#">New</a>
                </li>
                <li className="hover:text-Soft-red px-[5rem]">
                    <a href="#">Popular</a>
                </li>
                <li className="hover:text-Soft-red px-[5rem]">
                    <a href="#">Trending</a>
                </li>
                <li className="hover:text-Soft-red px-[5rem]">
                    <a href="#">Categories</a>
                </li>
            </ul>

        </div>


        <ul className="hidden lg:flex gap-6 ">
            <li className="hover:text-Soft-red">
                <a href="#">Home</a>
            </li>
            <li className="hover:text-Soft-red">
                <a href="#">New</a>
            </li>
            <li className="hover:text-Soft-red">
                <a href="#">Popular</a>
            </li>
            <li className="hover:text-Soft-red">
                <a href="#">Trending</a>
            </li>
            <li className="hover:text-Soft-red">
                <a href="#">Categories</a>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar