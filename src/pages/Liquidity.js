import { useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import AccountConnectedPopup from "../components/AccountConnectedPopup";
import PortalPopup from "../components/PortalPopup";
import ConnectWalletPopoup from "../components/ConnectWalletPopoup";
import styles from "./Liquidity.module.css";

const Liquidity = () => {
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

  const onBtn1Click = useCallback(() => {
    navigate("/liquidityempty");
  }, [navigate]);

  return (
    <>
      <div className={styles.liquidity}>
        <div className={styles.right}>
          <div className={styles.cardaddLiquid}>
            <div className={styles.bottom}>
              <img className={styles.bgIcon} alt="" src="/bg.svg" />
              <div className={styles.content}>
                By adding liquidity, you will earn fees proportional to your
                share of the pool on all trades for this pair. Fees are added to
                the pool, accrue in real time, and can be claimed when you
                withdraw your liquidity.
              </div>
            </div>
            <div className={styles.top}>
              <div className={styles.bg} />
              <div className={styles.btn}>
                <b className={styles.text}>Add Liquidity</b>
              </div>
              <div className={styles.title}>Select a pair</div>
              <div className={styles.title1}>Select a pool</div>
              <div className={styles.inputGroup}>
                <div className={styles.inputBigIcondefault}>
                  <div className={styles.left}>
                    <div className={styles.iconWrapper}>
                      <img
                        className={styles.iconeth}
                        alt=""
                        src="/iconeth1.svg"
                      />
                    </div>
                    <div className={styles.label}>ETH</div>
                  </div>
                  <img
                    className={styles.iconiconarrowDown}
                    alt=""
                    src="/iconiconarrowdown.svg"
                  />
                </div>
                <img
                  className={styles.iconiconarrowDown}
                  alt=""
                  src="/iconplus3.svg"
                />
                <div className={styles.inputBigIcondefault1}>
                  <div className={styles.left}>
                    <div className={styles.iconWrapper}>
                      <img
                        className={styles.iconeth}
                        alt=""
                        src="/iconusdc2.svg"
                      />
                    </div>
                    <div className={styles.label}>USDC</div>
                  </div>
                  <img
                    className={styles.iconiconarrowDown}
                    alt=""
                    src="/iconiconarrowdown.svg"
                  />
                </div>
              </div>
              <div className={styles.btn1}>
                <b className={styles.text1}>Create a pool</b>
              </div>
              <div className={styles.input}>
                <div className={styles.text2}>0x75c2...ff34</div>
                <img
                  className={styles.iconiconarrowDown2}
                  alt=""
                  src="/iconiconarrowdown.svg"
                />
              </div>
              <div className={styles.mbListbasic7}>
                <div className={styles.list}>
                  <div className={styles.mbListItemBasic}>
                    <div className={styles.mbListItemitemLeft}>
                      <div className={styles.text}>Total Liquidity</div>
                    </div>
                    <div className={styles.mbListItemitemRight}>
                      <div className={styles.label}>9,577.514455</div>
                      <div className={styles.iconWrapper}>
                        <img
                          className={styles.iconeth}
                          alt=""
                          src="/iconeth2.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.mbListItemBasic1}>
                    <div className={styles.mbListItemitemRight1}>
                      <div className={styles.label}>10,831,937.7876</div>
                      <div className={styles.iconWrapper}>
                        <img
                          className={styles.iconeth}
                          alt=""
                          src="/iconusdc2.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.myLiquidity}>My Liquidity</div>
        <div className={styles.table}>
          <div className={styles.tableCellheader}>
            <div className={styles.header}>No results found</div>
          </div>
          <div className={styles.title4}>
            <div className={styles.tableCelltext}>
              <div className={styles.text3}>Pool</div>
            </div>
            <div className={styles.tableCelltext1}>
              <div className={styles.text3}>My Liquidity</div>
            </div>
            <div className={styles.tableCelltext2}>
              <div className={styles.text3}>Action</div>
            </div>
          </div>
        </div>
        <div className={styles.nav}>
          <div className={styles.menu}>
            <div className={styles.menu1}>
              <div className={styles.menu2}>
                <div className={styles.menuItemHorizontalitem}>
                  <div className={styles.label}>HOBO FINANCE</div>
                </div>
                <Link
                  className={styles.menuItemHorizontalitem1}
                  to="/exchange"
                  onClick={onMenuItemHorizontalitemClick}
                >
                  <div className={styles.label}>Exchange</div>
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
                              src="/iconliquiditymining5.svg"
                            />
                          </div>
                          <div className={styles.content2}>
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
                              src="/icontradingmining1.svg"
                            />
                          </div>
                          <div className={styles.content2}>
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
                          <div className={styles.content2}>
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
                    <div className={styles.label}>Liquidity</div>
                  </div>
                </Link>
                <Link
                  className={styles.menuItemHorizontalitem3}
                  to="/earn"
                  onClick={onMenuItemHorizontalitem2Click}
                >
                  <a className={styles.title8}>Earn</a>
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
                <img className={styles.groupIcon} alt="" src="/group3.svg" />
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
                  <div className={styles.text6}>Connect to a wallet</div>
                </button>
              </div>
              <button className={styles.btn2}>
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
        <div className={styles.action}>
          <div className={styles.mask} />
          <div className={styles.modal}>
            <div className={styles.title9}>Risk Disclaimer</div>
            <div className={styles.content5}>
              <div className={styles.input1}>
                <div className={styles.text7}>
                  Market making and liquidity provision involve risk of loss and
                  are not suitable for every user. The valuation and prices of
                  token assets may fluctuate substantially, and, as a result,
                  users may see profits that are below expectations, or even
                  sustain losses.
                </div>
              </div>
              <div className={styles.checkbox1}>
                <div className={styles.checkbox}>
                  <img
                    className={styles.iconiconarrowDown}
                    alt=""
                    src="/checkboxinput.svg"
                  />
                  <div className={styles.text}>
                    <p className={styles.iHaveRead}>
                      I have read, understand, and agree to the
                    </p>
                    <p className={styles.termsOfService}>Terms of Service.</p>
                  </div>
                </div>
              </div>
            </div>
            <button className={styles.btn3} onClick={onBtn1Click}>
              <b className={styles.text9}>Continue</b>
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

export default Liquidity;
