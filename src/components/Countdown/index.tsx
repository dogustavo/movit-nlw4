import { useContext } from "react"
import { CountdownContext } from "../../contexts/CountdownContext";

export function Countdown() {
    const {
        minutes, 
        seconds, 
        hasFinished, 
        isActive, 
        startCountdown, 
        resetCountdown
    } = useContext(CountdownContext)

    const minute = String(minutes).padStart(2, '0').split('')
    const second = String(seconds).padStart(2, '0').split('')


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