import React from 'react'
import styled from 'styled-components'
import titleImage from '../images/titleImage.png'
import BeyondTheNotes from './BeyondTheNotes'
import Included from './Included'

var Mains = styled.div `
  padding: 21px;
`;
var TitleImage = styled.img `
  width: 70%;
  margin-left: 15%;
`;
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;

    let button = null;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

function GuestGreeting(props) {
  return (
      <div>
        <TitleImage src={titleImage}/>
        <BeyondTheNotes/>
        <Included/>
      </div>
    )
}

function UserGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}
export default Main

// class Main extends React.Component {
//   constructor(props) {
//     super(props)
//     this.handleStaffClick = this.handleStaffClick.bind(this);
//     this.handleHomepageClick = this.handleHomepageClick.bind(this);
//     this.state = {
//       isStaff: false
//     }
//   }
//   handleStaffClick() {
//     this.setState({isStaff: true});
//   }
//   handleHompageClick() {
//     this.setState({isStaff: false});
//
//   }
//   render() {
//     const isStaff = this.state.isStaff;
//
//     let button = null;
//     if (isStaff) {
//       button = <HomepageButton onClick={this.handleHomepageClick}/>;
//     } else {
//       button = <StaffButton onClick={this.handleStaffClick}/>;
//     }
//
//     return (
//       <Mains>
//         <div>
//           <Greeting isStaff={isStaff}/>
//           {button}
//         </div>
//       </Mains>
//     );
//   }
// }
// function StaffGreeting(props) {
//   return <div id="staff">STAFF</div>;
// }
//
// function HomepageGreeting(props) {
//   return (
//     <div>
//       <TitleImage src={titleImage}/>
//       <BeyondTheNotes/>
//       <Included/>
//     </div>
//   )
// }
//
// function Greeting(props) {
//   const isStaff = props.isStaff;
//   if (isStaff) {
//     return <StaffGreeting/>;
//   }
//   return <HomepageGreeting/>;
// }
//
// function StaffButton(props) {
//   return (<button onClick={props.onClick}>
//     Staff
//   </button>);
// }
//
// function HomepageButton(props) {
//   return (<button onClick={props.onClick}>
//     Homepage
//   </button>);
// }
//
//
// //   const isStaff = this state.isStaff;
// //   let button = null;
// //   if (isStaff) {
// //     button = <StaffButton onClick={this.handleStaffClick} />;
// //   } else {
// //     button = <HomePageButton onClick={this.handleHomePageButton} />;
// //
// //   }
// //   var homePage = '';
// //   var staff = '';
// //   return (
// //     <Mains>
// //       <div className={homePage}>
// //         <TitleImage src={titleImage}/>
// //         <BeyondTheNotes />
// //         <Included />
// //       </div>
// //       <div className={staff}>
// //       </div>
// //     </Mains>
// //   )
// // }
//
// export default Main
