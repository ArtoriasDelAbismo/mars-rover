import express from 'express';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
import cors from 'cors';


dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({ origin: 'http://localhost:5173' }))


app.get('/api/rover/:roverName', async (req, res) => {
    const { roverName } = req.params;
    try {
        const response = await fetch(`${process.env.BASE_URL}/${roverName}?api_key=${process.env.API_KEY}`);
        const data = await response.json(); 
        res.json({ rover: data.rover }); 
    } catch (error) {
        res.status(500).json({ error: 'Error fetching data' });
    }
});


app.get('/api/rover/:roverName/photos', async (req, res) => {
    const { roverName } = req.params;
    const { sol } = req.query;
    try {
        const response = await fetch(`${process.env.BASE_URL}/${roverName}/photos?sol=${sol}&api_key=${process.env.API_KEY}`)
        const data = await response.json()
        res.json({photos: data.photos})
        
    } catch (error) {
        res.status(500).json({error:'Error fetching data'})       
    }
})







app.listen(PORT, ()=> {
    console.log(`App listening at http://localhost:${process.env.PORT}`);
})
    

