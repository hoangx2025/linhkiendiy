import { Product } from "../product";


export const hcSr501: Product = {
  id: "hc-sr501-pir-motion-sensor",
  name: "Cảm biến chuyển động PIR HC-SR501",
  short: "Cảm biến hồng ngoại phát hiện chuyển động người, dùng cho Arduino, IoT, đèn tự động.",
  description:
    "HC-SR501 là module cảm biến chuyển động PIR (Passive Infrared) dùng để phát hiện sự thay đổi bức xạ hồng ngoại từ cơ thể người hoặc động vật. Module tích hợp IC xử lý, có thể điều chỉnh độ nhạy và thời gian trễ, hoạt động ổn định với điện áp 5–12V, phù hợp cho các dự án Arduino, nhà thông minh, đèn tự động và hệ thống an ninh.",

  price: 25000,
  currency: "VND",

  category: "Cảm biến",
  brand: "Generic",
  model: "HC-SR501",
  stockStatus: "in_stock",

  specifications: [
    {
      key: "Điện áp hoạt động",
      value: "5V – 12V DC"
    },
    {
      key: "Dòng tiêu thụ",
      value: "< 65µA"
    },
    {
      key: "Khoảng cách phát hiện",
      value: "3 – 7 m (có thể điều chỉnh)"
    },
    {
      key: "Góc quét",
      value: "Khoảng 120°"
    },
    {
      key: "Tín hiệu ngõ ra",
      value: "Digital HIGH / LOW (3.3V)"
    },
    {
      key: "Thời gian trễ",
      value: "0.3 – 300 giây (chỉnh bằng biến trở)"
    },
    {
      key: "Nhiệt độ hoạt động",
      value: "-20°C đến 80°C"
    },
    {
      key: "Kích thước",
      value: "32mm x 24mm"
    }
  ],

  tags: [
    "hc-sr501",
    "pir sensor",
    "cảm biến chuyển động",
    "arduino",
    "iot",
    "cảm biến hồng ngoại",
    "motion sensor",
    "diy"
  ],

  images: [
    "/images/products/hc-sr501/front.jpg",
    "/images/products/hc-sr501/back.jpg",
    "/images/products/hc-sr501/pins.jpg"
  ],

  usage: [
    "Phát hiện chuyển động người",
    "Bật đèn tự động",
    "Hệ thống chống trộm",
    "Nhà thông minh",
    "Dự án Arduino / ESP8266 / ESP32"
  ],

  notes: [
    "Không phát hiện được vật đứng yên",
    "Nên cấp nguồn ổn định để tránh nhiễu",
    "Có 2 biến trở chỉnh thời gian và độ nhạy",
    "Chân OUT xuất mức HIGH khi phát hiện chuyển động",
    "Cần thời gian khởi động ~30–60s sau khi cấp nguồn"
  ]
};
