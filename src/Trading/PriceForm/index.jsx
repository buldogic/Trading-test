import * as React from "react";
import { BuySellModal } from "./BuySellModal";

import style from "./index.module.css";

export function PriceForm(props) {
  const [isOpenBuyModal, setIsOpenBuyModal] = React.useState(false);
  const [isOpenSellModal, setIsOpenSellModal] = React.useState(false);

  const handleBuyClose = () => setIsOpenBuyModal(false);
  const handleSellClose = () => setIsOpenSellModal(false);

  function openBuyModal() {
    setIsOpenBuyModal(!isOpenBuyModal);
  }
  function openSellModal() {
    setIsOpenSellModal(!isOpenBuyModal);
  }

  return (
    <div className={style.priceForm}>
      <div className={style.buy}>
        <h2 onClick={openBuyModal}>BUY</h2>
        <div>{props.price1}</div>
        <BuySellModal
          modal={isOpenBuyModal}
          handleClose={handleBuyClose}
          pair={props.pair}
          addDeal={props.addDeal}
          type="Buy"
        />
      </div>

      <div className={style.sell}>
        <h2 onClick={openSellModal}>SELL</h2>
        <span>{props.price2}</span>
        <BuySellModal
          modal={isOpenSellModal}
          handleClose={handleSellClose}
          pair={props.pair}
          addDeal={props.addDeal}
          type="Sell"
        />
      </div>
    </div>
  );
}
