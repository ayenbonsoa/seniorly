import React, { ReactNode, ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode,
    className?: string
}

export default function button({ children, className, ...props }: ButtonProps ) {
  return (
    <button className={`${className} rounded-full px-8 py-3 `} {...props}>{ children }</button>
  )
}
