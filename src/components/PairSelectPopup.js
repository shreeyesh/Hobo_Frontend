import styles from "./PairSelectPopup.module.css";

const PairSelectPopup = ({ onClose }) => {
  const [isPairSelectPopupOpen, setPairSelectPopupOpen] = useState(false);
  const closePairSelectPopup = useCallback(() => {
    setPairSelectPopupOpen(false);
  }, []);
  return (
    <div className={styles.pairselectpopup}>
      <div className={styles.selectAPairPopup}>
        <div className={styles.bg} />
        <div className={styles.titleicon}>
          <img
            className={styles.iconiconarrowLeft2}
            alt=""
            src="/iconiconarrowleft2.svg"
          />
          <div className={styles.title}>Select A Pair</div>
        </div>
        <div className={styles.input}>
          <div className={styles.label}>Enter the token symbol or address</div>
          <img className={styles.iconsearch} alt="" src="/iconsearch.svg" />
        </div>
        <div className={styles.listTokens}>
          <div className={styles.mbListItemBasic}>
            <div className={styles.mbListItemitemLeft}>
              <div className={styles.iconWrapper}>
                <img className={styles.iconftr} alt="" src="/iconftr.svg" />
              </div>
              <button className={styles.btn2} onClick={closePairSelectPopup}>
              <div className={styles.title1}>CORE</div>
            </button>
            </div>
            <div className={styles.mbListItemitemRight}>
              <div className={styles.paragraph}>0</div>
            </div>
          </div>
          <div className={styles.mbListItemBasic}>
            <div className={styles.mbListItemitemLeft}>
              <div className={styles.iconWrapper}>
                <img className={styles.iconeth} alt="" src="/iconeth.svg" />
              </div>
              <div className={styles.title1}>ETH</div>
            </div>
            <div className={styles.mbListItemitemRight}>
              <div className={styles.paragraph}>0</div>
            </div>
          </div>
          <div className={styles.mbListItemBasic}>
            <div className={styles.mbListItemitemLeft}>
              <div className={styles.iconWrapper}>
                <img className={styles.iconeth} alt="" src="/iconusdc1.svg" />
              </div>
              <div className={styles.title1}>USDC</div>
            </div>
            <div className={styles.mbListItemitemRight}>
              <div className={styles.paragraph}>0</div>
            </div>
          </div>
          <div className={styles.mbListItemBasic}>
            <div className={styles.mbListItemitemLeft}>
              <div className={styles.iconWrapper}>
                <img
                  className={styles.iconeth}
                  alt=""
                  src="/iconicon1inch.svg"
                />
              </div>
              <div className={styles.title1}>1INCH</div>
            </div>
            <div className={styles.mbListItemitemRight}>
              <div className={styles.paragraph}>0</div>
            </div>
          </div>
          <div className={styles.mbListItemBasic}>
            <div className={styles.mbListItemitemLeft}>
              <div className={styles.iconWrapper}>
                <img
                  className={styles.iconeth}
                  alt=""
                  src="/iconiconaave.svg"
                />
              </div>
              <div className={styles.title1}>AAVE</div>
            </div>
            <div className={styles.mbListItemitemRight}>
              <div className={styles.paragraph}>0</div>
            </div>
          </div>
          <div className={styles.mbListItemBasic}>
            <div className={styles.mbListItemitemLeft}>
              <div className={styles.iconWrapper}>
                <img
                  className={styles.iconeth}
                  alt=""
                  src="/iconiconampl.svg"
                />
              </div>
              <div className={styles.title1}>AMPL</div>
            </div>
            <div className={styles.mbListItemitemRight}>
              <div className={styles.paragraph}>0</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PairSelectPopup;
