import { Product } from "./product";

import { boostBuckXl6009Lm2577 } from "./productList/boostBuckXl6009Lm2577";
import { lm2596CcCv } from "./productList/lm2596CcCv";
import { hcSr501 } from "./productList/hcSr501";
import { lightSensorLm393 } from "./productList/lightSensorLm393";
import { irfz44nMossfet } from "./productList/irfz44nMossfet";
import { mt3608Booster } from "./productList/mt3608Booster";
import { mpu6500Sensor } from "./productList/mpu6500Sensor";
import { tp4056TypeCProtected } from "./productList/tp4056TypeCProtected";


export const products: Product[] = [
  boostBuckXl6009Lm2577,
  lm2596CcCv,
  hcSr501,
  lightSensorLm393,
  irfz44nMossfet,
  mt3608Booster,
  mpu6500Sensor,
  tp4056TypeCProtected
];

export function getProductById(id: string) {
  return products.find((p) => p.id === id);
}
