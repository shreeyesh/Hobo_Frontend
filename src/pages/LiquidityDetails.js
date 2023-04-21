import { useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import SharePopup from "../components/SharePopup";
import PortalPopup from "../components/PortalPopup";
import AccountConnectedPopup from "../components/AccountConnectedPopup";
import ConnectWalletPopoup from "../components/ConnectWalletPopoup";
import styles from "./LiquidityDetails.module.css";

const LiquidityDetails = () => {
  const navigate = useNavigate();
  const [isSharePopupOpen, setSharePopupOpen] = useState(false);
  const [isAccountConnectedPopupOpen, setAccountConnectedPopupOpen] =
    useState(false);
  const [isConnectWalletPopoupPopupOpen, setConnectWalletPopoupPopupOpen] =
    useState(false);

  const onBtnClick = useCallback(() => {
    navigate("/liquidityempty");
  }, [navigate]);

  const openSharePopup = useCallback(() => {
    setSharePopupOpen(true);
  }, []);

  const closeSharePopup = useCallback(() => {
    setSharePopupOpen(false);
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

  return (
    <>
      <div className={styles.liquidityDetails}>
        <div className={styles.right}>
          <div className={styles.top}>
            <div className={styles.bg} />
            <button className={styles.btn} onClick={onBtnClick}>
              <b className={styles.text}>Edit Liquidity</b>
            </button>
          </div>
          <div className={styles.topParent}>
            <div className={styles.top1}>
              <div className={styles.mbListItemBasic}>
                <div className={styles.mbListItemitemLeft}>
                  <div className={styles.content}>0x24ea...d449</div>
                </div>
                <div className={styles.mbListItemitemRight}>
                  <div className={styles.iconWrapper}>
                    <button
                      className={styles.iconshare}
                      onClick={openSharePopup}
                    >
                      <img
                        className={styles.groupIcon}
                        alt=""
                        src="/group6.svg"
                      />
                    </button>
                  </div>
                  <div className={styles.iconWrapper}>
                    <button className={styles.iconcopy}>
                      <img
                        className={styles.vectorIcon}
                        alt=""
                        src="/vector6.svg"
                      />
                      <img
                        className={styles.vectorIcon1}
                        alt=""
                        src="/vector7.svg"
                      />
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles.tag}>
                <div className={styles.text1}>Public Pool</div>
              </div>
            </div>
            <div className={styles.analytic}>
              <div className={styles.row1}>
                <div className={styles.mbListicon5}>
                  <img
                    className={styles.iconLeft}
                    alt=""
                    src="/icon-left.svg"
                  />
                  <div className={styles.list}>
                    <div className={styles.mbListItemBasic1}>
                      <div className={styles.mbListItemitemLeft1}>
                        <div className={styles.title}>46</div>
                      </div>
                    </div>
                    <div className={styles.mbListItemBasic2}>
                      <div className={styles.mbListItemitemLeft1}>
                        <div className={styles.content}>Traders (24H)</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.mbListicon5}>
                  <div className={styles.mbListItemitemLeft}>
                    <div className={styles.iconWrapper}>
                      <img
                        className={styles.iconLeft}
                        alt=""
                        src="/iconplus32.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.list}>
                    <div className={styles.mbListItemBasic1}>
                      <div className={styles.mbListItemitemLeft1}>
                        <div className={styles.title}>$1,123.24K</div>
                      </div>
                    </div>
                    <div className={styles.mbListItemBasic2}>
                      <div className={styles.mbListItemitemLeft1}>
                        <div className={styles.content}>Total Liquidity</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.row1}>
                <div className={styles.mbListicon5}>
                  <div className={styles.mbListItemitemLeft}>
                    <div className={styles.iconWrapper}>
                      <img
                        className={styles.iconvolumn}
                        alt=""
                        src="/iconvolumn.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.list}>
                    <div className={styles.mbListItemBasic1}>
                      <div className={styles.mbListItemitemLeft1}>
                        <div className={styles.title}>$30.44K</div>
                      </div>
                    </div>
                    <div className={styles.mbListItemBasic2}>
                      <div className={styles.mbListItemitemLeft1}>
                        <div className={styles.content}>Volume (24H)</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.mbListicon5}>
                  <div className={styles.mbListItemitemLeft}>
                    <div className={styles.iconWrapper}>
                      <img
                        className={styles.iconvolumn}
                        alt=""
                        src="/money.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.list}>
                    <div className={styles.mbListItemBasic1}>
                      <div className={styles.mbListItemitemLeft1}>
                        <div className={styles.title}>$91.27</div>
                      </div>
                    </div>
                    <div className={styles.mbListItemBasic2}>
                      <div className={styles.mbListItemitemLeft1}>
                        <div className={styles.content}>Fees (24H)</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.totalLiquidity}>
              <div className={styles.content}>Total Liquidity</div>
              <div className={styles.chart}>
                <img className={styles.chartChild} alt="" src="/frame-56.svg" />
                <div className={styles.frameParent}>
                  <div className={styles.iconcolorDotParent}>
                    <div className={styles.iconcolorDot}>
                      <img
                        className={styles.vectorIcon2}
                        alt=""
                        src="/vector3.svg"
                      />
                    </div>
                    <div className={styles.content}>
                      37,970.428294 ETH (49.74%)
                    </div>
                  </div>
                  <div className={styles.iconcolorDotParent}>
                    <div className={styles.iconcolorDot}>
                      <img
                        className={styles.vectorIcon2}
                        alt=""
                        src="/vector4.svg"
                      />
                    </div>
                    <div className={styles.content}>
                      14,274,115.297198 USDC (50.26%)
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.totalLiquidity}>
              <div className={styles.content}>My Liquidity</div>
              <div className={styles.mbListItemBasic9}>
                <div className={styles.iconcolorDotParent}>
                  <div className={styles.iconWrapper}>
                    <img
                      className={styles.iconvolumn}
                      alt=""
                      src="/iconeth6.svg"
                    />
                  </div>
                  <div className={styles.paragraph}>9,577.514455</div>
                </div>
                <div className={styles.mbListItemitemRight1}>
                  <div className={styles.iconWrapper}>
                    <img
                      className={styles.iconvolumn}
                      alt=""
                      src="/iconusdc7.svg"
                    />
                  </div>
                  <div className={styles.paragraph}>10,831,937.7876</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.mbListItemBasic10}>
          <div className={styles.mbListItemitemLeft}>
            <div className={styles.content}>Create a pool for free</div>
          </div>
          <div className={styles.mbListItemitemRight2}>
            <div className={styles.content}>/ 0x24ea...d449</div>
          </div>
        </div>
        <div className={styles.nav}>
          <div className={styles.menu}>
            <div className={styles.menu1}>
              <div className={styles.menu2}>
                <div className={styles.menuItemHorizontalitem}>
                  <div className={styles.paragraph}>HOBO FINANCE</div>
                </div>
                <Link
                  className={styles.menuItemHorizontalitem1}
                  to="/exchange"
                  onClick={onMenuItemHorizontalitemClick}
                >
                  <div className={styles.paragraph}>Exchange</div>
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
                              src="/iconliquiditymining11.svg"
                            />
                          </div>
                          <div className={styles.content7}>
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
                              src="/icontradingmining5.svg"
                            />
                          </div>
                          <div className={styles.content7}>
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
                              src="/iconvftr3.svg"
                            />
                          </div>
                          <div className={styles.content7}>
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
                    <div className={styles.paragraph}>Liquidity</div>
                  </div>
                </Link>
                <Link
                  className={styles.menuItemHorizontalitem3}
                  to="/earn"
                  onClick={onMenuItemHorizontalitem2Click}
                >
                  <a className={styles.title7}>Earn</a>
                  <div className={styles.iconWrapper}>
                    <img className={styles.iconLeft} alt="" />
                  </div>
                </Link>
              </div>
            </div>
            <div className={styles.itemRight}>
              <button
                className={styles.iconuser}
                onClick={openAccountConnectedPopup}
              >
                <img className={styles.groupIcon1} alt="" src="/group5.svg" />
              </button>
              <div className={styles.address}>
                <div className={styles.mbListItemitemLeft}>
                  <div className={styles.iconcolorDot2}>
                    <img
                      className={styles.vectorIcon2}
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                  <div className={styles.content}>CORE</div>
                </div>
                <button
                  className={styles.tag1}
                  onClick={openConnectWalletPopoupPopup}
                >
                  <div className={styles.text2}>Connect to a wallet</div>
                </button>
              </div>
              <button className={styles.btn1}>
                <img className={styles.iconLeft} alt="" src="/iconmenu.svg" />
              </button>
            </div>
          </div>
          <img className={styles.image3Icon} alt="" src="/image-3@2x.png" />
        </div>
        <div className={styles.top2}>
          <div className={styles.iconicon2Coin}>
            <img className={styles.groupIcon2} alt="" src="/group7.svg" />
          </div>
          <div className={styles.tableCelladditionalComponen}>
            <div className={styles.ethUsdcLp}>ETH-USDC LP</div>
          </div>
        </div>
        <div className={styles.texttext}>
          <div className={styles.content}>1 ETH = 2607.46 USDC</div>
          <img className={styles.iconLeft} alt="" src="/iconwrapper.svg" />
        </div>
        <div className={styles.tabsStyle1}>
          <div className={styles.dividerhorizontal} />
          <div className={styles.tabs}>
            <button className={styles.tab1}>
              <a className={styles.tab}>Depth Chart</a>
            </button>
            <button className={styles.tab2}>
              <a className={styles.tab3}>Volume</a>
            </button>
            <button className={styles.tab2}>
              <a className={styles.tab4}>Fee returns</a>
            </button>
            <button className={styles.tab2}>
              <a className={styles.tab4}>Traders</a>
            </button>
            <div className={styles.tab51}>
              <div className={styles.paragraph}>Tab</div>
            </div>
            <div className={styles.tab51}>
              <div className={styles.paragraph}>Tab</div>
            </div>
          </div>
        </div>
        <div className={styles.tabsStyle11}>
          <div className={styles.dividerhorizontal} />
          <div className={styles.tabs}>
            <div className={styles.tab11}>
              <div className={styles.paragraph}>Parameters</div>
            </div>
            <button className={styles.tab2}>
              <div className={styles.tab9}>Swaps</div>
            </button>
            <button className={styles.tab2}>
              <div className={styles.tab9}>Liquidity Providers</div>
            </button>
            <div className={styles.tab51}>
              <div className={styles.paragraph}>Traders</div>
            </div>
            <div className={styles.tab51}>
              <div className={styles.paragraph}>Tab</div>
            </div>
            <div className={styles.tab51}>
              <div className={styles.paragraph}>Tab</div>
            </div>
          </div>
        </div>
        <div className={styles.tabsStyle2}>
          <button className={styles.tabItemstyle2Itemsmall}>
            <div className={styles.tab15}>Logarithmic</div>
          </button>
          <button className={styles.tabItemstyle2Itemsmall}>
            <div className={styles.tab15}>Linear</div>
          </button>
        </div>
        <div className={styles.chart1}>
          <img className={styles.chartIcon} alt="" src="/chart1.svg" />
          <div className={styles.time}>
            <div className={styles.content}>46.83</div>
            <div className={styles.content}>117.65</div>
            <div className={styles.content}>1.17K</div>
            <div className={styles.content}>2.95K</div>
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.mbListItemBasicParent}>
            <div className={styles.mbListItemBasic11}>
              <div className={styles.mbListItemitemLeft1}>
                <div className={styles.content}>Total swap volume</div>
              </div>
              <div className={styles.mbListItemitemRight3}>
                <div className={styles.paragraph}>$1,032.24</div>
              </div>
            </div>
            <div className={styles.mbListItemBasic12}>
              <div className={styles.iconcolorDotParent}>
                <div className={styles.iconWrapper}>
                  <img
                    className={styles.iconvolumn}
                    alt=""
                    src="/iconeth6.svg"
                  />
                </div>
                <div className={styles.paragraph}>1.104008 WETH</div>
              </div>
              <div className={styles.mbListItemitemRight1}>
                <div className={styles.iconWrapper}>
                  <img
                    className={styles.iconvolumn}
                    alt=""
                    src="/iconusdc7.svg"
                  />
                </div>
                <div className={styles.paragraph}> 2,867 USDC</div>
              </div>
            </div>
          </div>
          <div className={styles.mbListItemBasicParent}>
            <div className={styles.mbListItemBasic11}>
              <div className={styles.mbListItemitemLeft1}>
                <div className={styles.content}>Total swap Fee</div>
              </div>
              <div className={styles.mbListItemitemRight3}>
                <div className={styles.paragraph}>$1,032.24</div>
              </div>
            </div>
            <div className={styles.mbListItemBasic12}>
              <div className={styles.iconcolorDotParent}>
                <div className={styles.iconWrapper}>
                  <img
                    className={styles.iconvolumn}
                    alt=""
                    src="/iconeth7.svg"
                  />
                </div>
                <div className={styles.paragraph}>1.24153 WETH</div>
              </div>
              <div className={styles.mbListItemitemRight1}>
                <div className={styles.iconWrapper}>
                  <img
                    className={styles.iconvolumn}
                    alt=""
                    src="/iconusdc7.svg"
                  />
                </div>
                <div className={styles.paragraph}>3,234 USDC</div>
              </div>
            </div>
          </div>
          <div className={styles.mbListItemBasicParent}>
            <div className={styles.mbListItemBasic11}>
              <div className={styles.mbListItemitemLeft1}>
                <div className={styles.content}>Total Number of Traders</div>
              </div>
              <div className={styles.mbListItemitemRight3}>
                <div className={styles.paragraph}>$1,032.24</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.mbListItemBasicContainer}>
          <div className={styles.mbListItemBasic11}>
            <div className={styles.mbListItemitemLeft1}>
              <div className={styles.content}>Creator</div>
            </div>
            <div className={styles.mbListItemitemRight3}>
              <div className={styles.paragraph}>0xBAD7...E116</div>
            </div>
          </div>
          <div className={styles.mbListItemBasic11}>
            <div className={styles.mbListItemitemLeft1}>
              <div className={styles.content}>Creation Time</div>
            </div>
            <div className={styles.mbListItemitemRight3}>
              <div className={styles.paragraph}>2021/05/21 16:50:15</div>
            </div>
          </div>
          <div className={styles.mbListItemBasic11}>
            <div className={styles.mbListItemitemLeft1}>
              <div className={styles.content}>Fee Rate</div>
            </div>
            <div className={styles.mbListItemitemRight3}>
              <div className={styles.paragraph}>$1,032.24</div>
            </div>
          </div>
          <div className={styles.mbListItemBasic11}>
            <div className={styles.mbListItemitemLeft1}>
              <div className={styles.content}>Slippage Coefficient</div>
            </div>
            <div className={styles.mbListItemitemRight3}>
              <div className={styles.paragraph}>1</div>
            </div>
          </div>
          <div className={styles.mbListItemBasic11}>
            <div className={styles.mbListItemitemLeft1}>
              <div className={styles.content}>Min Price</div>
            </div>
            <div className={styles.mbListItemitemRight3}>
              <div className={styles.paragraph}>0.000001</div>
            </div>
          </div>
        </div>
      </div>
      {isSharePopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSharePopup}
        >
          <SharePopup onClose={closeSharePopup} />
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

export default LiquidityDetails;
