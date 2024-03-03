import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

import { useState } from 'react';

function ExpenseItem(props) {
    const [title, setTitle] = useState(props.title);
    // let title = props.title;
    const clickHandler = () => {
        console.log("Clicked");
        // title = "Updated!";
        setTitle("Updated!");
    }
    // const expenseDate = new Date(2021, 2, 28);
    // const expenseTitle = 'Car Insurance';
    // const expenseAmount = 294.8;

    // return (
    //     <div className="expense-item">
    //         <div>{expenseDate.toISOString()}</div>
    //         <div className="expense-item__description">
    //             <h2>{expenseTitle}</h2>
    //             <div className="expense-item__price">${expenseAmount}</div>
    //         </div>
    //     </div>)

    // return (
    // <div className="expense-item">
    //     <div>{props.date.toISOString()}</div>
    //     <div className="expense-item__description">
    //         <h2>{props.title}</h2>
    //         <div className="expense-item__price">${props.amount}</div>
    //     </div>
    // </div>)
    

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            {/* <button onClick={() => {console.log('Clicked')} }>Change Title</button> */}
            <button onClick={clickHandler }>Change Title</button>
        </Card>
    )
}

export default ExpenseItem;