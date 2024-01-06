import './App.css';
import { useEffect, useState, useRef } from 'react';
import { client } from './client';
import { useReactToPrint } from 'react-to-print';

const App = () => {
  const [profile, setProfile] = useState(null)
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  useEffect(() => {
    client.getEntries({ content_type: "resume" }).then((res) => {
      setProfile(res.items[0].fields)
    })
  }, [])

  return (
    <div className="App">
      <button onClick={handlePrint}>print</button>
      <iframe id="ifmcontentstoprint" style={{ height: 0, width: 0, position: "absolute" }} />
      {
        profile &&
        <div className='resume-container'>
          <div className='resume-content' ref={componentRef} >
            <div className='resume-content-inner'>
              <div className='primary-section'>

                <div>{profile.name}</div>
                <div>{profile.email}</div>
                <div>{profile.phone}</div>
                <div>{profile.location}</div>
              </div>
              <div className='secondary-section'>
                <h2 className='heading section-heading'>Contact</h2>
                Contact
              </div>
            </div>
          </div>
        </div>
      }

    </div>
  );
}

export default App;
