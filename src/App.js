import './App.css';
import { useEffect, useState, useRef } from 'react';
import { client } from './client';
import { useReactToPrint } from 'react-to-print';
import ResumeComponent from './components/ResumeComponent';
import { useDispatch, useSelector } from 'react-redux';
import { setResume } from './redux/main/reducer';
import PrintIcon from "./assets/icons/print-icon.png"

const App = () => {
  const dispatch = useDispatch()
  const mainState = useSelector(state => state.main)
  const componentRef = useRef();
  const resumeId = process.env.REACT_APP_RESUME_ID
  const { fields: profile } = mainState.resume || {}
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  useEffect(() => {
    client.getEntry(resumeId).then((res) => {
      dispatch(setResume(res))
    })
  }, [])

  return (
    <div className="App">
      <div className='print-btn-container'>
        <button onClick={handlePrint} className='print-btn' title='Click to print resume'><img src={PrintIcon} /></button>
      </div>
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
