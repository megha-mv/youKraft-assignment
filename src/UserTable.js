import React, { useState } from "react";
import UserLogin from "./UserLogin";

const initData = [{ name: "", age: null, email: " ", phone_no: null }];

function UserTable() {
  const [userData, setUserData] = useState(initData);

  const tableRows = userData.map((info,i) => {
    return (
      <tr key={i}>
        <td>{info.username}</td>
        <td>{info.age}</td>
        <td>{info.email}</td>
        <td>{info.pno}</td>
      </tr>
    );
  });

  const addRows = (data) => {
    const updatedUserData = [...userData];
    updatedUserData.push(data);
    setUserData(updatedUserData);
  };

  return (
    <div id="wrapper">
      <div id="first"><UserLogin func={addRows} /></div>
      <div id="second">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
      </div>
    </div>
  );
}

export default UserTable;
