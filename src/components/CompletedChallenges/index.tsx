import { useContext } from "react";
import { ChallengesContext } from "../../contexts/ChallengeContext";

export function CompletedChallenges() {
    const { challngesCompleted } = useContext(ChallengesContext);

    return (
        <div className="completed-challenges">
            <span className="challenges-title">Desafios completos</span>
            <span className="challenges-completed-text">{challngesCompleted}</span>
        </div>
    );
}
