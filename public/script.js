// Store active timezones
let activeTimezones = [
    'America/New_York',
    'Europe/London',
    'Asia/Tokyo',
    'Australia/Sydney'
];

// Get city names from timezone
const timezoneCities = {
    'America/New_York': 'New York',
    'America/Chicago': 'Chicago',
    'America/Denver': 'Denver',
    'America/Los_Angeles': 'Los Angeles',
    'America/Anchorage': 'Anchorage',
    'America/Toronto': 'Toronto',
    'America/Mexico_City': 'Mexico City',
    'America/Sao_Paulo': 'São Paulo',
    'America/Argentina/Buenos_Aires': 'Buenos Aires',
    'Europe/London': 'London',
    'Europe/Paris': 'Paris',
    'Europe/Berlin': 'Berlin',
    'Europe/Moscow': 'Moscow',
    'Africa/Cairo': 'Cairo',
    'Africa/Johannesburg': 'Johannesburg',
    'Asia/Dubai': 'Dubai',
    'Asia/Kolkata': 'India',
    'Asia/Bangkok': 'Bangkok',
    'Asia/Singapore': 'Singapore',
    'Asia/Hong_Kong': 'Hong Kong',
    'Asia/Tokyo': 'Tokyo',
    'Australia/Sydney': 'Sydney',
    'Pacific/Auckland': 'Auckland',
    'Pacific/Fiji': 'Fiji',
    'Pacific/Honolulu': 'Honolulu'
};

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    renderClocks();
    updateClocks();
    setInterval(updateClocks, 1000);

    // Handle timezone selection
    document.getElementById('timezoneSelect').addEventListener('change', (e) => {
        if (e.target.value) {
            addTimezone(e.target.value);
            e.target.value = '';
        }
    });

    // Handle search
    document.getElementById('searchInput').addEventListener('input', (e) => {
        filterClocks(e.target.value);
    });
});

function renderClocks() {
    const grid = document.getElementById('clocksGrid');
    grid.innerHTML = '';

    if (activeTimezones.length === 0) {
        grid.innerHTML = `
            <div class="empty-state">
                <h2>No timezones selected</h2>
                <p>Use the dropdown above to add timezones and start tracking time around the world!</p>
            </div>
        `;
        return;
    }

    activeTimezones.forEach(tz => {
        const card = createClockCard(tz);
        grid.appendChild(card);
    });
}

function createClockCard(timezone) {
    const card = document.createElement('div');
    card.className = 'clock-card';
    card.setAttribute('data-timezone', timezone);

    const cityName = timezoneCities[timezone] || timezone;
    const short = timezone.split('/')[1] || timezone;

    card.innerHTML = `
        <button class="remove-btn" onclick="removeTimezone('${timezone}')" title="Remove">×</button>
        <div class="timezone-name">${timezone}</div>
        <div class="city-name">${cityName}</div>
        <div class="digital-clock" id="clock-${timezone}">--:--:--</div>
        <div class="time-info">
            <div class="time-info-item">
                <div class="time-label">Date</div>
                <div class="time-value" id="date-${timezone}">--/--/----</div>
            </div>
            <div class="time-info-item">
                <div class="time-label">Day</div>
                <div class="time-value" id="day-${timezone}">---</div>
            </div>
        </div>
    `;

    return card;
}

function updateClocks() {
    const now = new Date();

    activeTimezones.forEach(tz => {
        const time = getTimeInTimezone(now, tz);
        updateClockDisplay(tz, time);
    });
}

function getTimeInTimezone(date, timezone) {
    try {
        const formatter = new Intl.DateTimeFormat('en-US', {
            timeZone: timezone,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            weekday: 'short'
        });

        const parts = formatter.formatToParts(date);
        const result = {};

        parts.forEach(part => {
            if (part.type !== 'literal') {
                result[part.type] = part.value;
            }
        });

        return {
            hour: result.hour,
            minute: result.minute,
            second: result.second,
            year: result.year,
            month: result.month,
            day: result.day,
            weekday: result.weekday
        };
    } catch (e) {
        console.error(`Error getting time for ${timezone}:`, e);
        return null;
    }
}

function updateClockDisplay(tz, time) {
    if (!time) return;

    const clockEl = document.getElementById(`clock-${tz}`);
    const dateEl = document.getElementById(`date-${tz}`);
    const dayEl = document.getElementById(`day-${tz}`);

    if (clockEl) {
        clockEl.textContent = `${time.hour}:${time.minute}:${time.second}`;
    }

    if (dateEl) {
        dateEl.textContent = `${time.month}/${time.day}/${time.year}`;
    }

    if (dayEl) {
        dayEl.textContent = time.weekday;
    }
}

function addTimezone(timezone) {
    if (!activeTimezones.includes(timezone)) {
        activeTimezones.push(timezone);
        activeTimezones.sort();
        renderClocks();
        updateClocks();
    }
}

function removeTimezone(timezone) {
    activeTimezones = activeTimezones.filter(tz => tz !== timezone);
    renderClocks();
}

function filterClocks(searchTerm) {
    const term = searchTerm.toLowerCase();
    const cards = document.querySelectorAll('.clock-card');

    cards.forEach(card => {
        const timezone = card.getAttribute('data-timezone').toLowerCase();
        const city = (timezoneCities[card.getAttribute('data-timezone')] || '').toLowerCase();

        if (timezone.includes(term) || city.includes(term)) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
}
