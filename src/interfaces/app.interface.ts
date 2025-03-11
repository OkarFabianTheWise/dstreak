import { ReactNode } from 'react'

export interface ReactChildrenProps {
  children: ReactNode | ReactNode[] | JSX.Element | JSX.Element[]
}

export interface ApiResponse<D = any> {
  success: boolean
  message: string
  data?: D
}
