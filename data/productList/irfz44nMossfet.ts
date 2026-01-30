import { Product } from "../product";

export const irfz44nMossfet: Product = {
  id: "irfz44n-mosfet-n-channel",
  name: "MOSFET N-Channel IRFZ44N 55V 49A",
  short:
    "MOSFET kênh N công suất lớn, chịu dòng tối đa 49A, điện áp 55V, chuyên dùng cho mạch đóng cắt tốc độ cao.",
  description:
    "IRFZ44N là một MOSFET công suất kênh N (N-Channel) phổ biến với điện trở nội (Rds-on) thấp và khả năng chịu dòng cao. Được thiết kế theo công nghệ HEXFET tiên tiến, linh kiện này cực kỳ phù hợp cho các ứng dụng điều khiển động cơ DC, mạch Inverter, bộ chuyển đổi nguồn DC-DC và các mạch đóng cắt tải nặng yêu cầu hiệu suất cao.",

  price: 0,
  currency: "VND",

  category: "Linh kiện bán dẫn / MOSFET",
  brand: "Generic",
  model: "IRFZ44N",
  stockStatus: "in_stock",

  specifications: [
    { key: "Loại MOSFET", value: "N-Channel (Kênh N)" },
    { key: "Điện áp cực máng - cực nguồn (Vds)", value: "55V" },
    { key: "Dòng cực máng liên tục (Id)", value: "49A (tại 25°C)" },
    { key: "Dòng cực máng xung (Idm)", value: "160A" },
    { key: "Điện trở nội (Rds-on)", value: "17.5 mΩ (tại Vgs = 10V)" },
    { key: "Điện áp ngưỡng G-S (Vgs-th)", value: "2.0V - 4.0V" },
    { key: "Công suất tiêu tán (Pd)", value: "94W" },
    { key: "Kiểu đóng gói", value: "TO-220" },
    { key: "Nhiệt độ hoạt động", value: "-55°C đến +175°C" }
  ],

  usage: [
    "Điều khiển tốc độ động cơ DC (PWM)",
    "Mạch kích (Driver) cho đèn LED công suất lớn",
    "Mạch Inverter chuyển đổi điện áp DC-AC",
    "Bộ chỉnh lưu đồng bộ",
    "Mạch bảo vệ ngược cực, đóng cắt tải cao tần"
  ],

  notes: [
    "Cần lắp thêm tản nhiệt khi sử dụng với dòng điện > 5A",
    "Sử dụng thêm điện trở kéo xuống (pull-down) ở chân Gate để tránh kích dẫn nhầm",
    "Để MOSFET mở hoàn toàn (đạt Rds-on thấp nhất), nên cấp áp Vgs khoảng 10V",
    "Kiểm tra kỹ sơ đồ chân G-D-S (thứ tự từ trái sang phải là Gate-Drain-Source)"
  ],

  tags: [
    "irfz44n",
    "mosfet",
    "n-channel",
    "power-mosfet",
    "to-220",
    "switching",
    "motor-control",
    "transistor"
  ],

  images: [
    "https://ower.s3.ap-southeast-1.amazonaws.com/linhkiendiy/irfz44n-1.jpg?AWSAccessKeyId=AKIAWYTKPUQQQYECZMZG&Expires=2084890479&Signature=XsYgH7E6u4rZ920QB0%2FaZoNCFdE%3D",
    "https://ower.s3.ap-southeast-1.amazonaws.com/linhkiendiy/irfz44n-2.jpg?AWSAccessKeyId=AKIAWYTKPUQQQYECZMZG&Expires=2084890482&Signature=cdivmeTjIc5sFo6%2FSUFWkwD%2BcLE%3D",
    "https://ower.s3.ap-southeast-1.amazonaws.com/linhkiendiy/irfz44n-3.jpg?AWSAccessKeyId=AKIAWYTKPUQQQYECZMZG&Expires=2084890485&Signature=ft56M5X3KkwvK%2BQ%2BMvDRJBiQuKc%3D"
  ],
   marketplaces: [
    {
      platform: "shopee",
      productUrl: ""
    }
  ],
};