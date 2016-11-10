import './style.css'
import 'ignore!./template.html'

import React from 'react'
import ReactDOM from 'react-dom'
import App from './content.js'

ReactDOM.render(<App />,  document.getElementById('content'))
