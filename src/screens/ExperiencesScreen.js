import React from 'react';
import { Screen, H2, H3, P, Card, LinkText } from '../components/ui';
import { experiences } from '../data';

export default function ExperiencesScreen({ navigation }) {
  return (
    <Screen>
      <H2>Gaming Experiences</H2>
      <P>Explore different ways to enjoy gaming at Next Level Gaming.</P>
      {experiences.map((e) => (
        <Card key={e.id} onPress={() => navigation.navigate('ExperienceDetail', { id: e.id })}>
          <H3>{e.name}</H3>
          <P>{e.short}</P>
          <LinkText>Learn More</LinkText>
        </Card>
      ))}
    </Screen>
  );
}
