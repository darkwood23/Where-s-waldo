import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import DisplayLeaderBoards from './components/displayLeaderboards.jsx'
import GameScreen from './components/gameScreen.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/leader-boards',
    element: <DisplayLeaderBoards />
  },
  {
    path: '/game-screen',
    element: <GameScreen />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
