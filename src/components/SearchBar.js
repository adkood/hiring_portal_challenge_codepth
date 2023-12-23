import React, { useEffect, useState } from 'react';

const SearchBar = ({ width, height, color = "black", allJobs, setAllJobs }) => {
    const [searchData, setSearchData] = useState("");
    // implemented Debouncing to tackle multiple search calls
    useEffect(() => {
        const filterJobs = () => {
            const filteredJobs = allJobs.filter((job) =>
                job.title.toLowerCase().includes(searchData.toLowerCase())
            );
            setAllJobs(filteredJobs);
            console.log(filteredJobs);
        };

        const debounceTimeout = setTimeout(filterJobs, 1000);

        return () => clearTimeout(debounceTimeout);
    }, [searchData, setAllJobs]);

    const onChangeHandler = (e) => {
        setSearchData(e.target.value);
    };

    return (
        <div style={{ borderRadius: "5px", border: `1px solid ${color}`, width: `${width}%`, height: `${height}%`, color: `${color}` }}>
            <input onChange={onChangeHandler} placeholder='   search your role...' style={{ borderRadius: "5px", width: "100%", height: "100%", color: `${color}` }} />
        </div>
    );
}

export default SearchBar;
