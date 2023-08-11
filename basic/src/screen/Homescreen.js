import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap';
import Product from '../component/Product';
import Loader from '../component/Loader'
import Message from '../component/Message'
import Paginate from '../component/Paginate'
import Meta from '../component/Meta'
import Productcarousel from '../component/Productcarousel'
import { listProducts } from '../actions/productActions'
const Homescreen = ({match}) => {
    const keyword = match.params.keyword

    const pageNumber = match.params.pageNumber || 1

    const dispatch = useDispatch()

    const productList = useSelector(state => state.productList)
    const { loading, error, products, page, pages } = productList


    useEffect(() => {
        dispatch(listProducts(keyword,pageNumber))
    }, [dispatch,keyword,pageNumber])
    return (
        <>
        <Meta />
        {!keyword ? (<Productcarousel />):(<Link to='/' className='btn btn-light'>
            Go Back
        </Link>) }
            <h1>Latest products</h1>
            {loading ? (
            <Loader />
            ) : error ? (
            <Message variant='danger'>{error}</Message>
            ) : (
            <>
            <Row>
                {products.map((product) => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product} />
                    </Col>
                ))}
            </Row>
            <Paginate 
                pages={pages} 
                page={page}
                keyword={keyword ? keyword : ''}
            /> 
            </>
            )}



        </>
    )
}

export default Homescreen
