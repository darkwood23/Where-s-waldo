#! /usr/bin/env node

// Get arguments passed on command line
const userArgs = process.argv.slice(2);

const Coordinate = require("./Coordinate.cjs");
const Leaderboard = require("./Leaderboard.cjs");

const coordinates = [];
const leaderboards = [];

const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const mongoDB = userArgs[0];

main().catch((err) => console.log(err));

async function main() {
  console.log("Debug: About to connect");
  await mongoose.connect(mongoDB);
  console.log("Debug: Should be connected?");
  await createCoordinates();
  await createLeaderboards();
  console.log("Debug: Closing mongoose");
  mongoose.connection.close();
}

async function coordinateCreate(index, character, left, right, bottom, top) {
  const coordinate = new Coordinate({ 
    character: character,
    left: left,
    right: right,
    bottom: bottom,
    top: top
  });
  await coordinate.save();
  coordinates[index] = coordinate;
  console.log(`Added coordinate: ${character}`);
}

async function leaderboardsCreate(index, username, seconds, minutes) {

  const leaderboard = new Leaderboard({
    username: username,
    seconds: seconds,
    minutes: minutes
  });

  await leaderboard.save();
  leaderboards[index] = leaderboard;
  console.log(`Added leaderboard: ${username}`);
}

async function createCoordinates() {
  console.log("Adding coordinates");
  await Promise.all([
    coordinateCreate(0, "Dave", 5, 7, 20, 5),
    coordinateCreate(1, "Tengry", 53, 27, 200, 52),
    coordinateCreate(2, "Hacker", 555, 17, 230, 53),
  ]);
}

async function createLeaderboards() {
  console.log("Adding leaderboards");
  await Promise.all([
    leaderboardsCreate(0, "Patrick", 40, 2),
    leaderboardsCreate(1, "Ben", 20, 1),
  ]);
}
