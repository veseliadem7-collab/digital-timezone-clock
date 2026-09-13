# 🕐 Digital Timezone Clock

A beautiful, real-time digital clock that displays the current time in multiple time zones around the world.

## Features

✨ **Real-time Updates**
- Updates every second with precise time
- Live date and day information
- Beautiful animations

🌍 **Multiple Timezones**
- 25+ major timezones worldwide
- Add or remove timezones instantly
- Smooth grid layout

🔍 **Search Functionality**
- Search by city name or timezone
- Real-time filtering
- Easy discovery of timezones

📱 **Responsive Design**
- Works on desktop, tablet, and mobile
- Adaptive grid layout
- Touch-friendly interface

💎 **Beautiful UI**
- Gradient background
- Smooth animations
- Modern card design
- Hover effects

## Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd digital-timezone-clock

# Install dependencies
npm install

# Start the server
npm start
```

The app will run on `http://localhost:3001`

## Development

```bash
# Start with auto-reload
npm run dev
```

## Available Timezones

- 🇺🇸 New York (EST)
- 🇺🇸 Chicago (CST)
- 🇺🇸 Denver (MST)
- 🇺🇸 Los Angeles (PST)
- 🇺🇸 Anchorage (AKST)
- 🇭🇼 Honolulu (HST)
- 🇨🇦 Toronto (EST)
- 🇲🇽 Mexico City (CST)
- 🇧🇷 São Paulo (BRT)
- 🇦🇷 Buenos Aires (ART)
- 🇬🇧 London (GMT)
- 🇫🇷 Paris (CET)
- 🇩🇪 Berlin (CET)
- 🇷🇺 Moscow (MSK)
- 🇪🇬 Cairo (EET)
- 🇿🇦 Johannesburg (SAST)
- 🇦🇪 Dubai (GST)
- 🇮🇳 India (IST)
- 🇹🇭 Bangkok (ICT)
- 🇸🇬 Singapore (SGT)
- 🇭🇰 Hong Kong (HKT)
- 🇯🇵 Tokyo (JST)
- 🇦🇺 Sydney (AEDT)
- 🇳🇿 Auckland (NZDT)
- 🇫🇯 Fiji (FJT)

## How to Use

1. **View Default Timezones**: The app loads with 4 default timezones (New York, London, Tokyo, Sydney)

2. **Add Timezones**: Use the dropdown menu to select and add more timezones

3. **Search Timezones**: Type in the search box to filter timezones by city name or timezone

4. **Remove Timezones**: Hover over a clock card and click the × button to remove it

## API

The app provides a REST API:

```bash
# Get current time in all timezones
GET /api/time
```

Response:
```json
{
  "currentTime": "2024-01-15T12:30:45.123Z",
  "timezones": [
    {
      "timezone": "America/New_York",
      "timestamp": 1705329045123
    }
  ]
}
```

## Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Backend**: Node.js, Express.js
- **Timezone Handling**: JavaScript Intl API

## Browser Support

- Chrome 24+
- Firefox 29+
- Safari 10+
- Edge 12+
- Opera 11+

## Performance

- Lightweight (< 50KB total)
- No external dependencies for clock functionality
- Optimized rendering
- Smooth 60fps animations

## License

MIT

## Author

Created with ❤️

---

**Enjoy tracking time around the world!** 🌍🕐
