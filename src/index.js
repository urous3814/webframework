import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
//import App from './App';
import reportWebVitals from './reportWebVitals'

// import Component from './examD/1/1'
// import ConfirmButton from './examD/2/2'
// import LandingPage from './examD/3/3'
// import Counter from './examD/4/4'
// import Counter2 from './examD/5/5'
// import Accommodate2 from './examD/6/Accommodate'
// import Library from './examD/7/Library'
// import Clock from './examD/8/8'
// import CommentList from './examD/9/CommentList'
import Accommodate from './examD/10/10'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <Accommodate />
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
