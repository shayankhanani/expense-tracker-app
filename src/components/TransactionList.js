import React, { useContext } from 'react'
import {ListGroup} from 'react-bootstrap'
import {GlobalContext} from '../context/GlobalState'
import {Transaction} from './Transaction'

export const TransactionList = () => {
    const { transactions }= useContext(GlobalContext)

    return (
        <ListGroup>
            {transactions.map(transaction =>(
                <Transaction key={transaction.id} transaction={transaction}/>
            ))}
            
            
        </ListGroup>
    )
}
