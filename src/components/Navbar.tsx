// import { useAuthStore } from '../store/authStore';
import { useNavigate } from 'react-router-dom';
import { bolt, logo } from '../assets/image';
import { IoMenu } from "react-icons/io5";
import { AiOutlineDiscord } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { RiTelegram2Fill } from "react-icons/ri";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';
import CommunityDropdown from './CommunityDropdown';
import { FaChevronDown } from 'react-icons/fa6';

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <nav className="px-2 md:px-10 flex justify-between items-center sticky z-50 top-0 p-4 bg-secondary"> 
            <img src={logo} alt="devstreak"  className="h-8 bg-transparent"/>

            {/* Desktop menu */}
            <ul className='menu font-semibold text-sm text-primary hidden md:flex gap-6'>
                <a href='/home'  className='text-primary'>Home</a>
                <DropdownMenu>
                    <DropdownMenuTrigger className='flex gap-1 items-center'>
                        Community
                        <FaChevronDown className='transition-transform duration-200' />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className='bg-black text-secondary font-bold'>
                        <DropdownMenuItem asChild>
                            <a href="https://discord.gg/C6EgkeEAed" target="_blank" rel="noopener noreferrer">
                                <AiOutlineDiscord />Discord
                            </a>
                        </DropdownMenuItem>

                        <DropdownMenuItem asChild>
                            <a href="https://x.com/SuperteamNG" target="_blank" rel="noopener noreferrer">
                                <BsTwitterX />X
                            </a>
                        </DropdownMenuItem>

                        <DropdownMenuItem asChild>
                            <a href="https://t.me/+9nrEI-PFxKg0MjY0" target="_blank" rel="noopener noreferrer">
                                <RiTelegram2Fill />Telegram
                            </a>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </ul>
            <button 
                onClick={() => navigate('/login')}
                className="hidden md:block text-sm rounded-md px-4 py-2 bg-primary uppercase text-secondary font-bold hover:bg-secondary hover:border hover:text-primary transition-all duration-300">
                join
            </button>    

            {/*  Mobile menu*/}
            <div className='md:hidden'>
                <Sheet>
                    <SheetTrigger>
                        <IoMenu className='text-primary text-4xl md:hidden' />
                    </SheetTrigger>
                    <SheetContent className='bg-black text-secondary font-bold'>
                        <SheetHeader>
                            <SheetTitle className=''>
                                <IoMenu className='text-primary text-4xl md:hidden right-0' />
                            </SheetTitle>
                            <SheetDescription className=''>
                                <ul className='flex flex-col items-start text-lg gap-4 mt-6'>
                                    <li className='text-primary'>Home</li>
                                    <CommunityDropdown />
                                    <li className='text-primary'>Join</li>
                                    <img src={bolt} className='my-8 opacity-30' />
                                </ul>
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>
            
            
        </nav>
    );
};

export default Navbar;