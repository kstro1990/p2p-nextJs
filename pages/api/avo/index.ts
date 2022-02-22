import { IncomingMessage, ServerResponse } from "http";
import DB from "database/db";


const allAvos = async (request: IncomingMessage,respose : ServerResponse) => {

    const db = new DB()
    const allEntries = await db.getAll()

    const length = allEntries.length

    respose.statusCode = 200 
    respose.setHeader( 'Content-type','application/json')
    respose.end(JSON.stringify({data : allEntries,length }))
}

export default allAvos