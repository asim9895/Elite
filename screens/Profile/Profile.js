import React, { useState } from 'react';
import {
	ScrollView,
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
} from 'react-native';
import { feed } from '../../data/feed';
import { profile } from '../../data/profile';
import { search_feed } from '../../data/search_feed';
import { stories } from '../../data/stories';
import COLORS from '../../themes/theme';
import MasonryList from '@react-native-seoul/masonry-list';
import { AntDesign } from '@expo/vector-icons';
import StoriesList from '../../components/StoriesList';

const Profile = ({ navigation }) => {
	const [current_choice, setcurrent_choice] = useState('Posts');
	const [images, setimages] = useState(search_feed);
	return (
		<View style={{ backgroundColor: COLORS.dark_blue, flex: 1 }}>
			<ScrollView
				style={{ marginBottom: 60 }}
				showsVerticalScrollIndicator={false}
			>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
						marginTop: 0,
						alignItems: 'center',
						padding: 5,
						marginHorizontal: 10,
					}}
				>
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<Image
							source={{ uri: profile.profile_pic }}
							style={{ width: 60, height: 60, borderRadius: 15 }}
						/>
						<View
							style={{
								flexDirection: 'column',
								marginLeft: 10,
							}}
						>
							<Text
								style={{
									color: COLORS.white,
									fontFamily: 'Nunito_600SemiBold',
									fontSize: 18,
									textTransform: 'capitalize',
								}}
							>
								{profile.name}
							</Text>
							<Text
								style={{
									color: COLORS.gray,
									fontFamily: 'Nunito_600SemiBold',
									fontSize: 14,
									textTransform: 'capitalize',
								}}
							>
								{profile.profession}
							</Text>
						</View>
					</View>
					<View
						style={{
							padding: 7,
							borderRadius: 7,
							backgroundColor: COLORS.light_blue,
							alignItems: 'center',
						}}
					>
						<AntDesign
							name='edit'
							size={22}
							onPress={() => navigation.navigate('Edit', { profile: profile })}
							style={{ color: COLORS.white }}
						/>
					</View>
				</View>

				<View>
					<Text
						style={{
							color: COLORS.white,
							fontFamily: 'Nunito_600SemiBold',
							fontSize: 16,
							marginTop: 10,
							marginHorizontal: 15,
						}}
						numberOfLines={2}
					>
						{profile.bio}
					</Text>

					<View
						style={{
							flexDirection: 'row',
							alignItems: 'center',
							marginHorizontal: 10,
						}}
					>
						<Text
							style={{
								color: COLORS.gray,
								fontFamily: 'Nunito_600SemiBold',
								fontSize: 16,
								marginTop: 10,
								marginLeft: 5,
							}}
							numberOfLines={2}
						>
							Account Balance:
						</Text>
						<Text
							style={{
								color: COLORS.white,
								fontFamily: 'Nunito_800ExtraBold',
								fontSize: 16,
								marginTop: 10,
								marginLeft: 5,
							}}
							numberOfLines={2}
						>
							1.231 Madusa
						</Text>
						<Text
							style={{
								color: COLORS.gray,
								fontFamily: 'Nunito_400Regular',
								fontSize: 11,
								marginTop: 10,
								marginLeft: 5,
							}}
							numberOfLines={2}
						>
							(2300$)
						</Text>
					</View>
				</View>

				<View
					style={{
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'space-between',
						marginTop: 15,
						borderRadius: 10,
						padding: 10,
						paddingHorizontal: 20,
						backgroundColor: COLORS.light_blue,
						borderRadius: 15,
						marginHorizontal: 10,
					}}
				>
					<View style={{ flexDirection: 'column', alignItems: 'center' }}>
						<Text
							style={{
								color: COLORS.white,
								fontSize: 15,
								fontFamily: 'Nunito_800ExtraBold',
							}}
						>
							{feed.length}
						</Text>
						<Text
							style={{
								color: COLORS.gray,
								fontSize: 15,
								fontFamily: 'Nunito_400Regular',
							}}
						>
							Posts
						</Text>
					</View>
					<View style={{ flexDirection: 'column', alignItems: 'center' }}>
						<Text
							style={{
								color: COLORS.white,
								fontSize: 15,
								fontFamily: 'Nunito_800ExtraBold',
							}}
						>
							{profile.followers}
						</Text>
						<Text
							style={{
								color: COLORS.gray,
								fontSize: 15,
								fontFamily: 'Nunito_400Regular',
							}}
						>
							Followers
						</Text>
					</View>
					<View style={{ flexDirection: 'column', alignItems: 'center' }}>
						<Text
							style={{
								color: COLORS.white,
								fontSize: 15,
								fontFamily: 'Nunito_800ExtraBold',
							}}
						>
							{profile.following}
						</Text>
						<Text
							style={{
								color: COLORS.gray,
								fontSize: 15,
								fontFamily: 'Nunito_400Regular',
							}}
						>
							Following
						</Text>
					</View>
				</View>
				<View style={{ marginTop: 10, marginBottom: -15 }}>
					<StoriesList stories={stories} />
				</View>
				<View
					style={{
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'space-between',
						marginTop: 0,
						borderRadius: 10,
						padding: 10,
						paddingHorizontal: 20,
					}}
				>
					<TouchableOpacity onPress={() => setcurrent_choice('Posts')}>
						<View
							style={{
								flexDirection: 'column',
								alignItems: 'center',
								padding: 16,
								borderBottomColor:
									current_choice === 'Posts'
										? COLORS.primary
										: COLORS.light_blue,
								borderBottomWidth: 1,
							}}
						>
							<Text
								style={{
									color:
										current_choice === 'Posts' ? COLORS.white : COLORS.gray,
									fontSize: 15,
									fontFamily: 'Nunito_400Regular',
								}}
							>
								Posts
							</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => setcurrent_choice('Reels')}>
						<View
							style={{
								flexDirection: 'column',
								alignItems: 'center',
								padding: 15,
								borderBottomColor:
									current_choice === 'Reels'
										? COLORS.primary
										: COLORS.light_blue,
								borderBottomWidth: 1,
							}}
						>
							<Text
								style={{
									color:
										current_choice === 'Reels' ? COLORS.white : COLORS.gray,
									fontSize: 16,
									fontFamily: 'Nunito_400Regular',
								}}
							>
								Reels
							</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => setcurrent_choice('Saved')}>
						<View
							style={{
								flexDirection: 'column',
								alignItems: 'center',
								padding: 15,
								borderBottomColor:
									current_choice === 'Saved'
										? COLORS.primary
										: COLORS.light_blue,
								borderBottomWidth: 1,
							}}
						>
							<Text
								style={{
									color:
										current_choice === 'Saved' ? COLORS.white : COLORS.gray,
									fontSize: 16,
									fontFamily: 'Nunito_400Regular',
								}}
							>
								Saved
							</Text>
						</View>
					</TouchableOpacity>
				</View>

				{current_choice === 'Posts' && (
					<MasonryList
						data={images}
						style={{ alignSelf: 'stretch', marginHorizontal: 7 }}
						keyExtractor={(item, index) => index.toString()}
						numColumns={3}
						showsVerticalScrollIndicator={false}
						renderItem={({ item }) => (
							<TouchableOpacity
								key={item.id}
								onPress={() => navigation.navigate('SinglePost', { item })}
							>
								<View>
									<Image
										source={{
											uri: item.image,
										}}
										style={{
											height: item.resize_number > 0 ? 150 : 180,
											borderRadius: 10,
											alignSelf: 'stretch',
											margin: 2,
										}}
										resizeMode='cover'
									/>
								</View>
							</TouchableOpacity>
						)}
					/>
				)}
			</ScrollView>
		</View>
	);
};

export default Profile;

const styles = StyleSheet.create({});
