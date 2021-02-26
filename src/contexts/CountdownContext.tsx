import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./ChallengeContext";

interface CountdownContextData {
    minutes: number;
    seconds: number;
    hasFinished: boolean;
    isActive: boolean
    startCountdown: () => void;
    resetCountdown: () => void;
}

interface CountdownProviderProps {
    children: ReactNode
}


export const CountdownContext = createContext({} as CountdownContextData)

let countdownTimeout: NodeJS.Timeout;

export function CountdownProvider({children}: CountdownProviderProps) {
    const {startNewChallenge} = useContext(ChallengesContext);

    const [timer, setTimer] = useState(0.1 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(timer / 60)
    const seconds = timer % 60;

    function startCountdown() {
        setIsActive(true)
    }

    function resetCountdown() {
        clearTimeout(countdownTimeout)
        setIsActive(false)

        setTimer(0.1 * 60);
        setHasFinished(false)
    }

    useEffect(() => {
        if(isActive && timer > 0) {
            countdownTimeout = setTimeout(() => {
                setTimer(timer - 1)
            }, 1000);
        } else if (isActive && timer === 0) {
            setHasFinished(true)
            setIsActive(false)
            startNewChallenge()
        }
    },[isActive, timer])
    
    return (
        <CountdownContext.Provider value={{
            minutes,
            seconds,
            hasFinished,
            isActive,
            startCountdown,
            resetCountdown
        }}>
            {children}
        </CountdownContext.Provider>
    )
}