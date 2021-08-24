import { useState } from "react";
import styles from "./App.module.css";
import Form from "./Components/Form/Form";
import Return from "./Components/Return/Return";
import Fade from "react-reveal/Fade";
const App = () => {
  const [returns, setReturns] = useState();
  const [netValue, setNetValue] = useState();

  const getReturns = (input) => {
    setReturns(input);
  };

  const getNetValue = (input) => {
    setNetValue(input);
  };

  return (
    <Fade left cascaded>
     <div className={styles.container} style={{background:`${returns<-50?"red":"#25282c"}`}}>
      <div className={styles.leftContainer}>
        <Form getNetValue={getNetValue} getReturns={getReturns} />
      </div>
      <div className={styles.rightContainer}>
        <Return  returns={returns} netValue={netValue}/>
      </div>
    </div>
    </Fade>
 
  );
};

export default App;
