import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import FrameComponent from "./pages/FrameComponent";
import Exchange from "./pages/Exchange";
import Settings from "./pages/Settings";
import Typing from "./pages/Typing";
import Filled from "./pages/Filled";
import Liquidity from "./pages/Liquidity";
import LiquidityEmpty from "./pages/LiquidityEmpty";
import LiquiditySelectToken from "./pages/LiquiditySelectToken";
import LiquidityPoolSelect from "./pages/LiquidityPoolSelect";
import LiquidityManagerAdd from "./pages/LiquidityManagerAdd";
import LiquidityManagerRemove from "./pages/LiquidityManagerRemove";
import LiquidityDetails from "./pages/LiquidityDetails";
import Earn from "./pages/Earn";
import Stake2 from "./pages/Stake2";
import Unstake1 from "./pages/Unstake1";
import Unstake2 from "./pages/Unstake2";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/frame-72":
        title = "";
        metaDescription = "";
        break;
      case "/exchange":
        title = "";
        metaDescription = "";
        break;
      case "/settings":
        title = "";
        metaDescription = "";
        break;
      case "/33typing":
        title = "";
        metaDescription = "";
        break;
      case "/orderconfirm":
        title = "";
        metaDescription = "";
        break;
      case "/liquidity":
        title = "";
        metaDescription = "";
        break;
      case "/liquidityempty":
        title = "";
        metaDescription = "";
        break;
      case "/liquidityselecttoken":
        title = "";
        metaDescription = "";
        break;
      case "/lp-select":
        title = "";
        metaDescription = "";
        break;
      case "/liquiditymanageradd":
        title = "";
        metaDescription = "";
        break;
      case "/liquiditymanagerremove":
        title = "";
        metaDescription = "";
        break;
      case "/liquiditydetails":
        title = "";
        metaDescription = "";
        break;
      case "/earn":
        title = "";
        metaDescription = "";
        break;
      case "/stakeExt":
        title = "";
        metaDescription = "";
        break;
      case "/unstake1":
        title = "";
        metaDescription = "";
        break;
      case "/endmining":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Exchange />} />
      <Route path="/frame-72" element={<FrameComponent />} />
      <Route path="/exchange" element={<Exchange />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/33typing" element={<Typing />} />
      <Route path="/orderconfirm" element={<Filled />} />
      <Route path="/liquidity" element={<Liquidity />} />
      <Route path="/liquidityempty" element={<LiquidityEmpty />} />
      <Route
        path="/liquidityselecttoken"
        element={<LiquiditySelectToken />}
      />
      <Route path="/lp-select" element={<LiquidityPoolSelect />} />
      <Route path="/liquiditymanageradd" element={<LiquidityManagerAdd />} />
      <Route
        path="/liquiditymanagerremove"
        element={<LiquidityManagerRemove />}
      />
      <Route path="/liquiditydetails" element={<LiquidityDetails />} />
      <Route path="/earn" element={<Earn />} />
      <Route path="/stakeExt" element={<Stake2 />} />
      <Route path="/unstake1" element={<Unstake1 />} />
      <Route path="/endmining" element={<Unstake2 />} />
    </Routes>
  );
}
export default App;
