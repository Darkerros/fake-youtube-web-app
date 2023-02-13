import React, {useEffect} from 'react';
import styles from './App.module.css'
import Header from "../Header/Header";
import {api} from "../../api/api";

function App() {

    useEffect(() => {
        api.videos().then(data => console.log(data.items))
    },[])

  return (
    <div className={`${styles.app} ${styles.app_theme_light}`}>
      <Header/>
    </div>
  );
}

export default App;
