import { Product } from "./product";

import { boostBuckXl6009Lm2577 } from "./productList/boostBuckXl6009Lm2577";
import { lm2596CcCv } from "./productList/lm2596CcCv";
import { hcSr501 } from "./productList/hcSr501";
import { lightSensorLm393 } from "./productList/lightSensorLm393";

export const products: Product[] = [
  boostBuckXl6009Lm2577,
  lm2596CcCv,
  hcSr501,
  lightSensorLm393
];

export function getProductById(id: string) {
  return products.find((p) => p.id === id);
}
