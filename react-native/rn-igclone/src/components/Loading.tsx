import React from 'react';
import {ActivityIndicator, Modal, StyleSheet, Text, View} from 'react-native';

const Loading: React.FC<LoadingProps> = ({loading}): JSX.Element => {
	return (
		<Modal animationType='fade' visible={loading} onRequestClose={() => {}}>
      <View style={styles.container}>
        <View style={styles.loading}>
          <ActivityIndicator color='white' size='large' />
          <Text style={styles.text}>Please Wait</Text>
        </View>
      </View>
		</Modal>
	);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0003'
  },
  loading: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000a',
    padding: 20,
    borderRadius: 5,
  },
  text: {
    marginTop: 8,
    color: 'white'
  }
})

export default React.memo(Loading);
