import { bolt, buttonrow, downwardArrow, s1, s2, s3, splash, streak, workshop } from '@/assets/image';
import '../styles/theme.css';
import HeroParticles from '@/components/HeroParticles';

const Homeyy = () => {
    return (
        <div className={``}> 
          <div className="hero flex h-[90vh] relative overflow-hidden">
            <HeroParticles />
            <img src={splash} className='z-[1] inset w-full absolute pointer-events-none' alt="" />
            <div className="flex flex-col justify-center ml-20 gap-4 z-[2]">
              <div className="text-heading text-[25px] font-medium leading-[39px] tracking-wide">
                Welcome to Devstreak!
              </div>
              <div className="text-accent text-[40px] font-bold leading-[47px] tracking-wide">
                Empowering your development <br/>experience.
              </div>
              <button className="bg-secondary text-primary hover:text-secondary px-6 py-3 rounded-full font-bold hover:bg-[#5ee38b] hover:scale-105 active:scale-95 transition-all duration-200 mt-10 w-fit shadow-[-2px_4px_0px_0px] shadow-heading">
                Start Now
              </button>
            </div>
          </div>
          <div className="divider relative z-[2] h-[10px] bg-primary shadow-primary shadow-[2px_2px_2px_2px]" />
          <div className="section2 relative flex flex-col items-center justify-center p-10">
            <img src={s1} className='absolute z-[0] w-full pointer-events-none top-[-300px]' alt="" />
            <img src={downwardArrow} className='w-12 bounce-animation' alt="" />

            <div className="flex max-w-[1200px] min-h-[400px] z-[2] gap-20">
              <div className='border-2 h-full font-semibold rounded-[24px] p-12 flex-1'>
                <div className='flex justify-between mb-2'>
                  <h3 className='font-press-start text-heading text-[20px]'>Why Devstreak?</h3>
                  <img src={streak} className='w-8' alt="" />
                </div>
                <p className='text-accent text-[40px]'>Empowering developers with the tools, resources, and community to create without limits.</p>
              </div>
              <div className='border-2 flex-grow text-[40px] font-semibold rounded-[24px] p-12 flex-1'>
                <div className='flex justify-between mb-2'>
                    <h3 className='font-press-start text-heading text-[20px]'>Benefits</h3>
                    <img src={streak} className='w-8' alt="" />
                  </div>
                  <p className='text-accent text-[40px]'>Empowering developers with the tools, resources, and community to create without limits.</p>
              </div>
            </div>

            {/* floating elements */}
            <div className='relative z-[1] flex align-center justify-center'>
              <div className='relative rounded-full bg-primary z-[1] border-box p-2 h-12 w-12 flex align-center justify-center surge-glow'>
                <img src={bolt} alt="" />
              </div>
              <img src={s2} alt="" className='absolute scale-[10] z-[-1]'/>
            </div>
            {/*  */}

            <div className="flex flex-col max-w-[1200px] mt-5 min-h-[400px] z-[2] gap-10 p-10 border-2 rounded-[24px]">
              <h3 className='font-press-start italic text-heading text-[20px]'>{'<RECENT UPDATES/>'}</h3>
              <div className='flex gap-10 justify-center align-items'>
                <div className='p-4 border-2 rounded-[24px] flex align-items justify-center'>
                  <img src={workshop} alt="" />
                </div>
                <div className='flex flex-col flex-1 gap-2 text-accent font-semibold text-[22px]'>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores illum cum ex beatae, commodi voluptates praesentium deserunt sapiente officiis itaque pariatur reprehenderit amet minus ab, natus, ad aliquid nisi quisquam magnam endis minima nesciunt.</p>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores illum cum ex beatae, commodi voluptates praesentium deserunt sapiente officiis itaque pariatur reprehenderit amet minus ab, natus, ad aliquid nisi quisquam magnam endis minima nesciunt.</p>
                  <button className='flex gap-2 items-center text-primary hover:text-secondary hover:scale-105 active:scale-95 transition-all duration-200 border-2 px-4 py-2 rounded-full w-fit mt-5'>Read more <img src={buttonrow} alt="" /></button>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
};

export default Homeyy;
