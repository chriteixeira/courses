import {StackNavigator} from 'react-navigation';
import IndexScreen from '../screens/IndexScreen';

const AppStack = StackNavigator({
    Home: {
        screen: IndexScreen
    }
}, {initialRouteName: 'Home'});


module.exports = AppStack;