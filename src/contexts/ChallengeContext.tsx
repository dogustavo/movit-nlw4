import {createContext, ReactNode, useState} from 'react'

import challenges from '../../challenges.json'

interface Challenge {
    type: 'body' | 'eye';
    description: string;
    amount: number;
}

interface ChallengeContexData {
    level: number; 
    currentExperience: number;
    experienceToNextLevel: number;
    challngesCompleted: number;
    activeChallenge: Challenge;
    levelUp: () => void; 
    startNewChallenge: () => void;
    resetChallenge: () => void;
}

interface ChallengesProviderProps {
    children: ReactNode
}

export const ChallengesContext = createContext({} as ChallengeContexData);

export function ChallengesProvider({ children }: ChallengesProviderProps) {
    const [level, setLevel] = useState(1)
    const [currentExperience, setCurrentExperience] = useState(0)
    const [challngesCompleted, setChallngesCompleted] = useState(0)

    const [activeChallenge, seActiveChallenge] = useState(null)

    const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

    function levelUp() {
        setLevel(level + 1)
    }

    function startNewChallenge() {
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
        const challenge = challenges[randomChallengeIndex]

        seActiveChallenge(challenge)
    }

    function resetChallenge() {
        seActiveChallenge(null)
    }

    return (
        <ChallengesContext.Provider 
            value={{
                level, 
                currentExperience, 
                challngesCompleted,
                activeChallenge,
                levelUp, 
                startNewChallenge,
                resetChallenge,
                experienceToNextLevel
            }}
        >
            {children}
        </ChallengesContext.Provider>
    )
}

