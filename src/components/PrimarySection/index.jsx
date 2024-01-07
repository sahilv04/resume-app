import Experience from "../Experience"
import ResumeTitle from "../ResumeTitle"

const PrimarySection = () => {
    return (
        <div className='primary-section'>
            <ResumeTitle />
            <Experience />
        </div>
    )
}

export default PrimarySection