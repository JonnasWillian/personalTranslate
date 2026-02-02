import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

interface AudioButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  color?: string;
  style?: object;
}

export default function AudioButton({
  title,
  onPress,
  disabled = false,
  color = '#007AFF',
  style,
}: AudioButtonProps) {
  return (
    <View style={[styles.container, style]}>
      <Button
        title={title}
        onPress={onPress}
        disabled={disabled}
        color={color}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
    width: '80%',
    maxWidth: 300,
  },
});