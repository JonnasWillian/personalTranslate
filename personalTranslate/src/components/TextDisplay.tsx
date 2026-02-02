import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface TextDisplayProps {
  label: string;
  text: string;
  labelColor?: string;
  textColor?: string;
}

export default function TextDisplay({
  label,
  text,
  labelColor = '#333',
  textColor = '#555',
}: TextDisplayProps) {
  return (
    <View style={styles.container}>
      <Text style={[styles.label, { color: labelColor }]}>
        {label}
      </Text>
      <Text style={[styles.text, { color: textColor }]}>
        {text || '(nenhum texto ainda)'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    marginVertical: 12,
    padding: 12,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
  },
  text: {
    fontSize: 15,
    lineHeight: 22,
  },
});