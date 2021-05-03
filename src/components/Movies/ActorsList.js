import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Chip from '../Chip';

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
});

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
          <Chip 
            value={actorName} 
          />
        )}
      />
    </View>
  );
};

export default ActorsList;
