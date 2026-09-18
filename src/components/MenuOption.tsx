import type { ReactNode } from "react"
import useComponentVisible from "./useComponentVisible"

type MenuOptions = {
    icon: ReactNode
    options: ReactNode
    style: string
}

const MenuOption = ({icon, options, style}: MenuOptions) => {
     const {ref, componentClicked, setComponentClicked} = useComponentVisible(false)

  const handleProfileClick = () => {
    setComponentClicked(prev => !prev)
  }
  
  return (
   <div className="relative" onClick={handleProfileClick} ref={ref}>
             {icon}
            <span className={componentClicked ? `absolute flex flex-col bg-white shadow-md border border-gray-200 rounded-xl ${style}` : "hidden"}>
                {options}
            </span>
             </div>
  )
}

export default MenuOption
