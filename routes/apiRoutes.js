//these two routes name every route we could visit

//requiring file from models (representation of database.
const Workout = require ("../models/workout.js");

//exporting a function that has routes
module.exports = function (app) {
    //cRud -> read -> find workouts give back
    app.get("/api/workouts", (req, res) => {
        Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        }) 
        .catch(err => {
            res.status (400).json(err);
        });
    });     
            
    //Crud -> Create -> making a new workout
    app.post('/api/workouts', (req, res) => {
        Workout.create ({})
        .then(dbWorkout => {
            res.json(dbWorkout)
        })
        .catch((err) => {
            res.status(400).json(err)
        })
    });

    //put is update from crUd
    app.put('/api/workouts/:id', (req, res) => {
        console.log(req.body);
        Workout.findByIdAndUpdate(req.params.id, {$push: {exercises: req.body}})
            .then(dbWorkout => {
            res.json(dbWorkout)
            })
            .catch((err) => {
                res.status (400).json(err)
            })
    });

    //get is read
    app.get("/api/workouts/range", (req, res) => {
        Workout.find({})
         .then(dbWorkout => {
            res.json(dbWorkout);
         })
         .catch(err=> {
            res.status(400).json(err);
        });
    });
}; 

