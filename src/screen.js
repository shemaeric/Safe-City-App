import { Navigation } from 'react-native-navigation';

export const registerScreens = () => {
  Navigation.registerComponent('Home', () => require('./components/home').default);
  Navigation.registerComponent('Initializing', (sc) => require('./components/Initializing').default);
  Navigation.registerComponent('SignIn', () => require('./components/SignIn').default);
  Navigation.registerComponent('SignUp', () => require('./components/SignUp').default);
}