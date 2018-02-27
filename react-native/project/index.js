import {AppRegistry} from 'react-native';
import IndexScreen from './src/screens/IndexScreen';

import AppStack from './src/config/navigator.config';

AppRegistry.registerComponent('RNBaseApp', () => AppStack);
