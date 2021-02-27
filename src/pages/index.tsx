import {GetServerSideProps} from 'next'

import { ChallengeBox } from '../components/ChallengeBox'
import { CompletedChallenges } from '../components/CompletedChallenges'
import { Countdown } from '../components/Countdown'
import { ExperienceBar} from '../components/ExperienceBar'
import { Profile } from '../components/Profile'
import Seo from '../components/seo'

import { CountdownProvider } from '../contexts/CountdownContext'
import { ChallengesProvider } from '../contexts/ChallengeContext';

interface HomeProps {
    level: number,
    currentExperience: number,
    challngesCompleted: number
}

export default function Home(props: HomeProps) {
    return (
        <ChallengesProvider 
            level={props.level} 
            currentExperience={props.currentExperience} 
            challngesCompleted={props.challngesCompleted}
        >
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
        </ChallengesProvider>
    );
}


export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const {
        level,
        currentExperience,
        challngesCompleted
    } = ctx.req.cookies

    return {
        props: {
            level: Number(level),
            currentExperience: Number(currentExperience),
            challngesCompleted: Number(challngesCompleted)
        }
    }
}