import { Component } from 'react'

class SonBlock extends Component {
  state = {}

  componentDidMount() {
    console.log('componentDidMount')
  }
  componentDidUpdate() {
    console.log('componentDidUpdate')
  }
  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  render() {
    return <div>son block</div>
  }
}

export default SonBlock
