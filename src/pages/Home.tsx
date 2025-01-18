import { ThemeState, useThemeStore } from '../store/themeStore';
import '../styles/theme.css';
import './Home.css';

const Home = () => {
  const isDarkTheme = useThemeStore((state: ThemeState) => state.isDarkTheme);

    return (
        <div className={`w-full flex bg-transparent min-h-screen ${!isDarkTheme ? 'text-white' : 'text-black'}`}> 
        
        </div>
    );
};

export default Home;
