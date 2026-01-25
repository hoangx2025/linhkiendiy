import { Product } from "../product";

export const tp4056TypeCProtected: Product = {
  id: "tp4056-type-c-protection",
  name: "Module Sạc Pin Lithium TP4056 Type-C (Có bảo vệ)",
  short:
    "Module sạc pin Li-ion cổng Type-C tích hợp bảo vệ xả cạn và quá dòng 3A.",
  description:
    "Đây là biến thể nâng cấp sử dụng giao tiếp USB Type-C hiện đại. Module tích hợp chip sạc TP4056 cùng hệ thống bảo vệ kép (DW01 + 8205A), giúp tự động ngắt tải khi pin yếu dưới 2.5V hoặc khi xảy ra chập mạch, đảm bảo an toàn tuyệt đối cho pin Lithium.",

  price: 0,
  currency: "VND",

  category: "Mạch sạc pin / Quản lý năng lượng",
  brand: "Generic",
  model: "TP4056 Type-C Edition",
  stockStatus: "in_stock",

  specifications: [
    { key: "Cổng kết nối", value: "USB Type-C" },
    { key: "Chip điều khiển", value: "TP4056" },
    { key: "Chip bảo vệ", value: "DW01A + FS8205A" },
    { key: "Điện áp sạc đầy", value: "4.2V ± 1%" },
    { key: "Dòng sạc mặc định", value: "1A (1000mA)" },
    { key: "Ngưỡng ngắt xả cạn", value: "2.5V (Bảo vệ pin không bị hỏng)" },
    { key: "Ngưỡng ngắt quá dòng", value: "3A" },
    { key: "Kích thước", value: "28mm x 17mm (Dài hơn bản không bảo vệ)" },
  ],

  usage: [
    "Sạc pin 18650/Lipo qua cáp sạc điện thoại Type-C",
    "Làm mạch nguồn cho đèn pin siêu sáng tự chế",
    "Hệ thống UPS nhỏ cho ESP32 hoặc cảm biến IOT",
    "Thay thế mạch sạc cũ trong các thiết bị điện tử cầm tay",
  ],

  notes: [
    "Dùng cáp Type-C to Type-C đôi khi không nhận (do thiếu điện trở nhận diện), nên dùng cáp USB-A to Type-C",
    "Hàn pin vào B+ và B-, hàn tải (motor, mạch hạ áp...) vào OUT+ và OUT-",
    "Nếu lắp pin lần đầu mà OUT không có điện, hãy cắm sạc vào để 'kích hoạt' mạch bảo vệ",
    "Không sạc pin ngược cực (B+ vào cực âm pin sẽ gây hỏng mạch ngay lập tức)",
  ],

  tags: [
    "tp4056",
    "type-c",
    "li-ion-charger",
    "protection-circuit",
    "18650",
    "usb-c",
    "battery-management",
  ],

  images: [
    "https://ower.s3.ap-southeast-1.amazonaws.com/linhkiendiy/tp4056TypeCProtected-1.jpg?AWSAccessKeyId=AKIAWYTKPUQQQYECZMZG&Expires=2084891999&Signature=KEoEWOYxqzpSGdXNxfMYa9OZpZg%3D",
    "https://ower.s3.ap-southeast-1.amazonaws.com/linhkiendiy/tp4056TypeCProtected-2.jpg?AWSAccessKeyId=AKIAWYTKPUQQQYECZMZG&Expires=2084892002&Signature=RNyfapcZjiCuUAQPZbEvUuWVsN0%3D",
    "https://ower.s3.ap-southeast-1.amazonaws.com/linhkiendiy/tp4056TypeCProtected-3.jpg?AWSAccessKeyId=AKIAWYTKPUQQQYECZMZG&Expires=2084892006&Signature=v2FrpX929LtazKnE7lDvFR05uNQ%3D",
  ],
};
