import { useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import AccountConnectedPopup from "../components/AccountConnectedPopup";
import PortalPopup from "../components/PortalPopup";
import ConnectWalletPopoup from "../components/ConnectWalletPopoup";
import styles from "./LiquiditySelectToken.module.css";

const LiquiditySelectToken = () => {
  const navigate = useNavigate();
  const [isAccountConnectedPopupOpen, setAccountConnectedPopupOpen] =
    useState(false);
  const [isConnectWalletPopoupPopupOpen, setConnectWalletPopoupPopupOpen] =
    useState(false);

  const onMbListItemBasicContainer1Click = useCallback(() => {
    navigate("/liquidityempty");
  }, [navigate]);

  const onMbListItemBasicContainer2Click = useCallback(() => {
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
      <div className={styles.liquiditySelectToken}>
        <div className={styles.right}>
          <div className={styles.selectAPair}>
            <div className={styles.bg} />
            <div className={styles.titleicon}>
              <img
                className={styles.iconiconarrowDown}
                alt=""
                src="/iconiconarrowleft21.svg"
              />
              <div className={styles.title}>Select A Pair</div>
            </div>
            <div className={styles.input}>
              <div className={styles.label}>
                Enter the token symbol or address
              </div>
              <img
                className={styles.iconsearch}
                alt=""
                src="/iconsearch1.svg"
              />
            </div>
            <div className={styles.listTokens}>
              <div className={styles.mbListItemBasic}>
                <div className={styles.mbListItemitemLeft}>
                  <div className={styles.iconWrapper}>
                    <img
                      className={styles.iconftr}
                      alt=""
                      src="/iconftr5.svg"
                    />
                  </div>
                  <div className={styles.title1}>FTR</div>
                </div>
                <div className={styles.mbListItemitemRight}>
                  <div className={styles.paragraph}>0</div>
                </div>
              </div>
              <div
                className={styles.mbListItemBasic1}
                onClick={onMbListItemBasicContainer1Click}
              >
                <div className={styles.mbListItemitemLeft}>
                  <div className={styles.iconWrapper}>
                    <img
                      className={styles.iconeth}
                      alt=""
                      src="/iconeth4.svg"
                    />
                  </div>
                  <div className={styles.title1}>ETH</div>
                </div>
                <div className={styles.mbListItemitemRight}>
                  <div className={styles.paragraph}>0</div>
                </div>
              </div>
              <div
                className={styles.mbListItemBasic1}
                onClick={onMbListItemBasicContainer2Click}
              >
                <div className={styles.mbListItemitemLeft}>
                  <div className={styles.iconWrapper}>
                    <img
                      className={styles.iconeth}
                      alt=""
                      src="/iconusdc6.svg"
                    />
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
                      src="/iconicon1inch1.svg"
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
                      src="/iconiconaave1.svg"
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
                      src="/iconiconampl1.svg"
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
        <div className={styles.nav}>
          <div className={styles.menu}>
            <div className={styles.menu1}>
              <div className={styles.menu2}>
                <div className={styles.menuItemHorizontalitem}>
                  <div className={styles.title7}>HOBO FINANCE</div>
                </div>
                <Link
                  className={styles.menuItemHorizontalitem1}
                  to="/exchange"
                  onClick={onMenuItemHorizontalitemClick}
                >
                  <div className={styles.title7}>Exchange</div>
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
                              src="/iconliquiditymining7.svg"
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
                    <div className={styles.title7}>Liquidity</div>
                  </div>
                </Link>
                <Link
                  className={styles.menuItemHorizontalitem3}
                  to="/earn"
                  onClick={onMenuItemHorizontalitem2Click}
                >
                  <a className={styles.title10}>Earn</a>
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
                <img className={styles.groupIcon} alt="" src="/group4.svg" />
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
                  <div className={styles.paragraph}>CORE</div>
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
        <div className={styles.myLiquidity}>My Liquidity</div>
        <div className={styles.table}>
          <div className={styles.list}>
            <div className={styles.div}>
              <div className={styles.tableCelladditionalComponen}>
                <div className={styles.left}>
                  <img
                    className={styles.avatarIcon}
                    alt=""
                    src="/avatar5.svg"
                  />
                  <div className={styles.title7}>0x75f5...1666</div>
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
                <div className={styles.btn1}>
                  <div className={styles.btn2}>
                    <b className={styles.paragraph}>Manager</b>
                  </div>
                  <div className={styles.btn2}>
                    <b className={styles.paragraph}>Details</b>
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
                    src="/avatar6.svg"
                  />
                  <div className={styles.title7}>0x3đ1...077b</div>
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
                <div className={styles.btn1}>
                  <div className={styles.btn2}>
                    <b className={styles.paragraph}>Manager</b>
                  </div>
                  <div className={styles.btn2}>
                    <b className={styles.paragraph}>Details</b>
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
                    src="/avatar7.svg"
                  />
                  <div className={styles.title7}>0x3đ1...077b</div>
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
                <div className={styles.btn1}>
                  <div className={styles.btn2}>
                    <b className={styles.paragraph}>Manager</b>
                  </div>
                  <div className={styles.btn2}>
                    <b className={styles.paragraph}>Details</b>
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
                    src="/avatar8.svg"
                  />
                  <div className={styles.title7}>0x75f5...1666</div>
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
                <div className={styles.btn1}>
                  <div className={styles.btn2}>
                    <b className={styles.paragraph}>Manager</b>
                  </div>
                  <div className={styles.btn2}>
                    <b className={styles.paragraph}>Details</b>
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
                    src="/avatar9.svg"
                  />
                  <div className={styles.title7}>0x3đ1...077b</div>
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
                <div className={styles.btn1}>
                  <div className={styles.btn2}>
                    <b className={styles.paragraph}>Manager</b>
                  </div>
                  <div className={styles.btn2}>
                    <b className={styles.paragraph}>Details</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.tableCell}>
            <div className={styles.tableCelltext}>
              <div className={styles.text16}>Pool</div>
            </div>
            <div className={styles.tableCelltext1}>
              <div className={styles.text16}>My Liquidity</div>
            </div>
            <div className={styles.tableCelltext2}>
              <div className={styles.text16}>Action</div>
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

export default LiquiditySelectToken;
