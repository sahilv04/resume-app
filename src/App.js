import './App.css';
import { useEffect, useState, useRef } from 'react';
import { client } from './client';
import { useReactToPrint } from 'react-to-print';
import ResumeComponent from './components/ResumeComponent';
import { useDispatch, useSelector } from 'react-redux';
import { setResume } from './redux/main/reducer';

const App = () => {
  const dispatch = useDispatch()
  const mainState = useSelector(state => state.main)
  const componentRef = useRef();

  const { fields: profile } = mainState.resume || {}
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  useEffect(() => {
    client.getEntries({ content_type: "resume", include: 10 }).then((res) => {
      dispatch(setResume(res.items[0]))
    })
  }, [])

  return (
    <div className="App">
      <button onClick={handlePrint}>print</button>
      {
        profile &&
        <div className='resume-container'>
          <div className='resume-content' ref={componentRef} >
            <ResumeComponent />
          </div>
        </div>
      }

    </div>
  );
}

export default App;
