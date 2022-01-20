import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Image,
	ScrollView,
	TextInput,
	FlatList,
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import COLORS from '../../themes/theme';
import { Feather, Entypo, Ionicons, AntDesign } from '@expo/vector-icons';
import { messages } from '../../data/messages';

const SingleChat = ({ navigation }) => {
	const route = useRoute();
	let item = route.params.item;

	return (
		<View
			style={{
				flex: 1,
				backgroundColor: COLORS.dark_blue,
			}}
		>
			<View
				style={{
					borderWidth: 1,
					borderColor: 'rgba(0,0,0,0.2)',
					position: 'absolute',
					top: 0,
					width: '100%',
					height: 100,
					zIndex: 1,
					flexDirection: 'row',
					justifyContent: 'space-between',
					alignItems: 'center',
					paddingHorizontal: 15,
					backgroundColor: COLORS.dark_blue,
					paddingTop: 40,
					paddingBottom: 7,
				}}
				key={item?.id}
			>
				<View
					style={{
						flexDirection: 'row',
						alignItems: 'center',
					}}
				>
					<AntDesign
						name='arrowleft'
						size={22}
						onPress={() => navigation.goBack()}
						style={{ color: COLORS.white, marginRight: 15 }}
					/>
					<Image
						source={{ uri: item?.profile_pic }}
						style={{
							width: 40,
							height: 40,
							borderRadius: 15,
							backgroundColor: COLORS.light_blue,
						}}
					/>
					<View
						style={{
							flexDirection: 'column',
							alignItems: 'flex-start',
							marginLeft: 10,
						}}
					>
						<Text
							style={{
								color: COLORS.white,
								fontSize: 16,
								maxWidth: 120,
								textTransform: 'capitalize',
								fontFamily: 'Nunito_800ExtraBold',
							}}
							numberOfLines={1}
						>
							{item?.name}
						</Text>
						<Text
							style={{
								color: COLORS.gray,
								fontSize: 12,
								textTransform: 'capitalize',
								fontFamily: 'Nunito_400Regular',
							}}
						>
							{item?.online ? 'Online' : item?.last_seen}
						</Text>
					</View>
				</View>
				<View
					style={{
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'space-evenly',
					}}
				>
					<Feather
						name='video'
						size={22}
						style={{ color: COLORS.white, marginRight: 20 }}
					/>
					<Feather
						name='phone'
						size={21}
						style={{ color: COLORS.white, marginRight: 20 }}
					/>
					<Entypo
						name='dots-three-vertical'
						size={20}
						style={{ color: COLORS.white }}
					/>
				</View>
			</View>
			<ScrollView>
				<View style={{ marginTop: 110, marginBottom: 80 }}>
					<FlatList
						data={messages}
						vertical
						renderItem={({ item, index }) => (
							<View
								style={{
									padding: 3,
									marginLeft: 10,
									marginVertical: 5,
									marginHorizontal: 10,
									paddingVertical: 10,
									paddingHorizontal: 8,
									backgroundColor: COLORS.light_blue,
									maxWidth: '70%',
									borderRadius: 10,
									alignSelf: item.user === 'sender' ? 'flex-start' : 'flex-end',
								}}
								key={item.message_id}
							>
								<Text
									style={{
										color: COLORS.white,
										fontSize: 15,
										fontFamily: 'Nunito_600SemiBold',
										textTransform: 'capitalize',
									}}
								>
									{item.message}
								</Text>
							</View>
						)}
						keyExtractor={(item) => item.id}
					/>
				</View>
			</ScrollView>
			<View
				style={{
					borderWidth: 1,
					borderColor: 'rgba(0,0,0,0.2)',
					position: 'absolute',
					bottom: 0,
					width: '100%',
					height: 70,
					backgroundColor: COLORS.dark_blue,
					zIndex: 1,
					flexDirection: 'row',
					alignItems: 'center',
					paddingHorizontal: 10,
				}}
			>
				<Feather
					name='plus'
					size={22}
					style={{ color: COLORS.white, marginRight: 10 }}
				/>
				<Feather
					name='mic'
					size={20}
					style={{ color: COLORS.white, marginRight: 10 }}
				/>
				<View
					style={{
						width: '70%',
						backgroundColor: COLORS.light_blue,
						padding: 5,
						paddingLeft: 5,
						borderRadius: 10,
						marginRight: 10,
					}}
				>
					<TextInput
						style={{
							color: COLORS.white,
							padding: 4,
							paddingLeft: 10,
							fontFamily: 'Nunito_400Regular',
						}}
						placeholder='Enter name'
						placeholderTextColor={COLORS.white}
						multiline={true}
						numberOfLines={1}
					/>
				</View>
				<Ionicons name='send' size={22} style={{ color: COLORS.white }} />
			</View>
		</View>
	);
};

export default SingleChat;

const styles = StyleSheet.create({
	right: {
		padding: 3,
		marginLeft: 10,
		marginVertical: 5,
		paddingVertical: 10,
		paddingHorizontal: 8,
		backgroundColor: COLORS.light_blue,
		maxWidth: '70%',
		left: 0,
		borderRadius: 10,
		alignSelf: 'flex-start',
	},
	left: {
		padding: 3,
		marginLeft: 10,
		marginVertical: 5,
		paddingVertical: 10,
		paddingHorizontal: 8,
		backgroundColor: COLORS.light_blue,
		right: 0,
		maxWidth: '70%',
		borderRadius: 10,
		alignSelf: 'flex-start',
	},
});
