# React FM

This is a project that utilizes the LastFM and YouTube API to send back information on the artist you're interested in, as well as suggesting to you artists that play similar music. Written in React, Redux, and TypeScript.

## Getting Started

Create a .env file in the root directory and add two environment variables for the LastFM and YouTube API.
Aftwards, just run

```
yarn install && yarn start
```

Or alternatively,

```
npm i && npm start
```

## Known Issues

1. The artist images from the LastFM API are just stars now due to LastFM revoking that data from their API endpoints
