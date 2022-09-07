import {
  Tee,
  TShirt,
  Jewellery,
  DryFitPolos,
  CasualShoes,
  FormalShoes,
  NinjaHoodies,
  LeatherSneakers,
} from "../../../assets/image/collections";

export interface ICollectionData {
  image: any;
  name: string;
}

export const CollectionData: ICollectionData[] = [
  {
    image: Jewellery,
    name: "STONE JEWELLERY",
  },
  {
    image: NinjaHoodies,
    name: "NINJA HOODIES",
  },
  {
    image: CasualShoes,
    name: "CASUAL SHOES",
  },
  {
    image: FormalShoes,
    name: "FORAML SHOES",
  },
  {
    image: Tee,
    name: "WOMEN'S TEES & TOPS",
  },
  {
    image: LeatherSneakers,
    name: "LEATHER SNEAKERS",
  },
  {
    image: DryFitPolos,
    name: "RAPID DRY POLOS",
  },
  {
    image: TShirt,
    name: "MENS T-SHIRTS",
  },
];
