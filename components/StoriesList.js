import React from 'react'
import { StyleSheet, Text, View, FlatList , Image } from 'react-native'

const StoriesList = ({stories}) => {
    return (
        <View>
            <FlatList
					data={stories}
					horizontal
					renderItem={({ item }) => (
						<View style={{ padding: 3, marginLeft: 10, marginRight: 5 }}>
							<Image
								source={{
									uri: item.image,
								}}
								style={{ height: 60, width: 60, borderRadius: 30 }}
							/>
						</View>
					)}
					keyExtractor={(item) => item.id}
				/>
        </View>
    )
}

export default StoriesList

const styles = StyleSheet.create({})
