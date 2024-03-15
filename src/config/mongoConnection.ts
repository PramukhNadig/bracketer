import { MongoClient, Db, MongoClientOptions } from 'mongodb';

const mongoConfig = {
    serverUrl: process.env.MONGO_SERVER_URL || "mongodb://localhost:27017/",
    database: process.env.MONGO_SERVER_DB || "bracketer",
};

let _connection: MongoClient | undefined;
let _db: Db | undefined;

export const dbConnection = async () => {
    if (!_connection) {
        _connection = await MongoClient.connect(mongoConfig.serverUrl);
        _db = _connection.db(mongoConfig.database);
    }
    return _db;
};

export const closeConnection = () => {
    _connection?.close();
};

export const config = mongoConfig;