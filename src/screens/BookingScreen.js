import React, { useState } from 'react';
import { View } from 'react-native';
import { Screen, H2, Button, Field, ChoiceField } from '../components/ui';
import { bookingPackages } from '../data';
import { colors } from '../theme';

const emailOk = (v) => /^\S+@\S+\.\S+$/.test(v.trim());
const dateOk = (v) => /^\d{4}-\d{2}-\d{2}$/.test(v.trim()) && !isNaN(Date.parse(v.trim()));
const timeOk = (v) => /^([01]\d|2[0-3]):[0-5]\d$/.test(v.trim());

export default function BookingScreen({ route, navigation }) {
  const [f, setF] = useState({
    name: '', email: '', date: '', time: '',
    packageId: route.params?.packageId || 'starter',
    players: '', notes: '',
  });
  const [errors, setErrors] = useState({});
  const set = (k) => (v) => setF((p) => ({ ...p, [k]: v }));

  const submit = () => {
    const e = {};
    if (!f.name.trim()) e.name = 'Full name is required.';
    if (!emailOk(f.email)) e.email = 'Enter a valid email address.';
    if (!dateOk(f.date)) e.date = 'Use the format YYYY-MM-DD.';
    if (!timeOk(f.time)) e.time = 'Use the 24-hour format HH:MM.';
    if (!(parseInt(f.players, 10) >= 1)) e.players = 'Enter at least 1 player.';
    setErrors(e);
    if (Object.keys(e).length === 0) {
      navigation.replace('Confirmation', { booking: f });
    }
  };

  return (
    <Screen>
      <H2>Make a Booking</H2>
      <View style={{ backgroundColor: colors.card, padding: 20, borderRadius: 10 }}>
        <Field label="Full Name" value={f.name} onChangeText={set('name')} error={errors.name} />
        <Field label="Email Address" value={f.email} onChangeText={set('email')} error={errors.email}
          keyboardType="email-address" autoCapitalize="none" />
        <Field label="Booking Date" value={f.date} onChangeText={set('date')} error={errors.date}
          placeholder="YYYY-MM-DD" keyboardType="numbers-and-punctuation" />
        <Field label="Booking Time" value={f.time} onChangeText={set('time')} error={errors.time}
          placeholder="HH:MM" keyboardType="numbers-and-punctuation" />
        <ChoiceField label="Choose Package" options={bookingPackages} value={f.packageId} onChange={set('packageId')} />
        <Field label="Number of Players" value={f.players} onChangeText={set('players')} error={errors.players}
          keyboardType="number-pad" />
        <Field label="Additional Notes" value={f.notes} onChangeText={set('notes')} multiline />
        <View style={{ height: 12 }} />
        <Button title="Submit Booking" onPress={submit} />
      </View>
    </Screen>
  );
}
