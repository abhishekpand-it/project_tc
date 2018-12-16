import { createStackNavigator, createAppContainer } from 'react-navigation';
import AppContainer from './AppContainer';
import CustomHeader from './CustomHeader';
import SettingsPage from '../containers/SettingsPage';
import ProfilePage from '../containers/ProfilePage';

const AppNavigator = createStackNavigator(
    {
        SettingsPage: { screen: SettingsPage},
        ProfilePage: {screen : ProfilePage }
    },
    {
        initialRouteName: 'SettingsPage',
        /* The header config from HomeScreen is now here */
        headerMode: 'none',
        defaultNavigationOptions: {
            headerVisible: false,
        }
      }
);

export default createAppContainer(AppNavigator);