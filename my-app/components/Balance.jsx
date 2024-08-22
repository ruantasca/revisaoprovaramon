import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Balance = ({ balance }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://th.bing.com/th/id/R.41da709fa917a52376956a3a58b279e8?rik=NSAn2lBwd9I3ig&pid=ImgRaw&r=0' }}
        style={styles.image}
      />
      <Text style={styles.label}>Saldo Atual:</Text>
      <Text style={styles.balance}>R$ {balance.toFixed(2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    alignItems: 'center',
  },
  image: {
    width: 300, 
    height: 300, 
    marginBottom: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  balance: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'green',
  },
});

export default Balance;
