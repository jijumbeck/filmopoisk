import searchIcon from './../../assets/search-icon.svg';
import closeIcon from './../../assets/close.svg';


export function SearchIcon() {
    return (<img src={searchIcon} />)
}

export function CloseIcon() {
    return (
        <img 
            style={{
                height: '12px'
            }}
            src={closeIcon}
        />
    )
}