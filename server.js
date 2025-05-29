const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.get('/api/matches', async (req, res) => {
    try {
        const response = await axios.get('http://api.football-data.org/v4/competitions/CL/matches?status=SCHEDULED', {
            headers: {
                'X-Auth-Token': 'b2b808a72ac341d9b13588f0c5536b07'
            }
        });

        const matches = response.data.matches.map(match => ({
            matchId: match.id,
            homeTeam: match.homeTeam.name,
            awayTeam: match.awayTeam.name,
            date: match.utcDate,
            competition: response.data.competition.name
        }));

        res.json(matches.slice(0, 10));
    } catch (error) {
        console.error('Error fetching API data:', error.message);
        res.status(500).json({ error: 'Failed to fetch matches' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});