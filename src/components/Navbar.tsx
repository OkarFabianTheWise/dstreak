import { useAuthStore } from '../store/authStore';
import { useLocation, useNavigate } from 'react-router-dom';
import { bolt, logo } from '../assets/image';

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <nav className="px-4 flex justify-between items-center sticky z-50 top-0 p-4 bg-secondary"> 
            <img src={logo} alt="devstreak"  className="h-8 bg-transparent"/>
                <ul className='menu font-semibold text-primary flex gap-4'>
                    <li className='text-primary'>Home</li>
                    <li className='text-primary'>Community</li>
                </ul>
            <button 
                onClick={() => navigate('/login')}
                className="rounded-md px-4 py-2 bg-primary uppercase text-secondary font-bold hover:bg-secondary hover:border hover:text-primary transition-all duration-300"
            >
                join
            </button>    
        </nav>
    );
};

export default Navbar;