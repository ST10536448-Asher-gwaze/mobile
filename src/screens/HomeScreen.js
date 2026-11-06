import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Screen, H2, H3, P, Button, Card, LinkText } from '../components/ui';
import { colors } from '../theme';

export default function HomeScreen({ navigation }) {
  const go = (name, params) => navigation.navigate(name, params);
  return (
    <Screen>
      <View style={styles.hero}>
        <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
        <H2 style={{ color: '#fff', textAlign: 'center', fontSize: 30 }}>
          Take Your Gaming Experience to the Next Level
        </H2>
        <P style={{ textAlign: 'center' }}>
          Enjoy gaming, esports, tournaments and unforgettable experiences with friends at Next
          Level Gaming.
        </P>
        <Button title="View Packages" onPress={() => go('Packages')} />
        <Button title="Book Now" onPress={() => go('Booking')} />
      </View>

      <H2>What We Offer</H2>
      <Card onPress={() => go('Packages')}>
        <H3>Gaming Packages</H3>
        <P>Choose from different gaming packages for individuals, groups and special occasions.</P>
        <LinkText>View Packages</LinkText>
      </Card>
      <Card onPress={() => go('Experiences')}>
        <H3>Gaming Experiences</H3>
        <P>Enjoy competitive gaming, casual gaming and esports experiences.</P>
        <LinkText>View Experiences</LinkText>
      </Card>
      <Card onPress={() => go('Events')}>
        <H3>Events</H3>
        <P>Join tournaments, gaming events and special competitions.</P>
        <LinkText>View Events</LinkText>
      </Card>
    </Screen>
  );
}

const styles = StyleSheet.create({
  hero: {
    backgroundColor: colors.card,
    borderRadius: 10,
    padding: 24,
    marginBottom: 28,
    alignItems: 'stretch',
  },
  logo: { width: 110, height: 112, alignSelf: 'center', marginBottom: 16 },
});
