import { Link, useLocation } from "react-router-dom"
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineArticle } from "react-icons/md";
import { CiImageOn } from "react-icons/ci";
import { RiGroupLine } from "react-icons/ri";
import { MdDateRange } from "react-icons/md";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { navigationButtonActiveStyle, navigationButtonStyle } from "./InputStyles";

type SideNavProps = {
    containerClass: string
    contentClass?: string
    handleMenuClick?: ()=>void
}

const LeftNav = ({containerClass, contentClass, handleMenuClick}: SideNavProps) => {
    const location = useLocation()
    const currentPath = location.pathname

  return (
    <div className={`${containerClass} fixed flex-col justify-between bg-white h-[90vh] border-r border-gray-200 px-2 select-none scrollbar-none overflow-y-auto`}>
        <ul className={`${contentClass} w-full flex flex-col py-4 px-2 gap-1`}>
            <Link to={'/feed'} className={currentPath === '/feed' ? navigationButtonActiveStyle : navigationButtonStyle} onClick={handleMenuClick}>
            <IoHomeOutline className="text-xl"/>
            <h1 className="font-medium text-[0.95rem]">Feed</h1>
            </Link>
            <Link to={'/articles'} className={currentPath === '/articles' ? navigationButtonActiveStyle : navigationButtonStyle} onClick={handleMenuClick}>
            <MdOutlineArticle className="text-xl"/>
           <h1 className="font-medium text-[0.95rem]">Articles</h1>
            </Link>
            <Link to={'/gifs'}  className={currentPath === '/gifs' ? navigationButtonActiveStyle : navigationButtonStyle} onClick={handleMenuClick}>
            <CiImageOn className="text-xl"/>
            <h1 className="font-medium text-[0.95rem]">GIFs</h1>
            </Link>
            <Link to={'/colleagues'}  className={currentPath === '/colleagues' ? navigationButtonActiveStyle : navigationButtonStyle} onClick={handleMenuClick}>
            <RiGroupLine className="text-xl"/>
            <h1 className="font-medium text-[0.95rem]">Colleagues</h1></Link>
        </ul>

        <div>
      <ul className={`${contentClass} w-full flex flex-col py-4 px-2 gap-1 border-t border-b border-gray-200`}>
         <Link to={'/events'}  className={navigationButtonStyle} onClick={handleMenuClick}>
            <MdDateRange className="text-xl"/>
            <h1 className="font-medium text-[0.95rem]">Events</h1></Link>

         <Link to={'/help'}  className={navigationButtonStyle} onClick={handleMenuClick}>
            <IoMdHelpCircleOutline className="text-xl"/>
            <h1 className="font-medium text-[0.95rem]">Help</h1></Link>
      </ul>
        <span className="w-full flex justify-center text-center text-sm text-gray-600 py-4">&copy; 2026 Teamwork</span>
        </div>
    </div>
  )
}

export default LeftNav
