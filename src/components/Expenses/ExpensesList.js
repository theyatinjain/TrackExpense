import React from 'react';
import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

function ExpenseList(props) {
    if (props.items.length === 0) return <h2 className="expenses-list__fallback">No Data found!</h2>
    else return (
        <ul className="expenses-list">
            {props.items.map(expense => (
                <ExpenseItem key={expense.id} title={expense.title} date={expense.date} amount={expense.amount} />
            ))}
        </ul>
    )
}

export default ExpenseList;