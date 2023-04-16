import React, { useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { addData } from '../Action/addData';
import { delData } from '../Action/delData';
import shortid from 'shortid';


const Form = ({ addUserDetails }) => {

  const [clubName, setClubName] = useState('');


  const [familyMembers, setFamilyMembers] = useState([{ name: '',lastName:'',email:'',gender:'' }]);
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.data.data);
console.log("selector",selector);
  const handleAddFamilyMember = () => {
    setFamilyMembers([...familyMembers, { name: '' }]);
  };

  const handleRemoveFamilyMember = (index) => {
    const updatedFamilyMembers = [...familyMembers];
    updatedFamilyMembers.splice(index, 1);
    setFamilyMembers(updatedFamilyMembers);
  };

  const handleInputChange = (event, index) => {
    const { name, value } = event.target;
    const updatedFamilyMembers = [...familyMembers];
    updatedFamilyMembers[index] = { ...updatedFamilyMembers[index], [name]: value };
    setFamilyMembers(updatedFamilyMembers);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const userDetails = {
    clubName,
      familyMembers,
    };
    dispatch(addData({ data:userDetails, id: shortid.generate() }));
    console.log(userDetails);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
            type="text"
            name="club Name"
            value={clubName}
            onChange={(event) => setClubName(event.target.value)}
            required
          />
          <br />
          <button type="button" onClick={handleAddFamilyMember}>
        Add Family
</button>
<br />
      <label htmlFor="familyMembers">Family Members:</label>
      {familyMembers.map((member, index) => (
        <div key={index}>
          <input
            type="text"
            name="name"
            value={member.name}
            onChange={(event) => handleInputChange(event, index)}
            required
          />
          <label htmlFor="firstName">First Name:</label>
   
   
      <label htmlFor="lastName">Last Name:</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        value={member.lastName}
        onChange={(event) => handleInputChange(event, index)}
        pattern="[A-Za-z]+"
        required
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={member.email}
        onChange={(event) => handleInputChange(event, index)}
        required
      />
      <label htmlFor="gender">Gender:</label>
      <select id="gender" name="gender" value={member.gender} onChange={(event) => handleInputChange(event, index)} required>
        <option value="">-- Please select --</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
     
          {index > 0 && (
            <button type="button" onClick={() => handleRemoveFamilyMember(index)}>
              Delete
            </button>
          )}
        </div>
      ))}
     
<button type="button" onClick={handleSubmit}>
     Submit
</button>

</form>

)
}


export default Form;