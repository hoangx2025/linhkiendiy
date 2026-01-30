import { Product } from "../product";

export const hcSr501: Product = {
  id: "hc-sr501-pir-sensor",
  name: "Cảm biến chuyển động hồng ngoại PIR HC-SR501",
  short:
    "Cảm biến phát hiện chuyển động thân nhiệt hồng ngoại, khoảng cách 3-7m, có biến trở điều chỉnh độ nhạy và thời gian trễ.",
  description:
    "Module HC-SR501 sử dụng cảm biến hồng ngoại thụ động để phát hiện bức xạ nhiệt từ cơ thể người hoặc động vật. Module có độ nhạy cao, độ tin cậy tốt và điện áp hoạt động rộng, cực kỳ phù hợp cho các hệ thống đèn tự động, báo động chống trộm và các dự án Smart Home tiết kiệm năng lượng.",

  price: 0,
  currency: "VND",

  category: "Cảm biến chuyển động",
  brand: "Generic",
  model: "HC-SR501",
  stockStatus: "in_stock",

  specifications: [
    { key: "Điện áp hoạt động", value: "DC 4.5V – 20V" },
    { key: "Dòng tiêu thụ tĩnh", value: "< 50µA" },
    { key: "Mức tín hiệu ra (Output)", value: "High 3.3V / Low 0V" },
    { key: "Khoảng cách phát hiện", value: "3m – 7m (có thể điều chỉnh)" },
    { key: "Góc quét", value: "< 120 độ (hình nón)" },
    { key: "Thời gian trễ", value: "0.3s – 200s (có thể điều chỉnh)" },
    { key: "Thời gian nghỉ (Block time)", value: "2.5s (mặc định)" },
    {
      key: "Chế độ kích hoạt",
      value: "L (không lặp lại) / H (lặp lại liên tục)",
    },
    { key: "Nhiệt độ hoạt động", value: "-15°C đến +70°C" },
    { key: "Kích thước PCB", value: "32mm x 24mm" },
  ],

  usage: [
    "Hệ thống đèn cầu thang, hành lang tự động",
    "Thiết bị báo động chống trộm",
    "Kích hoạt camera giám sát khi có người",
    "Dự án Smart Home tiết kiệm điện năng",
    "Đồ chơi thông minh và robot",
  ],

  notes: [
    "Cần khoảng 60 giây khởi động để cảm biến ổn định sau khi cấp nguồn",
    "Điều chỉnh biến trở 'Sensitivity' để tăng giảm khoảng cách nhận diện",
    "Điều chỉnh biến trở 'Time' để thay đổi thời gian giữ mức cao (High)",
    "Tránh lắp đặt nơi có luồng khí nóng hoặc nguồn nhiệt thay đổi đột ngột",
    "Nên sử dụng chế độ kích hoạt H cho ứng dụng bật tắt đèn",
  ],

  tags: [
    "hc-sr501",
    "pir",
    "motion-sensor",
    "infra-red",
    "human-body-sensor",
    "arduino-sensor",
    "smart-home",
    "DIY",
  ],

  images: [
    "https://ower.s3.ap-southeast-1.amazonaws.com/linhkiendiy/hr-sr501-14.jpg?AWSAccessKeyId=AKIAWYTKPUQQQYECZMZG&Expires=2084890193&Signature=w9YGhbfBNKOwnD4UXFKsM5JmSnk%3D",
    "https://ower.s3.ap-southeast-1.amazonaws.com/linhkiendiy/hr-sr501-1.jpg?AWSAccessKeyId=AKIAWYTKPUQQQYECZMZG&Expires=2084890185&Signature=PVYPUA8g3aNiiWFPKKTBbZOrfn8%3D",
    "https://ower.s3.ap-southeast-1.amazonaws.com/linhkiendiy/hr-sr501-2.jpg?AWSAccessKeyId=AKIAWYTKPUQQQYECZMZG&Expires=2084890185&Signature=yOExSokOKDxt7YbuRP7V%2Bd8LfCk%3D",
    "https://ower.s3.ap-southeast-1.amazonaws.com/linhkiendiy/hr-sr501-3.jpg?AWSAccessKeyId=AKIAWYTKPUQQQYECZMZG&Expires=2084890188&Signature=LobJ%2Fv%2BnjwP5G01Mik%2Byh1git%2Fc%3D",
  ],
  marketplaces: [
    {
      platform: "shopee",
      productUrl: "https://vn.shp.ee/nTqMjLV",
    },
  ],
  usage_steps: [
    "Bước 1: Kết nối nguồn - Chân VCC nối nguồn (5V-20V), chân GND nối cực âm, chân OUT nối vào chân Input của MCU (Arduino/ESP32) hoặc module Relay.",
    "Bước 2: Chỉnh độ nhạy (Sensitivity) - Xoay biến trở bên trái (nhìn từ phía linh kiện) theo chiều kim đồng hồ để tăng khoảng cách phát hiện, ngược lại để giảm.",
    "Bước 3: Chỉnh thời gian trễ (Time Delay) - Xoay biến trở bên phải theo chiều kim đồng hồ để tăng thời gian giữ đèn sáng (tối đa 200s), ngược lại để giảm.",
    "Bước 4: Chọn chế độ Jumper - Cắm Jumper vào vị trí H (Repeat Trigger) nếu muốn cảm biến luôn giữ mức cao miễn là vẫn có người chuyển động trong vùng quét.",
  ],
};
