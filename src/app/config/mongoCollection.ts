import { Collection, MongoClient } from 'mongodb';
import { dbConnection } from './mongoConnection';

const getCollectionFn = (collection: string): (() => Promise<Collection>) => {
    let _col: Collection | undefined;

    return async () => {
        if (!_col) {
            const db = await dbConnection();
            if (db) {
                _col = await db.collection(collection);
            } else { 
                throw new Error('Could not get collection');
            }
        }

        return _col;
    };
};

export const users = getCollectionFn("users");
