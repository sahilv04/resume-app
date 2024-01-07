import Experience from "../Experience"
import ResumeTitle from "../ResumeTitle"
import Summary from "../Summary"

const PrimarySection = () => {
    return (
        <div className='primary-section'>
            <ResumeTitle />
            <Summary />
            <Experience />
        </div>
    )
}

export default PrimarySection