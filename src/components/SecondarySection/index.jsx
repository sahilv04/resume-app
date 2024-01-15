import { useSelector } from "react-redux"
import BlockHeading from "../BlockHeading"
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { useEffect } from 'react';
import "./index.css"
import LocationIcon from "../icons/LocationIcon";
import EmailIcon from "../icons/EmailIcon";
import PhoneIcon from "../icons/PhoneIcon";

const SecondarySection = () => {
    const mainState = useSelector(state => state.main)
    const { fields: profile } = mainState.resume

    const skillsHtml = documentToHtmlString(profile.skills)
    const certifications = documentToHtmlString(profile.certifications)
    const strengths = profile.strengths ? documentToHtmlString(profile.strengths) : ""
    const education = documentToHtmlString(profile.education)

    useEffect(() => {
        if (document.getElementById("skills_block_id"))
            document.getElementById("skills_block_id").innerHTML = skillsHtml
    }, [skillsHtml])

    useEffect(() => {
        if (document.getElementById("certifications_block_id"))
            document.getElementById("certifications_block_id").innerHTML = certifications
    }, [certifications])

    useEffect(() => {
        if (document.getElementById("strengths_block_id"))
            document.getElementById("strengths_block_id").innerHTML = strengths
    }, [strengths])

    useEffect(() => {
        if (document.getElementById("education_block_id"))
            document.getElementById("education_block_id").innerHTML = education
    }, [education])

    return (
        <div className='secondary-section'>
            <div className="block-container">
                <BlockHeading>Contact</BlockHeading>
                <div className="icon-label"><PhoneIcon />
                    <a href={`tel:${profile.phone}`}>
                        {profile.phone}
                    </a>
                </div>
                <div className="icon-label"><EmailIcon />
                    <a href={`mailto:${profile.email}`}>
                        {profile.email}
                    </a>
                </div>
                <div className="icon-label"><LocationIcon /> <span>{profile.location}</span></div>
            </div>
            <div className="block-container">
                <BlockHeading>Skills</BlockHeading>
                <div id="skills_block_id"></div>
            </div>
            <div className="block-container">
                <BlockHeading>Certifications</BlockHeading>
                <div id="certifications_block_id"></div>
            </div>
            <div className="block-container">
                <BlockHeading>Education</BlockHeading>
                <div id="education_block_id"></div>
            </div>
            {
                strengths &&
                <div className="block-container">
                    <BlockHeading>Strengths</BlockHeading>
                    <div id="strengths_block_id"></div>
                </div>
            }
            <div className="block-container">
                <BlockHeading>Languages</BlockHeading>
                <ul>
                    {
                        profile.languages.map((language, idx) => {
                            return (
                                <li key={idx}>{language}</li>
                            )
                        })
                    }
                </ul>
            </div>

            <div className="block-container">
                <BlockHeading>Linkedin</BlockHeading>
                <div className="linkedin-container"><a target="_blank" href={profile.linkedin} >{profile.linkedin}</a></div>
            </div>

        </div>
    )
}

export default SecondarySection