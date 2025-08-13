import mongoose from "mongoose";

const uri = 'mongodb://localhost:27017/mongoose'

export async function main() {
    await mongoose.connect(uri)
    console.log('connected in db')
}

main().catch(e => console.log(e))



