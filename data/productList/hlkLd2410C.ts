import { Product } from "../product";

export const hlkLd2410C: Product = {
  id: "hi-link-hlk-ld2410c-human-presence-radar",
  name: "Cảm Biến Hiện Diện Con Người mmWave Hi-Link HLK-LD2410C 24GHz",
  short: "Module radar phát hiện hiện diện con người với độ nhạy cực cao, hỗ trợ Bluetooth để cấu hình.",
  description: "HLK-LD2410C là module cảm biến trạng thái con người băng tần 24GHz độ nhạy cao của Hi-Link. Nguyên lý hoạt động là sử dụng sóng liên tục điều tần FMCW để phát hiện mục tiêu con người trong không gian xác định. Mạch có thể nhận biết người đang chuyển động, đang đi lại hoặc thậm chí là đứng yên/ngồi yên mà các cảm biến PIR truyền thống không làm được. Tích hợp sẵn Bluetooth giúp cấu hình khoảng cách và độ nhạy qua ứng dụng điện thoại.",

  price: 0,
  currency: "VND",

  category: "Cảm biến hiện diện",
  brand: "Hi-Link",
  model: "HLK-LD2410C",
  stockStatus: "in_stock",

  specifications: [
    { key: "Tần số hoạt động", value: "24GHz ~ 24.25GHz" },
    { key: "Điện áp hoạt động", value: "DC 5V – 12V" },
    { key: "Khoảng cách phát hiện", value: "0.75m – 6m (Có thể điều chỉnh)" },
    { key: "Góc phát hiện", value: "±60 độ" },
    { key: "Giao tiếp", value: "UART (TTL 3.3V) & Cấu hình qua Bluetooth" },
    { key: "Dòng điện tiêu thụ", value: "~79mA" },
    { key: "Kích thước", value: "16mm x 22mm" },
    { key: "Logic ngõ ra", value: "Mức cao (3.3V) khi có người, mức thấp khi không có người" }
  ],

  tags: [
    "hlk-ld2410c",
    "hi-link",
    "mmwave-radar",
    "human-presence",
    "smart-home",
    "24ghz-sensor"
  ],
  usage: [
    "Hệ thống đèn thông minh tự động bật/tắt (nhận diện cả khi ngồi đọc sách)",
    "Hệ thống an ninh cảnh báo xâm nhập",
    "Kích hoạt màn hình quảng cáo hoặc thiết bị gia dụng khi có người đến gần",
    "Tự động tắt điều hòa, tivi khi không có người trong phòng để tiết kiệm điện"
  ],
  notes: [
    "Module có khả năng xuyên qua các vật liệu mỏng như nhựa, gỗ, thạch cao (không xuyên được kim loại)",
    "Sử dụng App 'HLKRadarTool' trên điện thoại để điều chỉnh các thông số nhạy và khoảng cách qua Bluetooth",
    "Tránh đặt cảm biến đối diện với máy điều hòa hoặc quạt đang chạy vì có thể gây nhiễu tín hiệu radar",
    "Nguồn cấp cần ổn định để tránh báo giả do nhiễu sóng"
  ],
  usage_steps: [
    "Bước 1: Cấp nguồn 5V vào chân VCC và GND của module.",
    "Bước 2: Kết nối chân TX/RX vào vi điều khiển hoặc mạch chuyển đổi USB-To-TTL để đọc dữ liệu chi tiết.",
    "Bước 3: Sử dụng chân OUT kết nối trực tiếp với Relay hoặc chân IO để nhận biết trạng thái có người/không có người.",
    "Bước 4: Tải ứng dụng HLKRadarTool để cân chỉnh 'Gate' (khoảng cách) phù hợp với không gian thực tế."
  ],
  images: [
    "",
    ""
  ],
  marketplaces: [
    {
      platform: "shopee",
      productUrl: ""
    }
  ],
};