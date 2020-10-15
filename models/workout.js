//defining what our data looks like
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//storing state of data

const workoutSchema = new Schema ({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [{
        type: {
            type: String,
            trim: true,
            required: 'field cannot be blank.'
        },

        name: {
            type: String,
            required: 'enter exercise name.'
        },
        duration: {
            type: Number
        },
        reps: {
            type: Number
        },
        sets: {
            type: Number
        },
        distance: {
            type: Number
            }
        }
    ]
},
{
        toJSON: {
        virtuals: true
        }
    }
);

workoutSchema.virtual("totalDuration").get(function() {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
    });

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;