import React, {useContext} from 'react'
import {Col, Card, Row} from 'react-bootstrap'
import {GlobalContext} from '../context/GlobalState'

export const IncomeExpenses = () => {
    const { transactions }= useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);
    const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);
    const expense = (
        amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
        -1
      ).toFixed(2);

    return (
        <Row>
            <Col md={6}>
                <Card>
                    <Card.Body className="text-center">
                        <h6>Income</h6>
                        <h6 className="text-primary">PKR {income}</h6>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={6}>
                <Card >
                    <Card.Body className="text-center">
                        <h6>Expense</h6>
                        <h6 className="text-danger">PKR {expense}</h6>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        
    )
}
