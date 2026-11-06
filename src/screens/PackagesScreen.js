import React from 'react';
import { Screen, H2, H3, P, Card, LinkText } from '../components/ui';
import { packages } from '../data';

export default function PackagesScreen({ navigation }) {
  return (
    <Screen>
      <H2>Gaming Packages</H2>
      <P>Choose a package that suits your gaming session.</P>
      {packages.map((p) => (
        <Card key={p.id} onPress={() => navigation.navigate('PackageDetails', { id: p.id })}>
          <H3>{p.name}</H3>
          <P>{p.short}</P>
          <P>Price: R{p.price}</P>
          <LinkText>View Details</LinkText>
        </Card>
      ))}
      <Card onPress={() => navigation.navigate('Quote')}>
        <H3>Groups, schools &amp; corporates?</H3>
        <P>Request a quote for a larger gaming event.</P>
        <LinkText>Request a Quote</LinkText>
      </Card>
    </Screen>
  );
}
