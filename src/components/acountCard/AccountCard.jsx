
import './accountCard.css'
import { MdAccountBalanceWallet } from 'react-icons/md'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { MdSavings } from 'react-icons/md'
import { RiMoneyPoundCircleFill } from 'react-icons/ri'
import { InputGroup, Form, Button } from 'react-bootstrap'

export const AccountCard = () => {
  return (
    <section className='d-flex justify-content-between'>
      <div className="card">
        <div className="iconn">
          <span><MdAccountBalanceWallet /></span>
          <span>Balance</span>
          <span><BsThreeDotsVertical /></span>
        </div>
        <h3 className='text-center'>$5290.09</h3>
      </div>
      <div className="card">
        <div className="iconn">
          <span><RiMoneyPoundCircleFill /></span>
          <span>Income</span>
          <span>
            <BsThreeDotsVertical />
          </span>
        </div>
        <h3 className='text-center'>$5290.09</h3>
      </div>
      <div className="card">
        <div className="iconn">
          <span><MdSavings /></span>
          <span>Saving</span>
          <span><BsThreeDotsVertical /></span>
        </div>
        <h3 className='text-center'>$5290.09</h3>
      </div>
      <div className="send-money-card p-3 rounded">
        <div className='add-moneyIcon mb-4'>
          <BsThreeDotsVertical />
        </div>
        <InputGroup>
          <Form.Control className='rounded'
            placeholder="1183  2553  8112  2121       VISA" style={{ border: '1.48889px solid rgba(185, 81, 168, 0.85)', boxShadow: '0px 26.8px 23.8222px rgba(108, 34, 97, 0.03)' }}
          />
          <Button className='ms-3 rounded' style={{
            background: '#6C2261', border: '1.48889px solid rgba(185, 81, 168, 0.85)', boxShadow: '0px 26.8px 23.8222px rgba(108, 34, 97, 0.03)'
          }}>Send Money</Button>
        </InputGroup>

      </div>
    </section>
  )
}

