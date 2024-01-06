const PrimarySection = ({ profile }) => {
    return (
        <div className='primary-section'>

            <div>{profile.name}</div>
            <div>{profile.email}</div>
            <div>{profile.phone}</div>
            <div>{profile.location}</div>
        </div>
    )
}

export default PrimarySection