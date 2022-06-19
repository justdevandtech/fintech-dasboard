import { Button, Form } from "react-bootstrap";
import "./mycard.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import {FaSortDown} from 'react-icons/fa'
import cardIcon from '../../assets/images/card-icon.png'
import { Image } from "react-bootstrap";


export const MyCards = () => {
  return (
    <section className='d-flex justify-content-between align-items-center mt-3'>
      <div className='card-items'>
        <div className='d-flex m-0 p-0 justify-content-between align-items-center'>
          <p className="p-0 m-0'">My Cards</p>
          <BsThreeDotsVertical />
        </div>
        <div className='card-details-container d-flex justify-content-between align-items-center'>
          <Image className='card-img me-3' src={cardIcon} />
          <div className='card-props'>
            <div className='card-details d-flex justify-content-between align-items-center'>
              <div className='balance w-100'>
                <p
                  style={{ color: "#8A8A8A", fontWeight: "500" }}
                  className='text-center p-0 m-0'
                >
                  Card balance
                </p>
                <p style={{ color: "#202536" }} className='text-center p-0 m-0'>
                  $5290.09
                </p>
              </div>
              <div
                className='d-flex'
                style={{ height: "63px", border: "0.5px solid #CACDD8" }}
              >
                <div className='vr'></div>
              </div>
              <div className='card-status w-100'>
                <p style={{ color: "#8A8A8A" }} className='text-center p-0 m-0'>
                  Status
                </p>
                <p style={{ color: "green" }} className='text-center p-0 m-0'>
                  Active
                </p>
              </div>
            </div>
            <Button className='cardbtn rounded mt-2'>Add Card</Button>
          </div>
        </div>
      </div>
      <div className='card-items2 p-3'>
        <div className='h d-flex justify-content-between align-items-center'>
          <p className='p-0 m-0 mt-1' style={{ color: "#f6f6f6" }}>
            All Expenses
          </p>
          <span className='p-0 m-0 mt-0 text-white'>
            <FaSortDown />
          </span>
        </div>
        <div className='chart-container mt-3 d-flex align-items-center'>
          <div className='chart'></div>
          <div className='chart-info'>
            <div className='div'>
              <div className='div1 me-2'></div>
              <p>Advertisment</p>
            </div>
            <div className='div'>
              <div className='div2 me-2'></div>
              <p>Shopping</p>
            </div>
            <div className='div'>
              <div className='div3 me-2'></div>
              <p>Food</p>
            </div>
            <div className='div'>
              <div className='div4 me-2'></div>
              <p>Entertainment</p>
            </div>
          </div>
          <div
            className='d-flex ms-2'
            style={{ height: "109px", border: "1px solid #CACDD8" }}
          >
            <div className='vr'></div>
          </div>
          <div
            style={{ fontSize: "15px" }}
            className='calender w-75 ms-1 text-white d-flex justify-content-between align-items-center'
          >
            <div className='daily'>
              <span>Dayly</span>
              <div>
                <span>$742</span>
              </div>
            </div>
            <div className='weekly'>
              <span>Weekly</span>
              <div>
                <span>$742</span>
              </div>
            </div>
            <div className='monthly'>
              <span>Monthly</span>
              <div>
                <span>$742</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
