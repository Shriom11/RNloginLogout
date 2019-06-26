//import liraries and files
import { createStackNavigator  } from 'react-navigation';
import landingHomeScreen from 'screens/landing/landingHome';
import LandingScreen from 'screens/landing/landingScreen';
import HomeScreen from 'screens/home/homeScreen';
import LoginScreen from 'screens/login/login';
import SignupScreen from 'screens/signup/signup';

// create a navigator
export const AppNavigator = createStackNavigator ({
    landingHomeScreen: { screen: landingHomeScreen},
    LandingScreen: { screen: LandingScreen},
    LoginScreen:{screen:LoginScreen},
    SignupScreen:{screen:SignupScreen},
    HomeScreen: { screen: HomeScreen},
}, {
    mode: 'card',
    headerMode:'none',
    animationEnabled: false,
    lazy: true,
    navigationOptions: params => ({
        gesturesEnabled: true,
        gesturesDirection: 'inverted',
    }),
    transitionConfig: () => ({
        screenInterpolator: sceneProps => {
            const { layout, position, scene } = sceneProps;
            const { index } = scene;
            const width = layout.initWidth;
            return {
                opacity: position.interpolate({
                    inputRange: [index - 1, index, index + 1],
                    outputRange: [ 0, 1, 0],
                }),
                transform: [{
                    translateX: position.interpolate({
                        inputRange: [index - 1, index, index + 1],
                        outputRange: [-width, 0, width],
                    }),
                }]
            };
        },
        transitionSpec: {
            duration: 600,
          },
    }),
  }
)