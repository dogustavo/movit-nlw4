import { useContext } from "react";
import { ChallengesContext } from "../../contexts/ChallengeContext";
import { CountdownContext } from "../../contexts/CountdownContext";

export function ChallengeBox() {
    const {activeChallenge, resetChallenge, completeChallenge} = useContext(ChallengesContext);
    const {resetCountdown} = useContext(CountdownContext);

    function handleChallengeSucceeded() {
        completeChallenge()
        resetCountdown()
    }

    function handleChallengeFailed() {
        resetChallenge()
        resetCountdown()
    }

    return (
        <div className="challenge-box-container">
            { activeChallenge ? (
                <div className="challenge-active">
                    <header className="challenge-active-header">Ganhe {activeChallenge.amount} xp</header>

                    <main className="challenge-active-main">
                        <img src={`icons/${activeChallenge.type}.svg`}/>
                        <strong className="challenge-active-title">Novo desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>
                    <footer className="challenge-active-button-wrapper">
                        <button
                            type="button"
                            onClick={handleChallengeFailed}
                            className="challenge-button falied"
                        >
                            Falhei
                        </button>
                        <button
                            type="button"
                            onClick={handleChallengeSucceeded}
                            className="challenge-button succeeded"
                        >
                            Completei
                        </button>
                    </footer>
                </div>
            ) : (
                <div className="challenge-not-active">
                    <strong className="challenge-title">Inicie um ciclo para receber desafios a serem completados</strong>
                    <p className="challenge-description">
                        <img src="icons/level-up.svg" alt="level up" className="arrow-image"/>
                        Avance de level completando desafios
                    </p>
                </div>
            )}
            
        </div>
    )
}