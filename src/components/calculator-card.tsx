import IconCalculator from "@/imgs/icon-calculator";

function CalculatorCard() {
    return (
        <div className='rounded-xl overflow-hidden shadow-xl xl:w-4/12'>
            <div className='flex flex-col gap-8 bg-white p-5 border-t-4 border-t-Blue xl:p-8 xl:gap-5'>
                <div className='xl:flex xl:flex-col xl:gap-2'>
                    <h2 className='text-Very-Dark-Blue font-semibold text-xl'>Calculator</h2>
                    <p className='text-Grayish-Blue text-xs leading-6 tracking-wider'>Uses data from past projects to provide better delivery estimates</p>
                </div>
                <div className='self-end'>
                    <IconCalculator />
                </div>
            </div>
        </div>
    );
}

export default CalculatorCard;