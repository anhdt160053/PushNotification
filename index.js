/**
 * @format
 */

import {AppRegistry, Platform, LogBox } from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import PushNotification from "react-native-push-notification";
import {RGesture} from './lib';


LogBox.ignoreLogs(['Remote debugger']);

PushNotification.configure({
    onNotification: function (notification) {
        console.log("NOTIFICATION:", notification);
    },
    requestPermissions: Platform.OS === 'ios'
});

AppRegistry.registerComponent(appName, () => RGesture);