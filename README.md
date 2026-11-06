# Next Level Gaming – React Native app

A React Native (Expo) mobile app built from the Next Level Gaming website:
Home, About, Packages (+details), Experiences (+details), Events, Gallery,
Contact, Booking (+confirmation) and Request a Quote.

## Run it in Visual Studio Code
1. Install Node.js (LTS) from nodejs.org.
2. In VS Code: File > Open Folder > `NextLevelGaming`, then open the terminal (Ctrl+`).
3. Run:
   ```
   npm install
   npx expo install --fix
   npx expo start
   ```
4. Scan the QR code with the **Expo Go** app on your phone, or press `a` (Android emulator) / `w` (browser).

## Structure
- `App.js` – navigation (bottom tabs + stack)
- `src/data.js` – packages, experiences, events, contact details
- `src/screens/` – one file per page
- `src/components/ui.js` – shared buttons, cards, form fields
- `src/theme.js` – colours from the website (purple #7b2cff, green #39ff14)
