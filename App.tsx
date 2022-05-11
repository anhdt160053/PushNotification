
import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';

import PushNotification, { Importance } from "react-native-push-notification";

interface IDeliveredNotifications {
  identifier: string;
  title: string;
  body: string;
  tag: string;
  group: string;
  category?: string | undefined;
  userInfo?: any;
}


const App = () => {

  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
   createChannels();
  }, [])

  const createChannels = () => {
    PushNotification.createChannel({
      channelId:'test-channel',
      channelName: 'test-channel-notification'
    },() => {})
  }

  const handleNotifications = () => {
    console.log('Test handleNotifications');
    
    PushNotification.localNotification({
      channelId: 'test-channel',
      title:'Message Notification',
      message: 'This is text with notifications',
      id:'123',
      group:'message'
    })
  }

  const handleGetChannels = () => {
    PushNotification.getChannels(function (channel_ids) {
      console.log('channel_ids',channel_ids);
    });
  }

  const handleDeleteChannel = () => {
    PushNotification.deleteChannel('test-channel');
  }

  const handleCancelChannel = () => {
    // PushNotification.cancelLocalNotification('123');
    // PushNotification.cancelAllLocalNotifications()
    // PushNotification.getDeliveredNotifications(callback);
  }

  const handleDeliveredNotifications = () => {
    PushNotification.getDeliveredNotifications(
      (notifications) => {
        console.log('notifications',notifications)
      }
    );
  }

  const handleScheduledLocalNotifications = () => {
    PushNotification.getScheduledLocalNotifications(
      (notifications) => {
        console.log('notifications',notifications);
        
      }
    )
  }

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <TouchableOpacity onPress={handleNotifications}>
        <Text style={styles.contentButton}>Test Notification</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleGetChannels}>
        <Text style={styles.contentButton}>Get channels</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleDeleteChannel}>
        <Text style={styles.contentButton}>Delete channels</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleCancelChannel}>
        <Text style={styles.contentButton}>Cancel channels</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleDeliveredNotifications}>
        <Text style={styles.contentButton}>handleGetDeliveredNotifications</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleScheduledLocalNotifications}>
        <Text style={styles.contentButton}>handleGetScheduledLocalNotifications</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contentButton: {
    fontSize: 16,
    padding:10,
    fontWeight:'800',
    color: '#fff',
    backgroundColor:'blue',
    textAlign:'center'
  }
});

export default App;
