export function ExperienceBar() {
    return (
        <header className="experience-bar">
            <div className="container">
                <div className="wrap-experience-bar">
                    <span className="experience-text">0 xp</span>
                    <div className="experence-line">
                        <div style={{width: '50%'}} className="experence-line-complete"/>
                        <span className="current-experience-text" style={{left: '50%'}} >300 xp</span>
                    </div>
                    <span className="experience-text">600 xp</span>
                </div>
            </div>
        </header>
    )
}