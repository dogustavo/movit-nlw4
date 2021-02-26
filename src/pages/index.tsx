import { ChallengeBox } from '../components/ChallengeBox'
import { CompletedChallenges } from '../components/CompletedChallenges'
import { Countdown } from '../components/Countdown'
import { ExperienceBar} from '../components/ExperienceBar'
import { Profile } from '../components/Profile'
import Seo from '../components/seo'
import { CountdownProvider } from '../contexts/CountdownContext'

export default function Home() {
    return (
        <div className="home-page">
            <Seo title={'Movit'}/>
            <div className="container">
                <ExperienceBar />

                <CountdownProvider>
                    <section className="wrapper-home-content">
                        <div className="left-container">
                            <Profile/>
                            <CompletedChallenges/>
                            <Countdown/>
                        </div>
                        <div className="right-container">
                            <ChallengeBox />
                        </div>
                    </section>
                </CountdownProvider>
            </div>
        </div>
    );
}
