import { useEffect, useState } from 'react';
import './App.css';
import SingleJob from './components/SingleJob';

import getAllJobs from './apis/getAllJobs';
import JobEntry from './components/JobEntry';
import SearchBar from './components/SearchBar';
import Signup from './components/SignUp';
function App() {
  const [allJobs, setAllJobs] = useState([]);
  useEffect(() => {
    getAllJobs(setAllJobs);
  },[]);

  console.log(allJobs);
  return (
    <div className="App">
      <Signup/>
      <section className="cont">
        <section className="cont__left">
          <section className='cont__left__search'>
            <h1 style={{color: "lightseagreen", fontSize: "2rem", margin: "10px"}}>Jobs</h1>
            <SearchBar width={"80"} height={"40"} color={'lightseagreen'}/>
          </section>
          <section className='cont__left__jobArea'>
            {
              allJobs && allJobs.map((ele) => {
                return <SingleJob key={ele.id} job={ele}/>
              })
            }
          </section>
        </section>
        <section className="cont__right">
          <JobEntry width={"90"} height={"85"} color={"lightseagreen"}/>
        </section>
      </section>
    </div>
  );
}

export default App;
