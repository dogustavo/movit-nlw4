import { useState, useEffect } from "react"

export function Countdown() {
    const [timer, setTimer] = useState(25 * 60);
    const [active, setActive] = useState(false);

    const minutes = Math.floor(timer / 60)
    const seconds = timer % 60;

    const minute = String(minutes).padStart(2, '0').split('')
    const second = String(seconds).padStart(2, '0').split('')

    function startCountdown() {
        setActive(true)
    }

    useEffect(() => {
        if(active && timer > 0) {
            setTimeout(() => {
                setTimer(timer - 1)
            }, 1000);
        }
    },[active, timer])

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

            <button 
                type="button" 
                onClick={startCountdown} 
                className="countdown-button"
            >
                Iniciar um ciclo
            </button>
        </div>
    )
}