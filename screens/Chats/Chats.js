import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	FlatList,
	TouchableOpacity,
	Image,
} from 'react-native';
import { chats } from '../../data/chats';
import COLORS from '../../themes/theme';

const Chats = ({ navigation }) => {
	return (
		<View style={{ backgroundColor: COLORS.dark_blue, flex: 1 }}>
			<View style={{ marginTop: 0, marginBottom: 60 }}>
				<FlatList
					data={chats}
					renderItem={({ item }) => (
						<TouchableOpacity
							onPress={() => navigation.navigate('SingleChat', { item })}
						>
							<View
								style={{
									flexDirection: 'row',
									justifyContent: 'space-between',
									alignItems: 'center',
									padding: 10,
								}}
								key={item.id}
							>
								<View
									style={{
										flexDirection: 'row',
										alignItems: 'center',
									}}
								>
									<Image
										source={{ uri: item.profile_pic }}
										style={{ width: 50, height: 50, borderRadius: 15 }}
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
												fontSize: 17,
												fontFamily: 'Nunito_600SemiBold',
											}}
										>
											{item.name}
										</Text>
										<Text
											style={{
												color: COLORS.gray,
												fontSize: 13,
												fontFamily: 'Nunito_600SemiBold',
												width: 190,
											}}
											numberOfLines={1}
										>
											{item.message}
										</Text>
									</View>
								</View>
								<View
									style={{
										flexDirection: 'column',
										alignItems: 'flex-end',
									}}
								>
									{item.online ? (
										<View
											style={{
												width: 10,
												height: 10,
												backgroundColor: COLORS.success,
												borderRadius: 5,
												marginBottom: 5,
												marginRight: 4,
											}}
										></View>
									) : (
										<Text
											style={{
												color: COLORS.gray,
												fontSize: 12,
												fontFamily: 'Nunito_400Regular',
												marginBottom: 5,
											}}
										>
											{item.last_seen}
										</Text>
									)}
									<View
										style={{
											alignItems: 'center',
											justifyContent: 'center',
											backgroundColor: COLORS.primary,
											width: 18,
											height: 18,
											borderRadius: 5,
										}}
									>
										<Text
											style={{
												color: COLORS.white,
												fontSize: 10,
												fontFamily: 'Nunito_600SemiBold',
											}}
										>
											{item.new_messages}
										</Text>
									</View>
								</View>
							</View>
						</TouchableOpacity>
					)}
					keyExtractor={(item) => item.id}
				/>
			</View>
		</View>
	);
};

export default Chats;

const styles = StyleSheet.create({});
