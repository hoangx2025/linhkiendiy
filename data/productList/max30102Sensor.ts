import { Product } from "../product";

export const max30102Sensor: Product = {
  id: "mh-et-live-max30102-heart-rate-spo2-sensor",
  name: "Module Cảm Biến Nhịp Tim và Oxy Trong Máu MAX30102",
  short: "Cảm biến đo nhịp tim và nồng độ oxy trong máu (SpO2) độ nhạy cao, tích hợp đèn LED và quang trở.",
  description: "MAX30102 là module cảm biến sinh trắc học tích hợp bộ đo nồng độ oxy và nhịp tim. Mạch bao gồm hai đèn LED (đỏ và hồng ngoại), bộ dò quang học, các thành phần quang học tối ưu và mạch điện tử có độ nhiễu thấp giúp loại bỏ ánh sáng môi trường. Đây là phiên bản nâng cấp của MAX30100 với lớp kính bảo vệ giúp kết quả đo ổn định và chính xác hơn, phù hợp cho các ứng dụng y tế thông minh và thiết bị theo dõi sức khỏe cầm tay.",

  price: 0,
  currency: "VND",

  category: "Cảm biến sinh trắc học",
  brand: "MH-ET LIVE",
  model: "MAX30102",
  stockStatus: "in_stock",

  specifications: [
    { key: "Điện áp hoạt động", value: "1.8V - 5V" },
    { key: "Giao tiếp", value: "I2C (Tốc độ cao)" },
    { key: "Dòng điện tiêu thụ", value: "600µA (Đang hoạt động), 0.7µA (Chế độ chờ)" },
    { key: "Bước sóng LED", value: "660nm (Đỏ) / 880nm (Hồng ngoại)" },
    { key: "ADC tích hợp", value: "15-bit đến 18-bit" },
    { key: "Nhiệt độ hoạt động", value: "-40°C đến +85°C" },
    { key: "Kích thước module", value: "18mm x 14mm" },
    { key: "Tính năng bổ sung", value: "Tích hợp cảm biến nhiệt độ bên trong để bù trừ sai số" }
  ],

  tags: [
    "max30102",
    "heart-rate-sensor",
    "spo2-sensor",
    "biometric",
    "health-monitor",
    "arduino-sensor"
  ],
  usage: [
    "Theo dõi nhịp tim và nồng độ oxy trong máu thời gian thực",
    "Tích hợp vào đồng hồ thông minh (Smartwatch) hoặc vòng đeo tay sức khỏe",
    "Sử dụng trong các dự án y tế điện tử với Arduino, ESP32, Raspberry Pi",
    "Làm thiết bị cảnh báo tình trạng sức khỏe cho người già hoặc vận động viên"
  ],
  notes: [
    "Cần giữ ngón tay ổn định trên cảm biến để có kết quả chính xác nhất, tránh rung lắc mạnh",
    "Ánh sáng môi trường quá mạnh có thể gây nhiễu, nên che bớt ánh sáng xung quanh khi đo",
    "Sử dụng thư viện 'SparkFun MAX3010x' để dễ dàng lập trình trên môi trường Arduino",
    "Module có chân INT (Ngắt) có thể lập trình để thông báo cho vi điều khiển khi có dữ liệu mới"
  ],
  usage_steps: [
    "Bước 1: Kết nối chân VIN vào 3.3V/5V và GND vào cực âm nguồn.",
    "Bước 2: Kết nối chân SCL và SDA vào cổng I2C tương ứng trên vi điều khiển.",
    "Bước 3: Đặt nhẹ đầu ngón tay lên vùng thấu kính của cảm biến (nơi có đèn LED).",
    "Bước 4: Sử dụng code mẫu để đọc giá trị nhịp tim (BPM) và nồng độ oxy (SpO2) hiển thị lên màn hình hoặc Serial Monitor."
  ],
  images: [
    ""
  ],
  marketplaces: [
    {
      platform: "shopee",
      productUrl: ""
    }
  ],
};