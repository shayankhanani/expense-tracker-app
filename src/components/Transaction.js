import React, {useContext} from 'react'
import {ListGroup, Button} from 'react-bootstrap'
import {GlobalContext} from '../context/GlobalState'

export const Transaction = ({transaction}) => {
    const {deleteTransaction} = useContext(GlobalContext);
    const sign = transaction.amount < 0 ? '-' : '+';
    return (
        <ListGroup.Item variant={transaction.amount < 0 ? 'danger' : 'primary'} className="d-flex justify-content-between align-items-center">{transaction.text}
            <span className="justify-content-between">
                <span className="mr-2">{sign}PKR {Math.abs(transaction.amount)}</span> 
                <span><Button variant="outline-secondary delete" onClick={() => deleteTransaction(transaction.id)}> x </Button>{' '}</span>
            </span>
        </ListGroup.Item>
    )
}
