import React from 'react';
import './home.css';
import Button from './../button/Button';
import { useHistory } from 'react-router-dom';

export default function Home() {
  const history = useHistory();

  return(
    <div className="Home">
      <div className="link-list">
        <p><a href='https://www.instagram.com/ucmskate/'>Instagram</a></p>
        <p><a href='https://catlife.ucmerced.edu/organization/sk8club'>CatLife</a></p>
        <p>Box</p>
        <Button label="Who's skating campus right now?" onClick={() => history.push('/whoisskating')}/>
      </div>
    </div>
  );
}