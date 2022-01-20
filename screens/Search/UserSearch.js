import React, { useState, useEffect } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
	ScrollView,
} from 'react-native';
import COLORS from '../../themes/theme';
import { AntDesign } from '@expo/vector-icons';
import { userTabs } from '../../data/userTabs';
import { likes } from '../../data/likes';
import LikesList from '../../components/LikesList';

const UserSearch = ({ navigation }) => {
	const [current_choice, setcurrent_choice] = useState('Top');
	return (
		<View style={{ backgroundColor: COLORS.dark_blue, flex: 1 }}>
			<View
				style={{
					borderWidth: 1,
					borderColor: 'rgba(0,0,0,0.2)',
					position: 'absolute',
					top: 0,
					width: '100%',
					height: 140,
					zIndex: 1,
					flexDirection: 'column',
					backgroundColor: COLORS.dark_blue,
					paddingTop: 40,
					paddingBottom: 7,
				}}
			>
				<View
					style={{
						flexDirection: 'row',
						alignItems: 'center',
						marginHorizontal: 10,
					}}
				>
					<AntDesign
						name='arrowleft'
						size={22}
						onPress={() => navigation.goBack()}
						style={{ color: COLORS.white, marginRight: 15, marginLeft: 5 }}
					/>
					<View
						style={{
							backgroundColor: COLORS.light_blue,
							width: '85%',
							padding: 10,
							borderRadius: 15,
						}}
					>
						<TextInput
							placeholder='Search User'
							placeholderTextColor={COLORS.white}
							autoFocus={true}
							style={{
								marginLeft: 5,
								fontSize: 15,
								color: COLORS.white,
								marginRight: 5,
								fontFamily: 'Nunito_600SemiBold',
								textTransform: 'capitalize',
							}}
						/>
					</View>
				</View>
				<View
					style={{
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'space-evenly',
						marginTop: -7,
						borderRadius: 10,
						padding: 10,
						paddingHorizontal: 0,
					}}
				>
					{userTabs.map((i) => {
						return (
							<View key={i.id}>
								<TouchableOpacity onPress={() => setcurrent_choice(i.title)}>
									<View
										style={{
											flexDirection: 'column',
											alignItems: 'center',
											paddingTop: 10,
											paddingBottom: 7,
											borderBottomColor:
												current_choice === i.title
													? COLORS.primary
													: COLORS.light_blue,
											borderBottomWidth: 1,
										}}
									>
										<Text
											style={{
												color:
													current_choice === i.title
														? COLORS.white
														: COLORS.gray,
												fontSize: 15,
												fontFamily: 'Nunito_400Regular',
											}}
										>
											{i.title}
										</Text>
									</View>
								</TouchableOpacity>
							</View>
						);
					})}
				</View>
			</View>
			<ScrollView>
				<View style={{ marginTop: 150, marginBottom: 20 }}>
					<Text
						style={{
							color: COLORS.gray,
							fontSize: 15,
							marginHorizontal: 15,
							marginBottom: 10,
						}}
					>
						Suggestions
					</Text>
					{current_choice === 'Top' && <LikesList likes={likes} />}
				</View>
			</ScrollView>
		</View>
	);
};

export default UserSearch;

const styles = StyleSheet.create({});
