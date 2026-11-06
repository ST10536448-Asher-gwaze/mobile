import React from 'react';
import {
  View, Text, TextInput, Pressable, ScrollView, StyleSheet, Linking,
} from 'react-native';
import { colors } from '../theme';

export function Screen({ children }) {
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: colors.bg }}
      contentContainerStyle={styles.screen}
      keyboardShouldPersistTaps="handled"
    >
      {children}
    </ScrollView>
  );
}

export const H2 = ({ children, style }) => <Text style={[styles.h2, style]}>{children}</Text>;
export const H3 = ({ children, style }) => <Text style={[styles.h3, style]}>{children}</Text>;
export const P = ({ children, style }) => <Text style={[styles.p, style]}>{children}</Text>;

export function Button({ title, onPress, variant = 'primary' }) {
  const secondary = variant === 'secondary';
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      style={({ pressed }) => [
        styles.button,
        secondary && styles.buttonSecondary,
        pressed && { backgroundColor: colors.green },
      ]}
    >
      {({ pressed }) => (
        <Text style={[styles.buttonText, pressed && { color: colors.bg }]}>{title}</Text>
      )}
    </Pressable>
  );
}

export function Card({ children, onPress, style }) {
  const Wrapper = onPress ? Pressable : View;
  return (
    <Wrapper onPress={onPress} style={[styles.card, style]}>
      {children}
    </Wrapper>
  );
}

export function LinkText({ children, onPress }) {
  return (
    <Text style={styles.link} onPress={onPress}>
      {children}
    </Text>
  );
}

export function BulletList({ items }) {
  return (
    <View style={{ marginBottom: 10 }}>
      {items.map((item) => (
        <View key={item} style={styles.bulletRow}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.p}>{item}</Text>
        </View>
      ))}
    </View>
  );
}

export function Field({ label, error, multiline, ...props }) {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholderTextColor="#888"
        multiline={multiline}
        style={[
          styles.input,
          multiline && { height: 120, textAlignVertical: 'top' },
          !!error && { borderColor: colors.error, borderWidth: 2 },
        ]}
        {...props}
      />
      {!!error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

export function ChoiceField({ label, options, value, onChange }) {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.chips}>
        {options.map((o) => {
          const active = o.id === value;
          return (
            <Pressable
              key={o.id}
              onPress={() => onChange(o.id)}
              style={[styles.chip, active && styles.chipActive]}
            >
              <Text style={[styles.chipText, active && { color: colors.bg, fontWeight: 'bold' }]}>
                {o.label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

export const open = (url) => Linking.openURL(url).catch(() => {});

const styles = StyleSheet.create({
  screen: { padding: 20, paddingBottom: 40 },
  h2: { color: colors.purple, fontSize: 28, fontWeight: 'bold', marginBottom: 12 },
  h3: { color: colors.green, fontSize: 20, fontWeight: 'bold', marginBottom: 6 },
  p: { color: colors.text, fontSize: 16, lineHeight: 24, marginBottom: 8, flexShrink: 1 },
  button: {
    backgroundColor: colors.purple,
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 6,
    marginVertical: 6,
    alignItems: 'center',
  },
  buttonSecondary: { backgroundColor: '#2a2a2a', borderWidth: 1, borderColor: colors.purple },
  buttonText: { color: colors.text, fontSize: 16, fontWeight: '600' },
  card: {
    backgroundColor: colors.card,
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: 16,
  },
  link: { color: colors.green, fontSize: 16, marginTop: 4 },
  bulletRow: { flexDirection: 'row', gap: 8 },
  bullet: { color: colors.green, fontSize: 16, lineHeight: 24 },
  label: { color: colors.text, fontWeight: 'bold', marginTop: 16, marginBottom: 6 },
  input: {
    backgroundColor: '#fff',
    color: '#111',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#555',
    padding: 12,
    fontSize: 16,
  },
  error: { color: colors.error, marginTop: 4 },
  chips: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  chip: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.purple,
    backgroundColor: colors.card,
  },
  chipActive: { backgroundColor: colors.green, borderColor: colors.green },
  chipText: { color: colors.text },
});
