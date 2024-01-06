import Experience from "../Experience"
import ResumeTitle from "../ResumeTitle"

const PrimarySection = ({ profile }) => {
    return (
        <div className='primary-section'>
            <ResumeTitle profile={profile} />
            <Experience profile={profile} />
        </div>
    )
}

export default PrimarySection