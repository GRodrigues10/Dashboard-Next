export const fetchSales = async () => {
 const data = await fetch('http://localhost:5000/api/sales');
 const response = await data.json();
 return response;
}

export const fetchExpenses = async () => {
    const data = await fetch('http://localhost:5000/api/expenses');
    const response = await data.json();
    return response;
}