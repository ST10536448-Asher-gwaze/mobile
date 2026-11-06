import React, { useState } from 'react';
import { View, Image, Pressable, Modal, Text, StyleSheet } from 'react-native';
import { Screen, H2, P } from '../components/ui';
import { gallery } from '../data';
import { colors } from '../theme';

export default function GalleryScreen() {
  const [selected, setSelected] = useState(null);
  return (
    <Screen>
      <H2>Gallery</H2>
      <P>Take a look at some of the gaming experiences available at Next Level Gaming.</P>
      {gallery.map((g) => (
        <Pressable key={g.id} style={styles.figure} onPress={() => setSelected(g)}>
          <Image source={g.src} style={styles.img} />
          <Text style={styles.caption}>{g.caption}</Text>
        </Pressable>
      ))}
      <Modal visible={!!selected} transparent animationType="fade" onRequestClose={() => setSelected(null)}>
        <Pressable style={styles.backdrop} onPress={() => setSelected(null)}>
          {selected && (
            <View style={{ width: '100%' }}>
              <Image source={selected.src} style={styles.full} resizeMode="contain" />
              <Text style={[styles.caption, { fontSize: 18 }]}>{selected.caption}</Text>
              <Text style={styles.hint}>Tap anywhere to close</Text>
            </View>
          )}
        </Pressable>
      </Modal>
    </Screen>
  );
}

const styles = StyleSheet.create({
  figure: { backgroundColor: colors.card, padding: 10, borderRadius: 8, marginBottom: 16 },
  img: { width: '100%', height: 200, borderRadius: 5 },
  caption: { color: '#fff', textAlign: 'center', fontWeight: 'bold', padding: 10 },
  backdrop: { flex: 1, backgroundColor: 'rgba(0,0,0,0.92)', justifyContent: 'center', padding: 16 },
  full: { width: '100%', height: 400 },
  hint: { color: colors.muted, textAlign: 'center' },
});
