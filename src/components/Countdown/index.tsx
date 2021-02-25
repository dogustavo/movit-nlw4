import { useState, useEffect, useContext } from "react"
import { ChallengesContext } from "../../contexts/ChallengeContext";

let countdownTimeout: NodeJS.Timeout;

export function Countdown() {
    const {startNewChallenge} = useContext(ChallengesContext);

    const [timer, setTimer] = useState(0.1 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(timer / 60)
    const seconds = timer % 60;

    const minute = String(minutes).padStart(2, '0').split('')
    const second = String(seconds).padStart(2, '0').split('')

    function startCountdown() {
        setIsActive(true)
    }

    function resetCountdown() {
        clearTimeout(countdownTimeout)
        setIsActive(false)

        setTimer(0.1 * 60);
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
        <div className="countdown-content">
            <div className="countdown-wrapper">
                <div className="wrap-minutes">
                    <span className="timer-text">{minute[0]}</span>
                    <span className="timer-text">{minute[1]}</span>
                </div>
                    <span className="timer-divider">:</span>
                <div className="wrap-seconds">
                    <span className="timer-text">{second[0]}</span>
                    <span className="timer-text">{second[1]}</span>
                </div>
            </div>

            {hasFinished ? (
                    <button 
                        disabled
                        className="countdown-button"
                    >
                        Ciclo encerrado
                    </button>
            ): (
                <>
                    {
                        !isActive ? (
                            <button 
                                type="button" 
                                onClick={startCountdown} 
                                className="countdown-button"
                            >
                                Iniciar um ciclo
                            </button>
                        ):(
                            <button 
                                type="button" 
                                onClick={resetCountdown} 
                                className="countdown-button inactive"
                            >
                                Abandonar ciclo
                            </button>
                    )}
                </>
            )}

            
        </div>
    )
}