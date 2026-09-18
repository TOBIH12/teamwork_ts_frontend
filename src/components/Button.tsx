import type { ReactNode } from "react"

type ButtonProps = {
  type: "submit" | "reset" | "button" | undefined
  buttonStyle: string
  icon?: ReactNode
  buttonText: string
}

const Button = ({type, icon, buttonText, buttonStyle}: ButtonProps) => {
  return (
     <button type={type} className={buttonStyle}>{icon} {buttonText}</button>
  )
}

export default Button
