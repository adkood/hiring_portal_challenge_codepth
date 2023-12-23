import { getDocs , collection} from 'firebase/firestore';
import db from '../fireBaseConn'

const getAllJobs = (setAllJobs) => {
    const jobCollRef = collection(db, 'jobs');
    getDocs(jobCollRef).then((res) => {
      const allJobs = [];
      res.docs.forEach((job) => {
        allJobs.push({...job.data(),id: job.id});
      });
      setAllJobs(allJobs);
      console.log(allJobs);
    }).catch((err) => {
      console.err(err);
    });
};

export default getAllJobs;

