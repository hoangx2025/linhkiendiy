import { Product } from "../product";

export const lm2596CcCv: Product = {
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
    "https://ower.s3.ap-southeast-1.amazonaws.com/linhkiendiy/lm2596s-3.jpg?AWSAccessKeyId=AKIAWYTKPUQQQYECZMZG&Expires=2084714959&Signature=r8jGl9KBD8S3Sh3%2BgpOu%2BNq43ic%3D",
  ],
};
