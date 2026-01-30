import { Product } from "../product";

export const mpu6500Sensor: Product = {
  id: "mpu-6500-6dof-module",
  name: "Cảm biến Gia tốc & Con quay hồi chuyển 6-DOF MPU-6500",
  short:
    "Module cảm biến 6 trục (IMU) tích hợp con quay hồi chuyển 3 trục và gia tốc kế 3 trục, hỗ trợ giao tiếp I2C/SPI.",
  description:
    "MPU-6500 là giải pháp theo dõi chuyển động 6 trục (6-DOF) hiệu suất cao, thay thế cho dòng MPU-6050 với mức tiêu thụ điện năng thấp hơn và kích thước nhỏ hơn. Module tích hợp sẵn bộ xử lý chuyển động kỹ thuật số (DMP) giúp tính toán các thuật toán phức tạp, giảm tải cho vi điều khiển chính.",

  price: 0,
  currency: "VND",

  category: "Cảm biến chuyển động / IMU",
  brand: "Generic",
  model: "GY-6500 / MPU-6500",
  stockStatus: "in_stock",

  specifications: [
    { key: "Chip chính", value: "MPU-6500" },
    { key: "Số trục cảm biến", value: "6 trục (3 trục Gia tốc, 3 trục Gyro)" },
    { key: "Điện áp hoạt động", value: "3.0V – 5.0V (tích hợp ổn áp LDO)" },
    {
      key: "Giao tiếp",
      value: "I2C / SPI (tần số tối đa 1MHz cho I2C, 20MHz cho SPI)",
    },
    { key: "Thang đo Gia tốc", value: "±2g, ±4g, ±8g, ±16g" },
    { key: "Thang đo Gyro", value: "±250, ±500, ±1000, ±2000 °/s" },
    { key: "ADC", value: "16-bit cho mỗi trục" },
    {
      key: "Dòng tiêu thụ",
      value: "Khoảng 3.2mA (Full mode) / 8µA (Sleep mode)",
    },
    { key: "Kích thước PCB", value: "15mm x 25mm" },
  ],

  usage: [
    "Cân bằng máy bay không người lái (Drone / Quadcopter)",
    "Hệ thống điều hướng robot",
    "Thiết bị đeo thông minh (Wearable devices)",
    "Tay cầm chơi game cảm ứng chuyển động",
    "Ổn định hình ảnh (Gimbal)",
  ],

  notes: [
    "Hỗ trợ cả giao tiếp SPI nhanh hơn so với người tiền nhiệm MPU-6050",
    "Chân AD0 dùng để thiết lập địa chỉ I2C",
    "Cần thư viện hỗ trợ (như MPU6500_WE hoặc FastIMU) để đọc dữ liệu chính xác",
    "Đảm bảo module được lắp cố định để tránh nhiễu rung từ động cơ",
  ],

  tags: [
    "mpu6500",
    "gy-6500",
    "6dof",
    "imu",
    "accelerometer",
    "gyroscope",
    "arduino",
    "spi-sensor",
  ],

  images: [
    "https://ower.s3.ap-southeast-1.amazonaws.com/linhkiendiy/mpu6500-1.jpg?AWSAccessKeyId=AKIAWYTKPUQQQYECZMZG&Expires=2084891051&Signature=XUOHEPfiMm%2BNFj0MS4HnjevOhi0%3D",
    "https://ower.s3.ap-southeast-1.amazonaws.com/linhkiendiy/mpu6500-2.jpg?AWSAccessKeyId=AKIAWYTKPUQQQYECZMZG&Expires=2084891054&Signature=pmVJFwJSzKbficnVcDTGINwh85E%3D",
    "https://ower.s3.ap-southeast-1.amazonaws.com/linhkiendiy/mpu6500-3.jpg?AWSAccessKeyId=AKIAWYTKPUQQQYECZMZG&Expires=2084891058&Signature=lI7pP2B2AqMEJGtl6XfYR6TaLAE%3D",
  ],
  marketplaces: [
    {
      platform: "shopee",
      productUrl: "https://vn.shp.ee/UaNVBqG",
    },
  ],
  usage_steps: [
    "Bước 1: Kết nối nguồn - Chân VCC nối 3.3V hoặc 5V, chân GND nối cực âm. Lưu ý: Chip MPU-6500 thực tế chạy 1.8V-3.3V, nhưng module GY thường có sẵn IC hạ áp.",
    "Bước 2: Chọn chuẩn giao tiếp - Mặc định dùng I2C (SCL/SDA). Nếu dùng SPI, cần kết nối các chân SCL (SCLK), SDA (MOSI), AD0 (MISO) và NCS (CS).",
    "Bước 3: Cài đặt địa chỉ I2C - Chân AD0 dùng để chọn địa chỉ. Nếu nối GND, địa chỉ là 0x68. Nếu nối VCC, địa chỉ là 0x69.",
    "Bước 4: Khởi tạo phần mềm - Sử dụng các thư viện như MPU6500_t3 hoặc MPU9250 (tương thích ngược) để đọc giá trị RAW từ cảm biến, sau đó tính toán góc nghiêng.",
  ],
};
