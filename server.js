import express from 'express';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(join(__dirname, 'public')));

// API route to get current time in all timezones
app.get('/api/time', (req, res) => {
  const now = new Date();
  const timezones = [
    'America/New_York',
    'America/Chicago',
    'America/Denver',
    'America/Los_Angeles',
    'Europe/London',
    'Europe/Paris',
    'Europe/Tokyo',
    'Asia/Dubai',
    'Asia/Bangkok',
    'Asia/Singapore',
    'Australia/Sydney',
    'Pacific/Auckland'
  ];

  const timeData = timezones.map(tz => ({
    timezone: tz,
    timestamp: now.getTime()
  }));

  res.json({
    currentTime: now.toISOString(),
    timezones: timeData
  });
});

// Serve index.html
app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🕐 Digital Timezone Clock running on http://localhost:${PORT}`);
  console.log(`📡 API available at http://localhost:${PORT}/api/time`);
});
