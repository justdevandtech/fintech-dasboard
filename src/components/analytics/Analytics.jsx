import { Finance } from '../finance/Finance';
import { Transaction } from '../transactions/Transaction';

export const Analytics = () => {
  return (
    <section className='d-flex justify-content-between align-center mt-3 mb-4'>
        <Finance />
        <Transaction />
    </section>
  )
}
