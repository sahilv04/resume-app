import { useSelector } from "react-redux"
import BlockHeading from "../BlockHeading"
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { useEffect } from 'react';
import "./index.css"

const SecondarySection = () => {
    const mainState = useSelector(state => state.main)
    const { fields: profile } = mainState.resume

    const skillsHtml = documentToHtmlString(profile.skills)
    const certifications = documentToHtmlString(profile.certifications)
    const strengths = documentToHtmlString(profile.strengths)
    const education = documentToHtmlString(profile.education)

    useEffect(() => {
        document.getElementById("skills_block_id").innerHTML = skillsHtml
    }, [skillsHtml])

    useEffect(() => {
        document.getElementById("certifications_block_id").innerHTML = certifications
    }, [certifications])

    useEffect(() => {
        document.getElementById("strengths_block_id").innerHTML = strengths
    }, [strengths])

    useEffect(() => {
        document.getElementById("education_block_id").innerHTML = education
    }, [education])

    return (
        <div className='secondary-section'>
            <div className="block-container">
                <BlockHeading>Contact</BlockHeading>
                <div>{profile.location}</div>
                <div>{profile.email}</div>
                <div>{profile.phone}</div>
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
            <div className="block-container">
                <BlockHeading>Strengths</BlockHeading>
                <div id="strengths_block_id"></div>
            </div>
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