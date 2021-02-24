import { ExperienceBar} from '../components/ExperienceBar'
import { Profile } from '../components/Profile'
import Seo from '../components/seo'

export default function Home() {
    return (
        <div className="home-page">
            <Seo title={'Movit'}/>
            <ExperienceBar />

            <section className="section-home">
                <div className="container">
                    <div className="wrapper-home-content">
                        <div className="left-container">
                            <Profile/>
                        </div>
                        <div className="right-container">

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
