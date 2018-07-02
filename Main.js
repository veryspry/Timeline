import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import Timeline from './Timeline'
import Navbar from './Navbar'

class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      daysData: []
    }
  }
  async componentDidMount() {
    try {
      const response = await axios.get('/api')
      const data = response.data
      this.setState({daysData: data})
      // console.log(this.state.daysData)
    } catch (err) {
      console.log(err)
    }
  }
  render() {
    return (
      <div className="wrapper">
        <Navbar />
        <Timeline data={this.state.daysData}/>
      </div>
    )
  }
}

export default Main
