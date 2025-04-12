import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function UserProfile() {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);

  const url = `${import.meta.env.VITE_BASEURL}/${id}`;
  const authKey = import.meta.env.VITE_APIKEY;

  useEffect(() => {
    fetch(url, {
      headers: {
        'Authorization': authKey
      }
    })
      .then(res => res.json())
      .then(data => setProfile(data))
      .catch(err => console.error('Errore nel fetch profilo:', err));
  }, [id]);

  if (!profile) return <div>Loading...</div>;

  return (
    <div className="container mt-5 pt-5">
      <h2>{profile.name} {profile.surname}</h2>
      <p>{profile.title}</p>
      <img src={profile.image} alt={`${profile.name}`} className="rounded" width="150" />
     
    </div>
  );
}
