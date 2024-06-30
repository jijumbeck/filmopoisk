import { Actor } from "./actor.slice";

export function ActorCard({ actor }: { actor: Actor }) {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px'
            }}
        >
            <img
                src={actor.photo}
                style={{
                    width: '160px',
                    height: '230px',
                    borderRadius: '8px'
                }}
            />
            <p
                style={{
                    textAlign: 'start'
                }}
            >
                {actor.name}
            </p>
        </div>
    )
}