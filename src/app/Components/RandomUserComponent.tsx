"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

interface RandomUser {
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
  phone: string;
  picture: {
    large: string;
  };
}

const RandomUserComponent: React.FC = () => {
  const [user, setUser] = useState<RandomUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      console.log("Fetching data..."); // Debugging line
      try {
        const response = await axios.get("https://randomuser.me/api/");
        const userData = response.data.results[0];
        console.log("Fetched data:", userData); // Debugging line
        console.log(userData); // Debugging line
        setUser(userData);
      } catch (err) {
        console.log("Error:", err); // Debugging line
        setError(err);
      } finally {
        console.log("Setting loading to false"); // Debugging line
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.toString()}</div>;

  return (
    <div>
      {user && (
        <>
          <img src={user.picture.large} alt={`${user.name.first}'s profile`} />
          <h3>
            {user.name.title} {user.name.first} {user.name.last}
          </h3>
          <p>Phone: {user.phone}</p>
          <p>Email: {user.email}</p>
        </>
      )}
    </div>
  );
};

export default RandomUserComponent;
