import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	Dimensions,
	FlatList,
} from 'react-native';
import COLORS from '../themes/theme';
const width = Dimensions.get('window').width;

const CommentsList = ({ comments }) => {
	return (
		<View style={{ marginTop: 10 }}>
			<FlatList
				data={comments}
				vertical
				renderItem={({ item, index }) => (
					<>
						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'space-between',
								alignItems: 'center',
								marginHorizontal: 10,
								padding: 6,
								marginBottom: 10,
							}}
							key={item.id}
						>
							<View style={{ flexDirection: 'row' }}>
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
								<View style={{ flexDirection: 'column' }}>
									<Text
										style={{
											color: COLORS.gray,
											fontSize: 14,
											fontFamily: 'Nunito_600SemiBold',
											textTransform: 'capitalize',
										}}
									>
										{item?.name}
									</Text>

									<Text
										style={{
											color: COLORS.white,
											width: width / 1.9,
											fontSize: 14,
											fontFamily: 'Nunito_600SemiBold',
											textTransform: 'capitalize',
										}}
									>
										{item?.comment}
									</Text>
								</View>
							</View>
							<Text
								style={{
									color: COLORS.gray,
									fontSize: 15,
									fontFamily: 'Nunito_400Regular',
									textTransform: 'capitalize',
								}}
							>
								{item?.time}
							</Text>
						</View>
					</>
				)}
				keyExtractor={(item) => item.id}
			/>
		</View>
	);
};

export default CommentsList;

const styles = StyleSheet.create({});
