import React, { useState, useEffect } from 'react';
import './App.css';
import SingleJob from './components/SingleJob';
import getAllJobs from './apis/getAllJobs';
import JobEntry from './components/JobEntry';
import Signup from './components/SignUp';
import { useDispatch, useSelector } from 'react-redux';
import { modalActions } from './store';
import useAuthState from './apis/useAuthState';
import useLogout from './apis/useLogout';

function App() {
  const [searchData, setSearchData] = useState("");
  const [appRender, setAppRender] = useState(0);
  const render = useSelector((state) => state.modal.render);
  const { log } = useAuthState();
  const { logout } = useLogout();
  const dispatch = useDispatch();
  const [allJobs, setAllJobs] = useState([]);
  
  useEffect(() => {
    getAllJobs(setAllJobs);
  }, [render]);

  const filterJobs = () => {
    const filteredJobs = allJobs.filter((job) =>
        job.title.toLowerCase().includes(searchData.toLowerCase())
    );
    setAllJobs(filteredJobs);
    console.log(filteredJobs);
  };

  const onChangeHandler = (e) => {
    setSearchData(e.target.value);
    filterJobs();
  };

  const ontoggle = () => {
    dispatch(modalActions.signupToggle());
  }

  const onLogoutHandler = () => {
    logout();
    dispatch(modalActions.changeRender());
    setAppRender(appRender + 1);
  }

  return (
    <div className="App">
      <Signup />
      <section className="cont">
        <section className="cont__left">
          <section className='cont__left__search'>
            <h1 style={{ color: "lightseagreen", fontSize: "2rem", margin: "10px" }}>Jobs</h1>
            {/* search bar */}
            <div style={{ borderRadius: "5px", border: `1px solid lightseagreen`, width: `80%`, height: `40%`, color: `lightseagreen` }}>
              <input onChange={onChangeHandler} placeholder='   search your role...' style={{ borderRadius: "5px", width: "100%", height: "100%", color: `lightseagreen` }} />
            </div>
            {!log && <button className='btn' onClick={ontoggle}>signup/login</button>}
            {log && <button className='btn' onClick={onLogoutHandler}>logout</button>}
          </section>
          <section className='cont__left__jobArea'>
            {allJobs && allJobs.map((ele) => (
              <SingleJob key={ele.id} job={ele} log={log} />
            ))}
          </section>
        </section>
        <section className="cont__right">
          <JobEntry width={"90"} height={"85"} color={"lightseagreen"} log={log} />
        </section>
      </section>
    </div>
  );
}

export default App;
