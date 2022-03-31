// import { Router } from 'express';
// import * as mysql from 'mysql';
const mysql = require('mysql');
// import { stringify } from 'uuid';
import chirps from "./chirpsdb";
// import db from './db';

export const Connection = mysql.createConnection({
    host:'localhost',
    port: 3306,
    user: 'chirprapp',
    password: 'chirps123',
    database:'chirpr'
});

export const Query = (query,values)=>{
return new Promise((resolve,reject)=>{
Connection.query(query,values,(err,results)=>{
    if(err) return reject(err);
     resolve (results);
    });
  });

};

export default {
chirps
}