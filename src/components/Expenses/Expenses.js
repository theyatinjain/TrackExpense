import React, { useState } from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpenseList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('all')
    const filterChangeHandler = selectedYear => {
        // console.log(selectedYear)
        setFilteredYear(selectedYear);
    }

    let filteredExpenses = [];
    if (filteredYear === 'all') filteredExpenses = props.expenseArray;
    else filteredExpenses = props.expenseArray.filter(expense => expense.date.getFullYear().toString() === filteredYear);

    return (
        <Card className="expenses">
            <ExpenseFilter selected={filteredYear} onFilterChange={filterChangeHandler} />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpenseList items={filteredExpenses} />
        </Card>
    )
}

export default Expenses