import React, { useState } from 'react'

// class Year extends React.Component {
//   state = {
//     title: '这里是组件 Year,created by class component',
//     count: 0
//   }

//   render() {
//     return (
//       <div>
//         {this.state.title}
//         <div>
//           <button
//             onClick={() =>
//               this.setState({
//                 ...this.state,
//                 count: this.state.count + 1
//               })
//             }
//           >
//             {this.state.count}
//           </button>
//         </div>
//       </div>
//     )
//   }
// }

const Year = function () {
  const [title] = useState('这里是组件 Year,created by class component')
  const [count, setCount] = useState(0)
  return (
    <div>
      {title}
      <div>
        <button onClick={() => setCount(count + 1)}>{count}</button>
      </div>
    </div>
  )
}

export default Year
