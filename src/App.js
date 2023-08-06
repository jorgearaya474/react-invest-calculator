import Header from './components/Layout/Header';
import DataForm from './components/DataForm/DataForm';
import DataTable from './components/DataTable/DataTable';
import { useState } from 'react';

function App() {
  const [formInput, setFormInput] = useState(null);
  const yearlyData = [];

  const calculateHandler = (userInput) => {
    setFormInput(userInput);
  };

  if (formInput) {
    let currentSavings = +formInput['current-savings'];
    const yearlyContribution = +formInput['yearly-contribution'];
    const expectedReturn = +formInput['expected-return'] / 100;
    const duration = +formInput['duration'];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <div>
      <Header />
      <DataForm submitAction={calculateHandler} />
      {!formInput && (
        <p style={{ textAlign: 'center' }}>No investment calculated yet!</p>
      )}
      {formInput && (
        <DataTable
          resultData={yearlyData}
          initialInvestment={formInput['current-savings']}
        />
      )}
    </div>
  );
}

export default App;
