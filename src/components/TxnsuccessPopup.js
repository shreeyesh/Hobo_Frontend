import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./TxnsuccessPopup.module.css";

const TxnsuccessPopup = ({ onClose }) => {
  const navigate = useNavigate();

  const onIconcloseSmallClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onBtnClick = useCallback(() => {
    window.open("https://etherscan.io/");
  }, []);

  return (
    <div className={styles.txnsuccessPopup}>
      <div className={styles.modalSuccess}>
        <div className={styles.nav}>
          <button
            className={styles.iconcloseSmall}
            onClick={onIconcloseSmallClick}
          >
            <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
            <img className={styles.vectorIcon} alt="" src="/vector2.svg" />
          </button>
        </div>
        <div className={styles.illus1} />
        <div className={styles.info}>
          <div className={styles.title}>Transaction Submitted</div>
          <div className={styles.title1}>
            Exchanging 320 BUSD for 320.16 USDC
          </div>
        </div>
        <button className={styles.btn} onClick={onBtnClick}>
          <b className={styles.text}>View on Etherscan</b>
        </button>
      </div>
      <img className={styles.hoboLogoIcon} alt="" src="/hobologo@2x.png" />
    </div>
  );
};

export default TxnsuccessPopup;
