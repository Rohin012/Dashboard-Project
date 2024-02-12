import { lazy } from 'react';
import Loadable from 'app/components/Loadable';
import CreateJobs from './CreateJobs';
import ListJob from './ListJob';

//const CreateJobs = Loadable(lazy(() => import('./recruiter/createjob')))

const RecruiterRoutes = [
    { path: '/recruiter/createjob', element: <CreateJobs /> },
    { path: '/recruiter/listjob', element: <ListJob /> }
];

export default RecruiterRoutes;
