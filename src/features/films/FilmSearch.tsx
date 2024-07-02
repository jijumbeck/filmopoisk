import { FilmList } from "../../entities/film/FilmCard";
import { Film } from "../../entities/film/model";
import { Controlled } from "../../shared/ui/Input";
import { InputSearch } from "../../shared/ui/InputSearch";
import { Loading } from "../../shared/ui/Loading";
import { Pagination } from "../../shared/ui/Pagintaion";

export function FilmSearch(props: { inputSearch: Controlled<string>, paginationSearch: Required<Controlled<number>>, films?: Film[] }) {
    return (
        <div>
            <div
                style={{
                    width: '28%',
                    marginBottom: '16px'
                }}
            >
                <InputSearch
                    placeholder="Название фильма"
                    {...props.inputSearch}
                />
            </div>
            {
                props.films
                    ? <FilmList films={props.films} />
                    : <Loading />
            }
            <div style={{ marginTop: '20px', width: '100px' }}>
                <Pagination
                    page={props.paginationSearch.value ?? 1}
                    setPageNumber={props.paginationSearch.onChange}
                />
            </div>
        </div>
    )
}