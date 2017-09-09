const sampleState = {
    bodyPartOptions: {
        0: {
            id: 0,
            name: "Arms"
        },
        1: {
            id: 1,
            name: "Chest"
        },
        2: {
            id: 2,
            name: "Back"
        },
        3: {
            id: 3,
            name: "Legs"
        },
        4: {
            id: 4,
            name: "Abs"
        },
    },

    difficultyOptions: {
        0: {
            id: 0,
            name: "Easy"
        },
        1: {
            id: 1,
            name: "Medium"
        },
        2: {
            id: 2,
            name: "Hard"
        },
    },

    exerciseOptions: {
        0: {
            id: 0,
            name: "Situps",
            bodyPartId: 4, // Abs
            difficultyId: 0 // Easy
        },
        1: {
            id: 1,
            name: "Squats",
            bodyPartId: 3, // Legs
            difficultyId: 2 // Hard
        },
    },

    loggedWorkouts: {
        0: {
            id: 0,
            date: new Date().toISOString(),
            loggedExercises: [0, 1]
        },
        1: {
            id: 1,
            date: new Date().toISOString(),
            loggedExercises: [2, 3]
        },
    },

    loggedExercises: {
        0: {
            id: 0,
            exerciseOptionId: 0,
            sets: [0, 1, 2]
        },
        1: {
            id: 1,
            exerciseOptionId: 1,
            sets: [0, 1, 2]
        },
        2: {
            id: 2,
            exerciseOptionId: 0,
            sets: [0, 1, 2]
        },
        3: {
            id: 3,
            exerciseOptionId: 1,
            sets: [0, 1, 2]
        },
    },

    sets: {
        0: {
            id: 0,
            weight: 15,
            reps: 12
        },
        1: {
            id: 1,
            weight: 115,
            reps: 8
        },
        2: {
            id: 2,
            weight: 50,
            reps: 10
        },
    },
}

export default sampleState;
