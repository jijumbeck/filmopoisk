import { useState } from "react";

enum RatingColor {
    Outline = '',
    Primary = '#FF5500',
    Secondary = '#ABABAB'
}

const RATING_NUMBER = 5;

export function Rating({
    myGrade, meanGrade, setGrade
}: {
    myGrade?: number, meanGrade?: number, setGrade: (grade: number) => any
}) {
    const [startIndex, setStarIndex] = useState<number | undefined>(undefined);

    return (
        <div
            style={{
                display: 'flex',
                zIndex: 1
            }}
            onMouseOut={() => setStarIndex(undefined)}
        >
            {
                (new Array(RATING_NUMBER)).fill(0).map((_, index) => {
                    return (<RatingElement
                        key={index}
                        color={getColor(index + 1, startIndex, myGrade, meanGrade)}
                        index={index + 1}
                        setRatingNumber={setStarIndex}
                        setGrade={setGrade}
                    />)
                })
            }
        </div>
    )
}

function getColor(currentIndex: number, startIndex?: number, myGrade?: number, meanGrade?: number) {
    if (startIndex) {
        return currentIndex > startIndex ? RatingColor.Outline : RatingColor.Secondary;
    }

    if (myGrade) {
        return currentIndex > myGrade ? RatingColor.Outline : RatingColor.Primary;
    }

    if (meanGrade) {
        return currentIndex > meanGrade ? RatingColor.Outline : RatingColor.Primary;
    }

    return RatingColor.Outline;
}


function RatingElement({
    index, setRatingNumber, color, setGrade
}: {
    index: number, setRatingNumber: (index: number) => any, color: RatingColor, setGrade: (grade: number) => any
}) {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '0 5px'
            }}
            onMouseOver={() => {
                setRatingNumber(index);
            }}
            onClick={() => setGrade(index)}
        >
            <ColorStar color={color} />
            <p>{index}</p>
        </div>
    )
}

function ColorStar({ color }: { color: RatingColor }) {
    if (color === RatingColor.Outline) {
        return (
            <svg width="16" height="16" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M23.5467 30.2267C22.84 30.2267 21.9333 30 20.8 29.3333L16.8133 26.9733C16.4 26.7333 15.6 26.7333 15.2 26.9733L11.2 29.3333C8.83999 30.7333 7.45333 30.1733 6.82666 29.72C6.21333 29.2667 5.25333 28.1067 5.87999 25.44L6.82666 21.3467C6.93333 20.92 6.71999 20.1867 6.39999 19.8667L3.09333 16.56C1.43999 14.9067 1.57333 13.4933 1.79999 12.8C2.02666 12.1067 2.74666 10.88 5.03999 10.4933L9.29333 9.78668C9.69333 9.72001 10.2667 9.29334 10.44 8.93334L12.8 4.22668C13.8667 2.08001 15.2667 1.76001 16 1.76001C16.7333 1.76001 18.1333 2.08001 19.2 4.22668L21.5467 8.92001C21.7333 9.28001 22.3067 9.70668 22.7067 9.77334L26.96 10.48C29.2667 10.8667 29.9867 12.0933 30.2 12.7867C30.4133 13.48 30.5467 14.8933 28.9067 16.5467L25.6 19.8667C25.28 20.1867 25.08 20.9067 25.1733 21.3467L26.12 25.44C26.7333 28.1067 25.7867 29.2667 25.1733 29.72C24.84 29.96 24.3067 30.2267 23.5467 30.2267ZM16 24.7867C16.6533 24.7867 17.3067 24.9467 17.8267 25.2533L21.8133 27.6133C22.9733 28.3067 23.7067 28.3067 23.9867 28.1067C24.2667 27.9067 24.4667 27.2 24.1733 25.8933L23.2267 21.8C22.9733 20.6933 23.3867 19.2667 24.1867 18.4533L27.4933 15.1467C28.1467 14.4933 28.44 13.8533 28.3067 13.4133C28.16 12.9733 27.5467 12.6133 26.64 12.4667L22.3867 11.76C21.36 11.5867 20.24 10.76 19.7733 9.82668L17.4267 5.13334C17 4.28001 16.4667 3.77334 16 3.77334C15.5333 3.77334 15 4.28001 14.5867 5.13334L12.2267 9.82668C11.76 10.76 10.64 11.5867 9.61333 11.76L5.37333 12.4667C4.46666 12.6133 3.85333 12.9733 3.70666 13.4133C3.55999 13.8533 3.86666 14.5067 4.51999 15.1467L7.82666 18.4533C8.62666 19.2533 9.03999 20.6933 8.78666 21.8L7.83999 25.8933C7.53333 27.2133 7.74666 27.9067 8.02666 28.1067C8.30666 28.3067 9.02666 28.2933 10.2 27.6133L14.1867 25.2533C14.6933 24.9467 15.3467 24.7867 16 24.7867Z"
                    fill="#ABABAB"
                />
            </svg>
        )
    }

    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M11.7733 15.1133C11.42 15.1133 10.9667 15 10.4 14.6667L8.40666 13.4867C8.2 13.3667 7.8 13.3667 7.6 13.4867L5.6 14.6667C4.42 15.3667 3.72666 15.0867 3.41333 14.86C3.10666 14.6333 2.62666 14.0533 2.94 12.72L3.41333 10.6733C3.46666 10.46 3.36 10.0933 3.2 9.93334L1.54666 8.28001C0.719997 7.45334 0.786664 6.74667 0.899997 6.40001C1.01333 6.05334 1.37333 5.44 2.52 5.24667L4.64666 4.89334C4.84666 4.86 5.13333 4.64667 5.22 4.46667L6.4 2.11334C6.93333 1.04 7.63333 0.880005 8 0.880005C8.36666 0.880005 9.06666 1.04 9.6 2.11334L10.7733 4.46C10.8667 4.64 11.1533 4.85334 11.3533 4.88667L13.48 5.24001C14.6333 5.43334 14.9933 6.04667 15.1 6.39334C15.2067 6.74001 15.2733 7.44667 14.4533 8.27334L12.8 9.93334C12.64 10.0933 12.54 10.4533 12.5867 10.6733L13.06 12.72C13.3667 14.0533 12.8933 14.6333 12.5867 14.86C12.42 14.98 12.1533 15.1133 11.7733 15.1133Z"
                fill={color} />
        </svg>

    )
}