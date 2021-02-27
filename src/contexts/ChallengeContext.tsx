import {createContext, ReactNode, useEffect, useState} from 'react'
import Cookies from 'js-cookie'

import challenges from '../../challenges.json'
import { LevelUpModal } from '../components/LevelUpModal';

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
    completeChallenge: () => void;
    closeModal: () => void;
}

interface ChallengesProviderProps {
    children: ReactNode,
    level: number,
    currentExperience: number,
    challngesCompleted: number
}

export const ChallengesContext = createContext({} as ChallengeContexData);

export function ChallengesProvider({ 
    children,
    ...props
}: ChallengesProviderProps) {
    const [level, setLevel] = useState(props.level ?? 1)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [currentExperience, setCurrentExperience] = useState(props.currentExperience ?? 0)
    const [challngesCompleted, setChallngesCompleted] = useState(props.challngesCompleted ?? 0)

    const [activeChallenge, seActiveChallenge] = useState(null)

    const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

    useEffect(() => {
        Notification.requestPermission()
    },[])

    useEffect(() => {
        Cookies.set('level', level.toString())
        Cookies.set('currentExperience', currentExperience.toString())
        Cookies.set('challngesCompleted', challngesCompleted.toString())
    },[level, currentExperience, challngesCompleted])

    function levelUp() {
        setLevel(level + 1)
        setIsModalOpen(true)
    }

    function startNewChallenge() {
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
        const challenge = challenges[randomChallengeIndex]

        seActiveChallenge(challenge)

        new Audio('/notification.mp3').play()

        if(Notification.permission === 'granted') {
            new Notification('Novo desafio!', {
                body: `Valendo ${challenge.amount}xp!`
            })
        }
    }

    function resetChallenge() {
        seActiveChallenge(null)
    }

    function completeChallenge() {
        if(!activeChallenge) {
            return
        }

        const { amount } = activeChallenge;
        let finalExperience = currentExperience + amount

        if(finalExperience >= experienceToNextLevel) {
            finalExperience = finalExperience - experienceToNextLevel
            levelUp();
        }

        setCurrentExperience(finalExperience)
        seActiveChallenge(null)
        setChallngesCompleted(challngesCompleted + 1)
    }

    function closeModal() {
        setIsModalOpen(false)
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
                experienceToNextLevel,
                completeChallenge,
                closeModal
            }}
        >
            {children}

            {isModalOpen && <LevelUpModal/>}
        </ChallengesContext.Provider>
    )
}

