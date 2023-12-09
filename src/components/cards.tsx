import CalculatorCard from './calculator-card';
import KarmaCard from './karma-card';
import SupervisorCard from './supervisor-card'
import TeamBuilderCard from './team-builder-card';

function Cards() {
    return (
        <div className='flex flex-col gap-6 xl:flex-row xl:items-center'>
            {/* Supervisor Card */}
            <SupervisorCard />

            <div className='flex flex-col gap-6 xl:xl:w-4/12'>
                {/* Team Builder Card */}
                <TeamBuilderCard />

                {/* Karma Card */}
                <KarmaCard />
            </div>

            {/* Calculator Card */}
            <CalculatorCard />
        </div>
    );
}

export default Cards;