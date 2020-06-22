import React from 'react';
import './App.css';
import {Container, Row, Card, } from 'react-bootstrap';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import { GlobalProvider } from  './context/GlobalState'

function App() {
  return (
    <GlobalProvider>
        <Container>
        <Row className="pt-3">
          <Card className="m-auto shadow" style={{ width: '25rem' }}>
            <Card.Header className="text-center"><strong>Expense Tracker</strong></Card.Header>
              <Card.Body>
                <h6 className="text-center">YOUR BALANCE</h6>
                <Balance/>
                <hr/>
                <IncomeExpenses/>
                <br/>
                <h6>Transaction History</h6>
                <hr/>
                <TransactionList/>
                <AddTransaction/>
              </Card.Body>
              
          </Card>
        </Row>
      </Container>
    </GlobalProvider>
    
  );
}

export default App;
