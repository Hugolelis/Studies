import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017/testeMongo"

export const client = new MongoClient(uri)

async function run() {
    try {
        await client.connect()
        console.log('Connected in mongodb')
    } catch(e) {
        console.log(err)
    }
}

run()