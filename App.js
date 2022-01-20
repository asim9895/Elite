import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './screens/Authentication/Login';
import {
	Nunito_400Regular,
	Nunito_800ExtraBold,
	Nunito_600SemiBold,
	useFonts,
} from '@expo-google-fonts/nunito';

import AppLoading from 'expo-app-loading';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { ToastProvider } from 'react-native-toast-notifications';
import Register from './screens/Authentication/Register';
import ForgotPassword from './screens/Authentication/ForgotPassword';
import Profile from './screens/Profile/Profile';
import Main from './screens/Main';
import Feed from './screens/Home/Feed';
import Chats from './screens/Chats/Chats';
import Notifications from './screens/Notifications/Notifications';
import Search from './screens/Search/Search';
import Reels from './screens/Reels/Reels';
import SingleChat from './screens/Chats/SingleChat';
import UserSearch from './screens/Search/UserSearch';
import ChatSearch from './screens/Chats/ChatSearch';
import SinglePost from './screens/Search/SinglePost';
import Settings from './screens/Profile/Settings';
import Likes from './screens/Home/Likes';
import COLORS from './themes/theme';
import { AntDesign } from '@expo/vector-icons';
import Comments from './screens/Home/Comments';
import Edit from './screens/Profile/Edit';
import { Provider } from 'react-redux';
import store from './redux/store';

const Stack = createStackNavigator();

const App = () => {
	let [fontsLoaded] = useFonts({
		Nunito_400Regular,
		Nunito_800ExtraBold,
		Nunito_600SemiBold,
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	} else {
		return (
			<Provider store={store}>
				<ToastProvider>
					<StatusBar style='light' />
					<NavigationContainer>
						<Stack.Navigator screenOptions={{ headerShown: false }}>
							<Stack.Screen name='Login' component={Login} />
							<Stack.Screen name='Register' component={Register} />
							<Stack.Screen name='ForgotPassword' component={ForgotPassword} />
							<Stack.Screen name='Main' component={Main} />
							<Stack.Screen
								name='Feed'
								component={Feed}
								options={{ headerShown: false }}
							/>
							<Stack.Screen
								name='Profile'
								component={Profile}
								options={{ headerShown: false }}
							/>
							<Stack.Screen
								name='Chats'
								component={Chats}
								options={{ headerShown: false }}
							/>

							<Stack.Screen
								name='Notifications'
								component={Notifications}
								options={{ headerShown: false }}
							/>
							<Stack.Screen
								name='Reels'
								component={Reels}
								options={{ headerShown: false }}
							/>
							<Stack.Screen
								name='Search'
								component={Search}
								options={{ headerShown: false }}
							/>
							<Stack.Screen
								name='SingleChat'
								component={SingleChat}
								options={{ headerShown: false }}
							/>
							<Stack.Screen
								name='UserSearch'
								component={UserSearch}
								options={{ headerShown: false }}
							/>
							<Stack.Screen
								name='ChatSearch'
								component={ChatSearch}
								options={{ headerShown: false }}
							/>
							<Stack.Screen
								name='SinglePost'
								component={SinglePost}
								options={{ headerShown: false }}
							/>
							<Stack.Screen
								name='Settings'
								component={Settings}
								options={{
									headerShown: true,
									headerStyle: {
										elevation: 0,
										backgroundColor: COLORS.dark_blue,
									},
									headerTitle: 'Settings',
									headerTitleStyle: {
										fontFamily: 'Nunito_800ExtraBold',
										color: COLORS.white,
									},
									headerTitleAlign: 'center',
								}}
							/>
							<Stack.Screen
								name='Edit'
								component={Edit}
								options={({ navigation }) => ({
									headerShown: true,
									headerStyle: {
										elevation: 0,
										backgroundColor: COLORS.dark_blue,
									},
									headerTitle: 'Edit Profile',
									headerTitleStyle: {
										fontFamily: 'Nunito_800ExtraBold',
										color: COLORS.white,
									},
									headerTitleAlign: 'center',
									headerLeft: () => (
										<AntDesign
											name='arrowleft'
											size={22}
											onPress={() => navigation.goBack()}
											style={{ color: COLORS.white, marginLeft: 20 }}
										/>
									),
								})}
							/>
							<Stack.Screen
								name='Likes'
								component={Likes}
								options={({ navigation }) => ({
									headerShown: true,
									headerStyle: {
										elevation: 0,
										backgroundColor: COLORS.dark_blue,
									},
									headerTitle: 'Likes',
									headerTitleStyle: {
										fontFamily: 'Nunito_800ExtraBold',
										color: COLORS.white,
									},
									headerTitleAlign: 'center',
									headerLeft: () => (
										<AntDesign
											name='arrowleft'
											size={22}
											onPress={() => navigation.goBack()}
											style={{ color: COLORS.white, marginLeft: 20 }}
										/>
									),
								})}
							/>
							<Stack.Screen
								name='Comments'
								component={Comments}
								options={({ navigation }) => ({
									headerShown: true,
									headerStyle: {
										elevation: 0,
										backgroundColor: COLORS.dark_blue,
									},
									headerTitle: 'Comments',
									headerTitleStyle: {
										fontFamily: 'Nunito_800ExtraBold',
										color: COLORS.white,
									},
									headerTitleAlign: 'center',
									headerLeft: () => (
										<AntDesign
											name='arrowleft'
											size={22}
											onPress={() => navigation.goBack()}
											style={{ color: COLORS.white, marginLeft: 20 }}
										/>
									),
								})}
							/>
						</Stack.Navigator>
					</NavigationContainer>
				</ToastProvider>
			</Provider>
		);
	}
};

export default App;
