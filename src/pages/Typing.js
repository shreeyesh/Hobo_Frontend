import { useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import AccountConnectedPopup from "../components/AccountConnectedPopup";
import PortalPopup from "../components/PortalPopup";
import ConnectWalletPopoup from "../components/ConnectWalletPopoup";
import styles from "./Typing.module.css";

const Typing = () => {
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

  const onBtnContainer4Click = useCallback(() => {
    navigate("/orderconfirm");
  }, [navigate]);

  return (
    <>
      <div className={styles.typing}>
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
                              src="/iconliquiditymining3.svg"
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
                              src="/icontradingmining3.svg"
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
                              src="/iconvftr2.svg"
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
                <img className={styles.groupIcon} alt="" src="/group2.svg" />
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
          <div className={styles.buttonGroup}>
            <div className={styles.btn1}>
              <img
                className={styles.iconiconarrowDown}
                alt=""
                src="/iconreset2.svg"
              />
            </div>
            <div className={styles.btn1}>
              <img
                className={styles.iconiconarrowDown}
                alt=""
                src="/icongift2.svg"
              />
            </div>
            <div className={styles.btn1}>
              <img className={styles.iconshare} alt="" src="/iconshare2.svg" />
            </div>
            <div className={styles.btn1}>
              <img
                className={styles.iconiconarrowDown}
                alt=""
                src="/iconsetting1.svg"
              />
            </div>
          </div>
          <div className={styles.pay}>
            <div className={styles.note}>
              <div className={styles.core}>Pay</div>
              <div className={styles.available500}>Available: 500</div>
            </div>
            <div className={styles.inputGroupwDropdown}>
              <div className={styles.dropdown}>
                <img
                  className={styles.iconiconarrowDown1}
                  alt=""
                  src="/iconiconarrowdown.svg"
                />
                <div className={styles.label}>BUSD</div>
                <img className={styles.iconbusd} alt="" src="/iconbusd1.svg" />
              </div>
              <div className={styles.input}>
                <div className={styles.placeholder}>
                  <b className={styles.b}>320|</b>
                </div>
              </div>
            </div>
          </div>
          <img
            className={styles.iconiconarrowDown2}
            alt=""
            src="/iconiconarrowdown22.svg"
          />
          <div className={styles.pay}>
            <div className={styles.note}>
              <div className={styles.core}>Receive (Estimated)</div>
              <div className={styles.available1200}>Available: 1,200</div>
            </div>
            <div className={styles.inputGroupwDropdown1}>
              <div className={styles.dropdown}>
                <img
                  className={styles.iconiconarrowDown1}
                  alt=""
                  src="/iconiconarrowdown.svg"
                />
                <div className={styles.label}>USDC</div>
                <img className={styles.iconbusd} alt="" src="/iconusdc3.svg" />
              </div>
              <div className={styles.input1}>
                <b className={styles.b}>320.16</b>
              </div>
            </div>
          </div>
          <div className={styles.rate}>
            <div className={styles.core}>1 BUSD = 1.0005 USDC</div>
            <img
              className={styles.iconiconarrowDown}
              alt=""
              src="/iconiconarrowexchangeswap.svg"
            />
          </div>
          <div className={styles.btn5}>
            <div className={styles.btn6} onClick={onBtnContainer4Click}>
              <b className={styles.core}>Confirm Order</b>
            </div>
            <div className={styles.enterAnAmount}>
              Enter an amount to see more trading details
            </div>
          </div>
          <div className={styles.dividerhorizontal} />
          <div className={styles.pay}>
            <div className={styles.note}>
              <div className={styles.rate}>
                <div className={styles.core}>Slippage Tolerance</div>
                <img
                  className={styles.iconquestionHelp}
                  alt=""
                  src="/iconquestionhelp.svg"
                />
              </div>
              <div className={styles.div}>3%</div>
            </div>
            <div className={styles.note}>
              <div className={styles.eth}>
                <img className={styles.iconquestionHelp} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.mbListicon6}>
          <img className={styles.coinIcon} alt="" src="/coin3.svg" />
          <div className={styles.rate}>
            <div className={styles.b}>
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
        <div className={styles.tags}>
          <button className={styles.tag1}>
            <div className={styles.text3}>24H</div>
          </button>
          <button className={styles.tag1}>
            <div className={styles.text3}>1W</div>
          </button>
          <button className={styles.tag1}>
            <div className={styles.text3}>1M</div>
          </button>
        </div>
        <div className={styles.chart}>
          <div className={styles.chart1}>
            <div className={styles.chartChild} />
            <img className={styles.chartItem} alt="" src="/vector-173.svg" />
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
              <div className={styles.div1}>
                <div className={styles.tableCellmultilineLarge}>
                  <div className={styles.body1}>
                    <div className={styles.iconWrapper}>
                      <div className={styles.iconmtv}>
                        <img
                          className={styles.image2Icon}
                          alt=""
                          src="/image-2@2x.png"
                        />
                      </div>
                    </div>
                    <div className={styles.text6}>
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
                  <div className={styles.text7}>Success</div>
                </div>
              </div>
              <div className={styles.div1}>
                <div className={styles.tableCellmultilineLarge}>
                  <div className={styles.body1}>
                    <div className={styles.iconWrapper}>
                      <img
                        className={styles.iconftr}
                        alt=""
                        src="/iconftr3.svg"
                      />
                    </div>
                    <div className={styles.text6}>
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
                  <div className={styles.text7}>Success</div>
                </div>
              </div>
            </div>
            <div className={styles.tableCell}>
              <div className={styles.tableCelltext2}>
                <div className={styles.text7}>Receiveed</div>
              </div>
              <div className={styles.tableCelltext3}>
                <div className={styles.text7}>Paid</div>
              </div>
              <div className={styles.tableCelltext4}>
                <div className={styles.text7}>Price</div>
              </div>
              <div className={styles.tableCelltext5}>
                <div className={styles.text7}>Status</div>
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

export default Typing;
