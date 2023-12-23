import react from 'react';

const SearchBar = ({width, height, color = "black"}) => {
    return (
        <div style={{borderRadius: "5px",border: `1px solid ${color}`, width: `${width}%`, height: `${height}%`, color: `${color}`}}>
            <input placeholder='   search your role...' style={{borderRadius: "5px", width: "100%", height: "100%", color: `${color}`}} />
        </div>
    );
}

export default SearchBar;