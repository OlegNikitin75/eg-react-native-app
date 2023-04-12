import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Courses, Home, Profile, Schedule } from '../../screens'
import { Dimensions, Text, View } from 'react-native'
import {
  CalendarSvgComponent,
  CalendarSvgComponentFocused,
  CoursesSvgComponent,
  CoursesSvgComponentFocused,
  HomeSvgComponent,
  HomeSvgComponentFocused,
  ProfileSvgComponent,
  ProfileSvgComponentFocused
} from '../../components/icons'
import React from 'react'

const Tab = createBottomTabNavigator()
const windowWidth = Dimensions.get('window').width

const HomeTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: '#292E33',
        tabBarStyle: {
          backgroundColor: 'black',
          height: 58,
          elevation: 0,
          paddingHorizontal: 12
        }
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return (
                <View
                  style={{ width: windowWidth / 3.4 }}
                  className={`${
                    focused ? 'bg-primary' : 'bg-transparent'
                  } flex-row justify-center items-center rounded-3xl py-2`}
                >
                  <HomeSvgComponentFocused />
                  {focused && <Text className="pl-1 text-xs">Главная</Text>}
                </View>
              )
            }
            return <HomeSvgComponent />
          }
        }}
      />
      <Tab.Screen
        name="Schedule"
        component={Schedule}
        options={{
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return (
                <View
                  style={{ width: windowWidth / 3.4 }}
                  className={`${
                    focused ? 'bg-primary' : 'bg-transparent'
                  } flex-row justify-center items-center rounded-3xl py-2`}
                >
                  <CalendarSvgComponentFocused />
                  {focused && <Text className="pl-1 text-xs">Календарь</Text>}
                </View>
              )
            }
            return <CalendarSvgComponent />
          }
        }}
      />
      <Tab.Screen
        name="Courses"
        component={Courses}
        options={{
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return (
                <View
                  style={{ width: windowWidth / 3.4 }}
                  className={`${
                    focused ? 'bg-primary' : 'bg-transparent'
                  } flex-row justify-center items-center rounded-3xl py-2`}
                >
                  <CoursesSvgComponentFocused />
                  {focused && <Text className="pl-1 text-xs">Курсы</Text>}
                </View>
              )
            }
            return <CoursesSvgComponent />
          }
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return (
                <View
                  style={{ width: windowWidth / 3.4 }}
                  className={`${
                    focused ? 'bg-primary' : 'bg-transparent'
                  } flex-row justify-center items-center rounded-3xl py-2`}
                >
                  <ProfileSvgComponentFocused />
                  {focused && <Text className="pl-1 text-xs">Профиль</Text>}
                </View>
              )
            }
            return <ProfileSvgComponent />
          }
        }}
      />
    </Tab.Navigator>
  )
}
export default HomeTabNavigator
