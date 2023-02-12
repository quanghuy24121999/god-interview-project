const express = require('express')
const app = express()

app.get("/recipes", (req, res) => {
    res.json(
        [
            {
                id: 1,
                image: "image-link",
                name: "name 1",
                ingredients: [
                    {
                        id: 1,
                        name: "name1"
                    },
                    {
                        id: 3,
                        name: "name3"
                    },
                    {
                        id: 6,
                        name: "name6"
                    }
                ],
                step: "Step by step",
                cuisine: {
                    id: 1,
                    name: "Vietnamese cuisine"
                }
            },
            {
                id: 1,
                image: "image-link",
                name: "name 1",
                ingredients: [
                    {
                        id: 1,
                        name: "name1"
                    },
                    {
                        id: 3,
                        name: "name3"
                    },
                    {
                        id: 6,
                        name: "name6"
                    }
                ],
                step: "Step by step",
                cuisine: {
                    id: 1,
                    name: "Vietnamese cuisine"
                }
            },
            {
                id: 1,
                image: "image-link",
                name: "name 1",
                ingredients: [
                    {
                        id: 1,
                        name: "name1"
                    },
                    {
                        id: 3,
                        name: "name3"
                    },
                    {
                        id: 6,
                        name: "name6"
                    }
                ],
                step: "Step by step",
                cuisine: {
                    id: 1,
                    name: "Vietnamese cuisine"
                }
            },
            {
                id: 1,
                image: "image-link",
                name: "name 1",
                ingredients: [
                    {
                        id: 1,
                        name: "name1"
                    },
                    {
                        id: 3,
                        name: "name3"
                    },
                    {
                        id: 6,
                        name: "name6"
                    }
                ],
                step: "Step by step",
                cuisine: {
                    id: 1,
                    name: "Vietnamese cuisine"
                }
            },
            {
                id: 1,
                image: "image-link",
                name: "name 1",
                ingredients: [
                    {
                        id: 1,
                        name: "name1"
                    },
                    {
                        id: 3,
                        name: "name3"
                    },
                    {
                        id: 6,
                        name: "name6"
                    }
                ],
                step: "Step by step",
                cuisine: {
                    id: 1,
                    name: "Vietnamese cuisine"
                }
            },
            {
                id: 1,
                image: "image-link",
                name: "name 1",
                ingredients: [
                    {
                        id: 1,
                        name: "name1"
                    },
                    {
                        id: 3,
                        name: "name3"
                    },
                    {
                        id: 6,
                        name: "name6"
                    }
                ],
                step: "Step by step",
                cuisine: {
                    id: 1,
                    name: "Vietnamese cuisine"
                }
            }
        ]
    )
})

app.get("/cuisines", (req, res) => {
    res.json(
        [
            {
                id: 1,
                name: "cuisine 1"
            },
            {
                id: 2,
                name: "cuisine 2"
            },
            {
                id: 3,
                name: "cuisine 3"
            }
        ]
    )
})

app.get("/ingredients", (req, res) => {
    res.json(
        [
            {
                id: 1,
                name: "intredient 1"
            },
            {
                id: 2,
                name: "intredient 2"
            },
            {
                id: 3,
                name: "intredient 3"
            }
        ]
    )
})


app.listen(5000, () => {
    console.log("Server started on port 5000");
})