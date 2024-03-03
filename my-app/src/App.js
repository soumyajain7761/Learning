import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import React from 'react';

function App() {
  const expenses = [
    {id: 1, title: 'Car Insurance', amount: 294.8, date: new Date(2021, 2, 28)},
    {id: 2, title: 'Driver Insurance', amount: 94.6, date: new Date(2022, 3, 3)},
    {id: 3, title: 'Petrol Insurance', amount: 194.5, date: new Date(2018, 5, 15)},
    {id: 4, title: 'Hospital Insurance', amount: 184.9, date: new Date(2017, 11, 12)}
  ]

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, 'Let\'s get started!'),
  //   React.createElement(Expenses, {items: expenses})
  // )

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense/>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;