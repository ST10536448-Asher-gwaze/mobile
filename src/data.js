// Content taken from the Next Level Gaming website.
export const packages = [
  {
    id: 'starter',
    name: 'Starter Package',
    price: 100,
    short: 'Perfect for a short gaming session.',
    description: 'The Starter Package is perfect for a short gaming session.',
    includes: ['Gaming station', 'Headset', 'Controller', 'Short gaming session'],
  },
  {
    id: 'gamer',
    name: 'Gamer Package',
    price: 180,
    short: 'Ideal for gamers who want more playing time.',
    description:
      'The Gamer Package is suitable for players who want to spend more time gaming with friends.',
    includes: [
      'Gaming station',
      'Headset',
      'Controller',
      'Gaming session',
      'Access to selected games',
    ],
  },
  {
    id: 'pro',
    name: 'Pro Package',
    price: 250,
    short: 'Designed for competitive gaming sessions.',
    description: 'The Pro Package is designed for competitive gaming sessions.',
    includes: [
      'Gaming station',
      'Headset',
      'Controller',
      'Extended gaming session',
      'Access to selected games',
    ],
  },
];

// Booking form also offers a Group Package (no price on the website).
export const bookingPackages = [
  ...packages.map((p) => ({ id: p.id, label: p.name })),
  { id: 'group', label: 'Group Package' },
];

export const experiences = [
  {
    id: 'competitive',
    name: 'Competitive Gaming',
    short: 'Test your skills against other players in competitive games.',
    title: 'Competitive Gaming Experience',
    description:
      'Our competitive gaming experience allows players to challenge their friends and other gamers.',
    expect: [
      'Competitive matches',
      'Gaming stations',
      'Headsets and controllers',
      'Leaderboards',
      'Friendly competition',
    ],
  },
  {
    id: 'casual',
    name: 'Casual Gaming',
    short: 'Relax and enjoy your favourite games with friends.',
    title: 'Casual Gaming Experience',
    description: 'Relax and enjoy your favourite games with friends at Next Level Gaming.',
    expect: ['Gaming stations', 'Headsets and controllers', 'Relaxed atmosphere', 'Great games'],
  },
  {
    id: 'esports',
    name: 'Esports',
    short: 'Take part in esports activities and tournaments.',
    title: 'Esports Experience',
    description: 'Take part in esports activities and tournaments at Next Level Gaming.',
    expect: ['Esports activities', 'Tournaments', 'Gaming stations', 'Leaderboards'],
  },
];

export const events = [
  {
    id: 'weekend',
    name: 'Weekend Tournament',
    date: '10 October 2026',
    description: 'Compete against other gamers in a weekend tournament.',
  },
  {
    id: 'esports',
    name: 'Esports Challenge',
    date: '24 October 2026',
    description: 'Test your skills in our esports challenge.',
  },
  {
    id: 'community',
    name: 'Community Gaming Day',
    date: '7 November 2026',
    description: 'A fun gaming day for the local gaming community.',
  },
];

export const gallery = [
  { id: 1, src: require('../assets/images/gaming1.jpg'), caption: 'Gaming Station' },
  { id: 2, src: require('../assets/images/gaming2.jpg'), caption: 'Esports Gaming' },
  { id: 3, src: require('../assets/images/gaming3.jpg'), caption: 'Gaming Tournament' },
  { id: 4, src: require('../assets/images/gaming4.jpg'), caption: 'Gaming Event' },
  { id: 5, src: require('../assets/images/gaming5.jpg'), caption: 'Group Gaming' },
  { id: 6, src: require('../assets/images/gaming6.jpg'), caption: 'Gaming Setup' },
];

export const eventTypes = [
  { id: 'school', label: 'School Event' },
  { id: 'corporate', label: 'Corporate Event' },
  { id: 'birthday', label: 'Birthday' },
  { id: 'gaming', label: 'Gaming Event' },
  { id: 'other', label: 'Other' },
];

export const contact = {
  address: 'Next Level Gaming Arena',
  phone: '012 345 6789',
  email: 'info@nextlevelgaming.co.za',
  hours: ['Monday - Friday: 10:00 - 22:00', 'Saturday - Sunday: 09:00 - 23:00'],
};
