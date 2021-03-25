import React, { Component } from 'react'
import LoadingHoc from './LoadingHoc'
// import {BrowserRouter as Router, Link} from 'react-router-dom'

// const AppLink = (props) => ({
//   render: () => (
//     <Link {...props} activeClassName='active' />
//   )
// })

// export default class Hoc extends Component {
//   render() {
//     return (
//       <Router>
//         <nav>
//           <AppLink to='/' >Home</AppLink>
//           <AppLink to='/portfolio' >Portfolio</AppLink>
//           <AppLink to='/contacts' >Contacts</AppLink>
//         </nav>
//       </Router>
//     )
//   }
// }


class HocUI extends Component {
  render() {
    return (
      <div>

      </div>
    )
  }
}


const Hoc = LoadingHoc('data')(HocUI)

export default Hoc
