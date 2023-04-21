import { useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import AccountConnectedPopup from "../components/AccountConnectedPopup";
import PortalPopup from "../components/PortalPopup";
import ConnectWalletPopoup from "../components/ConnectWalletPopoup";
import styles from "./Settings.module.css";

const Settings = () => {
  const navigate = useNavigate();
  const [isAccountConnectedPopupOpen, setAccountConnectedPopupOpen] =
    useState(false);
  const [isConnectWalletPopoupPopupOpen, setConnectWalletPopoupPopupOpen] =
    useState(false);

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

  const onIconiconarrowLeft2Click = useCallback(() => {
    navigate("/33typing");
  }, [navigate]);

  return (
    <>
      <div className={styles.settings}>
        <div className={styles.bg} />
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
                              src="/iconliquiditymining2.svg"
                            />
                          </div>
                          <div className={styles.content}>
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
                              src="/icontradingmining2.svg"
                            />
                          </div>
                          <div className={styles.content}>
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
                              src="/iconvftr1.svg"
                            />
                          </div>
                          <div className={styles.content}>
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
                  </div>
                </Link>
              </div>
            </div>
            <div className={styles.itemRight}>
              <button
                className={styles.iconuser}
                onClick={openAccountConnectedPopup}
              >
                <img className={styles.groupIcon} alt="" src="/group1.svg" />
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
                  <div className={styles.core}>CORE</div>
                </div>
                <button
                  className={styles.tag}
                  onClick={openConnectWalletPopoupPopup}
                >
                  <div className={styles.text}>Connect to a wallet</div>
                </button>
              </div>
              <button className={styles.btn}>
                <img
                  className={styles.iconiconarrowDown}
                  alt=""
                  src="/iconmenu.svg"
                />
              </button>
            </div>
          </div>
          <img className={styles.image3Icon} alt="" src="/image-3@2x.png" />
        </div>
        <div className={styles.cardExchange}>
          <div className={styles.body1}>
            <div className={styles.nav1}>
              <div className={styles.left}>
                <img
                  className={styles.iconiconarrowLeft2}
                  alt=""
                  src="/iconiconarrowleft21.svg"
                  onClick={onIconiconarrowLeft2Click}
                />
                <div className={styles.title4}>Exchange Settings</div>
              </div>
            </div>
            <div className={styles.slippageTolerance}>
              <div className={styles.title5}>
                <div className={styles.title}>Slippage Tolerance</div>
              </div>
              <div className={styles.tags}>
                <button className={styles.tag1}>
                  <div className={styles.text1}>0.5%</div>
                </button>
                <button className={styles.tag1}>
                  <div className={styles.text1}>1%</div>
                </button>
                <button className={styles.tag1}>
                  <div className={styles.text1}>3%</div>
                </button>
                <input className={styles.input} type="text" placeholder="20" />
                <div className={styles.core}>%</div>
              </div>
            </div>
            <div className={styles.slippageTolerance}>
              <div className={styles.title5}>
                <div className={styles.title}>Transaction Deadline</div>
              </div>
              <div className={styles.tags}>
                <input className={styles.input} type="text" placeholder="20" />
                <div className={styles.core}>Min</div>
              </div>
            </div>
            <div className={styles.transactionDeadline2}>
              <div className={styles.title7}>
                <div className={styles.title}>Expert Mode</div>
              </div>
              <button className={styles.switch}>
                <img
                  className={styles.iconiconarrowDown}
                  alt=""
                  src="/nob.svg"
                />
              </button>
            </div>
          </div>
        </div>
        <div className={styles.mbListicon6}>
          <img className={styles.coinIcon} alt="" src="/coin2.svg" />
          <div className={styles.left}>
            <div className={styles.busdusdc}>
              <span className={styles.busd}>BUSD/</span>
              <b className={styles.usdc}>USDC</b>
            </div>
            <img
              className={styles.iconiconarrowDown}
              alt=""
              src="/iconiconarrowexchangeswap.svg"
            />
          </div>
        </div>
        <b className={styles.usdc1}>1.0005 USDC</b>
        <div className={styles.price}>
          <div className={styles.core}>+227.543364 USDC</div>
          <div className={styles.number1}>Past 24 Hours</div>
        </div>
        <div className={styles.tag4}>
          <button className={styles.tag5}>
            <div className={styles.text1}>24H</div>
          </button>
          <button className={styles.tag5}>
            <div className={styles.text1}>1W</div>
          </button>
          <button className={styles.tag5}>
            <div className={styles.text1}>1M</div>
          </button>
        </div>
        <div className={styles.chart}>
          <div className={styles.chart1}>
            <div className={styles.chartChild} />
            <img className={styles.chartItem} alt="" src="/vector-172.svg" />
          </div>
          <div className={styles.time}>
            <div className={styles.core}>11:30 AM</div>
            <div className={styles.core}>7:30 PM</div>
            <div className={styles.core}>3:30 AM</div>
            <div className={styles.core}>10:35 AM</div>
          </div>
        </div>
        <div className={styles.history}>
          <div className={styles.orderHistory}>Order History</div>
          <div className={styles.table}>
            <div className={styles.list}>
              <div className={styles.div}>
                <div className={styles.tableCellmultilineLarge}>
                  <div className={styles.body2}>
                    <div className={styles.iconWrapper}>
                      <div className={styles.iconmtv}>
                        <img
                          className={styles.image2Icon}
                          alt=""
                          src="/image-2@2x.png"
                        />
                      </div>
                    </div>
                    <div className={styles.text9}>
                      <div className={styles.title}>132.51853983 MTV</div>
                      <div className={styles.subtitle}>16 hrs</div>
                    </div>
                  </div>
                </div>
                <div className={styles.tableCellheader}>
                  <div className={styles.header}>0,00143200 BNB</div>
                </div>
                <div className={styles.tableCellheader1}>
                  <div className={styles.header}>
                    <span>{`MTV / `}</span>
                    <span className={styles.bnb}>BNB</span>
                    <span> 0,00001080</span>
                  </div>
                </div>
                <div className={styles.tableCelltext}>
                  <div className={styles.text10}>Success</div>
                </div>
              </div>
              <div className={styles.div}>
                <div className={styles.tableCellmultilineLarge}>
                  <div className={styles.body2}>
                    <div className={styles.iconWrapper}>
                      <img
                        className={styles.iconftr}
                        alt=""
                        src="/iconftr2.svg"
                      />
                    </div>
                    <div className={styles.text9}>
                      <div className={styles.title}>1.109 FTR</div>
                      <div className={styles.subtitle}>16 hrs</div>
                    </div>
                  </div>
                </div>
                <div className={styles.tableCellheader}>
                  <div className={styles.header}>2.4 BNB</div>
                </div>
                <div className={styles.tableCellheader1}>
                  <div className={styles.header}>
                    <span>{`FTR / `}</span>
                    <span className={styles.bnb}>BNB</span>
                    <span>{` 461,07790652 `}</span>
                  </div>
                </div>
                <div className={styles.tableCelltext}>
                  <div className={styles.text10}>Success</div>
                </div>
              </div>
            </div>
            <div className={styles.tableCell}>
              <div className={styles.tableCelltext2}>
                <div className={styles.text10}>Receiveed</div>
              </div>
              <div className={styles.tableCelltext3}>
                <div className={styles.text10}>Paid</div>
              </div>
              <div className={styles.tableCelltext4}>
                <div className={styles.text10}>Price</div>
              </div>
              <div className={styles.tableCelltext5}>
                <div className={styles.text10}>Status</div>
              </div>
            </div>
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

export default Settings;
