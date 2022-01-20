import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	Dimensions,
	TouchableOpacity,
	ScrollView,
	FlatList,
	TextInput,
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import COLORS from '../../themes/theme';
import { Entypo, AntDesign, Feather } from '@expo/vector-icons';
import { likes } from '../../data/likes';
import { comments } from '../../data/comments';
import LikesList from '../../components/LikesList';
import CommentsList from '../../components/CommentsList';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const SinglePost = ({ navigation }) => {
	const [current_choice, setcurrent_choice] = useState('Likes');
	const [add_comment_toggle, setadd_comment_toggle] = useState(true);
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
			>
				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
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
							marginRight: 10,
						}}
					/>
					<Text
						style={{
							color: COLORS.white,
							fontSize: 17,
							maxWidth: 100,
							textTransform: 'capitalize',
							fontFamily: 'Nunito_800ExtraBold',
						}}
						numberOfLines={1}
					>
						{item?.username}
					</Text>
					<View
						style={{
							backgroundColor: COLORS.success,
							paddingHorizontal: 5,
							paddingVertical: 3,
							borderRadius: 5,
							marginLeft: 7,
						}}
					>
						<Text
							style={{
								color: COLORS.white,
								fontSize: 14,
								textTransform: 'capitalize',
								fontFamily: 'Nunito_400Regular',
							}}
						>
							Follow
						</Text>
					</View>
				</View>

				<Entypo
					name='dots-three-vertical'
					size={20}
					style={{ color: COLORS.white }}
				/>
			</View>
			<ScrollView>
				<View style={{ marginHorizontal: 15, marginTop: 110 }}>
					<Image
						source={{ uri: item?.image }}
						style={{
							width: '100%',
							height: height / 2,
							borderRadius: 15,
							backgroundColor: COLORS.light_blue,
							marginRight: 10,
							marginBottom: 7,
						}}
					/>
					<View
						style={{
							flexDirection: 'row',
							alignItems: 'center',
							justifyContent: 'space-between',
						}}
					>
						<View style={{ flexDirection: 'row', alignItems: 'center' }}>
							<AntDesign
								name='hearto'
								size={21}
								color='black'
								style={{
									color: COLORS.white,
									marginLeft: 5,
									marginTop: 10,
									marginBottom: 5,
								}}
							/>
							<Text
								style={{
									fontFamily: 'Nunito_400Regular',
									fontSize: 13,
									color: COLORS.white,
									marginLeft: 5,
									marginTop: 3,
								}}
							>
								342
							</Text>
							<Feather
								name='message-square'
								size={21}
								onPress={() => setcurrent_choice('Comments')}
								color='black'
								style={{
									color: COLORS.white,
									marginLeft: 25,
									marginTop: 10,
									marginBottom: 5,
								}}
							/>
							<Text
								style={{
									fontFamily: 'Nunito_400Regular',
									fontSize: 13,
									color: COLORS.white,
									marginLeft: 5,
									marginTop: 3,
								}}
							>
								12
							</Text>
						</View>
						<Feather
							name='bookmark'
							size={21}
							color='black'
							style={{
								color: COLORS.white,
								marginRight: 10,
								marginTop: 10,
								marginBottom: 5,
							}}
						/>
					</View>
					<View
						style={{
							flexDirection: 'row',
							alignItems: 'center',
							justifyContent: 'space-evenly',
							marginTop: 0,
							borderRadius: 10,
							padding: 10,
							paddingHorizontal: 20,
						}}
					>
						<TouchableOpacity onPress={() => setcurrent_choice('Likes')}>
							<View
								style={{
									flexDirection: 'column',
									alignItems: 'center',
									padding: 16,
									borderBottomColor:
										current_choice === 'Likes'
											? COLORS.primary
											: COLORS.light_blue,
									borderBottomWidth: 1,
								}}
							>
								<Text
									style={{
										color:
											current_choice === 'Likes' ? COLORS.white : COLORS.gray,
										fontSize: 15,
										fontFamily: 'Nunito_400Regular',
									}}
								>
									Likes
								</Text>
							</View>
						</TouchableOpacity>
						<TouchableOpacity onPress={() => setcurrent_choice('Comments')}>
							<View
								style={{
									flexDirection: 'column',
									alignItems: 'center',
									padding: 15,
									borderBottomColor:
										current_choice === 'Comments'
											? COLORS.primary
											: COLORS.light_blue,
									borderBottomWidth: 1,
								}}
							>
								<Text
									style={{
										color:
											current_choice === 'Comments'
												? COLORS.white
												: COLORS.gray,
										fontSize: 16,
										fontFamily: 'Nunito_400Regular',
									}}
								>
									Comments
								</Text>
							</View>
						</TouchableOpacity>
					</View>
				</View>
				{current_choice === 'Likes' && <LikesList likes={likes} />}
				{current_choice === 'Comments' && (
					<View style={{ marginHorizontal: 15 }}>
						{add_comment_toggle && (
							<TouchableOpacity onPress={() => setadd_comment_toggle(false)}>
								<View
									style={{
										backgroundColor: COLORS.light_blue,
										padding: 10,
										borderRadius: 10,
										alignItems: 'center',
										width: width / 3,
										marginTop: 10,
									}}
								>
									<Text
										style={{
											color: COLORS.white,
											fontSize: 15,
											fontFamily: 'Nunito_600SemiBold',
											textTransform: 'capitalize',
										}}
									>
										Add Comment
									</Text>
								</View>
							</TouchableOpacity>
						)}
						{add_comment_toggle === false && (
							<>
								<View
									style={{
										flexDirection: 'row',
										justifyContent: 'space-between',
										alignItems: 'center',
									}}
								>
									<Text
										style={{
											color: COLORS.white,
											fontSize: 15,
											fontFamily: 'Nunito_600SemiBold',
											textTransform: 'capitalize',
											marginLeft: 5,
										}}
									>
										Add Comment
									</Text>
									<Entypo
										name='cross'
										onPress={() => setadd_comment_toggle(true)}
										size={21}
										style={{
											color: COLORS.white,
											marginRight: 10,
										}}
									/>
								</View>
								<TextInput
									placeholder='Enter Comment'
									multiline={true}
									numberOfLines={3}
									placeholderTextColor={COLORS.white}
									style={{
										borderRadius: 15,
										paddingLeft: 15,
										borderWidth: 2,
										borderColor: COLORS.light_blue,
										marginTop: 10,
										color: COLORS.white,
										fontSize: 15,
										fontFamily: 'Nunito_600SemiBold',
										textTransform: 'capitalize',
									}}
								/>
								<View
									style={{
										backgroundColor: COLORS.success,
										padding: 10,
										borderRadius: 10,
										alignItems: 'center',
										width: width / 4,
										marginTop: 10,
									}}
								>
									<Text
										style={{
											color: COLORS.dark_blue,
											fontSize: 15,
											fontFamily: 'Nunito_600SemiBold',
											textTransform: 'capitalize',
										}}
									>
										Comment
									</Text>
								</View>
							</>
						)}
						<CommentsList comments={comments} />
					</View>
				)}
			</ScrollView>
		</View>
	);
};

export default SinglePost;

const styles = StyleSheet.create({});
