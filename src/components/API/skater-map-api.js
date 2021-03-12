import axios from 'axios';
const getSkaters_url = process.env.REACT_APP_env === 'dev'
    ? 'http://localhost:5001/whoisskating/us-central1/getSkaters'
    : 'https://us-central1-whoisskating.cloudfunctions.net/getSkaters';

const addSkater_url = process.env.REACT_APP_env === 'dev'
    ? 'http://localhost:5001/whoisskating/us-central1/addSkater'
    : 'https://us-central1-whoisskating.cloudfunctions.net/addSkater';

    const addSkater = (skater) => {
    const dest = addSkater_url;
    console.log(skater);

    return axios({
        method: 'post',
        url: dest,
        data: skater,
        headers: {'Content-Type': 'application/json'},
    })
        .then((res) => {
            return res.data;
            }
        )
        .catch((error) => {
            console.log(error);
        });
}

const getSkaters = () => {
    const dest = getSkaters_url;

    return axios({
        method: 'get',
        url: dest,
        headers: {'Access-Control-Allow-Origin': '*'},
    })
        .then((res) => {
            return res.data;
        })
        .catch((error) => {
            console.log(error);
        });
}

// const getMessage = (id) => {
//     const dest = `${API_URL}/skater-map/${id}`;

//     return axios({
//         method: 'get',
//         url: dest,
//     })
//         .then((res) => {
//             return res.data.data;
//         })
//         .catch((error) => {
//             console.log(error);
//         });
// }

export {addSkater, getSkaters};