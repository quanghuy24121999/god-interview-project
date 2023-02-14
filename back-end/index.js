const express = require('express')
const pool = require('./database')
const app = express()

const PAGE_SIZE = 5

app.get("/recipes", (req, res) => {
    let totalRow
    let cuisineId = req.query.cuisineId
    let ingredient = req.query.ingredient
    let page = req.query.page

    // console.log("cuisineId: " + cuisineId);
    let query = "SELECT dishes.id, dishes.name AS dishName, cuisines.name as cuisineName, "
        + "ingredients.name AS ingredientName, dishes.image, dishes.instruction FROM dishes"
        + "\nINNER JOIN cuisines ON cuisines.id = dishes.cuisineId"
        + "\nINNER JOIN recipes ON recipes.dishId = dishes.id"
        + "\nINNER JOIN ingredients ON ingredients.id = recipes.ingredientId"
    if (parseInt(cuisineId) !== 0) {
        query += "\nWHERE dishes.cuisineId = " + cuisineId + " AND ingredients.name LIKE '%" + ingredient + "%'"
    } else if (parseInt(cuisineId) === 0) {
        query += "\nWHERE ingredients.name LIKE '%" + ingredient + "%'"
    }
    query += "\nGROUP BY dishes.name"
    // console.log(query);
    pool.query(query, (err, response) => {
        if (err) console.log("Query recipes error");
        totalRow = response.length

        if (page) {
            page = parseInt(page)
            if (page < 1) {
                page = 1
            }
            let skip = (page - 1) * PAGE_SIZE
            pool.query(query + " limit " + skip + ", " + PAGE_SIZE, (err, response) => {
                if (err) console.log("Query recipes error");
                res.json({
                    totalPage: Math.ceil(totalRow / PAGE_SIZE),
                    data: response
                })
            })
        } else {
            pool.query(query, (err, response) => {
                if (err) console.log("Query recipes error");
                res.json({
                    totalPage: Math.ceil(totalRow / PAGE_SIZE),
                    data: response
                })
            })
        }
    })
    // }
})

app.get("/cuisines", (req, res) => {
    pool.query('select * from cuisines', (err, response) => {
        if (err) console.log("Query cuisines error")
        res.json(response)
    })
})

app.get("/getIngredientByDishId", (req, res) => {
    pool.query('SELECT ingredients.name FROM recipes'
        + '\nINNER JOIN ingredients ON ingredients.id = recipes.ingredientId'
        + '\nINNER JOIN dishes ON dishes.id = recipes.dishId'
        + '\nWHERE dishes.id = ' + req.query.dishId, (err, response) => {
            if (err) console.log("Query getIngredientByDishId error")
            res.json(response)
        })
})

app.listen(5000, () => {
    console.log("Server started on port 5000");
})