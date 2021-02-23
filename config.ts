import dotenv from 'dotenv';
import path from 'path';
const envPath = './.env';

const DB_USER='danielShely';
const DB_PASS='Maayan26';

dotenv.config({
    path: path.resolve(__dirname, envPath),
});

export default {
    DB_URL:`mongodb+srv://${DB_USER}:${DB_PASS}@appcluster-ztphv.mongodb.net/tinyUrl?retryWrites=true&w=majority`,

};
