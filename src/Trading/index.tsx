import * as React from "react";
import { Container } from "@mui/material";
import SelectCoin from "./SelectCoin";
import { Time } from "./Time";
import { PriceForm } from "./PriceForm";
import { getRandomPrice } from "./utils/getRandomPrice";
import { AddDeal } from "../types";

const getPairs = () => {
  return [
    {
      id: 1,
      coin1: "USD",
      price1: getRandomPrice(),
      coin2: "USDT",
      price2: getRandomPrice(),
      tom: "TOM",
    },
    {
      id: 2,
      coin1: "USD",
      price1: getRandomPrice(),
      coin2: "CAD",
      price2: getRandomPrice(),
      tom: "TOM",
    },
    {
      id: 3,
      coin1: "USD",
      price1: getRandomPrice(),
      coin2: "BTC",
      price2: getRandomPrice(),
      tom: "TOM",
    },
  ];
};

type Props ={
  addDeal: AddDeal
}


export function Trading(props : Props) {
  const [pairs, setPairs] = React.useState(getPairs);
  const [selectedPairId, setSelectedPairId] = React.useState(pairs[0].id);

  React.useEffect(() => {
    const setNewPairs = () => {
      const newPairs = getPairs()
      setPairs(newPairs);
    };

    const id = setInterval(setNewPairs, 10000);

    const cleanup = () => {
      clearInterval(id);
    };

    return cleanup;
  }, []);

  const pair = pairs.find((p) => {
    return p.id === selectedPairId;
  });

  return (
    <Container maxWidth="sm">
      <Time />
      <SelectCoin
        pairs={pairs}
        selectedPairId={selectedPairId}
        setSelectedPairId={setSelectedPairId}
      />
      {pair && (
        <PriceForm
          price1={pair.price1}
          price2={pair.price2}
          pair={pair}
          addDeal={props.addDeal}
        />
      )}
    </Container>
  );
}
