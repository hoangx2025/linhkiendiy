import { Product } from "../product";

export const xl4015: Product ={
  id: "xl4015-cc-cv-5a-module",
  name: "Module Hạ Áp XL4015 Constant Current Constant Voltage (CC-CV) 5A",
  short: "Mạch giảm áp DC-DC công suất lớn 75W, hỗ trợ điều chỉnh dòng điện (CC) và điện áp (CV).",
  description: "Module XL4015 phiên bản tích hợp kiểm soát dòng hằng là giải pháp tối ưu để thay thế các dòng hạ áp công suất thấp. Mạch được thiết kế với dải điện áp rộng, hiệu suất cao lên đến 96%, chuyên dụng cho các ứng dụng yêu cầu độ ổn định dòng điện khắt khe như hệ thống chiếu sáng LED hoặc quản lý nạp năng lượng cho pin.",

  price: 0,
  currency: "VND",

  category: "Mạch nguồn hạ áp",
  brand: "Generic",
  model: "XL4015-CC-CV",
  stockStatus: "in_stock",

  specifications: [
    { key: "Điện áp đầu vào", value: "DC 4V – 38V" },
    { key: "Điện áp đầu ra", value: "DC 1.25V – 36V" },
    { key: "Dòng điện đầu ra", value: "Tối đa 5A (Điều chỉnh được)" },
    { key: "Công suất đầu ra", value: "Tối đa 75W" },
    { key: "Tần số chuyển đổi", value: "180kHz" },
    { key: "Hiệu suất chuyển đổi", value: "96%" },
    { key: "Bảo vệ", "value": "Bảo vệ quá nhiệt, giới hạn dòng ngắn mạch" },
    { key: "Kích thước", value: "54mm x 23mm x 18mm" }
  ],

  tags: [
    "xl4015",
    "cc-cv",
    "buck-converter",
    "dc-dc",
    "5a-module",
    "power-supply"
  ],
  usage: [
    "Cấp nguồn ổn định cho các hệ thống đèn LED công suất lớn",
    "Sử dụng trong các mạch nạp năng lượng cho pin và ắc quy",
    "Làm bộ nguồn hạ áp hiệu suất cao trong công nghiệp",
    "Bộ biến đổi điện áp trên xe hơi, xe máy"
  ],
  notes: [
    "Điện áp đầu vào phải luôn cao hơn điện áp đầu ra tối thiểu 2V",
    "Không hỗ trợ tính năng chống ngược cực đầu vào, cần kiểm tra kỹ trước khi cấp nguồn",
    "Khi sử dụng dòng điện trên 3A hoặc công suất lớn, bắt buộc phải gắn thêm miếng tản nhiệt đi kèm"
  ],
  usage_steps: [
    "Bước 1: Điều chỉnh biến trở áp (Voltage) để đạt mức điện áp đầu ra mong muốn.",
    "Bước 2: Sử dụng ampe kế đo đầu ra và xoay biến trở dòng (Current) để giới hạn dòng điện tối đa.",
    "Bước 3: Điều chỉnh biến trở báo hiệu để thiết lập ngưỡng đèn báo trạng thái sạc đầy.",
    "Bước 4: Kết nối tải vào đầu ra sau khi đã hoàn tất các bước cân chỉnh."
  ],
  images: [
    "https://ower.s3.ap-southeast-1.amazonaws.com/linhkiendiy/xl4015-3.jpg?AWSAccessKeyId=AKIAWYTKPUQQQYECZMZG&Expires=2085922114&Signature=%2FZ6dvzID15QMv1ucU00JdHBfb28%3D",
    "https://ower.s3.ap-southeast-1.amazonaws.com/linhkiendiy/xl4015-2.jpg?AWSAccessKeyId=AKIAWYTKPUQQQYECZMZG&Expires=2085922120&Signature=BU6UebDLcyFSiIrJRcxD%2BMuwivM%3D",
    "https://ower.s3.ap-southeast-1.amazonaws.com/linhkiendiy/xl4015-1.jpg?AWSAccessKeyId=AKIAWYTKPUQQQYECZMZG&Expires=2085922124&Signature=V5XrtV3yDmDOdnueuPTAIBA7WBA%3D"
  ],
  marketplaces: [
    {
      platform: "shopee",
      productUrl: ""
    }
  ],
}