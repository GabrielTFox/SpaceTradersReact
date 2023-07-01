// External Imports
import React from 'react';
import axios from 'axios';

// Styling Imports
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Internal Imports
import CurrentUser from './components/CurrentUser';
import MenuCards from './components/MenuCards';

// Coniguration Imports
import { access_token } from './config/configurations';

class App extends React.Component {
  state = {
    self_data: {},
    account_id: "",
    symbol: "",
    hq: "",
    credits: "",
    faction: "",
  }

  componentDidMount() {
    const config = {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + access_token
      }
    };
    const url = "https://api.spacetraders.io/v2/my/agent";

    axios.get(url, config)
      .then(res => {
        const self_data = res.data.data;
        const account_id = self_data.accountId;
        const symbol = self_data.symbol;
        const hq = self_data.headquarters;
        const credits = self_data.credits;
        const faction = self_data.startingFaction;
        this.setState({ account_id });
        this.setState({ symbol });
        this.setState({ hq });
        this.setState({ credits });
        this.setState({ faction });
      })
  }

  render() {
    return (
      <div className="App">
        <CurrentUser symbol={this.state.symbol} credits={this.state.credits} faction={this.state.faction} />
        <MenuCards />
      </div>
    );
  }
}

export default App;
