import { useEffect, useState } from 'react';
import './App.css';
import SingleJob from './components/SingleJob';

import getAllJobs from './apis/getAllJobs';
import JobEntry from './components/JobEntry';
import SearchBar from './components/SearchBar';
import Signup from './components/SignUp';

import { useDispatch, useSelector } from 'react-redux';
import { modalActions } from './store';
import useAuthState from './apis/useAuthState';
import useLogout from './apis/useLogout';

function App() {

  const [appRender, setAppRender] = useState(0);
  const render = useSelector((state) => { state.modal.render });
  const { log } = useAuthState();
  const { logout } = useLogout();
  // console.log(log);
  const dispatch = useDispatch();

  const [allJobs, setAllJobs] = useState([]);
  useEffect(() => {
    getAllJobs(setAllJobs);
  }, []);


  const ontoggle = () => {
    dispatch(modalActions.signupToggle());
  }

  const onLogoutHandler = () => {
    logout();
    dispatch(modalActions.changeRender());
    setAppRender(appRender+1);
  }

  useEffect(() => {
  }, [render,appRender]);

  return (
    <div className="App">
      <Signup />
      <section className="cont">
        <section className="cont__left">
          <section className='cont__left__search'>
            <h1 style={{ color: "lightseagreen", fontSize: "2rem", margin: "10px" }}>Jobs</h1>
            <SearchBar width={"80"} height={"40"} color={'lightseagreen'} />
            {!log && <button onClick={ontoggle}>signup/login</button>}
            {log && <button onClick={onLogoutHandler}>logout</button>}
          </section>
          <section className='cont__left__jobArea'>
            {
              allJobs && allJobs.map((ele) => {
                return <SingleJob key={ele.id} job={ele} log={log} />
              })
            }
          </section>
        </section>
        <section className="cont__right">
          <JobEntry width={"90"} height={"85"} color={"lightseagreen"} />
        </section>
      </section>
    </div>
  );
}

export default App;
