import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();

export const getRandomNumber = functions.https.onRequest((request, response) => {
    const randomNumber = Math.floor(Math.random() * 100);
    response.json({ number: randomNumber });
});
