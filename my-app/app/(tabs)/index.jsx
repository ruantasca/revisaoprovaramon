import React, { useState } from "react";
import { StyleSheet, View, Alert } from 'react-native';
import Balance from "../../components/Balance";
import TransactionControls from "../../components/TransactionControls";

export default function App() {
    const [balance, setBalance] = useState(7320.92);
    const [amount, setAmount] = useState('');
  
    const handleDeposit = () => {
      const depositAmount = parseFloat(amount);
      if (!isNaN(depositAmount) && depositAmount > 0) {
        const bonus = depositAmount * 0.01;
        setBalance(balance + depositAmount + bonus);
        setAmount('');
      } else {
        Alert.alert('Valor inválido', 'Por favor, insira um valor válido.');
      }
    };
  
    const handleWithdraw = () => {
      const withdrawAmount = parseFloat(amount);
      if (!isNaN(withdrawAmount) && withdrawAmount > 0 && withdrawAmount <= balance) {
        const penalty = balance * 0.025;
        setBalance(balance - withdrawAmount - penalty);
        setAmount('');
      } else {
        Alert.alert('Valor inválido', 'Por favor, insira um valor válido.');
      }
    };
  
    return (
      <View style={styles.container}>
        <Balance balance={balance} />
        <TransactionControls
          amount={amount}
          setAmount={setAmount}
          handleDeposit={handleDeposit}
          handleWithdraw={handleWithdraw}
        />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
  });