import { useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import StakePopup from "../components/StakePopup";
import PortalPopup from "../components/PortalPopup";
import AccountConnectedPopup from "../components/AccountConnectedPopup";
import ConnectWalletPopoup from "../components/ConnectWalletPopoup";
import styles from "./Earn.module.css";

const Earn = () => {
  const [isStakePopupOpen, setStakePopupOpen] = useState(false);
  const [isStakePopup1Open, setStakePopup1Open] = useState(false);
  const navigate = useNavigate();
  const [isAccountConnectedPopupOpen, setAccountConnectedPopupOpen] =
    useState(false);
  const [isConnectWalletPopoupPopupOpen, setConnectWalletPopoupPopupOpen] =
    useState(false);

  const openStakePopup = useCallback(() => {
    setStakePopupOpen(true);
  }, []);

  const closeStakePopup = useCallback(() => {
    setStakePopupOpen(false);
  }, []);

  const openStakePopup1 = useCallback(() => {
    setStakePopup1Open(true);
  }, []);

  const closeStakePopup1 = useCallback(() => {
    setStakePopup1Open(false);
  }, []);

  const onMenuItemHorizontalitemClick = useCallback(() => {
    navigate("/exchange");
  }, [navigate]);

  const onMenuItemHorizontalitem1Click = useCallback(() => {
    navigate("/liquidity");
  }, [navigate]);

  const onMenuItemHorizontalitem2Click = useCallback(() => {
    navigate("/earn");
  }, [navigate]);

  const openAccountConnectedPopup = useCallback(() => {
    setAccountConnectedPopupOpen(true);
  }, []);

  const closeAccountConnectedPopup = useCallback(() => {
    setAccountConnectedPopupOpen(false);
  }, []);

  const openConnectWalletPopoupPopup = useCallback(() => {
    setConnectWalletPopoupPopupOpen(true);
  }, []);

  const closeConnectWalletPopoupPopup = useCallback(() => {
    setConnectWalletPopoupPopupOpen(false);
  }, []);

  const [token, setToken] = useState('');
  const [amount, setAmount] = useState('');
  const [earnedAmount, setEarnedAmount] = useState('');

  const handleTokenChange = (e) => {
    setToken(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleEarnedAmountButtonClick = async () => {
    // Instantiate the provider and the contract
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const earn = new ethers.Contract(EARN_ADDRESS, EarnArtifact.abi, provider.getSigner());

    // Call the contract function to get the earned amount
    const earnedAmount = await earn.getRewardAmount();
    setEarnedAmount(earnedAmount);

  };

  return (
    <>
      <div className={styles.earn}>
        <div className={styles.earnChild} />
        <div className={styles.card}>
          <div className={styles.row1}>
            <div className={styles.row11}>
              <div className={styles.cardmining}>
                <div className={styles.top}>
                  <div className={styles.iconicon2Coin}>
                    <img
                      className={styles.groupIcon}
                      alt=""
                      src="/group8.svg"
                    />
                  </div>
                  <div className={styles.tableCelladditionalComponen}>
                    <div className={styles.header}>BUSD-USDT LP</div>
                  </div>
                </div>
                <div className={styles.frameParent}>
                  <div className={styles.parent}>
                    <b className={styles.b}>25.70%</b>
                    <div className={styles.wethApr}>BUSD APR</div>
                  </div>
                  <b className={styles.b1}>/</b>
                  <div className={styles.parent}>
                    <b className={styles.b}>35.07%</b>
                    <div className={styles.wethApr}>USDT APR</div>
                  </div>
                </div>
                <div className={styles.mbListItemBasicParent}>
                  <div className={styles.mbListItemBasic}>
                    <div className={styles.mbListItemitemLeft}>
                      <div className={styles.caption}>Reward Token</div>
                    </div>
                    <div className={styles.mbListItemitemRight}>
                      <div className={styles.iconWrapper}>
                        <img
                          className={styles.iconftr}
                          alt=""
                          src="/iconftr7.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.mbListItemBasic}>
                    <div className={styles.mbListItemitemLeft}>
                      <div className={styles.caption}>Value Locked</div>
                    </div>
                    <div className={styles.mbListItemitemRight1}>
                      <div className={styles.caption}>$635,577.11</div>
                    </div>
                  </div>
                  <div className={styles.mbListItemBasic}>
                    <div className={styles.mbListItemitemLeft}>
                      <div className={styles.caption}>My Share</div>
                    </div>
                    <div className={styles.mbListItemitemRight1}>
                      <div className={styles.caption}>$0 (0%)</div>
                    </div>
                  </div>
                  <div className={styles.mbListItemBasic}>
                    <div className={styles.mbListItemitemLeft}>
                      <div className={styles.caption}>Available Balance</div>
                    </div>
                    <div className={styles.mbListItemitemRight1}>
                      <div className={styles.caption}>$0</div>
                    </div>
                  </div>
                  <div className={styles.mbListItemBasic}>
                    <div className={styles.mbListItemitemLeft}>
                      <div className={styles.caption}>My Reward</div>
                    </div>
                    <div className={styles.mbListItemitemRight4}>
                      <div className={styles.caption}>$0</div>
                      <div className={styles.iconWrapper}>
                        <img
                          className={styles.icongift}
                          alt=""
                          src="/icongift3.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.bottom}>
                  <div className={styles.btn}>
                    <b className={styles.text}>StakeBUSD</b>
                  </div>
                  <div className={styles.btn}>
                    <b className={styles.text}>StakeUSDT</b>
                  </div>
                </div>
              </div>
              <div className={styles.cardmining}>
                <div className={styles.top}>
                  <div className={styles.iconicon2Coin}>
                    <img
                      className={styles.groupIcon}
                      alt=""
                      src="/group9.svg"
                    />
                  </div>
                  <div className={styles.tableCelladditionalComponen}>
                    <div className={styles.header}>USDC-BUSD LP</div>
                  </div>
                </div>
                <div className={styles.frameParent}>
                  <div className={styles.parent}>
                    <b className={styles.b}>29.41%</b>
                    <div className={styles.wethApr}>USDC APR</div>
                  </div>
                  <b className={styles.b1}>/</b>
                  <div className={styles.parent}>
                    <b className={styles.b}>25.87%</b>
                    <div className={styles.wethApr}>BUSD APR</div>
                  </div>
                </div>
                <div className={styles.mbListItemBasicParent}>
                  <div className={styles.mbListItemBasic}>
                    <div className={styles.mbListItemitemLeft}>
                      <div className={styles.caption}>Reward Token</div>
                    </div>
                    <div className={styles.mbListItemitemRight}>
                      <div className={styles.iconWrapper}>
                        <img
                          className={styles.iconftr}
                          alt=""
                          src="/iconftr8.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.mbListItemBasic}>
                    <div className={styles.mbListItemitemLeft}>
                      <div className={styles.caption}>Value Locked</div>
                    </div>
                    <div className={styles.mbListItemitemRight1}>
                      <div className={styles.caption}>$925,576.05</div>
                    </div>
                  </div>
                  <div className={styles.mbListItemBasic}>
                    <div className={styles.mbListItemitemLeft}>
                      <div className={styles.caption}>My Share</div>
                    </div>
                    <div className={styles.mbListItemitemRight1}>
                      <div className={styles.caption}>$0 (0%)</div>
                    </div>
                  </div>
                  <div className={styles.mbListItemBasic}>
                    <div className={styles.mbListItemitemLeft}>
                      <div className={styles.caption}>Available Balance</div>
                    </div>
                    <div className={styles.mbListItemitemRight1}>
                      <div className={styles.caption}>$0</div>
                    </div>
                  </div>
                  <div className={styles.mbListItemBasic}>
                    <div className={styles.mbListItemitemLeft}>
                      <div className={styles.caption}>My Reward</div>
                    </div>
                    <div className={styles.mbListItemitemRight4}>
                      <div className={styles.caption}>$0</div>
                      <div className={styles.iconWrapper}>
                        <img
                          className={styles.icongift}
                          alt=""
                          src="/icongift4.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.innerWrapper}>
                  <button className={styles.btn2} onClick={openStakePopup}>
                    <b className={styles.text2}>StakeUSDC</b>
                  </button>
                  <button className={styles.btn2} onClick={openStakePopup1}>
                    <b className={styles.text2}>StakeBUSD</b>
                  </button>
                </div>
              </div>
              <div className={styles.cardmining}>
                <div className={styles.top}>
                  <div className={styles.iconicon2Coin}>
                    <img
                      className={styles.groupIcon}
                      alt=""
                      src="/group10.svg"
                    />
                  </div>
                  <div className={styles.tableCelladditionalComponen}>
                    <div className={styles.header}>DAI-USDC LP</div>
                  </div>
                </div>
                <div className={styles.frameParent}>
                  <div className={styles.parent}>
                    <b className={styles.b}>320.73%</b>
                    <div className={styles.wethApr}>APR</div>
                  </div>
                  <b className={styles.b7}>/</b>
                  <div className={styles.parent2}>
                    <b className={styles.b}>35.07%</b>
                    <div className={styles.wethApr}>WETH APR</div>
                  </div>
                </div>
                <div className={styles.mbListItemBasicParent}>
                  <div className={styles.mbListItemBasic}>
                    <div className={styles.mbListItemitemLeft}>
                      <div className={styles.caption}>Reward Token</div>
                    </div>
                    <div className={styles.mbListItemitemRight}>
                      <div className={styles.iconWrapper}>
                        <img
                          className={styles.iconftr}
                          alt=""
                          src="/iconftr9.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.mbListItemBasic}>
                    <div className={styles.mbListItemitemLeft}>
                      <div className={styles.caption}>Value Locked</div>
                    </div>
                    <div className={styles.mbListItemitemRight1}>
                      <div className={styles.caption}>$735,577.11</div>
                    </div>
                  </div>
                  <div className={styles.mbListItemBasic}>
                    <div className={styles.mbListItemitemLeft}>
                      <div className={styles.caption}>My Share</div>
                    </div>
                    <div className={styles.mbListItemitemRight1}>
                      <div className={styles.caption}>$0 (0%)</div>
                    </div>
                  </div>
                  <div className={styles.mbListItemBasic}>
                    <div className={styles.mbListItemitemLeft}>
                      <div className={styles.caption}>Available Balance</div>
                    </div>
                    <div className={styles.mbListItemitemRight1}>
                      <div className={styles.caption}>$0</div>
                    </div>
                  </div>
                  <div className={styles.mbListItemBasic}>
                    <div className={styles.mbListItemitemLeft}>
                      <div className={styles.caption}>My Reward</div>
                    </div>
                    <div className={styles.mbListItemitemRight4}>
                      <div className={styles.caption}>$0</div>
                      <div className={styles.iconWrapper}>
                        <img
                          className={styles.icongift}
                          alt=""
                          src="/icongift5.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.bottom2}>
                  <div className={styles.btn}>
                  <button className={styles.btn2} onClick={openStakePopup}>
                    <b className={styles.text}>Stake</b>
                  </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.row11}>
            <div className={styles.cardmining}>
              <div className={styles.top}>
                <div className={styles.iconicon2Coin}>
                  {/* <img className={styles.groupIcon} alt="" /> */}
                </div>
                <div className={styles.tableCelladditionalComponen}>
                  <div className={styles.header}>CORE</div>
                  {/* <input value={token} onChange={handleTokenChange} /> */}
                </div>
              </div>
              <div className={styles.frameParent}>
                <div className={styles.parent2}>
                  <b className={styles.b}>16.14%</b>
                  <div className={styles.wethApr}>WETH APR</div>
                </div>
                <b className={styles.b7}>/</b>
                <div className={styles.parent}>
                  <b className={styles.b}>32%</b>
                  <div className={styles.wethApr}>APR</div>
                </div>
              </div>
              <div className={styles.mbListItemBasicParent}>
                <div className={styles.mbListItemBasic}>
                  <div className={styles.mbListItemitemLeft}>
                    <div className={styles.caption}>Reward Token</div>
                  </div>
                  <div className={styles.mbListItemitemRight}>
                    <div className={styles.iconicon2Coin4}>
                      <img
                        className={styles.iconiconarrowDown}
                        alt=""
                        src="/group11.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.mbListItemBasic}>
                  <div className={styles.mbListItemitemLeft}>
                    <div className={styles.caption}>Value Locked</div>
                  </div>
                  <div className={styles.mbListItemitemRight1}>
                    <div className={styles.caption}>$925,576.05</div>
                  </div>
                </div>
                <div className={styles.mbListItemBasic}>
                  <div className={styles.mbListItemitemLeft}>
                    <div className={styles.caption}>Exchange Rate</div>
                  </div>
                  <div className={styles.mbListItemitemRight1}>
                    <div className={styles.caption}> 1 $CORE = 1 $stCORE</div>
                  </div>
                </div>
                <div className={styles.mbListItemBasic}>
                  <div className={styles.mbListItemitemLeft}>
                    <div className={styles.caption}>Available Balance</div>
                  </div>
                  <div className={styles.mbListItemitemRight1}>
                    <div className={styles.caption}>$0</div>
                  </div>
                </div>
                <div className={styles.mbListItemBasic}>
                  <div className={styles.mbListItemitemLeft}>
                    <div className={styles.caption}>My Reward</div>
                  </div>
                  <div className={styles.mbListItemitemRight4}>
                    <div className={styles.caption}>$0</div>
                    <div className={styles.iconWrapper}>
                      <img
                        className={styles.icongift}
                        alt=""
                        src="/icongift6.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.bottom2}>
                <div className={styles.btn}>
                <button className={styles.btn2} onClick={openStakePopup}>
                  <b className={styles.text}>Stake</b>
                </button>
                </div>
              </div>
            </div>
            <div className={styles.cardmining}>
              <div className={styles.top}>
                <div className={styles.iconicon2Coin}>
                  <img className={styles.groupIcon} alt="" src="/group12.svg" />
                </div>
                <div className={styles.tableCelladditionalComponen}>
                  <div className={styles.header}>FTR-1INCH LP</div>
                </div>
              </div>
              <div className={styles.frameParent}>
                <div className={styles.parent}>
                  <b className={styles.b}>584.73%</b>
                  <div className={styles.wethApr}>APR</div>
                </div>
                <b className={styles.b7}>/</b>
                <div className={styles.parent2}>
                  <b className={styles.b}>35.07%</b>
                  <div className={styles.wethApr}>WETH APR</div>
                </div>
              </div>
              <div className={styles.mbListItemBasicParent}>
                <div className={styles.mbListItemBasic}>
                  <div className={styles.mbListItemitemLeft}>
                    <div className={styles.caption}>Reward Token</div>
                  </div>
                  <div className={styles.iconicon2Coin4}>
                    <img
                      className={styles.groupIcon6}
                      alt=""
                      src="/group13.svg"
                    />
                  </div>
                </div>
                <div className={styles.mbListItemBasic}>
                  <div className={styles.mbListItemitemLeft}>
                    <div className={styles.caption}>Value Locked</div>
                  </div>
                  <div className={styles.mbListItemitemRight1}>
                    <div className={styles.caption}>$270,790.5</div>
                  </div>
                </div>
                <div className={styles.mbListItemBasic}>
                  <div className={styles.mbListItemitemLeft}>
                    <div className={styles.caption}>My Share</div>
                  </div>
                  <div className={styles.mbListItemitemRight1}>
                    <div className={styles.caption}>$378.47 (0.13%)</div>
                  </div>
                </div>
                <div className={styles.mbListItemBasic}>
                  <div className={styles.mbListItemitemLeft}>
                    <div className={styles.caption}>Available Balance</div>
                  </div>
                  <div className={styles.mbListItemitemRight1}>
                    <div className={styles.caption}>$0</div>
                  </div>
                </div>
                <div className={styles.mbListItemBasic}>
                  <div className={styles.mbListItemitemLeft}>
                    <div className={styles.caption}>My Reward</div>
                  </div>
                  <div className={styles.mbListItemitemRight4}>
                    <div className={styles.caption}>$3.5</div>
                    <div className={styles.iconWrapper}>
                      <img
                        className={styles.icongift}
                        alt=""
                        src="/icongift4.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.bottom4}>
                <div className={styles.btn6}>
                  <div className={styles.content}>
                    <img
                      className={styles.iconiconarrowDown}
                      alt=""
                      src="/icongift7.svg"
                    />
                    <b className={styles.text}>Claim</b>
                  </div>
                </div>
                <div className={styles.btn7}>
                  <b className={styles.text}>Stake</b>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.nav}>
          <div className={styles.menu}>
            <div className={styles.menu1}>
              <div className={styles.menu2}>
                <div className={styles.menuItemHorizontalitem}>
                  <div className={styles.title}>HOBO FINANCE</div>
                </div>
                <Link
                  className={styles.menuItemHorizontalitem1}
                  to="/exchange"
                  onClick={onMenuItemHorizontalitemClick}
                >
                  <div className={styles.title}>Exchange</div>
                </Link>
                <Link
                  className={styles.menuItemHorizontalitem2}
                  to="/liquidity"
                  onClick={onMenuItemHorizontalitem1Click}
                >
                  <div className={styles.flyout}>
                    <div className={styles.verticalMenuItem2ndLevelG}>
                      <div className={styles.verticalMenuItem2ndLevel}>
                        <div className={styles.innerWrapper}>
                          <div className={styles.iconWrapper}>
                            <img
                              className={styles.iconliquidityMining}
                              alt=""
                              src="/iconliquiditymining12.svg"
                            />
                          </div>
                          <div className={styles.content1}>
                            <div className={styles.ndTitleLevel}>
                              Liquidity Mining
                            </div>
                            <div className={styles.ndTitleLevel1}>
                              Earn FTR rewards by staking assets for market
                              making
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.verticalMenuItem2ndLevel1}>
                        <div className={styles.innerWrapper}>
                          <div className={styles.iconWrapper}>
                            <img
                              className={styles.icontradingMining}
                              alt=""
                              src="/icontradingmining6.svg"
                            />
                          </div>
                          <div className={styles.content1}>
                            <div className={styles.ndTitleLevel}>
                              Trading Mining
                            </div>
                            <div className={styles.ndTitleLevel1}>
                              Successfully complete a trade to get a FTR airdrop
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.verticalMenuItem2ndLevel}>
                        <div className={styles.innerWrapper}>
                          <div className={styles.iconWrapper}>
                            <img
                              className={styles.icontradingMining}
                              alt=""
                              src="/iconvftr.svg"
                            />
                          </div>
                          <div className={styles.content1}>
                            <div className={styles.ndTitleLevel}>vFTR</div>
                            <div className={styles.ndTitleLevel1}>
                              Mint vFTR to earn more DoDo
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.body}>
                    <div className={styles.title}>Liquidity</div>
                  </div>
                </Link>
                <Link
                  className={styles.menuItemHorizontalitem3}
                  to="/earn"
                  onClick={onMenuItemHorizontalitem2Click}
                >
                  <a className={styles.title3}>Earn</a>
                  <div className={styles.iconWrapper}>
                    {/* <img className={styles.iconiconarrowDown} alt="" /> */}
                  </div>
                </Link>
              </div>
            </div>
            <div className={styles.itemRight}>
              <button
                className={styles.iconuser}
                onClick={openAccountConnectedPopup}
              >
                <img className={styles.groupIcon7} alt="" src="/group14.svg" />
              </button>
              <div className={styles.address}>
                <div className={styles.eth}>
                  <div className={styles.iconcolorDot}>
                    <img
                      className={styles.vectorIcon}
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                  <div className={styles.text}>CORE</div>
                </div>
                <button
                  className={styles.tag}
                  onClick={openConnectWalletPopoupPopup}
                >
                  <div className={styles.text8}>Connect to a wallet</div>
                </button>
              </div>
              <button className={styles.btn8}>
                <img
                  className={styles.iconiconarrowDown}
                  alt=""
                  src="/iconmenu.svg"
                />
              </button>
            </div>
          </div>
          <img className={styles.hoboLogoIcon} alt="" src="/image-3@2x.png" />
        </div>
        <div className={styles.title4}>
          <b className={styles.provideLiquidityEarn}>
            Provide Liquidity, Earn CORE.
          </b>
          <b className={styles.b15}>$105,786,890.44</b>
          <div className={styles.numberParent}>
            <div className={styles.text}>Total Value Locked (TVL)</div>
            <div className={styles.texttext}>
              <div className={styles.text}>Tutorial</div>
              <img
                className={styles.iconiconarrowDown}
                alt=""
                src="/iconwrapper1.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.search}>
          <div className={styles.input}>
            <input
              className={styles.label}
              type="text"
              placeholder="Search by token symbol or pool address"
            />
            <img className={styles.iconsearch} alt="" src="/iconsearch3.svg" />
          </div>
          <button className={styles.btn9}>
            <b className={styles.text10}>Search</b>
          </button>
        </div>
        <div className={styles.top5}>
          <div className={styles.tabsStyle2}>
            <button className={styles.tabItemstyle2Itemmedium}>
              <div className={styles.tab}>Active</div>
            </button>
            <button className={styles.tabItemstyle2Itemmedium}>
              <div className={styles.tab}>Ended</div>
            </button>
            <div className={styles.tabItemstyle2Itemmedium2}>
              <div className={styles.title}>Tab</div>
            </div>
          </div>
          <div className={styles.switchParent}>
            <div className={styles.switch}>
              <div className={styles.text}>My Liquidity Only</div>
              <div className={styles.switch1}>
                <img
                  className={styles.iconiconarrowDown}
                  alt=""
                  src="/nob.svg"
                />
              </div>
            </div>
            <div className={styles.dropdown}>
              <div className={styles.label1}>Available Balance</div>
              <img
                className={styles.iconiconarrowDown1}
                alt=""
                src="/iconiconarrowdown.svg"
              />
            </div>
          </div>
        </div>
        <img
          className={styles.liquidityMining41}
          alt=""
          src="/liquidity--mining-4-1@2x.png"
        />
        <img className={styles.icondai} alt="" src="/icondai.svg" />
      </div>
      {isStakePopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeStakePopup}
        >
          <StakePopup onClose={closeStakePopup} />
        </PortalPopup>
      )}
      {isStakePopup1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeStakePopup1}
        >
          <StakePopup onClose={closeStakePopup1} />
        </PortalPopup>
      )}
      {isAccountConnectedPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeAccountConnectedPopup}
        >
          <AccountConnectedPopup onClose={closeAccountConnectedPopup} />
        </PortalPopup>
      )}
      {isConnectWalletPopoupPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeConnectWalletPopoupPopup}
        >
          <ConnectWalletPopoup onClose={closeConnectWalletPopoupPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default Earn;
