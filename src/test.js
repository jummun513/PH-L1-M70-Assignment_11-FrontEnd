import React, { useState } from 'react';

function Test() {
    // Initializing state with an object
    const [data, setData] = useState({
        name: "John",
        email: "john@example.com",
        idHolder: [] // Start with an empty array for IDs
    });




    // Function to add an ID to the 'idHolder' array
    const addIdToHolder = (newId) => {
        setData(prevData => ({
            ...prevData,
            idHolder: [...prevData.idHolder, newId]
        }));
    };
    console.log(data);

    return (
        <div>
            <h1>User Information</h1>
            <p>Name: {data.name}</p>
            <p>Email: {data.email}</p>
            <ul>
                {data.idHolder.map((id, index) => (
                    <li key={index}>{id}</li>
                ))}
            </ul>
            <button onClick={() => addIdToHolder("id1")}>Add ID 1</button>
            <button onClick={() => addIdToHolder("id2")}>Add ID 2</button>
            <button onClick={() => addIdToHolder("id3")}>Add ID 3</button>
        </div>
    );
}

export default Test;
