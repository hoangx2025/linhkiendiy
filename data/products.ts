export type Product = {
  id: string;
  name: string;
  short: string;
  description: string;
  price: number;
  currency: "VND";
  category: string;
  tags: string[];
  images: string[];
};

export const products: Product[] = [
  {
    id: "buck-xl4015",
    name: "Module Buck XL4015 5A (CV/CC)",
    short: "Hạ áp DC-DC, chỉnh điện áp & dòng (CV/CC), phù hợp sạc pin, cấp nguồn DIY.",
    description:
      "XL4015 là module hạ áp DC-DC phổ biến cho DIY. Có thể chỉnh điện áp đầu ra và giới hạn dòng (CV/CC) để sạc pin, cấp nguồn cho mạch, LED, motor nhỏ…",
    price: 39000,
    currency: "VND",
    category: "Buck / CVCC",
    tags: ["buck", "cv/cc", "5A"],
    images: ["/images/xl4015-1.svg", "/images/xl4015-2.svg", "/images/xl4015-3.svg"]
  },
  {
    id: "boost-xl6009",
    name: "Module Boost XL6009",
    short: "Tăng áp DC-DC nhỏ gọn, dùng cho LED, motor nhỏ, DIY nguồn áp cao hơn.",
    description:
      "XL6009 dùng để tăng áp từ nguồn thấp lên cao hơn (boost). Phù hợp các nhu cầu DIY cần điện áp cao hơn nguồn đầu vào như LED, driver đơn giản, thử nghiệm.",
    price: 25000,
    currency: "VND",
    category: "Boost",
    tags: ["boost", "dc-dc", "xl6009"],
    images: ["/images/xl6009-1.svg", "/images/xl6009-2.svg"]
  },
  {
    id: "sensor-sr501",
    name: "Cảm biến PIR HC-SR501",
    short: "Phát hiện chuyển động, output mức cao/thấp. Phù hợp bật đèn, báo trộm DIY.",
    description:
      "HC-SR501 là cảm biến chuyển động PIR phổ biến. Khi phát hiện chuyển động, chân OUT lên mức cao trong một khoảng thời gian (có thể chỉnh).",
    price: 22000,
    currency: "VND",
    category: "Sensor",
    tags: ["pir", "motion", "sensor"],
    images: ["/images/sr501-1.svg", "/images/sr501-2.svg", "/images/sr501-3.svg"]
  }
];

export function getProductById(id: string) {
  return products.find(p => p.id === id);
}
