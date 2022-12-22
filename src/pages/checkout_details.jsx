import React,{useEffect} from 'react'
import CheckoutFirst from '../component/Checkout/checkout_first';

import { Container, Row } from 'react-bootstrap';
import CheckoutSecond from '../component/Checkout/checkout_second';
import CheckoutThird from '../component/Checkout/checkout_third';
import Footer from '../layout/Footer';
import SubFooter from '../layout/Sub_Footer';


function Home() {
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
    return (
        <>
        <Container>
            <Row>
                <>
                    <CheckoutFirst></CheckoutFirst>
                    <CheckoutSecond></CheckoutSecond>
                    <CheckoutThird></CheckoutThird>
                </>
            </Row >
        </Container>
         <SubFooter />
         <Footer />
         </>
    )
}

export default Home