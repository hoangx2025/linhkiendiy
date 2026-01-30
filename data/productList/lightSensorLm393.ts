import { Product } from "../product";

export const lightSensorLm393: Product = {
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
    "https://ower.s3.ap-southeast-1.amazonaws.com/linhkiendiy/z7458101273943_3f710365deb2d7a3f9cb995a6d0403bd.jpg?AWSAccessKeyId=AKIAWYTKPUQQQYECZMZG&Expires=2084716377&Signature=Mi0MGbi%2FQOZfpbkt9hcPM71F494%3D",
  ],
  marketplaces: [
    {
      platform: "shopee",
      productUrl: "https://vn.shp.ee/vdHmazY",
    },
  ],
  usage_steps: [
    "Bước 1: Kết nối nguồn - Chân VCC nối nguồn (+) 5V, chân GND nối cực âm (-). LED nguồn trên mạch sẽ sáng cố định.",
    "Bước 2: Hiệu chỉnh biến trở - Đặt cảm biến vào môi trường ánh sáng thực tế. Dùng tua vít xoay biến trở cho đến khi LED tín hiệu (thường là LED xanh) vừa tắt. Khi bạn che tay lại (tối), LED này phải sáng lên.",
    "Bước 3: Lấy tín hiệu DO - Nối chân DO vào chân tín hiệu của MCU hoặc chân B của Transistor (như BC547) để điều khiển tải lớn hơn.",
    "Lưu ý trạng thái chân DO: Thông thường, khi TRỜI SÁNG (vượt ngưỡng) -> DO mức Thấp (0V). Khi TRỜI TỐI (dưới ngưỡng) -> DO mức Cao (5V).",
  ],
};
