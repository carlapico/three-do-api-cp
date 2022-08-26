import  { initializeApp, cert, getApps } from 'firebase-admin/app'
import { getFirestore } from "firebase-admin/firestore"
import { credentials } from '../credentials'

export default function dbConnect() {
    //returns an array of all the firebase service (e.g firestore) that we are connected to 
    if (!getApps().length) {
        // if not yet connects..
        initializeApp({
            credential: cert(credentials)
        })
    } 
    return getFirestore()
}