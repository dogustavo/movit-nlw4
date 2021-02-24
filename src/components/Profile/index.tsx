export function Profile() {
    return (
        <div className="wrap-profile-content">
            <img src="https://github.com/dogustavo.png" alt="Gustavo Oliveira Avatar" className="profile-image"/>
            <div className="wrap-profile-info">
                <strong className="profile-name">Gustavo Oliveira</strong>

                <p className="profile-level">
                    <img src="icons/level.svg" alt="level" className="profile-icon-level"/>
                    Level 1
                </p>
            </div>
        </div>
    )
}