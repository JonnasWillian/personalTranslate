import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface ErrorMessageProps {
  message: string | null;
  visible?: boolean;
}

export default function ErrorMessage({
  message,
  visible = true,
}: ErrorMessageProps) {
  if (!visible || !message) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffebee',
    borderRadius: 8,
    padding: 12,
    marginVertical: 12,
    width: '90%',
    borderLeftWidth: 5,
    borderLeftColor: '#c62828',
  },
  text: {
    color: '#b71c1c',
    fontSize: 15,
    lineHeight: 20,
  },
});