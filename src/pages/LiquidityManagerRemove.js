import { useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import AccountConnectedPopup from "../components/AccountConnectedPopup";
import PortalPopup from "../components/PortalPopup";
import ConnectWalletPopoup from "../components/ConnectWalletPopoup";
import styles from "./LiquidityManagerRemove.module.css";

const LiquidityManagerRemove = () => {
  const navigate = useNavigate();
  const [isAccountConnectedPopupOpen, setAccountConnectedPopupOpen] =
    useState(false);
  const [isConnectWalletPopoupPopupOpen, setConnectWalletPopoupPopupOpen] =
    useState(false);

  const onBtnClick = useCallback(() => {
    navigate("/liquidityempty");
  }, [navigate]);

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
      <div className={styles.liquidityManagerRemove}>
        <div className={styles.right}>
          <div className={styles.bottom}>
            <img className={styles.bgIcon} alt="" src="/bg1.svg" />
            <div className={styles.content}>
              Tokens can be redeemed by removing liquidity. The number of
              redeemed tokens may change due to price fluctuations.
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.bg} />
            <button className={styles.btn} onClick={onBtnClick}>
              <b className={styles.text}>Enter An Amount</b>
            </button>
            <div className={styles.content1}>
              <div className={styles.pool}>
                <div className={styles.mbListItemBasic}>
                  <div className={styles.mbListItemitemLeft}>
                    <div className={styles.core}>Pool</div>
                  </div>
                </div>
                <div className={styles.mbListItemBasic1}>
                  <div className={styles.eth}>
                    <div className={styles.title}>0x75c2...ff34</div>
                  </div>
                  <div className={styles.mbListItemitemRight}>
                    <div className={styles.iconWrapper}>
                      <img
                        className={styles.iconshare}
                        alt=""
                        src="/iconshare2.svg"
                      />
                    </div>
                    <div className={styles.iconWrapper}>
                      <img
                        className={styles.iconcopy}
                        alt=""
                        src="/iconcopy.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.pool}>
                <div className={styles.mbListItemBasic}>
                  <div className={styles.mbListItemitemLeft}>
                    <div className={styles.core}>Total Liquidity</div>
                  </div>
                </div>
                <div className={styles.mbListItemBasic3}>
                  <div className={styles.mbListItemitemLeft}>
                    <div className={styles.title1}>
                      9,601.09004 ETH / 10,773,969.7918 USDC
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.pay}>
              <div className={styles.title2}>
                <div className={styles.available0}>Available: 500</div>
              </div>
              <div className={styles.inputGroupwDropdown}>
                <div className={styles.dropdown}>
                  <img
                    className={styles.iconiconarrowDown}
                    alt=""
                    src="/iconiconarrowdown.svg"
                  />
                  <div className={styles.label}>ETH</div>
                  <img className={styles.iconeth} alt="" src="/iconeth5.svg" />
                </div>
                <input className={styles.input} type="number" placeholder="0" />
              </div>
            </div>
            <div className={styles.tabsStyle2}>
              <div className={styles.tabItemstyle2Itemlarge}>
                <div className={styles.title}>Add</div>
              </div>
              <div className={styles.tabItemstyle2Itemlarge1}>
                <div className={styles.title}>Remove</div>
              </div>
            </div>
            <div className={styles.titleicon}>
              <img
                className={styles.iconcopy}
                alt=""
                src="/iconiconarrowleft22.svg"
              />
              <img className={styles.iconshare} alt="" src="/iconshare2.svg" />
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
                              src="/iconliquiditymining10.svg"
                            />
                          </div>
                          <div className={styles.content4}>
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
                          <div className={styles.content4}>
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
                          <div className={styles.content4}>
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
                  <a className={styles.title6}>Earn</a>
                  <div className={styles.iconWrapper}>
                    <img className={styles.iconcopy} alt="" />
                  </div>
                </Link>
              </div>
            </div>
            <div className={styles.itemRight}>
              <button
                className={styles.iconuser}
                onClick={openAccountConnectedPopup}
              >
                <img className={styles.groupIcon} alt="" src="/group5.svg" />
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
                  <div className={styles.text1}>Connect to a wallet</div>
                </button>
              </div>
              <button className={styles.btn1}>
                <img className={styles.iconcopy} alt="" src="/iconmenu.svg" />
              </button>
            </div>
          </div>
          <img className={styles.image3Icon} alt="" src="/image-3@2x.png" />
        </div>
        <div className={styles.myLiquidity}>My Liquidity</div>
        <div className={styles.table}>
          <div className={styles.list}>
            <div className={styles.div}>
              <div className={styles.tableCelladditionalComponen}>
                <div className={styles.left}>
                  <img
                    className={styles.avatarIcon}
                    alt=""
                    src="/avatar15.svg"
                  />
                  <div className={styles.title}>0x75f5...1666</div>
                </div>
                <img
                  className={styles.iconshare}
                  alt=""
                  src="/iconshare2.svg"
                />
              </div>
              <div className={styles.tableCellheader}>
                <div className={styles.header}>
                  1.104008 WETH / 2,888.28 USDC
                </div>
              </div>
              <div className={styles.tableCelladditionalComponen1}>
                <div className={styles.btn2}>
                  <div className={styles.btn3}>
                    <b className={styles.core}>Manager</b>
                  </div>
                  <div className={styles.btn3}>
                    <b className={styles.core}>Details</b>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.div}>
              <div className={styles.tableCelladditionalComponen}>
                <div className={styles.left}>
                  <img
                    className={styles.avatarIcon}
                    alt=""
                    src="/avatar16.svg"
                  />
                  <div className={styles.title}>0x3đ1...077b</div>
                </div>
                <img
                  className={styles.iconshare}
                  alt=""
                  src="/iconshare2.svg"
                />
              </div>
              <div className={styles.tableCellheader}>
                <div className={styles.header}>300 DAIDAI / 300 USDC</div>
              </div>
              <div className={styles.tableCelladditionalComponen1}>
                <div className={styles.btn2}>
                  <div className={styles.btn3}>
                    <b className={styles.core}>Manager</b>
                  </div>
                  <div className={styles.btn3}>
                    <b className={styles.core}>Details</b>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.div}>
              <div className={styles.tableCelladditionalComponen}>
                <div className={styles.left}>
                  <img
                    className={styles.avatarIcon}
                    alt=""
                    src="/avatar17.svg"
                  />
                  <div className={styles.title}>0x3đ1...077b</div>
                </div>
                <img
                  className={styles.iconshare}
                  alt=""
                  src="/iconshare2.svg"
                />
              </div>
              <div className={styles.tableCellheader}>
                <div className={styles.header}>500 BUSD / 500 USDT</div>
              </div>
              <div className={styles.tableCelladditionalComponen1}>
                <div className={styles.btn2}>
                  <div className={styles.btn3}>
                    <b className={styles.core}>Manager</b>
                  </div>
                  <div className={styles.btn3}>
                    <b className={styles.core}>Details</b>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.div}>
              <div className={styles.tableCelladditionalComponen}>
                <div className={styles.left}>
                  <img
                    className={styles.avatarIcon}
                    alt=""
                    src="/avatar18.svg"
                  />
                  <div className={styles.title}>0x75f5...1666</div>
                </div>
                <img
                  className={styles.iconshare}
                  alt=""
                  src="/iconshare2.svg"
                />
              </div>
              <div className={styles.tableCellheader}>
                <div className={styles.header}>
                  0.624822 WETH / 339,97585406 1INCH
                </div>
              </div>
              <div className={styles.tableCelladditionalComponen1}>
                <div className={styles.btn2}>
                  <div className={styles.btn3}>
                    <b className={styles.core}>Manager</b>
                  </div>
                  <div className={styles.btn3}>
                    <b className={styles.core}>Details</b>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.div}>
              <div className={styles.tableCelladditionalComponen}>
                <div className={styles.left}>
                  <img
                    className={styles.avatarIcon}
                    alt=""
                    src="/avatar19.svg"
                  />
                  <div className={styles.title}>0x3đ1...077b</div>
                </div>
                <img
                  className={styles.iconshare}
                  alt=""
                  src="/iconshare2.svg"
                />
              </div>
              <div className={styles.tableCellheader}>
                <div className={styles.header}>
                  100 DAIDAI / 0,03837881 WETH
                </div>
              </div>
              <div className={styles.tableCelladditionalComponen1}>
                <div className={styles.btn2}>
                  <div className={styles.btn3}>
                    <b className={styles.core}>Manager</b>
                  </div>
                  <div className={styles.btn3}>
                    <b className={styles.core}>Details</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.tableCell}>
            <div className={styles.tableCelltext}>
              <div className={styles.text17}>Pool</div>
            </div>
            <div className={styles.tableCelltext1}>
              <div className={styles.text17}>My Liquidity</div>
            </div>
            <div className={styles.tableCelltext2}>
              <div className={styles.text17}>Action</div>
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

export default LiquidityManagerRemove;
