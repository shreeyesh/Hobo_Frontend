import { useState, useCallback } from "react";
import PairSelectPopup from "./PairSelectPopup";
import PortalPopup from "./PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./StakePopup.module.css";
import { ethers } from 'ethers';
// import EarnArtifact from './artifacts/contracts/Earn.sol/Earn.json';
import { Web3Provider } from '@ethersproject/providers';
import EarnABI from '../abi/Earn.json';
// import Earn from "../pages/Earn";

const StakePopup = ({ onClose }) => {
  const [isPairSelectPopupOpen, setPairSelectPopupOpen] = useState(false);
  const navigate = useNavigate();
  const [token, setToken] = useState('');
  const [amount, setAmount] = useState('');
  const [earnedAmount, setEarnedAmount] = useState('');

  const openPairSelectPopup = useCallback(() => {
    setPairSelectPopupOpen(true);
  }, []);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleTokenChange = (e) => {
    setToken(e.target.value);
  };

  const closePairSelectPopup = useCallback(() => {
    setPairSelectPopupOpen(false);
  }, []);

  const onBtnClick = useCallback(() => {
    navigate("/stakeExt");
  }, [navigate]);

  const onTabItemstyle2ItemmediumClick = useCallback(() => {
    navigate("/unstake1");
  }, [navigate]);

  const handleEarnedAmountButtonClick = async () => {
    // Instantiate the provider and the contract
    const provider = new Web3Provider(window.ethereum);
    console.log(EarnABI.EarnABI,"EarnABI")
    const earn = new ethers.Contract("0x93EC6372c4893c2699061A37165b2AA3BBEA9a2a", EarnABI.EarnABI, provider.getSigner());
    console.log("23")
    // Call the contract function to get the earned amount
    const earnedAmount = await earn.getRewardAmount(0x7E01c0ED9147554B13b57Edf7Ab197A9EfB99251);
    console.log("earnedAmount",earnedAmount)
    setEarnedAmount(earnedAmount);
    console.log("4")
  };
  console.log(amount,"Amount")
  return (
    <>
      <div className={styles.stakePopup}>
        <div className={styles.popUp}>
          <div className={styles.popUpChild} />
          <div className={styles.amountStake}>
            <div className={styles.receive}>
              <div className={styles.receive1}>
                <div className={styles.title}>
                  <div className={styles.stake}>Stake</div>
                  <div className={styles.available1200}>Available: 1,200</div>
                </div>
                <div className={styles.inputGroupwDropdown}>
                  <button
                    className={styles.dropdown}
                    onClick={openPairSelectPopup}
                  >
                    <img
                      className={styles.iconiconarrowDown}
                      alt=""
                      src="/iconiconarrowdown.svg"
                    />
                    <div className={styles.label}>CORE</div>
                    <img
                      className={styles.iconusdc}
                      alt=""
                      src="/iconusdc2.svg"
                    />
                  </button>
                  <input className={styles.input} type="text" placeholder="0" onChange={handleAmountChange} />
                </div>
              </div>
            </div>
            <div className={styles.rate}>
              <div className={styles.texttextParent}>
                <div className={styles.texttext}>
                  <div className={styles.stake}>Amount Staked</div>
                  <img
                    className={styles.iconWrapper}
                    alt=""
                    src="/iconwrapper2.svg"
                  />
                </div>
                <div className={styles.rate1}>
                  <div className={styles.stake}>23.95721 ≈ 23.98</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.btn} onClick={handleEarnedAmountButtonClick}>
          <button className={styles.btn1} onClick={handleEarnedAmountButtonClick}>
            <b className={styles.stake}>{`Stake & Claim Rewards`} </b>
            </button>
          </div>
          <div className={styles.claimRewards}>
            <div className={styles.content}>
              <p className={styles.singleSidedLiquidityMining}>
                Single-Sided Liquidity Staking
              </p>
              <p className={styles.singleSidedLiquidityMining}>
                {`First, you need to deposit your CORE to get back equal amount of stCORE as you stake `}
                {/* <span className={styles.wethusdc}>WETH/USDC</span> liquidity
                pool on this page. */}
              </p>
            </div>
            <div className={styles.listInfo}>
              <div className={styles.mbListItemBasic}>
                <div className={styles.mbListItemitemLeft}>
                  <div className={styles.stake}>APY</div>
                </div>
                <div className={styles.mbListItemitemRight}>
                  <div className={styles.stake}>36.38%</div>
                </div>
              </div>
              <div className={styles.mbListItemBasic}>
                <div className={styles.mbListItemitemLeft}>
                  <div className={styles.stake}>Claimable Rewards</div>
                </div>
                <div className={styles.mbListItemitemRight1}>
                  <div className={styles.stake}>
                    <span>0.000540 CORE</span>
                    <span className={styles.span}>{` - `}</span>
                    <span className={styles.span1}>$0.0022</span>
                  </div>
                </div>
              </div>
            </div>
            <button className={styles.btn1} onClick={onBtnClick}>
              <b className={styles.text2}>Claim Rewards</b>
            </button>
          </div>
          <button className={styles.iconcloseSmall} onClick={onClose}>
            <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
            <img className={styles.vectorIcon} alt="" src="/vector2.svg" />
          </button>
          <div className={styles.tabsStyle2}>
            <div className={styles.tabItemstyle2Itemmedium}>
              <div className={styles.tab}>Stake</div>
            </div>
            <button
              className={styles.tabItemstyle2Itemmedium1}
              onClick={onTabItemstyle2ItemmediumClick}
            >
              <div className={styles.tab1}>Unstake</div>
            </button>
            <div className={styles.tabItemstyle2Itemmedium2}>
              <div className={styles.tab}>Tab</div>
            </div>
          </div>
        </div>
      </div>
      {isPairSelectPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePairSelectPopup}
        >
          <PairSelectPopup onClose={closePairSelectPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default StakePopup;
