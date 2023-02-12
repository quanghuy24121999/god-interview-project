import React, { useEffect, useState } from 'react'
import { Table, Dropdown } from 'react-bootstrap'

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
        <div>
            <h1 className='title'>Recipe list</h1>
            <div className='search-component'>
                <Dropdown className='cuisine-search'>
                    <Dropdown.Toggle id="dropdown-basic">
                        Choose a cuisine
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {
                            cuisines.map((cuisine, index) => (
                                <Dropdown.Item key={index}>{cuisine.name}</Dropdown.Item>
                            ))
                        }
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic">
                        Choose an ingredient
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {
                            ingredients.map((ingredient, index) => (
                                <Dropdown.Item key={index}>{ingredient.name}</Dropdown.Item>
                            ))
                        }
                    </Dropdown.Menu>
                </Dropdown>
            </div>
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
