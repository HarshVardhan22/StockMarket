import React from "react";
import styles from "./Return.module.css";
import Fade from "react-reveal/Fade";
import { VscTriangleUp, VscTriangleDown } from "react-icons/vsc";
const Return = ({ returns, netValue }) => {
  
  return (
    <div className={styles.container}>
      <Fade top cascade>
        <div>{!returns && <h1>Check your Investment!</h1>}</div>
  
        <div>{!returns && <h1 className={styles.profit}>Profit</h1>}</div>
     
        <div>{!returns && <h2>OR</h2>}</div>
   
        <div>{!returns && <h1 className={styles.loss}>Loss</h1>}</div>
      </Fade>

      <div>
        {returns > 0 && (
          <Fade top>
            <h1>
              Great you are making{" "}
              <span className={styles.profit}>Profit!</span>
            </h1>
          </Fade>
        )}
      </div>

      <div>
        {returns <= 0 && (
          <Fade top>
            <h1>
              Oops! you are <spam className={styles.loss}>Loosing Money</spam>
            </h1>
          </Fade>
        )}
      </div>

      <div>
        {returns > 0 && (
          <Fade left >
            <div className={styles.icons}>
            <VscTriangleUp className={styles.profit} style={{fontSize:"24px"}} />
            <h2 className={styles.profit}>{returns.toFixed(3)}%</h2>
            </div>
           
          </Fade>
        )}
      </div>

      <div>
        {returns <= 0 && (
          <Fade left>
            <VscTriangleDown className={styles.loss} style={{fontSize:"24px"}} />
            <h3 className={styles.loss}>{returns.toFixed(3)}</h3>
          </Fade>
        )}
      </div>

      <div>
        {returns > 0 && (
          <Fade right>
            <h1>
              Total Profit : <span className={styles.profit}>{netValue}</span>
            </h1>
          </Fade>
        )}
      </div>
      <div>
        {returns <= 0 && (
          <Fade right>
            <h1>
              Total Loss : <span className={styles.loss}>{netValue}</span>
            </h1>
          </Fade>
        )}
      </div>
    </div>
  );
};

export default Return;
