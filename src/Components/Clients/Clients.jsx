import React, {useState, useEffect} from 'react'
import "./Clients.css"

export default function Clients() {
    const [clients, setClients] = useState([]);

    useEffect(() => {
        const fetchClients = async () => {
          try {
            const response = await fetch("/src/APIs/clients.json");
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            const data = await response.json();
            setClients(data.clients);
            setLoading(false);
          } catch (error) {
            console.error("Error fetching clients:", error);
            setError("Failed to load clients");
            setLoading(false);
          }
        };

            fetchClients();

    },[]);

  return (
    <div className='clients'>
      <h2 className='clients-heading'>We Have Extensive Experience With</h2>
      <div className='yellow-border'></div>
      <div className='clients-list'>
        {clients.map((client) => (
            <div key={client.id} className='client-item'>
                <p className='client-name'>{client.name}</p>
            </div>
        ))}
      </div>
    </div>
  )
}
