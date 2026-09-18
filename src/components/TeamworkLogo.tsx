import type { ReactNode } from "react"

type LogoProps = {
    logoStyle?: string
    logoIcon: ReactNode
    logoTextStyle: string
}
const TeamworkLogo = ({logoStyle, logoIcon, logoTextStyle}: LogoProps) => {
  return (
    <div className={logoStyle}>
       {logoIcon}
    <h1 className={logoTextStyle}>Teamwork</h1>
    </div>
  )
}

export default TeamworkLogo
