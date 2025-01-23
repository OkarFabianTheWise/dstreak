import { dsicon } from "@/assets/image";

interface BenefitsItemProps{
    title: string,
    description: string,
}


export default function BenefitsItem({ title, description }: BenefitsItemProps){

    return (
        <div className='border-2 border-primary p-8 rounded-3xl w-full md:w-3/6'>
            <div className='flex flex-col md:flex-row justify-center items-center md:justify-between gap-3 md:gap-10 mb-5'>
                <img src={dsicon} width={30} height={30} className="md:hidden" />
                <span className='md:text-xl font-bold text-primary'>{title}</span>
                <img src={dsicon} width={20} height={20} className="hidden md:block" />
            </div>

            <div className='text-lg md:text-2xl text-center md:text-left text-secondary '>
                {description}
            </div>
        </div>
    )
}