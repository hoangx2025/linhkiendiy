import { Product } from "../product";

export const mt3608Booster: Product = {
  id: "mt3608-2a-booster-board",
  name: "Module Tăng Áp DC-DC MT3608 2A",
  short:
    "Module nâng áp DC-DC nhỏ gọn, dòng ra tối đa 2A, hiệu suất cao lên tới 93%.",
  description:
    "Module MT3608 là mạch nâng áp (Step-up/Boost) có kích thước siêu nhỏ, cho phép tăng điện áp từ mức thấp (như pin Lithium 3.7V) lên mức cao hơn (5V, 9V, 12V, 24V). Mạch sử dụng biến trở tinh chỉnh để thay đổi điện áp đầu ra, phù hợp cho các ứng dụng cấp nguồn di động, robot và thiết bị điện tử cầm tay.",

  price: 0,
  currency: "VND",

  category: "Boost DC-DC",
  brand: "Generic",
  model: "MT3608",
  stockStatus: "in_stock",

  specifications: [
    { key: "Điện áp đầu vào", value: "DC 2V – 24V" },
    { key: "Điện áp đầu ra", value: "DC 5V – 28V (Phải lớn hơn áp vào)" },
    { key: "Dòng điện đầu ra", value: "Tối đa 2A (Khuyên dùng 1A để ổn định)" },
    { key: "Hiệu suất chuyển đổi", value: "> 93%" },
    { key: "Tần số đóng cắt", value: "1.2 MHz" },
    { key: "Điện áp gợn sóng (Ripple)", value: "< 100mV" },
    { key: "Kích thước PCB", value: "36mm x 17mm x 14mm" },
    { key: "Điều chỉnh", value: "Biến trở tinh chỉnh (Trimmer)" },
  ],

  usage: [
    "Nâng áp từ Pin Lithium 3.7V lên 5V sạc điện thoại",
    "Cấp nguồn 9V/12V cho Modem Wifi từ sạc dự phòng",
    "Nguồn cấp cho các cảm biến, Arduino, ESP32",
    "Ứng dụng trong các thiết bị đo đạc cầm tay",
  ],

  notes: [
    "Điện áp đầu ra phải luôn lớn hơn điện áp đầu vào ít nhất 2V",
    "Nếu quay biến trở mà áp không đổi, hãy xoay ngược chiều kim đồng hồ khoảng 10-20 vòng",
    "Không nên sử dụng ở dòng 2A liên tục trong thời gian dài mà không có tản nhiệt",
    "Không có bảo vệ ngược cực đầu vào, hãy kiểm tra kỹ dây nối",
  ],

  tags: [
    "mt3608",
    "boost-converter",
    "step-up",
    "dc-dc",
    "2a-booster",
    "power-module",
    "voltage-regulator",
  ],

  images: [
    "https://ower.s3.ap-southeast-1.amazonaws.com/linhkiendiy/mt3608Booster-1.jpg?AWSAccessKeyId=AKIAWYTKPUQQQYECZMZG&Expires=2084890818&Signature=hF4A6eQRTUzPb%2BF6KLuwiAKC2YM%3D",
    "https://ower.s3.ap-southeast-1.amazonaws.com/linhkiendiy/mt3608Booster-2.jpg?AWSAccessKeyId=AKIAWYTKPUQQQYECZMZG&Expires=2084890819&Signature=3iDeiip3zHvjXdNPiN%2FFOTzJj30%3D",
    "https://ower.s3.ap-southeast-1.amazonaws.com/linhkiendiy/mt3608Booster-3.jpg?AWSAccessKeyId=AKIAWYTKPUQQQYECZMZG&Expires=2084890823&Signature=T9RE8SXKMwYWfcpLXySeQYFELrE%3D",
    "https://ower.s3.ap-southeast-1.amazonaws.com/linhkiendiy/mt3608Booster-4.jpg?AWSAccessKeyId=AKIAWYTKPUQQQYECZMZG&Expires=2084890826&Signature=%2BvhibTuF074xpAE50cqvo78SiP8%3D",
  ],
  marketplaces: [
    {
      platform: "shopee",
      productUrl: "",
    },
  ],
  usage_steps: [
    "Bước 1: Kết nối nguồn - Hàn dây vào hai lỗ VIN+ và VIN- (2V-24V). Lưu ý đúng cực.",
    "Bước 2: Chuẩn bị đo - Dùng đồng hồ VOM thang đo Áp (DC) đặt vào hai lỗ VOUT+ và VOUT-.",
    "Bước 3: Điều chỉnh áp - Xoay biến trở xanh dương ngược chiều kim đồng hồ để tăng điện áp đầu ra. Lưu ý: Lần đầu sử dụng có thể cần xoay nhiều vòng (10-20 vòng) mới thấy điện áp thay đổi.",
    "Bước 4: Kiểm tra tải - Sau khi chỉnh xong áp mong muốn, mới tiến hành kết nối thiết bị vào đầu ra.",
  ],
};
