import react, { useEffect, useState } from 'react';
import '../App.css'

import useAddJobs from '../apis/useAddJobs';

const JobEntry = ({ width, height, color }) => {

    const [c, setc] = useState("");
    const [t, sett] = useState("");
    const [d, setd] = useState("");
    const [s, sets] = useState("");
    const [e, sete] = useState("");
    const [link, setLink] = useState("");
    const { addJob } = useAddJobs();

    const onSubmitHandler = (event) => {
        event.preventDefault();
        if (c && t && d && s && e && link) {
            addJob(c, t, d, s, e, link);
        }
        setc("");
        setd("");
        sete("");
        sets("");
        sett("");
        setLink("");
    }

    return (
        <div style={{ marginTop: "30px", width: `${width}%`, height: `${height}%`, color: `${color}`, display: "flex", justifyContent: "center", alignItems: "center" }}>
            <form className='cont__right__form'>
                <h2 style={{ color: `${color}`, fontWeight: "bold", fontSize: "1.5rem", marginBottom: "5px" }}>Add Job to the Pool</h2>
                <label>Company Name</label>
                <textarea onChange={(e) => setc(e.target.value)} style={{ color: `${color}`, border: `1px solid ${color}`, borderRadius: "5px", width: "100%" }} ></textarea>
                <label>Title</label>
                <textarea onChange={(e) => sett(e.target.value)} style={{ color: `${color}`, border: `1px solid ${color}`, borderRadius: "5px", width: "100%" }} ></textarea>
                <label>Description</label>
                <textarea onChange={(e) => setd(e.target.value)} style={{ color: `${color}`, border: `1px solid ${color}`, borderRadius: "5px", width: "100%" }} ></textarea>
                <label>Required Skills</label>
                <textarea onChange={(e) => sets(e.target.value)} style={{ color: `${color}`, border: `1px solid ${color}`, borderRadius: "5px", width: "100%" }}  ></textarea>
                <label>Experience</label>
                <textarea onChange={(e) => sete(e.target.value)} style={{ color: `${color}`, border: `1px solid ${color}`, borderRadius: "5px", width: "100%" }} ></textarea>
                <label>Apply Link</label>
                <textarea onChange={(e) => setLink(e.target.value)} style={{ color: `${color}`, border: `1px solid ${color}`, borderRadius: "5px", width: "100%" }} ></textarea>
                <button className='btn' onClick={onSubmitHandler}>Submit</button>
            </form>
        </div>
    );
}

export default JobEntry;