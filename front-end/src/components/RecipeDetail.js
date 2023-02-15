import React, { useEffect, useState } from 'react'
import { Image, Table } from 'react-bootstrap'
import axios from 'axios'

const url = "https://god-interview-project-back-end.vercel.app"
// const url = "http://localhost:5000"
const api = axios.create({
    baseURL: url,
    withCredentials: true, // This allows cookies to be sent with the request
    headers: {
        'Content-Type': 'application/json',
    },
})

export default function RecipeDetail({ recipeProp }) {
    const recipe = recipeProp
    const [ingredients, setIngredients] = useState([])

    useEffect(() => {
        // fetch(`/getIngredientByDishId?dishId=${recipe.id}`).then(
        //     response => response.json()
        // ).then(
        //     data => {
        //         setIngredients(data)
        //     }
        // )
        api.get(`/getIngredientByDishId?dishId=${recipe.id}`)
            .then(res => {
                setIngredients(res.data)
            })
    }, [])

    return (
        <div className='recipe-detail'>
            <h1 className='title'>{recipe.dishName}</h1>
            <h5 className='recipe-cuisine'>({recipe.cuisineName})</h5>
            <Image className='recipe-image' src={`${recipe.image}`} alt='' width={300} height={300} />
            <div className='recipe-ingredient'>
                <Table striped bordered hover className='recipe-table'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Ingredient name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            ingredients.map((ingredient, index) => (
                                <tr className='recipe' key={index}>
                                    <td><b>{index + 1}</b></td>
                                    <td>{ingredient.name}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </div>
            <div className='recipe-step'>
                <h4>Instruction</h4>
                {recipe.instruction}
            </div>
        </div>
    )
}
