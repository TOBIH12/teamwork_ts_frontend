import type { ReactNode } from "react"

type ButtonProps = {
  type: "submit" | "reset" | "button" | undefined
  buttonStyle: string
  icon?: ReactNode
  buttonText: string
  title: string
}

const Button = ({type, icon, buttonText, buttonStyle, title}: ButtonProps) => {
  return (
     <button type={type} className={buttonStyle} title={title}>{icon} {buttonText}</button>
  )
}

export default Button
