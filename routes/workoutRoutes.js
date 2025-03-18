import express from 'express';
import Workout from '../Models/workout.js';

const router = express.Router()


//alle workouts
router.get('/api/', (req, res) => {
    res.json ({msg: "Welkom in de app"})
})

router.get('/api/:id', (req, res) => {
    res.json ({msg: "Welkom in de app"})
})

//workout toevoegen

router.post('/', async (req, res) => {
    const { title, load, reps } = req.body;
    try {
    const workout = await Workout.create({ title, reps, load });
    res.status(200).json(workout);
    } catch (error) {
    res.status(400).json({ error: error.message });
    }
    });

router.delete('/api/workout', (req, res) => {
    res.json ({msg: "Welkom in de app"})
})

router.patch('/api/workout', (req, res) => {
    res.json ({msg: "Welkom in de app"})
})


export default router;