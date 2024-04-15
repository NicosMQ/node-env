require('dotenv').config()

const name = process.env.MON_NOM;
const city = process.env.MA_VILLE;
const language = process.env.MON_LANGAGE;


console.log(`I am ${name}, wilder in ${city}, and I love ${language}`)