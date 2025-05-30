### SportsOrca Matches

A web app displaying upcoming UEFA Champions League soccer matches, built for the SportsOrca Full Stack Development Internship task using the Football-Data.org API.
Features
###
Shows upcoming matches with team names and dates.
"Notify Me" button for match alerts.
Add or remove matches to a watchlist.
Mark favorite matches with a star (★/☆).
Fixed header with Home, Watchlist, and About links.
Saves watchlist and favorites in browser storage.
Caches API data to avoid rate limits.

### Setup

Clone the repository:
```
git clone https://github.com/SatyaPujith/SportsOrca-Matches.git
cd SportsOrca-Matches
```

Install dependencies:
```
npm install
```

Start the server:
```
npm start
```

View the app:
```
Install live-server:npm install -g live-server
Run:live-server
```
Open http://localhost:8080 in a browser.



### API

Source: Football-Data.org
Endpoint: /v4/competitions/CL/matches?status=SCHEDULED
API Key: Included in server.js (replace for production).

### Author
SATYA PUJITH 
GitHub: SatyaPujith

