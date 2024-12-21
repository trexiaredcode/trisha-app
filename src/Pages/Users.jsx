import React, { useState, useEffect } from 'react';

const User = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch user data with pictures from Random User API
    fetch('https://randomuser.me/api/?results=9')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Users</h1>
      {loading ? (
        <p className="text-gray-600 text-lg">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-4/5 max-w-6xl">
          {users.map((user, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg">
              <img
                src={user.picture.large}
                alt={`${user.name.first} ${user.name.last}`}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h2 className="text-xl font-bold text-gray-900 mb-2">{`${user.name.first} ${user.name.last}`}</h2>
              <p className="text-gray-600 text-sm">{user.email}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default User;
