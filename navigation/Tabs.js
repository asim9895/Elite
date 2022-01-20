import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
	AntDesign,
	Feather,
	Entypo,
	MaterialCommunityIcons,
} from '@expo/vector-icons';
import COLORS from '../themes/theme';

import Profile from '../screens/Profile/Profile';
import Feed from '../screens/Home/Feed';
import Search from '../screens/Search/Search';
import Chats from '../screens/Chats/Chats';
import Reels from '../screens/Reels/Reels';
import Notifications from '../screens/Notifications/Notifications';

const Tab = createBottomTabNavigator();

const Tabs = () => {
	return (
		<Tab.Navigator
			screenOptions={({ navigation }) => ({
				tabBarShowLabel: false,
				tabBarStyle: {
					position: 'absolute',
					backgroundColor: COLORS.dark_blue,
					height: 60,
					borderTopWidth: 0,
				},
			})}
		>
			<Tab.Screen
				name='Feed'
				component={Feed}
				options={({ navigation }) => ({
					headerShown: true,
					headerStyle: {
						elevation: 0,
						backgroundColor: COLORS.dark_blue,
					},
					headerTitle: 'Feed',
					headerTitleStyle: {
						fontFamily: 'Nunito_800ExtraBold',
						color: COLORS.white,
					},

					headerTitleAlign: 'center',
					// headerRight: () => (
					// 	<TouchableOpacity
					// 		onPress={() => navigation.navigate('MarketSearch')}
					// 	>
					// 		<AntDesign
					// 			name='home'
					// 			size={25}
					// 			color={COLORS.white}
					// 			style={{
					// 				backgroundColor: COLORS.light_blue,
					// 				padding: 8,
					// 				marginRight: 10,
					// 				borderRadius: 10,
					// 			}}
					// 		/>
					// 	</TouchableOpacity>
					// ),

					tabBarIcon: ({ focused }) => (
						<View
							style={{
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							<AntDesign
								name='home'
								size={24}
								color='black'
								style={{ color: focused ? COLORS.white : '#555763' }}
							/>
							{/* <Text
								style={{
									color: focused ? COLORS.white : COLORS.gray,
									fontSize: 12,
									fontFamily: 'Nunito_600SemiBold',
								}}
							>
								Feed
							</Text> */}
						</View>
					),
				})}
			/>

			<Tab.Screen
				name='Search'
				component={Search}
				options={({ navigation }) => ({
					headerShown: true,
					headerStyle: {
						elevation: 0,
						backgroundColor: COLORS.dark_blue,
					},
					headerTitle: 'Explore',
					headerTitleStyle: {
						fontFamily: 'Nunito_800ExtraBold',
						color: COLORS.white,
					},
					headerTitleAlign: 'center',
					headerRight: () => (
						<TouchableOpacity onPress={() => navigation.navigate('UserSearch')}>
							<AntDesign
								name='search1'
								size={20}
								color={COLORS.white}
								style={{
									padding: 8,
									marginRight: 10,
									borderRadius: 15,
								}}
							/>
						</TouchableOpacity>
					),
					tabBarIcon: ({ focused }) => (
						<View
							style={{
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							<AntDesign
								name='search1'
								size={25}
								color='black'
								style={{ color: focused ? COLORS.white : '#555763' }}
							/>
							{/* <Text
								style={{
									color: focused ? COLORS.white : '#555763',
									fontSize: 12,
									fontFamily: 'Nunito_600SemiBold',
								}}
							>
								Search
							</Text> */}
						</View>
					),
				})}
			/>

			<Tab.Screen
				name='reels'
				component={Reels}
				options={{
					headerShown: false,
					tabBarIcon: ({ focused }) => (
						<View
							style={{
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							<MaterialCommunityIcons
								name='movie-open-outline'
								size={24}
								color='black'
								style={{
									color: focused ? COLORS.white : '#555763',
								}}
							/>
							{/* <Text
								style={{
									color: focused ? COLORS.white : '#555763',
									fontSize: 12,
									fontFamily: 'Nunito_600SemiBold',
								}}
							>
								Profile
							</Text> */}
						</View>
					),
				}}
			/>
			<Tab.Screen
				name='Chats'
				component={Chats}
				options={({ navigation }) => ({
					headerShown: true,
					headerStyle: {
						elevation: 0,
						backgroundColor: COLORS.dark_blue,
					},
					headerTitle: 'Chats',
					headerTitleStyle: {
						fontFamily: 'Nunito_800ExtraBold',
						color: COLORS.white,
					},
					headerTitleAlign: 'center',
					headerRight: () => (
						<TouchableOpacity onPress={() => navigation.navigate('ChatSearch')}>
							<AntDesign
								name='search1'
								size={20}
								color={COLORS.white}
								style={{
									padding: 10,
									marginRight: 10,
									borderRadius: 20,
								}}
							/>
						</TouchableOpacity>
					),
					tabBarIcon: ({ focused }) => (
						<View
							style={{
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							<AntDesign
								name='message1'
								size={22}
								color='black'
								style={{ color: focused ? COLORS.white : '#555763' }}
							/>
							{/* <Text
								style={{
									color: focused ? COLORS.white : '#555763',
									fontSize: 12,
									fontFamily: 'Nunito_600SemiBold',
								}}
							>
								Chats
							</Text> */}
						</View>
					),
				})}
			/>
			<Tab.Screen
				name='notifications'
				component={Notifications}
				options={{
					headerShown: true,
					headerStyle: {
						elevation: 0,
						backgroundColor: COLORS.dark_blue,
					},
					headerTitle: 'Notifications',
					headerTitleStyle: {
						fontFamily: 'Nunito_800ExtraBold',
						color: COLORS.white,
					},
					headerTitleAlign: 'center',
					tabBarIcon: ({ focused }) => (
						<View
							style={{
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							<Entypo
								name='notification'
								size={24}
								color='black'
								style={{
									color: focused ? COLORS.white : '#555763',
								}}
							/>
							{/* <Text
								style={{
									color: focused ? COLORS.white : '#555763',
									fontSize: 12,
									fontFamily: 'Nunito_600SemiBold',
								}}
							>
								Notifications
							</Text> */}
						</View>
					),
				}}
			/>

			<Tab.Screen
				name='profile'
				component={Profile}
				options={({ navigation }) => ({
					headerShown: true,
					headerStyle: {
						elevation: 0,
						backgroundColor: COLORS.dark_blue,
					},
					headerTitle: 'Profile',
					headerTitleStyle: {
						fontFamily: 'Nunito_800ExtraBold',
						color: COLORS.white,
					},
					headerTitleAlign: 'center',
					headerRight: () => (
						<TouchableOpacity onPress={() => navigation.navigate('Settings')}>
							<Feather
								name='settings'
								size={20}
								color={COLORS.white}
								style={{
									padding: 8,
									marginRight: 10,
									borderRadius: 15,
								}}
							/>
						</TouchableOpacity>
					),
					tabBarIcon: ({ focused }) => (
						<View
							style={{
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							<AntDesign
								name='user'
								size={24}
								color='black'
								style={{
									color: focused ? COLORS.white : '#555763',
								}}
							/>
						</View>
					),
				})}
			/>
		</Tab.Navigator>
	);
};

export default Tabs;
