import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SharePopup.module.css";

const SharePopup = ({ onClose }) => {
  const navigate = useNavigate();

  const onVectorIcon1Click = useCallback(() => {
    navigate("/exchange");
  }, [navigate]);

  return (
    <div className={styles.sharepopup}>
      <div className={styles.modalSuccess}>
        <div className={styles.nav}>
          <div className={styles.titleicon}>
            <img
              className={styles.iconiconarrowLeft2}
              alt=""
              src="/iconiconarrowleft2.svg"
            />
            <div className={styles.title}>Invite Your Friends!</div>
          </div>
          <button className={styles.iconcloseSmall} onClick={onClose}>
            <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
            <img
              className={styles.vectorIcon1}
              alt=""
              src="/vector2.svg"
              onClick={onVectorIcon1Click}
            />
          </button>
        </div>
        <img
          className={styles.ftribeioQrCodeIcon}
          alt=""
          src="/ftribeioqrcode.svg"
        />
        <div className={styles.btnParent}>
          <button className={styles.btn} onClick={onClose}>
            <img className={styles.iconcopy} alt="" src="/iconcopy.svg" />
          </button>
          <div className={styles.title1}>Copy Link</div>
        </div>
      </div>
    </div>
  );
};

export default SharePopup;
