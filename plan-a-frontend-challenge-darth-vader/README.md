Movie App
This is a movie app that connects to the TheMovieDB API to fetch movie data. Users can login and browse movies, see movie details, and add movies to their watchlist.

API Key
The provided API Key isn't giving access to the themoviedb database due to an network error (503). I have tried it from their platform, in the 'Try it out' tab and adding the API Key, and it doesn't work. That's why I decided to build the application with the Guest ID.

Login
The app uses the TheMovieDB API's guest session authentication to allow users to login. Due to issues with authentication using saved usernames and passwords, the guest session authentication method is used instead.

Installation
To run this project, follow these steps:

Clone this repository to your local machine.
"git clone https://github.com/<username>/movie-app.git"

Install the required packages.
"npm install"

Start the development server.
"npm start"

Usage
This project includes Jest tests for the components. To run the tests, use the following command:

"npm test"

Credits
Created by Diogo Trindade. Visit my LinkedIn page: https://www.linkedin.com/in/diogo-trindade-b274832a/