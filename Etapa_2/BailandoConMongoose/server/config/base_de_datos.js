import { connect } from 'mongoose'
import dotenv from 'dotenv'

dotenv.config();

const BD = process.env.MONGO_URI;


const connectToDb = async ()=>{
    try{
        await connect(BD)
        console.log(`The DB is connected`)
    }catch(e){
        console.log(e)
    }
}

export default connectToDb;