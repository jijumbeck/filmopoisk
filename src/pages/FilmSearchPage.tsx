import { useSearchParams } from "react-router-dom";

export function FilmSearchPage() {
    const [searchParams] = useSearchParams();
    console.log(searchParams)

    return (
        <div>
        </div>
    )
}