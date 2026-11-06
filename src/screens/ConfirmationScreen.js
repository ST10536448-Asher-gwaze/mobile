import React from 'react';
import { View } from 'react-native';
import { Screen, H2, P, Button } from '../components/ui';
import { bookingPackages } from '../data';
import { colors } from '../theme';

export default function ConfirmationScreen({ route, navigation }) {
  const b = route.params?.booking;
  const pkg = bookingPackages.find((p) => p.id === b?.packageId)?.label;
  return (
    <Screen>
      <View style={{ backgroundColor: colors.card, padding: 30, borderRadius: 10, alignItems: 'center' }}>
        <H2 style={{ color: colors.green }}>Booking Confirmed</H2>
        <P style={{ textAlign: 'center' }}>Thank you for making a booking with Next Level Gaming.</P>
        <P style={{ textAlign: 'center' }}>Your booking request has been received.</P>
        {b && (
          <P style={{ textAlign: 'center', color: colors.muted }}>
            {pkg} · {b.players} player(s){'\n'}{b.date} at {b.time}
          </P>
        )}
        <P style={{ textAlign: 'center' }}>
          We will contact you using the details provided to confirm your booking.
        </P>
        <Button title="Return Home" onPress={() => navigation.popToTop()} />
      </View>
    </Screen>
  );
}
