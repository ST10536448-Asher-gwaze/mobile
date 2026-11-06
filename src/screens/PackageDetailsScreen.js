import React from 'react';
import { Screen, H2, H3, P, Button, BulletList } from '../components/ui';
import { packages } from '../data';

export default function PackageDetailsScreen({ route, navigation }) {
  const pkg = packages.find((p) => p.id === route.params.id);
  return (
    <Screen>
      <H2>{pkg.name}</H2>
      <P>{pkg.description}</P>
      <H3>Package Includes</H3>
      <BulletList items={pkg.includes} />
      <H3>Price</H3>
      <P>R{pkg.price} per person</P>
      <Button title="Book This Package" onPress={() => navigation.navigate('Booking', { packageId: pkg.id })} />
      <Button title="Back to Packages" variant="secondary" onPress={() => navigation.goBack()} />
    </Screen>
  );
}
