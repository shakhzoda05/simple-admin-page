import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Back from '../assets/images/back.png';

function AddUser() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { name, surname, age, address };
    
    // Store user data (for simplicity, we use localStorage)
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    navigate('/users'); // Redirect to User List page after saving
  };

  return (
    <div className="p-8 w-full">
      <div className="flex justify-between items-center">
        <button onClick={() => navigate(-1)} className="rounded-full hover:scale-125 duration-300">
        <img src={Back} alt="Logo" className="h-8 w-auto rounded-full" />

        </button>
        <h1 className="text-2xl font-bold text-blue-700">Add Users</h1>
        <button 
          onClick={handleSubmit} 
          className="duration-300 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg">
          Save User
        </button>
      </div>
      <form onSubmit={handleSubmit} className="mt-8 space-y-4 bg-white p-6 rounded shadow-lg">
        <div className="grid grid-cols-4 gap-4">
          <input 
            className="border p-2 rounded" 
            type="text" 
            placeholder="Name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
          <input 
            className="border p-2 rounded" 
            type="text" 
            placeholder="Surname" 
            value={surname} 
            onChange={(e) => setSurname(e.target.value)} 
            required 
          />
          <input 
            className="border p-2 rounded" 
            type="number" 
            placeholder="Age" 
            value={age} 
            onChange={(e) => setAge(e.target.value)} 
            required 
          />
          <input 
            className="border p-2 rounded" 
            type="text" 
            placeholder="Address" 
            value={address} 
            onChange={(e) => setAddress(e.target.value)} 
            required 
          />
        </div>
      </form>
    </div>
  );
}

export default AddUser;
