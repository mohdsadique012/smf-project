
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import MainCategory from '../../../component/Admin/Categories/AddMainCategory';
// import ShowMainCategory from '../../../component/Admin/Categories/ShowMainCategory';
import AdminSidebar from '../../../component/Admin/Layout/AdminSidebar';
import AdminHeader from '../../../component/Admin/Layout/AdminHeader';
function main_category() {
    return (
        <>

            <Container fluid className='p-0 m-0 mt-n'>
                <AdminHeader></AdminHeader>
                <Row>
                    <Col className='col-2'>
                        <AdminSidebar></AdminSidebar>
                    </Col>
                    <Col className='col-10'>
                        <MainCategory></MainCategory>
                    </Col>
                </Row >
            </Container>
        </>
    )
}

export default main_category