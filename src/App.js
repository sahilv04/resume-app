import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { client } from './client';

const App = () => {
  const [profile, setProfile] = useState(null)
  useEffect(() => {
    client.getEntries({ content_type: "resume" }).then((res) => {
      setProfile(res.items[0].fields)
    })
  }, [])
  return (
    <div className="App">

      {
        profile &&
        <div>
          <div>{profile.name}</div>
          <div>{profile.email}</div>
          <div>{profile.phone}</div>
          <div>{profile.location}</div>
        </div>
      }
    </div>
  );
}

export default App;
