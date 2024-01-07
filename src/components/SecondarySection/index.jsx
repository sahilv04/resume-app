import { useSelector } from "react-redux"
import BlockHeading from "../BlockHeading"
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { useEffect } from 'react';

const SecondarySection = () => {
    const mainState = useSelector(state => state.main)
    const { fields: profile } = mainState.resume

    const skillsHtml = documentToHtmlString(profile.skills)

    useEffect(() => {
        document.getElementById("skills_block_id").innerHTML = skillsHtml
    }, [skillsHtml])

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

        </div>
    )
}

export default SecondarySection