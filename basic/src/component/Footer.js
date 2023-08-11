import React from 'react'
import {Container,Row,Col} from 'react-bootstrap';

const footer = () => {
    return (<header>
        <Container>
            <Row>
                <Col className='text-center py-3'>
                    Copyright &copy; devshop
                </Col>
            </Row>

        </Container>
    </header>
    )
}

export default footer
