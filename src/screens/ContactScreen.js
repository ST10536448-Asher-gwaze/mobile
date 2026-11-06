import React from 'react';
import { Screen, H2, H3, P, LinkText, Button, open } from '../components/ui';
import { contact } from '../data';

export default function ContactScreen({ navigation }) {
  return (
    <Screen>
      <H2>Contact Us</H2>
      <P>Have a question or need more information? Contact Next Level Gaming using the details below.</P>
      <H3>Address</H3>
      <P>{contact.address}</P>
      <H3>Phone</H3>
      <LinkText onPress={() => open(`tel:${contact.phone.replace(/\s/g, '')}`)}>{contact.phone}</LinkText>
      <H3 style={{ marginTop: 16 }}>Email</H3>
      <LinkText onPress={() => open(`mailto:${contact.email}`)}>{contact.email}</LinkText>
      <H3 style={{ marginTop: 16 }}>Opening Hours</H3>
      {contact.hours.map((h) => <P key={h}>{h}</P>)}
      <Button title="Request a Quote" onPress={() => navigation.navigate('Quote')} />
    </Screen>
  );
}
