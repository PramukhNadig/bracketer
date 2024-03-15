import { } from 'mongodb'
import { compare, genSalt, hash } from 'bcrypt'
import { users } from '../config/mongoCollection';
import { } from 'mongoose';
import { cp } from 'fs';


export async function createLogin(username: string, password: string) {
    const salt = await genSalt(10)
    password = await hash(password, salt).then(response => {
        if (response === undefined || response === null) {
            throw new Error("");
        } else {
            return response;
        }
    });
    const newUser = {
        username: username,
        password: password,
        admin: false
    }
    const userCollection = await users();
    const insertInfo = await userCollection.insertOne(newUser);
    if (!insertInfo.insertedId) throw 'Could not add user';
    return newUser;
}

export async function login(username: string, password: string) {
    const userCollection = await users();
    const user = await userCollection.findOne({ username: username });
    if (user === null) throw 'User not found';
    if (await compare(password, user.password)) {
        return user;
    } else {
        throw 'Password incorrect';
    }
}


