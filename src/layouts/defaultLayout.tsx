import { s1 } from '@/assets/image';
import Navbar from '@/components/Navbar';
import BottomNav from '@/components/BottomNav';
import { useAuthStore } from '@/store/authStore';

const DefaultLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
    return (
        <div className={`font-press-start bg-background min-h-screen relative`}> 
            <Navbar />
            <main className={``}>
                {children}
            </main>
            <footer className='pt-10'>
                <BottomNav />
            </footer>
            <img src={s1} className='scale-[-1] w-full pointer-events-none absolute bottom-[-400px]' alt="" />
        </div>
    );
};

export default DefaultLayout;