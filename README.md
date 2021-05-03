# Local Voice: bringing local issues to the palm of your hand
![landingpage][landingpage]

## Table of Contents
- Description
- Installation
- Technologies Used
- Usage

## Description
- Local Voice is a location-based web app that connects users with concerns and issues in their neighborhood and connects them with representatives who can make a change.
- The app displays local issues using both a map and feed view and allows users to view discussions around issues and comment.

## Installation
1. Fill in the example config with your Google Maps Javascript API Token and your Google Civic API Token
2. Configure the database index.js based on your MySQL user and password
3. install dependencies by running npm install
4. npm run webpack
5. npm start

## Technologies Used
- Front End: ES6, React, CSS, Google Maps API, PropTypes, Babel, Webpack
- Back End: Nodejs, Express, Axios, MySQL
- Testing/Utilities: Jest/Enzyme, CircleCI, Git, Postman

## Usage

### Logging In
User logs in to see issues in their neighborhood.
![login][login]

### Map View
The user can open and view issues by clicking on the location markers.
![mapview][mapview]

### List View
The user can view and add to the discussion and filter issues by category.
![listview][listview]

### Form
The user can submit an issue by entering their address. A dropdown menu is then populated with their local representatives so that they can select one to notify. The user may upload a photo for the issue.
![form][form]

[landingpage]: landingpage.png
[login]: login.gif
[mapview]: mapview.gif
[listview]: listview.gif
[form]: form.gif

This application was created by Maggie Aytac, Sam Berston, Agustin Feliciano, Jeff Huang, Michelle Kang, Ankur Tandan, and Jack Zhen.


