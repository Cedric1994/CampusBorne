// Import components
import Home from './components/Home'
import Teacher from './components/destinations/Teacher'
import Class from './components/destinations/Class'
import Administration from './components/destinations/Administration'
import FreeClassRoom from './components/FreeClassRoom'
import Room from './components/common/Room'
import Edt from './components/Edt'

export default [
  { path: '/', component: Home },
  { path: '/FindDestination/Teacher', component: Teacher },
  { path: '/FindDestination/Class', component: Class },
  { path: '/FindDestination/Administration', component: Administration },
  { path: '/FreeClassRoom', component: FreeClassRoom },
  { path: '/Room/:name', component: Room },
  { path: '/Edt', component: Edt },
  { path: '*', redirect: '/' }
]
