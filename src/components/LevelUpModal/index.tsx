import { useContext } from "react"
import { ChallengesContext } from "../../contexts/ChallengeContext"

export function LevelUpModal() {
    const {level, closeModal} = useContext(ChallengesContext)
    return (
        <div className="overlay">
            <div className="modal-content">
                <header className="modal-header">{level}</header>

                <strong className="modal-congrats-text">Parabéns</strong>
                <p className="modal-description">Você alcançou um novo level.</p>

                <button type="button" className="modal-button" onClick={closeModal}>
                    <img src="/icons/close.svg" alt="Fechar Modal"/>
                </button>
            </div>
        </div>
    )
}