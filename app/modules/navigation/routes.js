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
import AdminMain from '../../screens/admin/admin-main'
import AdminStudents from '../../screens/admin/admin-students'
import AdminTeachers from '../../screens/admin/admin-teachers'
import AdminTasks from '../../screens/admin/admin-tasks'
import AdminAddStudent from '../../screens/admin/admin-add-student'

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
    component: AdminMain,
    isDelete: null
  },
  {

    name: 'AdminStudents',
    component: AdminStudents,
    title: 'Студенты',
    isDelete: true
  },
  {
    name: 'AdminTeachers',
    component: AdminTeachers
  },
  {
    name: 'AdminTasks',
    component: AdminTasks
  }
  ,
  {
    name: 'AdminAddStudent',
    component: AdminAddStudent,
    title: 'Новый студент',
    isDelete: false
  }

]
