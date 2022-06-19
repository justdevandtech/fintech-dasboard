import { FaSortDown } from "react-icons/fa";
import { ExpensesChart } from "../charts/ExpensesChart";
import './finance.css'

export const Finance = () => {
  return (
    <div className='finance'>
      <div className='d-flex justify-content-between align-items'>
        <h1 className='p-0 m-0'>Finance</h1>
        <div className='income'>
          <div></div>
          <span>Income</span>
        </div>
        <div className='pay-off'>
          <div></div>
          <span>Pay Off</span>
        </div>
        <div className='monthly d-flex justify-content-between align-items'>
          <span>Monthly</span>
          <FaSortDown />
        </div>
      </div>
        <ExpensesChart />
    </div>
  );
};
