import React, { useState } from 'react'
import { Image, Table } from 'react-bootstrap'

export default function RecipeDetail() {
    const [recipe, setRecipe] = useState(
        {
            "id": 1,
            "image": "image-link",
            "name": "name 1",
            "ingredients": [
                {
                    "id": 1,
                    "name": "name1"
                },
                {
                    "id": 3,
                    "name": "name3"
                },
                {
                    "id": 6,
                    "name": "name6"
                }
            ],
            "step": "Step by step",
            "cuisine": {
                "id": 1,
                "name": "Vietnamese cuisine"
            }
        }
    )

    return (
        <div className='recipe-detail'>
            <h1 className='title'>{recipe.name}</h1>
            <Image className='recipe-image' src='https://picsum.photos/200' alt='' width={200} height={200} />
            <div className='recipe-cuisine'>Cuisine: {recipe.cuisine.name}</div>
            <div className='recipe-ingredient'>
                <h4>Ingredients</h4>
                <Table striped bordered hover className='recipe-table'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Ingredient name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            recipe.ingredients.map((ingredient, index) => (
                                <tr className='recipe' key={index}>
                                    <td>{index}</td>
                                    <td>{ingredient.name}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </div>
            <div className='recipe-step'>{recipe.step}</div>
        </div>
    )
}
