import { Button } from '@/components/ui/button';
import { ThemeState, useThemeStore } from '../store/themeStore';
import '../styles/theme.css';
import { bolt, downwardArrow, s2, workshop } from '@/assets/image';
import BenefitsItem from '@/components/BenefitsItem';
import { IoArrowBackCircleSharp, IoArrowForwardCircleSharp } from 'react-icons/io5';

const Home = () => {
  const isDarkTheme = useThemeStore((state: ThemeState) => state.isDarkTheme);

    return (
      <div className={`w-full min-h-screen ${!isDarkTheme ? 'text-white' : 'text-black'}`}> 
        <div className="bg-[url('./src/assets/image/splash_mobile.png')] md:bg-[url('./src/assets/image/splash.png')] md:bg-right bg-no-repeat min-h-[44vh] md:min-h-[80vh] flex flex-col justify-center border-b-8 border-primary">
              <div className='w-3/5 flex flex-col  ml-5 md:ml-20 md:mt-24'>
                <div className='md:text-2xl text-xl font-bold  my-2 text-heading'>Welcome to Devstreak</div>
                <div className='md:text-5xl text-3xl font-bold text-secondary'>Empowering your development experience</div>
                <div>
                  <Button className='bg-white text-primary rounded-3xl mt-8 font-bold text-lg md:px-8 md:py-2 shadow-md shadow-primary'>
                    Start Now
                  </Button>
                </div>
              </div>
              
            </div>
            <div className="w-full bg-[url('./src/assets/image/croppeds1.png')] ">

              {/* Bouncing Arrow */}
              <div className='md:flex hidden justify-center animate-bounce pt-8'>
                <img width={32} height={32} src={downwardArrow}/>
              </div>

              {/* Benefits */}
              <div className='flex flex-col md:flex-row w-full my-4 gap-10 justify-center px-10'>
                <BenefitsItem 
                  title={"Why Devstreak"}
                  description={"Empowering developers with the tools, resources, and community to create without limits."} />
                <BenefitsItem
                  title={"Benefits"}
                  description={"Enhanced productivity: Streamlined tools to help you build faster"} />
              </div>

              {/* floating elements */}
              <div className='w-16 h-16 m-auto hidden md:block'>
                <div className='relative z-[1] flex align-center justify-center'>
                  <div className='relative rounded-full bg-primary z-[1] border-box p-2 h-12 w-12 flex align-center justify-center surge-glow'>
                    <img src={bolt} alt="" />
                  </div>
                  <img src={s2} alt="" className='absolute opacity-50 scale-[10] z-[-5]' />
                </div>
              </div>

              {/* Recent Updates */}
              <div className='flex flex-col md:flex-row md:gap-8 md:mx-10 mt-10 md:p-8 items-center md:border-2 border-primary rounded-3xl'>
                <div className='flex flex-col gap-6 justify-center items-center md:w-3/5'>
                  <span className='font-bold md:text-2xl text-primary'><i>&lt;RECENT UPDATES/&gt;</i></span>
                  <div className='border p-4 border-primary  rounded-3xl'>
                    <img src={workshop} width={320} height={220}/>
                  </div>
                </div>
                <div className='md:h-64 flex gap-10 flex-col justify-between'>
                  <div className='text-xl flex mt-8 flex-col gap-4 text-secondary'>
                    <p className='w-4/5 mx-auto md:mx-0 text-center md:text-left line-clamp-4'>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur eligendi error quae nam voluptatibus in accusamus ab obcaecati, tenetur nobis, aliquid quidem labore magni impedit eveniet minima incidunt odio et.
                    </p>
                    <p className='hidden md:block'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam accusamus itaque omnis eius qui nihil labore animi, laborum dolore modi architecto rem, et, autem illo! Tenetur quaerat at temporibus corrupti.
                    </p>
                  </div>
                  <div className='flex flex-col md:flex-row items-center gap-5 md:justify-between'>
                    <div>
                      <button className='bg-inherit border-2 px-3 py-1 text-heading rounded-3xl border-primary hover:opacity-50'>Read More </button>
                    </div>
                    <div className='flex gap-3'>
                      <button className='text-gray-400 hover:opacity-50'><IoArrowBackCircleSharp size={40} /></button>
                      <button className='text-heading hover:opacity-50'><IoArrowForwardCircleSharp size={40} /></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      </div>
    );
};

export default Home;
