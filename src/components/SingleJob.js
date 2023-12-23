import react from 'react';

const SingleJob = ({job}) => {
    return (
        <div className='cont__left__singleJob'>
            <section style={{ width: "60%", height: "100%", display: "flex", margin: "10px" ,justifyContent: "center", flexDirection: "column"}}>
            <span>{job.title}</span> 
            <span>{job.description}</span>
            </section>
            <button className='btn__apply'>Apply now</button>    
        </div>
    );
}

export default SingleJob;