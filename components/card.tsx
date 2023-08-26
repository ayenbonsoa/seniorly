import React, { ReactNode } from 'react'

type CardProps ={
    children: ReactNode,
    className: string 
}

export default function Card({ children, className }: CardProps) {
  return (
    <div className={ className }>{ children }</div>
  )
}
