import DesriptionParagraph from "./description-paragraph";
import DescriptionTitle from "./description-title";

function Description() {
    return (
        <div className='flex flex-col items-center gap-4'>
            {/* Description Title */}
            <DescriptionTitle />

            {/* Description Paragraph */}
            <DesriptionParagraph />
        </div>
    );
}

export default Description;