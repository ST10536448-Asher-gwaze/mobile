import React from 'react';
import { Screen, H2, H3, P } from '../components/ui';

export default function AboutScreen() {
  return (
    <Screen>
      <H2>About Next Level Gaming</H2>
      <P>
        Next Level Gaming is a gaming and esports venue designed for casual gamers, competitive
        players, schools and corporate groups.
      </P>
      <P>
        Our goal is to create a fun and welcoming environment where people can enjoy the latest
        gaming technology and compete with their friends.
      </P>
      <H3 style={{ marginTop: 16 }}>Our Mission</H3>
      <P>
        Our mission is to provide an exciting gaming environment where gamers can connect, compete
        and enjoy new experiences.
      </P>
      <H3 style={{ marginTop: 16 }}>Our Vision</H3>
      <P>
        Our vision is to become a trusted gaming and esports destination for gamers and
        communities.
      </P>
    </Screen>
  );
}
