# SearchMovie

## Overview

SearchMovie is a web application allows users to search for movies, view detailed information, and manage their favorite films and watchlists. 

## Objectives
- Allow users to mark movies as favorites or add them to a watchlist for future viewing. 
- Provide a responsive and visually appealing interface for navigation across devices. 
- Display search statistics, such as the number of results and search time, to enhance user experience.
- Handle errors gracefully and provide suggestions when no results are found.
  
## Tools and Technologies
- Visual Studio Code 
- Node.js (for running the React development server) 
- React Developer Tools (for debugging) 
- Browser Developer Tools (for testing responsiveness)
## Language
- JavaScript (React)
- HTML/CSS (with Tailwind CSS)
## List of App Features
| Feature                | Description |
|------------------------|-------------|
| **Movie Search** | Search for movies by title, genre, or director using the OMDB API. |
| **Responsive UI**     | Fully responsive design with a modern header, search bar, and movie grid for desktop and mobile. |
| **Favorites & Watchlist**          | Mark movies as favorites or add to a watchlist with persistent state management. |
| **Search Statistics**   | Display the number of results and search time after each query. |
## Instructions
- Enter a movie title, genre, or director in the search bar and press Enter to search. 
- Click the heart icon to toggle a movie as a favorite. 
- Click the bookmark icon to add/remove a movie from the watchlist. 
- Use the navigation buttons (Home, Trending, Favorites, Watchlist) to explore different sections. 
- On mobile, toggle the menu to access navigation options. 
- Scroll to the top using the floating button in the bottom-right corner.
## Project Setup
1. Install Node.js
- Download and install Node.js (version 16 or higher) from nodejs.org.
2. Clone, fork, or download the project
- Open Command Prompt or Terminal.
```
  git clone https://github.com/phongthanh1412/Movie-search.git
```
- Navigate to the project directory:
```
  cd movie-search
```
3. Install dependencies
```
   npm install
```
## Run the Application
1. Navigate to the project directory
  ```
    cd movie-search
  ```
2. Run
  ```
    npm start
  ```
- The app will open in your default browser at `http://localhost:3000`

## Appendix
### Dependencies
- `React`: JavaScript library for building the user interface.
- `tailwindcss`: Utility-first CSS framework for styling the application.
### References
- https://tailwindcss.com/docs/installation/using-vite
- https://create-react-app.dev/docs/getting-started/
- https://www.omdbapi.com/

