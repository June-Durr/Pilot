import React, { useState } from 'react';

export const Forms = () => {
  const [formData, setFormData] = useState({
    task: '',
    hours: '',
    description: '',
    hashtag: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="lg:flex items-center justify-center w-full">
      <input
        type="task"
        name="task"
        placeholder="Task"
        value={formData.task}
        onChange={handleChange}
      />
      <input
        type="hours"
        name="hours"
        placeholder="Hours"
        value={formData.hours}
        onChange={handleChange}
      />
        <input
        type="description"
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
      />
        <input
        type="hashtag"
        name="hashtag"
        placeholder="Hashtag"
        value={formData.hashtag}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};



// import React, { useState } from 'react';

//  export const Forms = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     email: '',
//     age:''
//   });

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(formData);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         name="firstName"
//         placeholder="Name"
//         value={formData.name}
//         onChange={handleChange}
//       />
//       <input
//         type="email"
//         name="email"
//         placeholder="Email"
//         value={formData.email}
//         onChange={handleChange}
//       />
//       <input
//         type="age"
//         name="age"
//         placeholder="age"
//         value={formData.age}
//         onChange={handleChange}
//       />
//       <button type="submit">Submit</button>
//     </form>
//   );
// };


























// export const Form = () => {
//   return (
//     <>
//     <form className="lg:flex items-center justify-center w-full ">
//     <div tabIndex="0" aria-label="card 1" className="focus:outline-none lg:w-4/12 lg:mr-7 lg:mb-0 mb-7 bg-white p-6 shadow rounded">
//     <div className="flex flex-wrap -mx-3 mb-6">
//       <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//         <p className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
//           Name
//         </p>
//         <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
//         <p className="text-red-500 text-xs italic">Must Complete</p>
//       </div>
//       <div className="w-full md:w-1/2 px-3">
//         <p className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
//           Description
//         </p>
//         <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
//       </div>
//     </div>
//     <div className="flex flex-wrap -mx-3 mb-6">
//       <div className="w-full px-3">
//         <p className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
//           Post Image Address
//         </p>
//         <input className=" w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  type="text" placeholder="Details" />
//         <p className="text-gray-600 text-xs italic">URL</p>
//       </div>
//     </div>
//     <div className="flex flex-wrap -mx-3 mb-2">
//       <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
//         <p className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
//           Hours
//         </p>
//         <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque" />
//       </div>
//       <div>
//         <div className="relative">
//           <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//             <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
//           </div>
//         </div>
//       </div>
//       <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
//         <p className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-zip">
//           Hashtag
//         </p>
//         <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210" />
//       </div>
//     </div>
//     </div>
//     <div>
//     <button>submit</button>
//     </div>
//   </form>
//   </>
//   )
// };
// console.log(Form);
