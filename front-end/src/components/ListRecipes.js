import React, { useEffect, useState } from 'react'
import { Table, Form, Button } from 'react-bootstrap'

export default function ListRecipes() {
    const [recipes, setRecipes] = useState([])
    const [ingredients, setIngredients] = useState([])
    const [cuisines, setCuisines] = useState([])

    useEffect(() => {
        fetch("/recipes").then(
            response => response.json()
        ).then(
            data => {
                setRecipes(data)
            }
        )
    }, [])

    useEffect(() => {
        fetch("/ingredients").then(
            response => response.json()
        ).then(
            data => {
                setIngredients(data)
            }
        )
    }, [])

    useEffect(() => {
        fetch("/cuisines").then(
            response => response.json()
        ).then(
            data => {
                setCuisines(data)
            }
        )
    }, [])

    return (
        <div className='list-recipes'>
            <h1 className='title'>Recipe list</h1>
            <Form className='search-component'>
                <Form.Select className='select' aria-label="Choose a cuisine">
                    {
                        cuisines.map((cuisine, index) => (
                            <option key={index}>{cuisine.name}</option>
                        ))
                    }
                </Form.Select>
                <Form.Select className='select' aria-label="Choose a cuisine">
                    {
                        ingredients.map((ingredient, index) => (
                            <option key={index}>{ingredient.name}</option>
                        ))
                    }
                </Form.Select>
                <Button>Search</Button>
            </Form>
            <Table striped bordered hover className='recipe-table'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Recipe name</th>
                        <th>Cuisine</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        recipes.map((recipe, index) => (
                            <tr className='recipe' key={index}>
                                <td>{index}</td>
                                <td>{recipe.name}</td>
                                <td>{recipe.cuisine.name}</td>
                                <td><a href='#'>Detail</a></td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div >
    )
}
