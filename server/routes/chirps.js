const express = require("express");
const router = express.Router();
import db from '../db';
// const db = require('../db');
// const chirpsStore = require("../chirpstore.js");
// no more chirpstore! install mysql from npm and configure the routes to use that instead of chirpstore.

// REST API

router.get('/', async (req,res)=>{
    try { 
      res.json(await db.chirps.all()) ; 
    } catch (error) {
        console.log(` error:${e}`);
        res.sendStatus(500);
    }
});
router.get("/:id?",async (req, res) => {
    const id = req.params.id;
    try {
        res.json(await db.chirps.one(id));
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }

});

// Create
router.post("/", async (req, res) => {
     const body = req.body;
    
    try {
        res.json(await db.chirps.insert(body.userid,body.content,body.location));
        // res.send("This was Successful");
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

// Delete
router.delete("/:id", async(req, res) => {
    const id = req.params.id;
    try {
        res.json(await db.chirps.remove(id));
        res.status(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

// Update
router.put("/:id", async(req, res) => {
    const id = req.params.id;
    const body = req.body;
    try {
        res.json(await db.chirps.update(id,body))
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(500); 
    }

    // chirpsStore.UpdateChirp(id, body);
    // res.sendStatus(200);
});


 export default router;

