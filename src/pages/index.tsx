import { CompletedChallenges } from '../components/CompletedChallenges'
import { Countdown } from '../components/Countdown'
import { ExperienceBar} from '../components/ExperienceBar'
import { Profile } from '../components/Profile'
import Seo from '../components/seo'

export default function Home() {
    return (
        <div className="home-page">
            <Seo title={'Movit'}/>
            <div className="container">
                <ExperienceBar />

                <section className="wrapper-home-content">
                    <div className="left-container">
                        <Profile/>
                        <CompletedChallenges/>
                        <Countdown/>
                    </div>
                    <div className="right-container">
                    </div>
                </section>
            </div>
        </div>
    );
}
