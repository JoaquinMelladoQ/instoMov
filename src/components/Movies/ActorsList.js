import React from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
})

const ActorsList = ({ actors }) => {
  return (
    <View>
      <FlatList 
        data={actors}
        style={styles.container}
        horizontal
        showsVerticalScrollIndicator={false}
        keyExtractor={actor => actor}
        renderItem={({ item: actorName }) => (
          <View>
            <Text>{actorName}</Text>
          </View>
        )}
      />
    </View>
  )
}

export default ActorsList 
