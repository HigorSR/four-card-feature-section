import IconKarma from "@/imgs/icon-karma";

function KarmaCard() {
    return (
        <div className='rounded-xl overflow-hidden shadow-xl'>
            <div className='flex flex-col gap-8 bg-white p-5 border-t-4 border-t-Orange xl:p-8 xl:gap-5'>
                <div className='xl:flex xl:flex-col xl:gap-2'>
                    <h2 className='text-Very-Dark-Blue font-semibold text-xl'>Karma</h2>
                    <p className='text-Grayish-Blue text-xs leading-6 tracking-wider'>Regularly evaluates our talent to ensure quality</p>
                </div>
                <div className='self-end'>
                    <IconKarma />
                </div>
            </div>
        </div>
    );
}

export default KarmaCard;