import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { ButtonGroup, Col, Dropdown, Row } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import './Categories.css';
import Select from 'react-select'
export default function AddSubCategory() {
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
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]
    const MyComponent = () => (
        <Select className='index' options={options} />
    )
    const columns = [
        {
            name: "Name",
            selector: (row) => row.name,
            sortable: true
        },
        {
            name: "Parent Category",
            selector: (row) => row.capital,
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
                    <div className="row m-2">
                        <h4>Add New Sub-Category</h4>
                        <div className="col">
                            <label for="inputName">Name</label>
                            <input type="text" id='inputName' className="form-control" placeholder="Category Name" />
                        </div>
                        <div className="col">
                            <label for="inputSlug">Slug</label>
                            <input type="text" id='inputSlug' className="form-control" placeholder="Slug Name" />
                        </div>
                    </div>
                    <div className="row m-2">
                        <div className="col">
                            <label for="inputDesc">Full Description</label>
                            <textarea name="" id="inputDesc" rows="1" className='form-control'></textarea>
                        </div>
                        <div className="col">
                            <label for="inputProdTag">Product Tags</label>
                            <input type="text" id='inputProdTag' className="form-control" placeholder="Type and make comma to separate tags" />
                        </div>

                    </div>
                    <div className="row">
                        <div className="col">
                            <label for="inputParentCategory">Parent Category</label>
                            <MyComponent></MyComponent>
                        </div>
                        <div className="col">
                            <input type="submit" value="submit" className="form-control mt-4 btn btn-primary" />
                        </div>
                    </div>
                </form>
            </Row>
            <Row className='card'>
                <DataTable title="Sub Categories" selectableRows selectableRowsHighlight highlightOnHover striped pagination fixedHeader columns={columns} data={categories} actions={<button className='btn btn-success btn-sm'>Export</button>} />
            </Row>
        </>
    )
}
