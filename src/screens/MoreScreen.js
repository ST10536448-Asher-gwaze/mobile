import React from 'react';
import { Screen, H2, H3, P, Card, LinkText } from '../components/ui';

const items = [
  ['About', 'About Us', 'Who we are, our mission and vision.'],
  ['Gallery', 'Gallery', 'Photos from our gaming venue.'],
  ['Contact', 'Contact', 'Address, phone, email and opening hours.'],
  ['Quote', 'Request a Quote', 'Groups, schools and corporate events.'],
  ['Booking', 'Make a Booking', 'Reserve your gaming session.'],
];

export default function MoreScreen({ navigation }) {
  return (
    <Screen>
      <H2>More</H2>
      {items.map(([route, title, text]) => (
        <Card key={route} onPress={() => navigation.navigate(route)}>
          <H3>{title}</H3>
          <P>{text}</P>
          <LinkText>Open</LinkText>
        </Card>
      ))}
    </Screen>
  );
}
