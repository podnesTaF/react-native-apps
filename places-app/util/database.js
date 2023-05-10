import * as sqlite from 'expo-sqlite';
import {Place} from "../models/place";

const db = sqlite.openDatabase('places.db');


export const init = () => {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(`CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY NOT NULL,
            title TEXT NOT NULL,
            imageUri TEXT NOT NULL,
            address TEXT NOT NULL,
            lat REAL NOT NULL,
            lng REAL NOT NULL
        )`,
                [],
                () => resolve(),
                (_, err) => reject(err)
            )
        })
    })
}

export const insertPlace = ({title, imageUri, address, location}) => {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(`INSERT INTO places (title,  imageUri, address, lat, lng) VALUES (?, ?, ?, ?, ?)`,
                [title, imageUri, address, location.lat, location.lng],
                (_, result) => resolve(result),
                (_, err) => reject(err)
            )
        })
    })
}
export const fetchPlaces = () => {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(`SELECT * FROM places`,
                [],
                (_, result) => {
                    let res = []
                    for(let pl of result.rows._array) {
                        res.push(new Place(pl.id.toString(), pl.title, pl.imageUri, {address: pl.address, lat: pl.lat, lng: pl.lng}))

                    }
                    resolve(res)
                },
                (_, err) => reject(err)
            )
        })
    })
}

export const fetchPlace = (id) => {
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(`SELECT * FROM places WHERE id = ?`,
                [id],
                (_, result) => {
                    if(result.rows.length === 0) {
                        reject('No place found')
                        return
                    }
                    const pl = result.rows.item(0)
                    resolve(new Place(pl.id.toString(), pl.title, pl.imageUri, {address: pl.address, lat: pl.lat, lng: pl.lng}))
                },
                (_, err) => reject(err)
            )
        })
    })
}