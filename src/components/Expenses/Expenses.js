import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2019')
    const filterChangeHandler = selectedYear => {
        // console.log(selectedYear)
        setFilteredYear(selectedYear);
    }
    return (
        <div>
            <Card className="expenses">
            <ExpenseFilter selected={filteredYear} onFilterChange={filterChangeHandler} />
                {props.expenseArray.map(expense => (
                    <ExpenseItem key={expense.id} title={expense.title} date={expense.date} amount={expense.amount} />
                ))}
            </Card>
        </div>
    )
}

export default Expenses