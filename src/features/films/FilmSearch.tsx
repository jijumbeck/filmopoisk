import { FilmList } from "../../entities/film/FilmCard";
import { Film } from "../../entities/film/model";
import { Error } from "../../shared/ui/Error";
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
                    ? props.films.length === 0
                        ? <div style={{ height: '60vh' }}><Error message="Фильмы не найдены" extraMessage="Измените запрос и попробуйте снова" /></div>
                        : <FilmList films={props.films} />
                    : <Loading />
            }
            <div style={{ marginTop: '20px', width: '100px' }}>
                {
                    props.films && props.films.length > 0
                        ? <Pagination
                            page={props.paginationSearch.value ?? 1}
                            setPageNumber={props.paginationSearch.onChange}
                        />
                        : null
                }
            </div>
        </div>
    )
}