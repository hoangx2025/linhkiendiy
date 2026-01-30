import { MarketplaceLink } from "./marketplaceLink";

export type StockStatus =
  | "in_stock"
  | "low_stock"
  | "out_of_stock"
  | "pre_order";

export type Product = {
  id: string;
  name: string;
  short: string;
  description: string;

  price: number;
  currency: "VND";

  category: string;
  brand: string;
  model: string;
  stockStatus: StockStatus;

  specifications: ProductSpecification[];

  tags: string[];
  images: string[];
  usage: string[];
  notes: string[];
  marketplaces?: MarketplaceLink[]; 
  usage_steps?: string[]; 
};

export type ProductSpecification = {
  key: string;
  value: string;
};
