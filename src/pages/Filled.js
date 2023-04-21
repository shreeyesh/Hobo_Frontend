import { useState, useCallback } from "react";
import { Link, useNavigate,useLocation } from "react-router-dom";
import AccountConnectedPopup from "../components/AccountConnectedPopup";
import PortalPopup from "../components/PortalPopup";
import ConnectWalletPopoup from "../components/ConnectWalletPopoup";
import TxnsuccessPopup from "../components/TxnsuccessPopup";
import styles from "./Filled.module.css";
import Exchange from "./Exchange";
import { ethers } from 'ethers';
import ExchangeABI from '../abi/Exchange.json';
// import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
// dotenv.config()

console.log("in order confirmed")
const Filled = () => {
  const amount = 100;
  // const { state } = useLocation();
  // amount = state.amount;
  console.log("amount :",amount)
  // console.log("props.data.amount :",props.data.amount)
  const navigate = useNavigate();
  const [isAccountConnectedPopupOpen, setAccountConnectedPopupOpen] =
    useState(false);
  const [isConnectWalletPopoupPopupOpen, setConnectWalletPopoupPopupOpen] =
    useState(false);
  const [isTxnsuccessPopupOpen, setTxnsuccessPopupOpen] = useState(false);

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

  const openTxnsuccessPopup = useCallback(() => {
    setTxnsuccessPopupOpen(true);
  }, []);

  const closeTxnsuccessPopup = useCallback(() => {
    setTxnsuccessPopupOpen(false);
  }, []);
  console.log("Near ExchangeComponent ")
  function ExchangeComponent() {
    console.log("In ExchangeComponent ")
    const [amountIn, setAmountIn] = useState('');
    const [amountOut, setAmountOut] = useState('');
    const [txHash, setTxHash] = useState('');
    console.log("post state ")
    const handleAmountInChange = (e) => {
      setAmountIn(e.target.value);
    };
    
    const handleAmountOutChange = (e) => {
      setAmountOut(e.target.value);
    };
  }
    async function handleExchangeClick() {
      // Get the signer and provider
      console.log("In handleexchange")
      const provider = new ethers.JsonRpcProvider.Web3Provider(window.ethereum);
      console.log("provider",provider)
      const signer = provider.getSigner();
      console.log("Post provider")
      
      // Set up the QuickSwap router contract
      const routerAddress = '0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff'; // Replace with QuickSwap Router address
      const router = hre.ethers.getContractAt("Quickswap", routerAddress);
  
      // Set up the Exchange contract
      const exchangeAddress = '0xC70bc72fA8A6992bB97ee36782a767dcd24D6207'; // Replace with your exchange contract address
      const exchange = new ethers.Contract(exchangeAddress, ExchangeABI, signer);
  
      // Get the current price from the QuickSwap router
      const path = ["0x1f295Ce14b35254D720902B910614A1bdA0b8834", "0xbF3d79Aa6fa3C790668953EBA633181B2DfA0cCD4"]; // Replace with the addresses of the tokens you're trading
      const amounts = await router.getAmountsOut(amountIn, path);
      const price = amounts[1];
      price = amountOut;
      console.log("price : ", price);
  
      // Create the trade
      const tx = await exchange.createTrade(amountIn, price);
      console.log("tx : ",tx)
      // Wait for the transaction to be mined
      const receipt = await tx.wait();
  
      // Set the transaction hash in the state
      setTxHash(receipt.transactionHash);
    }

  return (
    <>
      <div className={styles.filled}>
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
                              src="/iconliquiditymining4.svg"
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
        <div className={styles.cardExchangeconfirm}>
          <div className={styles.nav1}>
            <div className={styles.left}>
              <img
                className={styles.iconiconarrowDown}
                alt=""
                src="/iconiconarrowleft21.svg"
              />
              <div className={styles.title4}>Select Amount</div>
            </div>
            <img
              className={styles.iconiconarrowDown}
              alt=""
              src="/iconsetting1.svg"
            />
          </div>
          <div className={styles.pay}>
            <div className={styles.core}>You Pay</div>
            <div className={styles.parent}>
              <b className={styles.b}>{amount}</b>
              <img className={styles.iconbusd} alt="" src="/iconbusd2.svg" />
            </div>
          </div>
          <div className={styles.pay}>
            <div className={styles.core}>You Receive</div>
            <div className={styles.parent}>
              <b className={styles.b}>320</b>
              <img className={styles.iconbusd} alt="" src="/iconusdc4.svg" />
            </div>
          </div>
          <div className={styles.outputIsEstimated}>
            Output is estimated. You will receive at least 317.90 USDC or the
            transaction will revert
          </div>
          <div className={styles.info}>
            <div className={styles.mbListItemBasic}>
              <div className={styles.mbListItemitemLeft}>
                <div className={styles.core}>Price</div>
              </div>
              <div className={styles.mbListItemitemRight}>
                <div className={styles.core}>1.000 BUSD per 1USDC</div>
                <div className={styles.iconWrapper}>
                  <img
                    className={styles.iconiconarrowDown}
                    alt=""
                    src="/iconiconarrowexchangeswap.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.mbListItemBasic}>
              <div className={styles.mbListItemitemLeft1}>
                <div className={styles.core}>Minimum received</div>
                <div className={styles.iconWrapper}>
                  <img
                    className={styles.iconquestionHelp}
                    alt=""
                    src="/iconquestionhelp1.svg"
                  />
                </div>
              </div>
              <div className={styles.mbListItemitemRight1}>
                <div className={styles.core}>317.90 USDC</div>
              </div>
            </div>
            <div className={styles.mbListItemBasic}>
              <div className={styles.mbListItemitemLeft1}>
                <div className={styles.core}>Price Impact</div>
                <div className={styles.iconWrapper}>
                  <img
                    className={styles.iconquestionHelp}
                    alt=""
                    src="/iconquestionhelp2.svg"
                  />
                </div>
              </div>
              <div className={styles.mbListItemitemRight1}>
                <div className={styles.core}>{`<0.01%`}</div>
              </div>
            </div>
            <div className={styles.mbListItemBasic}>
              <div className={styles.mbListItemitemLeft1}>
                <div className={styles.core}>Liquidity Provider Fee</div>
                <div className={styles.iconWrapper}>
                  <img
                    className={styles.iconquestionHelp}
                    alt=""
                    src="/iconquestionhelp3.svg"
                  />
                </div>
              </div>
              <div className={styles.mbListItemitemRight1}>
                <div className={styles.core}>3.2 BUSD</div>
              </div>
            </div>
          </div>
          <button className={styles.btn1} onClick={openTxnsuccessPopup}>
            <b className={styles.text1}>Confirm</b>
          </button>
        </div>
        <div className={styles.mbListicon6}>
          <img className={styles.coinIcon} alt="" src="/coin3.svg" />
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
        <div className={styles.tags}>
          <button className={styles.tag1}>
            <div className={styles.text2}>24H</div>
          </button>
          <button className={styles.tag1}>
            <div className={styles.text2}>1W</div>
          </button>
          <button className={styles.tag1}>
            <div className={styles.text2}>1M</div>
          </button>
        </div>
        <div className={styles.chart}>
          <div className={styles.chart1}>
            <div className={styles.chartChild} />
            <img className={styles.chartItem} alt="" src="/vector-174.svg" />
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
                    <div className={styles.text5}>
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
                  <div className={styles.text6}>Success</div>
                </div>
              </div>
              <div className={styles.div}>
                <div className={styles.tableCellmultilineLarge}>
                  <div className={styles.body1}>
                    <div className={styles.iconWrapper}>
                      <img
                        className={styles.iconftr}
                        alt=""
                        src="/iconftr4.svg"
                      />
                    </div>
                    <div className={styles.text5}>
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
                  <div className={styles.text6}>Success</div>
                </div>
              </div>
            </div>
            <div className={styles.tableCell}>
              <div className={styles.tableCelltext2}>
                <div className={styles.text6}>Receiveed</div>
              </div>
              <div className={styles.tableCelltext3}>
                <div className={styles.text6}>Paid</div>
              </div>
              <div className={styles.tableCelltext4}>
                <div className={styles.text6}>Price</div>
              </div>
              <div className={styles.tableCelltext5}>
                <div className={styles.text6}>Status</div>
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
      {isTxnsuccessPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeTxnsuccessPopup}
        >
          <TxnsuccessPopup onClose={closeTxnsuccessPopup} />
        </PortalPopup>
      )}
    </>
  );
};
export default Filled;
