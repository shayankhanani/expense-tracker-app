import React, {useState, useContext} from 'react'
import {Form, Button} from 'react-bootstrap'
import {GlobalContext} from '../context/GlobalState'

export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const {addTransaction} = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();
        const newTransaction = {
            id:  Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }
        addTransaction(newTransaction);
        e.target.reset();
    }
    return (
        <div>
            <br/>
            <h6>Add Transaction</h6>
            <hr/>
            <Form onSubmit={onSubmit}>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label><strong>Transaction Name</strong></Form.Label>
                    <Form.Control type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="e.g Monthly Salary" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput2">
                    <Form.Label>
                        <strong>Amount</strong> <br/> (negative - expense, positive - income)
                    </Form.Label>

                    <Form.Control type="number" value={amount} onChange={(e) => setAmount(e.target.value)}/>
                </Form.Group>
                <Button variant="primary" type="submit" block>Add Transaction</Button>
            </Form>
        </div>
        
    )
}
