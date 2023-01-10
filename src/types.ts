export type Pair = {
  id: number;
  coin1: string;
  price1: string;
  coin2: string;
  price2: string;
  tom: string;
};

export type AddDeal = (deal: Deal) => void;

export type Deal = {
    type: string;
    pair: Pair;
    volume: string;
    date: Date;
  };
