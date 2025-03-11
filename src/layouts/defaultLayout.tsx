import { s1 } from '@/assets/image'
import BottomNav from '@/components/BottomNav'
import Navbar from '@/components/Navbar'

const DefaultLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className={`font-press-start bg-background min-h-screen relative`}>
      <Navbar />
      <main className={``}>{children}</main>
      <footer className='pt-10'>
        <BottomNav />
      </footer>
      <img
        src={s1}
        className='scale-[-1] w-full pointer-events-none absolute bottom-[-400px]'
        alt=''
      />
    </div>
  )
}

export default DefaultLayout
