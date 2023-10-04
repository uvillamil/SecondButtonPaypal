import { config } from 'dotenv';
config();


export const PORT = 4000;
export const HOST = 'http://localhost:' + PORT;

export const API_CLIENT = process.env.API_CLIENT;
export const API_SECRET = process.env.API_SECRET;
export const API_PAYPAL = process.env.API_PAYPAL;