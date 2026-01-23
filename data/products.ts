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
};

export type ProductSpecification = {
  key: string;
  value: string;
};

export const products: Product[] = [
  {
    id: "boost-buck-xl6009-lm2577",
    name: "Module Boost/Buck XL6009/LM2577 3A (CV/CC)",
    short:
      "Hạ áp DC-DC, chỉnh điện áp & dòng (CV/CC), phù hợp sạc pin, cấp nguồn DIY.",
    description:
      "XL6009/LM2577 là module hạ áp DC-DC phổ biến cho DIY. Module cho phép điều chỉnh điện áp và dòng điện (CV/CC), thích hợp dùng làm mạch sạc pin, cấp nguồn cho mạch điện tử, LED và motor nhỏ. Hiệu suất cao, có bảo vệ ngắn mạch, hoạt động ổn định.",

    price: 39000,
    currency: "VND",

    category: "Buck / CV-CC",
    brand: "Generic",
    model: "XL6009/LM2577",
    stockStatus: "low_stock",

    specifications: [
      {
        key: "Điện áp đầu vào",
        value: "5 - 30V",
      },
      {
        key: "Điện áp đầu ra",
        value: "0.5 - 30V",
      },
      {
        key: "Dòng đầu ra",
        value: "3A, tối đa 4A",
      },
      {
        key: "Công suất",
        value: "35W/60W (có tản nhiệt)",
      },
      {
        key: "Hiệu suất",
        value: "≈ 88%",
      },
      {
        key: "Tần số hoạt động",
        value: "180 KHz",
      },
      {
        key: "Bảo vệ",
        value: "Bảo vệ ngắn mạch, giới hạn dòng",
      },
      {
        key: "Chế độ hoạt động",
        value: "CV / CC",
      },
      {
        key: "Yêu cầu tản nhiệt",
        value: "Cần tản nhiệt khi dùng trên 3A",
      },
    ],

    usage: [
      "Hạ áp nguồn DC",
      "Sạc pin lithium (CC/CV)",
      "Cấp nguồn cho Arduino, ESP, mạch DIY",
      "Nguồn cho LED và motor nhỏ",
    ],

    notes: [
      "Có sụt áp 0 - 0.3V do điện trở đo dòng (hiện tượng bình thường)",
      "Nên tăng cường tản nhiệt khi dùng công suất cao",
    ],

    tags: [
      "buck",
      "boost",
      "dc-dc",
      "XL6009",
      "LM2577",
      "cv/cc",
      "step-down",
      "step-up",
      "power-module",
      "battery-charger",
      "3A",
      "DIY",
    ],

    images: [
      "https://ower.s3.ap-southeast-1.amazonaws.com/linhkiendiy/boost-buck-xl6009-lm2577-1.jpg?AWSAccessKeyId=AKIAWYTKPUQQQYECZMZG&Expires=2084714619&Signature=6UBOE%2BelpDLjxIwyD3wLXHgojNU%3D",
      "https://ower.s3.ap-southeast-1.amazonaws.com/linhkiendiy/boost-buck-xl6009-lm2577-2.jpg?AWSAccessKeyId=AKIAWYTKPUQQQYECZMZG&Expires=2084714698&Signature=DDFYp8i9Cl4HzONy0ehBlerJdWg%3D",
      "https://ower.s3.ap-southeast-1.amazonaws.com/linhkiendiy/boost-buck-xl6009-lm2577-3.jpg?AWSAccessKeyId=AKIAWYTKPUQQQYECZMZG&Expires=2084714728&Signature=ZnKcD8t2aBLrWtav%2FWAsNyN39CA%3D"
       ],
  },
  {
    id: "lm2596-cc-cv",
    name: "Module Buck LM2596S CC/CV 3A",
    short:
      "Module hạ áp DC-DC LM2596 có chỉnh điện áp và dòng (CV/CC), dùng sạc pin và cấp nguồn.",
    description:
      "Module LM2596S phiên bản nâng cấp có hỗ trợ điều chỉnh dòng (CC) và điện áp (CV). Phù hợp dùng làm mạch sạc pin lithium, nguồn cấp cho mạch điện tử, LED, motor nhỏ. Có đèn báo chế độ CC.",

    price: 0,
    currency: "VND",

    category: "Buck DC-DC (CV/CC)",
    brand: "Generic",
    model: "LM2596 CC/CV",
    stockStatus: "in_stock",

    specifications: [
      { key: "Điện áp đầu vào", value: "4 – 40V" },
      { key: "Điện áp đầu ra", value: "1.25 – 35V" },
      { key: "Dòng đầu ra", value: "Tối đa 3A (khuyến nghị ≤ 2A)" },
      { key: "Công suất", value: "≈ 20 – 30W (có tản nhiệt)" },
      { key: "Hiệu suất", value: "Lên tới 92%" },
      { key: "Chế độ", value: "CV / CC" },
      { key: "Biến trở", value: "3 biến trở (CV, CC, tinh chỉnh)" },
      { key: "Đèn báo", value: "Có đèn báo khi vào chế độ CC" },
      { key: "Tần số", value: "150 kHz" },
    ],

    usage: [
      "Sạc pin Lithium (18650, Li-ion)",
      "Nguồn cấp cho Arduino, ESP32",
      "Mạch LED công suất",
      "Nguồn thí nghiệm DIY",
    ],

    notes: [
      "Có thể dùng làm mạch sạc pin nhờ chế độ CC",
      "Nên gắn tản nhiệt khi dòng > 2A",
      "Không cấp ngược cực",
      "Dòng thực tế phụ thuộc tản nhiệt",
    ],

    tags: [
      "lm2596",
      "buck",
      "cc-cv",
      "dc-dc",
      "step-down",
      "battery-charger",
      "3A",
      "DIY",
    ],

    images: [
      "https://ower.s3.ap-southeast-1.amazonaws.com/linhkiendiy/lm2596s-1.jpg?AWSAccessKeyId=AKIAWYTKPUQQQYECZMZG&Expires=2084714957&Signature=7Gxp%2FAXWvKq4LXMHHAbu6Wa6oNQ%3D",
      "https://ower.s3.ap-southeast-1.amazonaws.com/linhkiendiy/lm2596s-2.jpg?AWSAccessKeyId=AKIAWYTKPUQQQYECZMZG&Expires=2084714957&Signature=4OwGrIO70ohvFV67yCZ8S8xu1%2Fo%3D",
      "https://ower.s3.ap-southeast-1.amazonaws.com/linhkiendiy/lm2596s-3.jpg?AWSAccessKeyId=AKIAWYTKPUQQQYECZMZG&Expires=2084714959&Signature=r8jGl9KBD8S3Sh3%2BgpOu%2BNq43ic%3D"
    ],
  },
];

export function getProductById(id: string) {
  return products.find((p) => p.id === id);
}
