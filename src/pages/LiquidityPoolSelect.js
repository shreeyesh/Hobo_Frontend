import { useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import AccountConnectedPopup from "../components/AccountConnectedPopup";
import PortalPopup from "../components/PortalPopup";
import ConnectWalletPopoup from "../components/ConnectWalletPopoup";
import styles from "./LiquidityPoolSelect.module.css";

const LiquidityPoolSelect = () => {
  const navigate = useNavigate();
  const [isAccountConnectedPopupOpen, setAccountConnectedPopupOpen] =
    useState(false);
  const [isConnectWalletPopoupPopupOpen, setConnectWalletPopoupPopupOpen] =
    useState(false);

  const onIconiconarrowLeft2Click = useCallback(() => {
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
      <div className={styles.liquidityPoolSelect}>
        <div className={styles.right}>
          <div className={styles.card}>
            <div className={styles.bg} />
            <div className={styles.cartLiquidity}>
              <div className={styles.bg1} />
              <div className={styles.title}>
                <div className={styles.x75c2ff34}>0x75c2...ff34</div>
                <img
                  className={styles.iconcheckSelect}
                  alt=""
                  src="/iconcheckselect.svg"
                />
              </div>
              <div className={styles.chart}>
                <img className={styles.chartIcon} alt="" src="/chart.svg" />
                <div className={styles.note}>
                  <div className={styles.texttext}>
                    <div className={styles.iconWrapper}>
                      <div className={styles.iconcolorDot}>
                        <img
                          className={styles.vectorIcon}
                          alt=""
                          src="/vector3.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.text}>9,577.514455 ETH (68.65%)</div>
                  </div>
                  <div className={styles.texttext}>
                    <div className={styles.iconWrapper}>
                      <div className={styles.iconcolorDot}>
                        <img
                          className={styles.vectorIcon}
                          alt=""
                          src="/vector4.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.text}>
                      10,831,937.7876 USDC (13.35%)
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.dividerhorizontal} />
              <div className={styles.content}>
                <div className={styles.mbListItemBasic}>
                  <div className={styles.mbListItemitemLeft}>
                    <div className={styles.iconWrapper2}>
                      <img
                        className={styles.iconWrapper}
                        alt=""
                        src="/iconoval12.svg"
                      />
                    </div>
                    <div className={styles.text}>Single</div>
                  </div>
                  <div className={styles.mbListItemitemRight}>
                    <div className={styles.text}>More</div>
                    <div className={styles.iconWrapper2}>
                      <img
                        className={styles.iconWrapper}
                        alt=""
                        src="/iconiconarrowtop.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.list}>
                  <div className={styles.mbListItemBasic1}>
                    <div className={styles.mbListItemitemLeft1}>
                      <div className={styles.text}>
                        Single token market making
                      </div>
                    </div>
                  </div>
                  <div className={styles.mbListItemBasic1}>
                    <div className={styles.mbListItemitemLeft1}>
                      <div className={styles.text}>Fee Rate = 0%</div>
                    </div>
                  </div>
                  <div className={styles.mbListItemBasic1}>
                    <div className={styles.mbListItemitemLeft1}>
                      <div className={styles.text}>
                        Slippage Coefficient = 0.8
                      </div>
                    </div>
                  </div>
                  <div className={styles.mbListItemBasic}>
                    <div className={styles.mbListItemitemLeft1}>
                      <div className={styles.text}>
                        Created by 0x95c4...1cb0
                      </div>
                    </div>
                    <div className={styles.mbListItemitemRight1}>
                      <div className={styles.text}>2020/8/7</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.input}>
              <input
                className={styles.label}
                type="text"
                placeholder="Enter pool address"
              />
              <img
                className={styles.iconsearch}
                alt=""
                src="/iconsearch2.svg"
              />
            </div>
            <div className={styles.titleicon}>
              <button
                className={styles.iconiconarrowLeft2}
                onClick={onIconiconarrowLeft2Click}
              >
                <img className={styles.vectorIcon2} alt="" src="/vector5.svg" />
              </button>
              <div className={styles.title1}>Select A Pool</div>
            </div>
            <div className={styles.pLink}>
              <span>{`If the pool is not suitable, you can `}</span>
              <span className={styles.create}>create</span>
              <span> one</span>
            </div>
          </div>
        </div>
        <div className={styles.nav}>
          <div className={styles.menu}>
            <div className={styles.menu1}>
              <div className={styles.menu2}>
                <div className={styles.menuItemHorizontalitem}>
                  <div className={styles.title2}>HOBO FINANCE</div>
                </div>
                <Link
                  className={styles.menuItemHorizontalitem1}
                  to="/exchange"
                  onClick={onMenuItemHorizontalitemClick}
                >
                  <div className={styles.title2}>Exchange</div>
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
                          <div className={styles.iconWrapper2}>
                            <img
                              className={styles.iconliquidityMining}
                              alt=""
                              src="/iconliquiditymining8.svg"
                            />
                          </div>
                          <div className={styles.content6}>
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
                          <div className={styles.iconWrapper2}>
                            <img
                              className={styles.icontradingMining}
                              alt=""
                              src="/icontradingmining3.svg"
                            />
                          </div>
                          <div className={styles.content6}>
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
                          <div className={styles.iconWrapper2}>
                            <img
                              className={styles.icontradingMining}
                              alt=""
                              src="/iconvftr2.svg"
                            />
                          </div>
                          <div className={styles.content6}>
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
                    <div className={styles.title2}>Liquidity</div>
                  </div>
                </Link>
                <Link
                  className={styles.menuItemHorizontalitem3}
                  to="/earn"
                  onClick={onMenuItemHorizontalitem2Click}
                >
                  <a className={styles.title5}>Earn</a>
                  <div className={styles.iconWrapper2}>
                    <img className={styles.iconWrapper} alt="" />
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
                  <div className={styles.iconcolorDot2}>
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
                  <div className={styles.text2}>Connect to a wallet</div>
                </button>
              </div>
              <button className={styles.btn}>
                <img
                  className={styles.iconWrapper}
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
          <div className={styles.list1}>
            <div className={styles.div}>
              <div className={styles.tableCelladditionalComponen}>
                <div className={styles.left}>
                  <img
                    className={styles.avatarIcon}
                    alt=""
                    src="/avatar10.svg"
                  />
                  <div className={styles.title2}>0x75f5...1666</div>
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
                    <b className={styles.text}>Manager</b>
                  </div>
                  <div className={styles.btn2}>
                    <b className={styles.text}>Details</b>
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
                    src="/avatar11.svg"
                  />
                  <div className={styles.title2}>0x3đ1...077b</div>
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
                    <b className={styles.text}>Manager</b>
                  </div>
                  <div className={styles.btn2}>
                    <b className={styles.text}>Details</b>
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
                    src="/avatar12.svg"
                  />
                  <div className={styles.title2}>0x3đ1...077b</div>
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
                    <b className={styles.text}>Manager</b>
                  </div>
                  <div className={styles.btn2}>
                    <b className={styles.text}>Details</b>
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
                    src="/avatar13.svg"
                  />
                  <div className={styles.title2}>0x75f5...1666</div>
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
                    <b className={styles.text}>Manager</b>
                  </div>
                  <div className={styles.btn2}>
                    <b className={styles.text}>Details</b>
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
                    src="/avatar14.svg"
                  />
                  <div className={styles.title2}>0x3đ1...077b</div>
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
                    <b className={styles.text}>Manager</b>
                  </div>
                  <div className={styles.btn2}>
                    <b className={styles.text}>Details</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.tableCell}>
            <div className={styles.tableCelltext}>
              <div className={styles.text18}>Pool</div>
            </div>
            <div className={styles.tableCelltext1}>
              <div className={styles.text18}>My Liquidity</div>
            </div>
            <div className={styles.tableCelltext2}>
              <div className={styles.text18}>Action</div>
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

export default LiquidityPoolSelect;
