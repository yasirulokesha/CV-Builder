// import React, { createContext, useContext } from "react";
// import { useState } from 'react';
// import { Data } from './Form_inputs';

// function MainForm() {

//   const [formstep, setFormstep] = useState(0);

//   const [data, setData] = useState({
//     name: "",
//     fullName: "",
//     dob: "",
//     nic: ""
//   });

//   const NextStep = () => {
//     setFormstep(cur => cur + 1);
//   }

//   const PreviousStep = () => {
//     setFormstep(cur => cur - 1);
//   }

//   const FormButton = () => {
//     if (formstep === 0) {
//       return (
//         <button type="button" onClick={NextStep}>Next Step</button>
//       )
//     } else if (formstep > 0) {
//       return (
//         <div className="row">
//           <button type="button" onClick={PreviousStep}>Back</button>
//           <button type="button" onClick={NextStep}>Next Step</button>
//         </div>
//       )
//     } else {
//       return (
//         <button type="submit">Create CV</button>
//       )
//     }
//   }

//   const InputType = () => {
//     if (formstep < 4) {
//       return (
//         <h1>Personal Details</h1>
//       )
//     } else {
//       return (
//         <h1>Acodemic Information</h1>
//       )
//     }
//   }

//   let age = 0;

//   const CalculateAge = () => {
//     const birthYear = data.dob.split(/[-]/)[0];
//     age = new Date().getFullYear() - birthYear;
//   }

//   return (
//     <form onSubmit={(event) => { event.preventDefault() }}>
//       {InputType()}
//       {
//         formstep === 0 && (
//           <section>
//             <label>Name</label>
//             <input type="text" value={data.name} onChange={(event) => { setData({ ...data, name: event.target.value }) }} placeholder="John Jonathan" name="name"></input>
//           </section>
//         )
//       }
//       {
//         formstep === 1 && (
//           <section>
//             <label>Full Name</label>
//             <input type="text" value={data.fullName || ""} onChange={(event) => { setData({ ...data, fullName: event.target.value }) }} placeholder="John Jonathan Doel" name="fullName"></input>
//           </section>
//         )
//       }
//       {
//         formstep === 2 && (
//           <section>
//             <label>Date of Birth</label>
//             <input type="date" value={data.dob || ""} onChange={(event) => { setData({ ...data, dob: event.target.value }) }} name="dob"></input>
//           </section>
//         )
//       }
//       {CalculateAge()}
//       {
//         formstep === 3 && (
//           <section>
//             {
//               age > 18 ? (
//                 <>
//                   <label>NIC number</label>
//                   <input type="text" value={data.nic || ""} onChange={(event) => { setData({ ...data, nic: event.target.value }) }} placeholder="John Jonathan Doel" name="name"></input>
//                 </>
//               ) : (
//                 <>
//                   {
//                     formstep === 3 ? (
//                       <>
//                         {NextStep()}
//                       </>
//                     ) : (
//                       <>
//                         {PreviousStep()}
//                       </>
//                     )
//                   }
//                 </>
//               )
//             }
//           </section>

//         )
//       }
//       {
//         formstep === 4 && (
//           <section>
//             <label>Schools and/or Universities </label>
//             <input type="text" value={data.name || ""} placeholder="John Jonathan Doel" name="name"></input>
//           </section>
//         )
//       }
//       {FormButton()}
//       <br />
//       Name :{data.name}<br />
//       Full Name :{data.fullName}
//       <br />
//       Dob : {data.dob}
//       <br />
//       {age}
//     </form>
//   )
// }

// export default MainForm