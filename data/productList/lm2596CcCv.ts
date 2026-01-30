import { Product } from "../product";

export const lm2596CcCv: Product = {
  "id": "lm2596-cc-cv-step-down-module",
  "name": "Module Buck LM2596S CC/CV 3A",
  "short": "Mạch hạ áp có khả năng điều chỉnh cả điện áp (CV) và giới hạn dòng điện (CC), tích hợp đèn báo sạc và báo đầy.",
  "description": "Module LM2596 CC-CV là phiên bản nâng cấp của mạch hạ áp LM2596 thông thường, bổ sung tính năng kiểm soát dòng điện đầu ra không đổi. Thiết kế này cực kỳ phù hợp để làm bộ sạc pin Lithium (18650), sạc ắc quy hoặc làm driver cho đèn LED công suất lớn. Mạch có 3 biến trở xanh dương để tùy chỉnh áp, dòng và ngưỡng báo đầy, cùng hệ thống 3 LED hiển thị trạng thái hoạt động trực quan.",

  "price": 0,
  "currency": "VND",

  "category": "Mạch nguồn hạ áp",
  "brand": "Generic",
  "model": "LM2596S CC-CV",
  "stockStatus": "in_stock",

  "specifications": [
    { "key": "Điện áp đầu vào", "value": "DC 7V – 35V" },
    { "key": "Điện áp đầu ra", "value": "DC 1.25V – 30V" },
    { "key": "Dòng điện đầu ra tối đa", "value": "3A (Cần tản nhiệt nếu công suất > 15W)" },
    { "key": "Hiệu suất chuyển đổi", "value": "Lên đến 92%" },
    { "key": "Tần số quét", "value": "150kHz" },
    { "key": "Độ gợn điện áp", "value": "< 50mV" },
    { "key": "Nhiệt độ hoạt động", "value": "-40°C đến +85°C" },
    { "key": "Kích thước", "value": "48mm x 23mm x 14mm" }
  ],

  "usage_steps": [
    "Bước 1: Chỉnh áp (CV) - Cấp nguồn vào Input, dùng VOM đo áp Output. Xoay biến trở 1 (gần cổng Input/Output trái) để đạt điện áp sạc hoặc điện áp tải mong muốn.",
    "Bước 2: Chỉnh dòng (CC) - Chuyển VOM sang thang đo 10A, chập trực tiếp 2 que đo vào Output. Xoay biến trở 3 (gần cổng Output phải) cho đến khi đồng hồ hiển thị dòng tối đa cho phép.",
    "Bước 3: Chỉnh đèn báo đầy - Kết nối tải giả hoặc pin đã sạc đầy. Xoay biến trở 2 (biến trở giữa) cho đến khi LED báo hiệu chuyển từ đỏ sang xanh lam để đặt ngưỡng báo đầy.",
    "Lưu ý: Luôn chỉnh Áp (CV) trước khi chỉnh Dòng (CC)."
  ],

  "usage": [
    "Sạc các loại pin Lithium-ion, Lipo, ắc quy chì",
    "Driver ổn định dòng cho đèn LED công suất lớn",
    "Bộ nguồn thí nghiệm có giới hạn dòng bảo vệ chống chập",
    "Mạch nạp năng lượng mặt trời hạ áp"
  ],

  "notes": [
    "Điện áp vào (Input) phải cao hơn áp ra (Output) ít nhất 2V",
    "Tính năng giới hạn dòng (CC) giúp bảo vệ pin không bị sạc quá dòng gây nóng/nổ",
    "Đèn xanh lam báo đầy chỉ mang tính chất hiển thị, mạch không có chức năng tự ngắt hoàn toàn dòng điện",
    "Nếu sử dụng dòng trên 2A liên tục, bắt buộc phải dán thêm tản nhiệt cho IC LM2596 và diode",
    "Tuyệt đối không cấp ngược cực nguồn đầu vào vì sẽ làm cháy IC ngay lập tức"
  ],

  "tags": [
    "lm2596",
    "cc-cv",
    "step-down",
    "buck-converter",
    "battery-charger",
    "led-driver",
    "adjustable-power-supply",
    "DIY"
  ],
   images: [
    "https://ower.s3.ap-southeast-1.amazonaws.com/linhkiendiy/lm2596s-1.jpg?AWSAccessKeyId=AKIAWYTKPUQQQYECZMZG&Expires=2084714957&Signature=7Gxp%2FAXWvKq4LXMHHAbu6Wa6oNQ%3D",
    "https://ower.s3.ap-southeast-1.amazonaws.com/linhkiendiy/lm2596s-2.jpg?AWSAccessKeyId=AKIAWYTKPUQQQYECZMZG&Expires=2084714957&Signature=4OwGrIO70ohvFV67yCZ8S8xu1%2Fo%3D",
    "https://ower.s3.ap-southeast-1.amazonaws.com/linhkiendiy/lm2596s-3.jpg?AWSAccessKeyId=AKIAWYTKPUQQQYECZMZG&Expires=2084714959&Signature=r8jGl9KBD8S3Sh3%2BgpOu%2BNq43ic%3D",
  ],
  marketplaces: [
    {
      platform: "shopee",
      productUrl: "https://vn.shp.ee/kPbnRho"
    }
  ]
}
