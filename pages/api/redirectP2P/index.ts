import { IncomingMessage, ServerResponse } from "http";
import { FetchEvent } from "next/dist/server/web/spec-compliant/fetch-event";

const ObjP2p = {
    'buyer': {
        'name': 'Gregorio',
        'surname': 'Cormier',
        'email': 'dnetix@yopmail.com',
        'document': '1040035000',
        'documentType': 'CI',
        'mobile': 3006108300
    },
    'payment': {
        'reference': 'TEST_20220301_120419',
        'description': 'Aspernatur animi veritatis quas nulla magni deleniti.',
        'amount': {
            'currency': 'USD',
            'total': 150
        }
    },
    'expiration': '2022-03-02T12:04:19-05:00',
    'ipAddress': '181.132.206.170',
    'returnUrl': 'https://dnetix.co/p2p/client',
    'userAgent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36',
    'paymentMethod': ''
}



const create_p2p= async (request: IncomingMessage,respose : ServerResponse) => {

    const datap2p = await ObjP2p; 

    

    respose.statusCode = 200 
    respose.setHeader( 'Content-type','application/json')
    respose.end(JSON.stringify({data : datap2p }))
}

export default create_p2p;  