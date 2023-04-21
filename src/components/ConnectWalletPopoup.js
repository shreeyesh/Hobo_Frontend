import { useState, useCallback } from "react";
import AccountConnectedPopup from "./AccountConnectedPopup";
import PortalPopup from "./PortalPopup";
import styles from "./ConnectWalletPopoup.module.css";

const ConnectWalletPopoup = ({ onClose }) => {
  const [isAccountConnectedPopupOpen, setAccountConnectedPopupOpen] =
    useState(false);
  const [isAccountConnectedPopup1Open, setAccountConnectedPopup1Open] =
    useState(false);

  const openAccountConnectedPopup = useCallback(() => {
    setAccountConnectedPopupOpen(true);
  }, []);

  const closeAccountConnectedPopup = useCallback(() => {
    setAccountConnectedPopupOpen(false);
  }, []);

  const openAccountConnectedPopup1 = useCallback(() => {
    setAccountConnectedPopup1Open(true);
  }, []);

  const closeAccountConnectedPopup1 = useCallback(() => {
    setAccountConnectedPopup1Open(false);
  }, []);

  return (
    <>
      <div className={styles.connectwalletPopoup}>
        <div className={styles.modalSuccess}>
          <div className={styles.nav}>
            <div className={styles.titleicon}>
              <img
                className={styles.iconiconarrowLeft2}
                alt=""
                src="/iconiconarrowleft2.svg"
              />
              <div className={styles.title}>Connect Wallet</div>
            </div>
            <button className={styles.iconcloseSmall} onClick={onClose}>
              <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
              <img className={styles.vectorIcon} alt="" src="/vector2.svg" />
            </button>
          </div>
          <div className={styles.checkbox}>
            <input className={styles.checkboxInput} type="checkbox" required />
            <div className={styles.iHaveReadContainer}>
              <span>{`I have read, understand, and agree to the `}</span>
              <span className={styles.termsOfService}>Terms of Service.</span>
            </div>
          </div>
          <div className={styles.list}>
            <button className={styles.button} onClick={onClose}>
              <img
                className={styles.iconmetaMask}
                alt=""
                src="/iconmetamask.svg"
              />
              <div className={styles.metaMask}>Meta Mask</div>
            </button>
            <button className={styles.button}>
              <img className={styles.iconmetaMask} alt="" src="/iconbnb.svg" />
              <div className={styles.metaMask}>Binance Chain Wallet</div>
            </button>
            <button
              className={styles.button}
              onClick={openAccountConnectedPopup}
            >
              <img
                className={styles.iconmetaMask}
                alt=""
                src="/iconwalletconnect.svg"
              />
              <div className={styles.metaMask}>WalletConnect</div>
            </button>
            <button
              className={styles.button}
              onClick={openAccountConnectedPopup1}
            >
              <img
                className={styles.iconmetaMask}
                alt=""
                src="/iconportis.svg"
              />
              <div className={styles.metaMask}>Portis</div>
            </button>
          </div>
        </div>
      </div>
      {isAccountConnectedPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeAccountConnectedPopup}
        >
          <AccountConnectedPopup onClose={closeAccountConnectedPopup} />
        </PortalPopup>
      )}
      {isAccountConnectedPopup1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeAccountConnectedPopup1}
        >
          <AccountConnectedPopup onClose={closeAccountConnectedPopup1} />
        </PortalPopup>
      )}
    </>
  );
};

export default ConnectWalletPopoup;
