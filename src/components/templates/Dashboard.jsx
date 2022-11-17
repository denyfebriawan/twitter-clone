import React from 'react'
import Sidebar from "../Sidebar/Sidebar"
import Feed from "../Feed/Feed"
import Widgets from "../Widgets/Widgets"
import "../../App.css"


const Dashboard = () => {

 

  return (
    <div className="app">
      <Sidebar/>
      <Feed/>
      <Widgets/>
    </div>
  )
}

export default Dashboard;
