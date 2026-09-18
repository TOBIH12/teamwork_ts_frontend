

type ProfileProps = {
    source: string
    alt: string
}

export const ProfileIcon = () => {
  return (
    <div>
      SW
    </div>
  )
}


export const PreviewIcon = ({source, alt}: ProfileProps) => {
    return (
        <div className="w-10 h-10 rounded-full overflow-hidden border border-2 border-[#27aa83]/30 cursor-pointer">
            <img src={source} alt={alt} className="w-full h-full object-cover text-center font-bold bg-[#27aa83] text-white"/>
        </div>
    )
}