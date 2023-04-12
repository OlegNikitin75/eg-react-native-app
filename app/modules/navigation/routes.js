import {
  Courses,
  Home,
  Login,
  Materials,
  Profile,
  Schedule,
  Start,
  Teachers,
  Students,
  Course,
  Task,
  SelectCourse,
  SelectControl,
  SelectTasks,
  SelectTask
} from '../../screens'
import HomeTabNavigator from './home-tab-navigator'
import { AdminGroups, AdminMain, AdminTasks, AdminTeachers } from '../../screens/admin'

export const routes = [
  {
    name: 'Home',
    component: HomeTabNavigator
  },
  {
    name: 'Course',
    component: Course
  },
  {
    name: 'Task',
    component: Task
  },

  {
    name: 'Teachers',
    component: Teachers
  },
  {
    name: 'Students',
    component: Students
  },
  {
    name: 'SelectCourse',
    component: SelectCourse
  },
  {
    name: 'SelectControl',
    component: SelectControl
  },
  {
    name: 'SelectTasks',
    component: SelectTasks
  },
  {
    name: 'SelectTask',
    component: SelectTask
  },

  {
    name: 'Profile',
    component: Profile
  }
]
export const tabBottomRoutes = [
  {
    name: 'HomeScreen',
    component: Home
  },

  {
    name: 'Schedule',
    component: Schedule
  },

  {
    name: 'Courses',
    component: Courses
  },
  {
    name: 'Materials',
    component: Materials
  }
]
export const routesAdmin = [
  {
    name: 'AdminMain',
    component: AdminMain
  },
  {
    name: 'AdminGroups',
    component: AdminGroups
  },
  {
    name: 'AdminTeachers',
    component: AdminTeachers
  },
  {
    name: 'AdminTasks',
    component: AdminTasks
  }

]
