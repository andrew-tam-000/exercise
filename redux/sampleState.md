```javascript
{
    bodyPartOptions: [
        {
            id: 0,
            name: "Arms"
        },
        {
            id: 1,
            name: "Chest"
        },
        {
            id: 2,
            name: "Back"
        },
        {
            id: 3,
            name: "Legs"
        },
        {
            id: 4,
            name: "Abs"
        },
        ...
    ],
    difficultyOptions: [
        {
            id: 0,
            level: "Easy"
        },
        {
            id: 1,
            level: "Medium"
        },
        {
            id: 2,
            level: "Hard"
        },
        ...
    ],
    exerciseOptions: [
        {
            id: 0,
            name: "Situps",
            bodyPartId: 4, // Abs
            difficultyId: 0 // Easy
        },
        {
            id: 1,
            name: "Squats",
            bodyPartId: 3, // Legs
            difficultyId: 2 // Hard
        },
        ...
    ],
    loggedWorkouts: [
        {   
            id: 0,
            date: (good date format?),
            exercises: [
                {
                    id: 0,
                    exerciseOptionId: 0, // Situps
                    sets: [
                        {
                            id: 0,
                            weight: 0,
                            reps: 15
                        },
                        {
                            id: 1,
                            weight: 0,
                            reps: 15
                        },
                        {
                            id: 2,
                            ... // info for another set
                        }
                        ...
                    ]
                },
                {
                    id: 1,
                    ... // info for another exercise
                },
                ...
            ]
        },
        {
            id: 1,
            ... // info for another workout
        },
        ...
    ]
}
```
