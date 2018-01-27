class StaffControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleStaffClick = this.handleStaffClick.bind(this);
    this.handleHomepageClick = this.handleHomepageClick.bind(this);
    this.state = {isStaff: false};
  }

  handleStaffClick() {
    this.setState({isStaff: true});
  }

  handleHomepageClick() {
    this.setState({isStaff: false});
  }

  render() {
    const isStaff = this.state.isStaff;

    let button = null;
    if (isStaff) {
      button = <HomepageButton onClick={this.handleHomepageClick} />;
    } else {
      button = <StaffButton onClick={this.handleStaffClick} />;
    }

    return (
      <div>
        <Greeting isStaff={isStaff} />
        {button}
      </div>
    );
  }
}

function StaffGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function HomepageGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isStaff = props.isStaff;
  if (isStaff) {
    return <StaffGreeting />;
  }
  return <HomepageGreeting />;
}

function StaffButton(props) {
  return (
    <button onClick={props.onClick}>
      Staff
    </button>
  );
}

function HomepageButton(props) {
  return (
    <button onClick={props.onClick}>
      Homepage
    </button>
  );
}

ReactDOM.render(
  <StaffControl />,
  document.getElementById('root')
);
