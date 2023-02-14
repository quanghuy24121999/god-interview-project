import React, { useEffect, useState } from 'react'
import { Table, Form, Button, Pagination, Modal } from 'react-bootstrap'
import RecipeDetail from './RecipeDetail'

export default function ListRecipes() {
    const [recipes, setRecipes] = useState([])
    const [cuisines, setCuisines] = useState([])
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState([]);
    const [cuisine, setCuisine] = useState(0)
    const [ingredient, setIngredient] = useState("")

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [recipe, setRecipe] = useState({})

    useEffect(() => {
        fetch(`/recipes?cuisineId=${cuisine}&ingredient=${ingredient}&page=${page}`).then(
            response => response.json()
        ).then(
            data => {
                setRecipes(data.data)
                let arr = []
                for (let i = 1; i < data.totalPage + 1; i++) {
                    arr.push(i);
                }
                setTotalPage(arr)
            }
        )
    }, [page])

    function search() {
        setPage(1)
        fetch(`/recipes?cuisineId=${cuisine}&ingredient=${ingredient}&page=${page}`).then(
            response => response.json()
        ).then(
            data => {
                setRecipes(data.data)
                let arr = []
                for (let i = 1; i < data.totalPage + 1; i++) {
                    arr.push(i);
                }
                setTotalPage(arr)
            }
        )
    }

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
            <Form className='search-component' onSubmit={(e) => {
                e.preventDefault();
                search();
            }}>
                <Form.Select className='select' aria-label="Choose a cuisine" value={cuisine} onChange={(e) => {
                    e.preventDefault();
                    setCuisine(e.target.value)
                }}>
                    <option value={0}>Choose a cuisine</option>
                    {
                        cuisines.map((cuisine, index) => (
                            <option key={index} value={cuisine.id}>{cuisine.name}</option>
                        ))
                    }
                </Form.Select>
                <Form.Control
                    className='input-ingredient'
                    type="text"
                    placeholder="Ingredient"
                    value={ingredient}
                    onChange={(e) => {
                        e.preventDefault();
                        setIngredient(e.target.value)
                    }}
                />
                <Button type='submit'>Search</Button>
            </Form>
            <Table striped bordered hover className='recipe-table'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Recipe name</th>
                        <th>Cuisine</th>
                        <th>Ingredient name</th>
                        <th></th>
                    </tr>
                </thead>
                {
                    recipes.length > 0 ? <tbody>
                        {
                            recipes.map((recipe, index) => (
                                <tr className='recipe' key={index}>
                                    <td><b>{index + 1}</b></td>
                                    <td>{recipe.dishName}</td>
                                    <td>{recipe.cuisineName}</td>
                                    <td>{recipe.ingredientName}</td>
                                    <td>
                                        <Button variant="primary" onClick={(e) => {
                                            e.preventDefault();
                                            handleShow()
                                            setRecipe(recipe)
                                        }}>
                                            Detail
                                        </Button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody> : <tbody>
                        <tr>
                            <td colSpan={5}>
                                <p className="no-data">No data !</p>
                            </td>
                        </tr>
                    </tbody>
                }
            </Table>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    {/* <Modal.Title className='modal-title'>{recipe.dishName}</Modal.Title> */}
                </Modal.Header>
                <Modal.Body>
                    <RecipeDetail recipeProp={recipe} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            {
                recipes.length > 0 && <Pagination className='pagination-container'>
                    <Pagination.First onClick={(e) => { e.preventDefault(); setPage(1); }} />
                    {
                        totalPage.map(page => (
                            <Pagination.Item key={page}
                                onClick={(e) => { e.preventDefault(); setPage(page); }}
                            >
                                {page}
                            </Pagination.Item>
                        ))
                    }
                    <Pagination.Last onClick={(e) => { e.preventDefault(); setPage(totalPage.length); }} />
                </Pagination>
            }

        </div >
    )
}
