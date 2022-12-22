import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { ButtonGroup, Col, Dropdown, Row } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import './Categories.css';
export default function AddMainCategory() {
    const [categories, setCategories] = useState([]);
    const getCategories = async () => {
        try {
            const response = await axios.get('https://restcountries.com/v2/all');
            // console.log(response.data)
            setCategories(response.data);
        } catch (error) {
            console.log(error)
        }
    }
    const columns = [
        {
            name: "Name",
            selector: (row) => row.name,
            sortable: true
        },
        {
            name: "Slug",
            selector: (row) => row.capital,
            sortable: true
        },
        {
            name: "Description",
            selector: (row) => row.capital
        },
        {
            name: "Status",
            selector: (row) => row.capital
        },
        {
            name: "Action",
            cell: (row) => <Dropdown size="sm">
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Action
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Delete</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        },
    ]
    useEffect(() => {
        getCategories();
    }, []);
    return (
        <>
            <Row className='my-2'>
                <form>
                    <div class="row m-2">
                        <h4>Add New Category</h4>
                        <div class="col">
                            <label for="inputName">Name</label>
                            <input type="text" id='inputName' class="form-control" placeholder="Category Name" />
                        </div>
                        <div class="col">
                            <label for="inputSlug">Slug</label>
                            <input type="text" id='inputSlug' class="form-control" placeholder="Slug Name" />
                        </div>
                    </div>
                    <div class="row m-2">
                        <div class="col">
                            <label for="inputDesc">Full Description</label>
                            <textarea name="" id="inputDesc" rows="1" class='form-control'></textarea>
                        </div>
                        <div class="col">
                            <label for="inputProdTag">Product Tags</label>
                            <input type="text" id='inputProdTag' class="form-control" placeholder="Type and make comma to separate tags" />
                        </div>

                    </div>
                    <div class="row m-2 w-50">
                        <div className="col">
                            <input type="submit" value="submit" class="form-control btn btn-primary" />
                        </div>
                    </div>
                </form>
            </Row>
            <Row className='card'>
                <DataTable title="Categories" selectableRows selectableRowsHighlight highlightOnHover striped pagination fixedHeader columns={columns} data={categories} actions={<button className='btn btn-success btn-sm'>Export</button>} />
            </Row>
        </>
    )
}
