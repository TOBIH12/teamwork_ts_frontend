import { Link } from "react-router-dom"
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineArticle } from "react-icons/md";
import { CiImageOn } from "react-icons/ci";
import { RiGroupLine } from "react-icons/ri";
import { MdDateRange } from "react-icons/md";
import { IoMdHelpCircleOutline } from "react-icons/io";

const LeftNav = () => {
  return (
    <div className="fixed flex flex-col justify-between mt-16 bg-white h-[90vh] min-w-[17%] border-r border-t border-gray-200 px-2 overflow-hidden overflow-y-auto">
        <ul className="w-full flex flex-col py-4 px-2 gap-1">
            <Link to={'/feed'} className="w-full flex items-center align-center gap-3 text-gray-500 p-2 rounded-xl hover:text-gray-900 hover:bg-[#27aa83]/20 hover:ml-1 transition duration-500">
            <IoHomeOutline className="text-xl"/>
            <h1 className="font-medium text-[0.95rem]">Feed</h1>
            </Link>
            <Link to={'/articles'} className="w-full flex items-center align-center gap-3 text-gray-500 p-2 rounded-xl hover:text-gray-900 hover:bg-[#27aa83]/20 hover:ml-1 transition duration-500">
            <MdOutlineArticle className="text-xl"/>
           <h1 className="font-medium text-[0.95rem]">Articles</h1>
            </Link>
            <Link to={'/gifs'}  className="w-full flex items-center align-center gap-3 text-gray-500 p-2 rounded-xl hover:text-gray-900 hover:bg-[#27aa83]/20 hover:ml-1 transition duration-500">
            <CiImageOn className="text-xl"/>
            <h1 className="font-medium text-[0.95rem]">GIFs</h1>
            </Link>
            <Link to={'/colleagues'}  className="w-full flex items-center align-center gap-3 text-gray-500 p-2 rounded-xl hover:text-gray-900 hover:bg-[#27aa83]/20 hover:ml-1 transition duration-500">
            <RiGroupLine className="text-xl"/>
            <h1 className="font-medium text-[0.95rem]">Colleagues</h1></Link>
        </ul>

        <div>
      <ul className="w-full flex flex-col py-4 px-2 gap-1 border-t border-b border-gray-200 ">
         <Link to={'/events'}  className="w-full flex items-center align-center gap-3 text-gray-500 p-2 rounded-xl hover:text-gray-900 hover:bg-[#27aa83]/20 hover:ml-1 transition duration-500">
            <MdDateRange className="text-xl"/>
            <h1 className="font-medium text-[0.95rem]">Events</h1></Link>

         <Link to={'/help'}  className="w-full flex items-center align-center gap-3 text-gray-500 p-2 rounded-xl hover:text-gray-900 hover:bg-[#27aa83]/20 hover:ml-1 transition duration-500">
            <IoMdHelpCircleOutline className="text-xl"/>
            <h1 className="font-medium text-[0.95rem]">Help</h1></Link>
      </ul>
        <span className="w-full flex justify-center text-center text-sm text-gray-600 py-4">&copy; 2026 Teamwork</span>
        </div>
    </div>
  )
}

export default LeftNav
