import { useEffect, useRef, useState } from "react"

const useComponentVisible = (initialVisible: boolean) => {
    const [componentClicked, setComponentClicked] = useState<boolean>(initialVisible)
    const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if(ref.current && !(ref.current as Node).contains(e.target as Node)) {
        setComponentClicked(false)
      }
    };
    document.body.addEventListener('click', handleClickOutside);
    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, [])
  
  return { ref, componentClicked, setComponentClicked}

};

export default useComponentVisible
