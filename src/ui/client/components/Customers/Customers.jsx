import React, { useEffect, useState } from 'react';
import './Customers.scss';

const Customers = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetch('/api/customers')
      .then(res => res.json())
      .then(resJson => setCustomers(resJson))
  }, []);

  return (
    <div className='root'>
      <h2 className='title'>Customers</h2>
      {console.log(customers)}
      <ul>
        {customers.map(customer => (
          <li key={customer.id}>{customer.firstName} {customer.lastName}</li>
        ))}
      </ul>
    </div>
  )
}

export default Customers;
