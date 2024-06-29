
export function Error({
    message, extraMessage
}: {
    message: string, extraMessage?: string
}) {
    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <h2
                style={{
                    color: '#1B1F23',
                    fontSize: '16px'
                }}
            >
                {message}
            </h2>
            {extraMessage
                ? <p style={{ color: '#999FA6' }}>{extraMessage}</p>
                : null}
        </div>
    )
}