import React from 'react';
import axios from 'axios';
import {access_token} from '../config/configurations';

class SelfAnalysis extends React.Component {
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
        headers:{
          "Content-Type": "application/json",
          "Authorization": "Bearer " + access_token
        }
      };
      const url = "https://api.spacetraders.io/v2/my/agent";

      axios.get(url, config)
      .then(res=> {
        const self_data = res.data.data;
        const account_id = self_data.accountId;
        const symbol = self_data.symbol;
        const hq = self_data.headquarters;
        const credits = self_data.credits;
        const faction = JSON.stringify(self_data.startingFaction);
        this.setState({account_id});
        this.setState({symbol});
        this.setState({hq});
        this.setState({credits});
        this.setState({faction});
        console.log("Self Data: \n" + self_data);
        console.log("Account ID: \n" + account_id);
      })
  }

  render() {
    return (
        <div>
            <p>Account ID: {this.state.account_id}</p>
            <p>Identification: {this.state.symbol}</p>
            <p>HQ: {this.state.hq}</p>
            <p>Credits: {this.state.credits}</p>
            <p>Faction: {this.state.faction}</p>
        </div>
    )
  }
}

export default SelfAnalysis;