import { matches } from '../config/mongoCollection';
import { ObjectId } from 'mongodb';

export async function getMatches() {
    const matchCollection = await matches();
    const matchList = await matchCollection.find({}).toArray();
    return matchList;
}

export async function getMatch(id: string) {
    const matchCollection = await matches();
    const match = await matchCollection.findOne({ _id: new ObjectId(id) });
    if (match === null) throw 'Match not found';
    return match;
}

export async function addMatch(
    player1: string,
    player2: string,
    score: string,
    winner: string,
    currentOdds: number,
    potentialPayout: number
) {
    const matchCollection = await matches();
    const newMatch = {
        player1: player1,
        player2: player2,
        score: score,
        winner: winner,
        currentOdds: currentOdds,
        potentialPayout: potentialPayout
    };
    const insertInfo = await matchCollection.insertOne(newMatch);
    if (!insertInfo.insertedId) throw 'Could not add match';
    return newMatch;
}

export async function updateMatch(
    id: string,
    player1: string,
    player2: string,
    score: string,
    winner: string,
    currentOdds: number,
    potentialPayout: number
) {
    const matchCollection = await matches();
    const updatedMatch = {
        player1: player1,
        player2: player2,
        score: score,
        winner: winner,
        currentOdds: currentOdds,
        potentialPayout: potentialPayout
    };
    const updateInfo = await matchCollection.updateOne({ _id: new ObjectId(id) }, { $set: updatedMatch });
    if (!updateInfo.matchedCount && !updateInfo.modifiedCount) throw 'Update failed';
    return updatedMatch;
}

export async function deleteMatch(id: string) {
    const matchCollection = await matches();
    const deletionInfo = await matchCollection.deleteOne({ _id: new ObjectId(id) });
    if (!deletionInfo.deletedCount) throw 'Deletion failed';
    return true;
}

export async function getOdds(id: string) {
    const matchCollection = await matches();
    const match = await matchCollection.findOne({ _id: new ObjectId(id) });
    if (match === null) throw 'Match not found';
    return match.currentOdds;
}

export type Match = {
    id: string;
    player1: string;
    player2: string;
    score: string;
    winner: string;
    currentOdds: number;
    potentialPayout: number;
}