import { ReactChildrenProps } from '@/interfaces'
import { AuthContextContainer } from './AuthContext'

type Props = ReactChildrenProps

const Providers = ({ children }: Props) => {
  return (
    <>
      <AuthContextContainer>{children}</AuthContextContainer>
    </>
  )
}

export default Providers
