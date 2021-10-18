import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
//import About from '../views/About.vue'
import Jobs from '../views/jobs/Jobs.vue'
import JobDetails from '../views/jobs/JobDetails.vue'
import NotFound from '../views/NotFound.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),  //the way to use component using lazy loading
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: Jobs,
  },
  {
    path: '/jobs/:job_id',
    name: 'JobDetails',
    component: JobDetails,
    props: true, //to be able to send parameters as props
  },
  //redirect
  {
    path: '/all-jobs',
    redirect: 'jobs',
  },
  //404 redirect
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
