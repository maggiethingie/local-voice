# local-voice

## Table of Contents
- Description
- Installation
- Technologies Used
- Usage

## Description
- Local Voice is a location-based web app that connects users with issues in their area and connects them with representatives who can make a change.
- The app uses Auth0 to authenticate users and protect their privacy.
- The app displays local issues using both a map and feed view and allows users to view discussions around issues and comment.

## Installation
1. Fill in the example config with your Google Maps Javascript API Token and your Google Civic API Token
2. Configure the database index.js based on your MySQL user and password
3. install dependencies by running npm install
4. npm run webpack
5. npm start
6. experience the app at https://localhost:80

## Technologies Used
- Front End: ES6, React, CSS, Google Maps API, PropTypes, Babel, Webpack
- Back End: Nodejs, Express, Axios, MySQL
- Testing/Utilities: Jest/Enzyme, CircleCI, Git, Postman

## Usage

### Landing Page

### Map View
![map][map]

### List View
![list][list]

### Form
![form][form]

[map]: map.gif
[list]: list.gif
[form]: form.gif



