import './App.css';
import { useEffect, useState, useRef } from 'react';
import { client } from './client';
import { useReactToPrint } from 'react-to-print';
import ResumeComponent from './components/ResumeComponent';

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
      {
        profile &&
        <div className='resume-container'>
          <div className='resume-content' ref={componentRef} >
            <ResumeComponent profile={profile} />
          </div>
        </div>
      }

    </div>
  );
}

export default App;
