import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const TransactionControls = ({ amount, setAmount, handleDeposit, handleWithdraw }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={amount}
        onChangeText={setAmount}
        placeholder="Digite o valor"
        keyboardType="numeric"
      />
      <Button title="Depositar" onPress={handleDeposit} />
      <Button title="Sacar" onPress={handleWithdraw} color="red" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default TransactionControls;
