import { useContext } from "react";
import { ChallengesContext } from "../../contexts/ChallengeContext";

export function ExperienceBar() {
    const {currentExperience, experienceToNextLevel} = useContext(ChallengesContext);

    const percentToNextLevel = Math.round((currentExperience * 100)) / experienceToNextLevel

    return (
        <header className="experience-bar">
            <div className="wrap-experience-bar">
                <span className="experience-text">0 xp</span>
                <div className="experence-line">
                    <div style={{width: `${percentToNextLevel}%`}} className="experence-line-complete"/>
                    <span className="current-experience-text" style={{left: `${percentToNextLevel}%`}} >{currentExperience} xp</span>
                </div>
                <span className="experience-text">{experienceToNextLevel} xp</span>
            </div>
        </header>
    )
}