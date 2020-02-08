import React from 'react'
import {
  createSwitchNavigator,
  createAppContainer
} from 'react-navigation'
import { Icon } from 'native-base'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import Header from '../Assets/Component/Header'
import { color } from '../Assets/Style/ColorList'

// ***** Import Screen ***** //
import SplashScreen from '../Screen/Splash/SplashScreen'
import HomeScreen from '../Screen/Home/Home'
import ProfileScreen from '../Screen/Profile/Profile'
// ***** /Import Screen ***** //

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      // eslint-disable-next-line react/display-name
      header: () => <Header title={'Home'} />,
    }
  },
})

const ProfileStack = createStackNavigator({
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      // eslint-disable-next-line react/display-name
      header: () => <Header title={'Profile'} />,
    }
  },
})

const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeStack,
    Profile: ProfileStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state
        // let IconComponent = Ionicons;
        let iconName
        if (routeName === 'Home') {
          iconName = 'home'
          // Sometimes we want to add badges to some icons.
          // You can check the implementation below.
          // IconComponent = HomeIconWithBadge;
        } else if (routeName === 'Cart') {
          iconName = 'cart'
        } else if (routeName === 'Profile') {
          iconName = 'account'
        }

        // You can return any component that you like here!
        return (
          <Icon name={iconName} type="MaterialCommunityIcons" style={{ color: tintColor, fontSize: 25 }} />
        )
      },
    }),
    tabBarOptions: {
      activeTintColor: color.buttonColor,
      inactiveTintColor: 'gray',
      style: {
        backgroundColor: color.themaColor,
      }
    },
  }
)

const AppNavigator = createSwitchNavigator({
  Splash: SplashScreen,
  TabNavigator: TabNavigator,
})

export default createAppContainer(AppNavigator)