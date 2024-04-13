import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
const variable = 'Variable'
const reactElementA = (
  <a href='https://google.com' target='_blank'>Google1{variable}</a>
)
const reactElement = React.createElement(
  'a',
  { href: 'https://google.com' },
  'Google2'
)

ReactDOM.createRoot(document.getElementById('root')).render(
    reactElementA
)
