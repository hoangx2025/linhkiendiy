import { Product } from "../product";

export const boostBuckXl6009Lm2577: Product = {
  id: "boost-buck-xl6009-lm2577",
  name: "Module Boost/Buck XL6009/LM2577 3A (CV/CC)",
  short:
    "Hạ áp DC-DC, chỉnh điện áp & dòng (CV/CC), phù hợp sạc pin, cấp nguồn DIY.",
  description:
    "XL6009/LM2577 là module hạ áp DC-DC phổ biến cho DIY. Module cho phép điều chỉnh điện áp và dòng điện (CV/CC), thích hợp dùng làm mạch sạc pin, cấp nguồn cho mạch điện tử, LED và motor nhỏ. Hiệu suất cao, có bảo vệ ngắn mạch, hoạt động ổn định.",

  price: 39000,
  currency: "VND",

  category: "Buck / CV-CC",
  brand: "Generic",
  model: "XL6009/LM2577",
  stockStatus: "low_stock",

  specifications: [
    {
      key: "Điện áp đầu vào",
      value: "5 - 30V",
    },
    {
      key: "Điện áp đầu ra",
      value: "0.5 - 30V",
    },
    {
      key: "Dòng đầu ra",
      value: "3A, tối đa 4A",
    },
    {
      key: "Công suất",
      value: "35W/60W (có tản nhiệt)",
    },
    {
      key: "Hiệu suất",
      value: "≈ 88%",
    },
    {
      key: "Tần số hoạt động",
      value: "180 KHz",
    },
    {
      key: "Bảo vệ",
      value: "Bảo vệ ngắn mạch, giới hạn dòng",
    },
    {
      key: "Chế độ hoạt động",
      value: "CV / CC",
    },
    {
      key: "Yêu cầu tản nhiệt",
      value: "Cần tản nhiệt khi dùng trên 3A",
    },
  ],

  usage: [
    "Hạ áp nguồn DC",
    "Sạc pin lithium (CC/CV)",
    "Cấp nguồn cho Arduino, ESP, mạch DIY",
    "Nguồn cho LED và motor nhỏ",
  ],

  notes: [
    "Có sụt áp 0 - 0.3V do điện trở đo dòng (hiện tượng bình thường)",
    "Nên tăng cường tản nhiệt khi dùng công suất cao",
  ],

  tags: [
    "buck",
    "boost",
    "dc-dc",
    "XL6009",
    "LM2577",
    "cv/cc",
    "step-down",
    "step-up",
    "power-module",
    "battery-charger",
    "3A",
    "DIY",
  ],

  images: [
    "https://ower.s3.ap-southeast-1.amazonaws.com/linhkiendiy/boost-buck-xl6009-lm2577-1.jpg?AWSAccessKeyId=AKIAWYTKPUQQQYECZMZG&Expires=2084714619&Signature=6UBOE%2BelpDLjxIwyD3wLXHgojNU%3D",
    "https://ower.s3.ap-southeast-1.amazonaws.com/linhkiendiy/boost-buck-xl6009-lm2577-2.jpg?AWSAccessKeyId=AKIAWYTKPUQQQYECZMZG&Expires=2084714698&Signature=DDFYp8i9Cl4HzONy0ehBlerJdWg%3D",
    "https://ower.s3.ap-southeast-1.amazonaws.com/linhkiendiy/boost-buck-xl6009-lm2577-3.jpg?AWSAccessKeyId=AKIAWYTKPUQQQYECZMZG&Expires=2084714728&Signature=ZnKcD8t2aBLrWtav%2FWAsNyN39CA%3D",
  ],
  marketplaces: [
    {
      platform: "shopee",
      productUrl: "https://vn.shp.ee/CqoAAUF"
    }
  ],
  usage_steps: [
    "Bước 1: Chỉnh Áp (CV) - Cấp nguồn vào Input. Để đồng hồ VOM ở thang đo điện áp, đo hai đầu Output. Xoay biến trở 'V-ADJ' (biến trở CV) cho đến khi đạt điện áp mong muốn.",
    "Bước 2: Chỉnh Dòng (CC) - Chuyển đồng hồ VOM sang thang đo dòng 10A, chập trực tiếp que đo vào Output. Xoay biến trở 'I-ADJ' (biến trở CC) cho đến khi đạt giới hạn dòng điện cần thiết.",
    "Bước 3: Kiểm tra đèn báo - LED 'CC' sẽ sáng khi mạch rơi vào trạng thái dòng hằng. LED 'FULL' sẽ sáng khi dòng điện ra nhỏ hơn mức báo đầy đã được cài đặt mặc định.",
    "Lưu ý đặc biệt: Vì đây là mạch Buck-Boost, bạn có thể chỉnh Output 12V ngay cả khi Input chỉ là 5V hoặc lên tới 24V."
  ],
};
