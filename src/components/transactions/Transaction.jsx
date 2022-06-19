import { Image, Table } from "react-bootstrap";
import { FaSortDown } from "react-icons/fa";
import './transaction.css'

export const Transaction = () => {
  return (
    <div className='transactions p-3'>
      <div className='d-flex justify-content-between align-items-center'>
        <h1>Transaction</h1>
        <div className='d-flex justify-content-between align-items'>
          <span>Recent</span>
          <FaSortDown />
        </div>
      </div>
      <div className='table'>
        <Table>
          <tbody>
            <tr>
              <td>
                <img
                  style={{
                    width: "35px",
                    height: "35px",
                    objectFit: "cover",
                    borderRadius: "50%",
                    objectPosition: "center",
                  }}
                  src='https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
                  alt=''
                  srcset=''
                />
              </td>
              <td>
                Advertisment <br /> June 02, 2022
              </td>
              <td>07:28:84AM</td>
              <td>- $34.03</td>
              <td>Pending</td>
              <td>
                <FaSortDown />
              </td>
            </tr>
            <tr>
              <td>
                <img
                  style={{
                    width: "35px",
                    height: "35px",
                    objectFit: "cover",
                    borderRadius: "50%",
                    objectPosition: "center",
                  }}
                  src='https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
                  alt=''
                  srcset=''
                />
              </td>
              <td>
                Advertisment <br /> June 02, 2022
              </td>
              <td>07:28:84AM</td>
              <td>- $34.03</td>
              <td>Pending</td>
              <td>
                <FaSortDown />
              </td>
            </tr>
            <tr>
              <td>
                <img
                  style={{
                    width: "35px",
                    height: "35px",
                    objectFit: "cover",
                    borderRadius: "50%",
                    objectPosition: "center",
                  }}
                  src='https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
                  alt=''
                  srcset=''
                />
              </td>
              <td>
                Advertisment <br /> June 02, 2022
              </td>
              <td>07:28:84AM</td>
              <td>- $34.03</td>
              <td>Pending</td>
              <td>
                <FaSortDown />
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};
