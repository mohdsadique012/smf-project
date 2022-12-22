
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import AddSubCategory from '../../../component/Admin/Categories/AddSubCategory';
import AdminHeader from '../../../component/Admin/Layout/AdminHeader';
import AdminSidebar from '../../../component/Admin/Layout/AdminSidebar';

function main_category() {
    return (
        <>
            <Container fluid className='p-0 m-0'>
            <AdminHeader></AdminHeader>
                <Row>
                    <Col className='col-2'>
                        <AdminSidebar></AdminSidebar>
                    </Col>
                    <Col className='col-10'>
                        <AddSubCategory></AddSubCategory>
                    </Col>
                </Row >
            </Container>
        </>
    )
}

export default main_category