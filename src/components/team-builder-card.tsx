import IconTeamBuilder from "@/imgs/icon-team-builder";

function TeamBuilderCard() {
    return (
        <div className='rounded-xl overflow-hidden shadow-xl'>
            <div className='flex flex-col gap-8 bg-white p-5 border-t-4 border-t-Red xl:p-8 xl:gap-5'>
                <div className='xl:flex xl:flex-col xl:gap-2'>
                    <h2 className='text-Very-Dark-Blue font-semibold text-xl'>Team Builder</h2>
                    <p className='text-Grayish-Blue text-xs leading-6 tracking-wider'>Scans our talent network to create the optimal team for your project</p>
                </div>
                <div className='self-end'>
                    <IconTeamBuilder />
                </div>
            </div>
        </div>
    );
}

export default TeamBuilderCard;