import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
	FlatList,
	SectionList,
} from 'react-native';
import COLORS from '../themes/theme';
import { AntDesign, Feather, Entypo } from '@expo/vector-icons';

const FeedList = ({ feed }) => {
	return (
		<View>
			<FlatList
				data={feed}
				renderItem={({ item }) => (
					<View
						style={{
							padding: 3,
							marginTop: 10,
							borderRadius: 15,
							padding: 10,
						}}
					>
						<View style={{ flexDirection: 'column' }}>
							<View
								style={{
									flexDirection: 'row',

									alignItems: 'center',
									justifyContent: 'space-between',
								}}
							>
								<View style={{ flexDirection: 'row' }}>
									<Image
										source={{
											uri: item.profile_image,
										}}
										style={{ height: 45, width: 45, borderRadius: 15 }}
									/>
									<View style={{ flexDirection: 'column', marginLeft: 10 }}>
										<Text
											style={{
												color: COLORS.white,
												fontSize: 17,
												fontFamily: 'Nunito_600SemiBold',
												textTransform: 'capitalize',
											}}
										>
											{item.name}
										</Text>
										<Text
											style={{
												color: COLORS.gray,
												fontSize: 13,
												fontFamily: 'Nunito_600SemiBold',
												textTransform: 'capitalize',
											}}
										>
											{item.location}
										</Text>
									</View>
								</View>
								<View>
									<Entypo
										name='dots-three-vertical'
										size={20}
										color='black'
										style={{ color: COLORS.white }}
									/>
								</View>
							</View>
							<Image
								source={{
									uri: item.image,
								}}
								style={{
									height: 250,
									borderRadius: 15,
									marginTop: 10,
									marginBottom: 5,
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
									<TouchableOpacity
										onPress={() =>
											navigation.navigate('Likes', { likes: likes })
										}
									>
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
									</TouchableOpacity>
									<Feather
										name='message-square'
										size={21}
										color='black'
										style={{
											color: COLORS.white,
											marginLeft: 15,
											marginTop: 10,
											marginBottom: 5,
										}}
									/>
									<TouchableOpacity
										onPress={() =>
											navigation.navigate('Comments', { comments: comments })
										}
									>
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
									</TouchableOpacity>
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
						</View>
					</View>
				)}
				keyExtractor={(item) => item.id}
			/>
		</View>
	);
};

export default FeedList;

const styles = StyleSheet.create({});
