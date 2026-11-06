import React, { useState } from 'react';
import { View } from 'react-native';
import { Screen, H2, H3, P, Button, Field, ChoiceField } from '../components/ui';
import { eventTypes } from '../data';
import { colors } from '../theme';

export default function QuoteScreen({ navigation }) {
  const [f, setF] = useState({
    name: '', email: '', phone: '', people: '', eventType: 'school', message: '',
  });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const set = (k) => (v) => setF((p) => ({ ...p, [k]: v }));

  const submit = () => {
    const e = {};
    if (!f.name.trim()) e.name = 'Full name is required.';
    if (!/^\S+@\S+\.\S+$/.test(f.email.trim())) e.email = 'Enter a valid email address.';
    if (!(parseInt(f.people, 10) >= 1)) e.people = 'Enter at least 1 person.';
    setErrors(e);
    if (Object.keys(e).length === 0) setSent(true);
  };

  if (sent) {
    return (
      <Screen>
        <View style={{ backgroundColor: colors.card, padding: 30, borderRadius: 10, alignItems: 'center' }}>
          <H2 style={{ color: colors.green }}>Quote Requested</H2>
          <P style={{ textAlign: 'center' }}>
            Thank you, {f.name.trim()}. We will contact you using the details provided.
          </P>
          <Button title="Return Home" onPress={() => navigation.popToTop()} />
        </View>
      </Screen>
    );
  }

  return (
    <Screen>
      <H2>Request a Quote</H2>
      <P>Complete the form below if you would like a quote for a group, school or corporate gaming event.</P>
      <View style={{ backgroundColor: colors.card, padding: 20, borderRadius: 10 }}>
        <Field label="Full Name" value={f.name} onChangeText={set('name')} error={errors.name} />
        <Field label="Email Address" value={f.email} onChangeText={set('email')} error={errors.email}
          keyboardType="email-address" autoCapitalize="none" />
        <Field label="Phone Number" value={f.phone} onChangeText={set('phone')} keyboardType="phone-pad" />
        <Field label="Number of People" value={f.people} onChangeText={set('people')} error={errors.people}
          keyboardType="number-pad" />
        <ChoiceField label="Type of Event" options={eventTypes} value={f.eventType} onChange={set('eventType')} />
        <Field label="Additional Information" value={f.message} onChangeText={set('message')} multiline />
        <View style={{ height: 12 }} />
        <Button title="Request Quote" onPress={submit} />
      </View>
    </Screen>
  );
}
