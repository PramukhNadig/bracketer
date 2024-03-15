import { tournaments } from '../config/mongoCollection';
import { Match } from './match';
import { ObjectId } from 'mongodb';
/*  
schema:
{
  id: string;
  name: string;
  date: string;
  location: string;
  organizer: string;
  players: string[];
  matches: Match[];
}
*/

export async function getTournaments() {
    const tournamentCollection = await tournaments();
    const tournamentList = await tournamentCollection.find({}).toArray();
    return tournamentList;
}

export async function getTournament(id: string) {
  const tournamentCollection = await tournaments();
  const tournament = await tournamentCollection
    .findOne({ _id: new ObjectId(id) });
  if (tournament === null) throw 'Tournament not found';
  return tournament;
}

export async function addTournament(
  name: string,
  date: string,
  location: string,
  organizer: string,
  players: string[],
  matches: Match[]
) {
  const tournamentCollection = await tournaments();
  const newTournament = {
    name: name,
    date: date,
    location: location,
    organizer: organizer,
    players: players,
    matches: matches
  };
  const insertInfo = await tournamentCollection.insertOne(newTournament);
  if (!insertInfo.insertedId) throw 'Could not add tournament';
  return newTournament;
}
