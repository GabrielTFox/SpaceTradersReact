import axios from 'axios';
import { useState } from 'react';
import { access_token } from '../config/configurations';

function UserStatus() {

    const [status, setStatus] = useState({});

    const config = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + access_token
        }
    };
    const url = "https://api.spacetraders.io/v2/my/agent";
    axios.get(url, config)
        .then(res => {
            console.log("From Method: \n" + res.data.data.symbol);
            const self_data = res.data.data;
            setStatus(self_data);
        })
    

        return status;
}

export default UserStatus;