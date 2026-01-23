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
      "https://ower.s3.ap-southeast-1.amazonaws.com/linhkiendiy/boost-buck-xl6009-lm2577-3.jpg?AWSAccessKeyId=AKIAWYTKPUQQQYECZMZG&Expires=2084714728&Signature=ZnKcD8t2aBLrWtav%2FWAsNyN39CA%3D",
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
      "https://ower.s3.ap-southeast-1.amazonaws.com/linhkiendiy/lm2596s-3.jpg?AWSAccessKeyId=AKIAWYTKPUQQQYECZMZG&Expires=2084714959&Signature=r8jGl9KBD8S3Sh3%2BgpOu%2BNq43ic%3D",
    ],
  },

  {
    id: "photosensitive-light-sensor-lm393",
    name: "Module Cảm Biến Ánh Sáng Quang Trở LM393 (3 Pin)",
    short:
      "Module cảm biến ánh sáng sử dụng quang trở, có ngõ ra số và analog, dùng cho Arduino và DIY.",
    description:
      "Module cảm biến ánh sáng sử dụng quang trở (photoresistor) kết hợp comparator LM393. Có khả năng phát hiện cường độ ánh sáng môi trường, hỗ trợ cả ngõ ra số (DO) và ngõ ra analog (AO). Module có biến trở điều chỉnh độ nhạy, hoạt động ổn định, dễ sử dụng cho các dự án Arduino, robot dò sáng, công tắc đèn tự động.",

    price: 0,
    currency: "VND",

    category: "Cảm biến ánh sáng",
    brand: "Generic",
    model: "LM393 Photoresistor",
    stockStatus: "in_stock",

    specifications: [
      {
        key: "Điện áp hoạt động",
        value: "3.3V – 5V",
      },
      {
        key: "Cảm biến",
        value: "Quang trở (Photoresistor)",
      },
      {
        key: "IC so sánh",
        value: "LM393",
      },
      {
        key: "Ngõ ra",
        value: "DO (Digital) và AO (Analog)",
      },
      {
        key: "Dòng kích",
        value: "≥ 15mA",
      },
      {
        key: "Điều chỉnh độ nhạy",
        value: "Có biến trở tinh chỉnh",
      },
      {
        key: "Kích thước PCB",
        value: "3.2 × 1.4 cm",
      },
      {
        key: "Lỗ bắt vít",
        value: "Có, dễ cố định",
      },
    ],

    usage: [
      "Phát hiện cường độ ánh sáng môi trường",
      "Mạch dò sáng cho xe robot",
      "Công tắc đèn tự động",
      "Ứng dụng Arduino / ESP / STM32",
      "Dự án DIY học tập",
    ],

    notes: [
      "DO xuất mức cao khi ánh sáng yếu, mức thấp khi ánh sáng mạnh",
      "AO xuất điện áp analog tỉ lệ với cường độ ánh sáng",
      "Có thể điều chỉnh độ nhạy bằng biến trở trên module",
      "Có thể kết nối trực tiếp với Arduino hoặc relay",
      "Hoạt động ổn định trong dải 3.3–5V",
    ],
    tags: [
      "light-sensor",
      "photoresistor",
      "lm393",
      "arduino",
      "sensor",
      "diy",
      "analog",
      "digital",
      "smart-car",
      "light-detection",
    ],

    images: [
      "https://ower.s3.ap-southeast-1.amazonaws.com/linhkiendiy/z7458101264642_e4c52676e53758f1d1a416fc17974de1.jpg?AWSAccessKeyId=AKIAWYTKPUQQQYECZMZG&Expires=2084716369&Signature=ofjQC13TsCrpQH8YzSFzJEm1sFk%3D",
      "https://ower.s3.ap-southeast-1.amazonaws.com/linhkiendiy/z7458101249172_002c76e63c7517eaaf3981213f7c4eef.jpg?AWSAccessKeyId=AKIAWYTKPUQQQYECZMZG&Expires=2084716373&Signature=g%2Fdf7H8GS%2BnyMt3ZpFrjgBbUF4M%3D",
      "https://ower.s3.ap-southeast-1.amazonaws.com/linhkiendiy/z7458101273943_3f710365deb2d7a3f9cb995a6d0403bd.jpg?AWSAccessKeyId=AKIAWYTKPUQQQYECZMZG&Expires=2084716377&Signature=Mi0MGbi%2FQOZfpbkt9hcPM71F494%3D"
    ],
  },
];

export function getProductById(id: string) {
  return products.find((p) => p.id === id);
}
