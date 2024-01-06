import "./index.css"

const ResumeTitle = ({ profile }) => {
    return (
        <div className="resume-title-container">
            <h1 className="resume-title-name">{profile.name}</h1>
            <div className="resume-title-title">{profile.designation}</div>
        </div>
    )
}

export default ResumeTitle