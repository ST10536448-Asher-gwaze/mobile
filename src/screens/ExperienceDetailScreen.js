import React from 'react';
import { Screen, H2, H3, P, Button, BulletList } from '../components/ui';
import { experiences } from '../data';

export default function ExperienceDetailScreen({ route, navigation }) {
  const exp = experiences.find((e) => e.id === route.params.id);
  return (
    <Screen>
      <H2>{exp.title}</H2>
      <P>{exp.description}</P>
      <H3>What You Can Expect</H3>
      <BulletList items={exp.expect} />
      <Button title="Book Experience" onPress={() => navigation.navigate('Booking')} />
      <Button title="Back to Experiences" variant="secondary" onPress={() => navigation.goBack()} />
    </Screen>
  );
}
