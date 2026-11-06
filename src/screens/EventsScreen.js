import React from 'react';
import { Screen, H2, H3, P, Card, Button } from '../components/ui';
import { events } from '../data';

export default function EventsScreen({ navigation }) {
  return (
    <Screen>
      <H2>Gaming Events</H2>
      <P>Join upcoming gaming events and compete against other players.</P>
      {events.map((e) => (
        <Card key={e.id}>
          <H3>{e.name}</H3>
          <P>Date: {e.date}</P>
          <P>{e.description}</P>
          <Button title="Book Now" onPress={() => navigation.navigate('Booking')} />
        </Card>
      ))}
    </Screen>
  );
}
