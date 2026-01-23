export type StockStatus =
  | "in_stock"
  | "low_stock"
  | "out_of_stock"
  | "pre_order";

export type Product = {
  id: string;
  name: string;
  short: string;
  description: string;

  price: number;
  currency: "VND";

  category: string;
  brand: string;
  model: string;
  stockStatus: StockStatus;

  specifications: ProductSpecification[];

  tags: string[];
  images: string[];
  usage: string[];
  notes: string[];
};

export type ProductSpecification = {
  key: string;
  value: string;
};

export const products: Product[] = [
  {
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
      "https://linhkiendiy.s3.ap-southeast-1.amazonaws.com/boost-buck-xl6009-lm2577-1.jpg?response-content-disposition=inline&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaDmFwLXNvdXRoZWFzdC0xIkgwRgIhAKdBP23CBGKhJvtAmfuO2W%2FBuP%2FDwS6eh1eFhWoSfHm8AiEA4sScKrItvJR%2FsyVxmW8nDfVyk3vfcmaOmZAzOfvlDU8qwgMI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARABGgw0NjUxNTM1MzI5NjEiDOt3NbrKK%2B7mEjkcqCqWAznGhF%2BFdnEzzKIEfZUU%2Bvnv%2BRhcIJnecQYK3oJ%2FnGvxgtl%2BfIzU6YFLvO1PhZQqAebLPY%2BZWcBwdOh8wXYJwXhRGTSjA9yufCtGMg2PT%2BaZSUambGVbHLWQSRb6E1j6U2yabsYcTqBwjdzb77hJ88G5U1Khb9BAlRMFirwQ89So5Cg8TOV%2FeLCyITwEO5JK9BUiumO5nh05aPuTXKIVxxbYl5LcNXBU00c%2B2b44rljY%2BiwTv7X%2BXUrP%2FGeM%2F29RsOeprQSCHai9rQb%2BuCcGRgWpoz%2BeGbvWrdEX4zgHXasIXUHe3arnG14a%2BtBvGmV32qt0oOM9%2FwJKZMKIdFxBIHiFzhdCxSLky4MTJ1ELsiE7Ay964r9mpEjNm%2F8Tlqmw8wqE9wVLYH%2FOgmmnalAjvKhJAaI3HdxCPVQnf7DaSMYio%2Bc96%2B3dWSly2y4bVAFd03QWU1Brgi4Iks0NEzOhnmlRFeLKFKTEeMCM2j%2FL2tGiZxJyqgz0I23rOqP1dpoxyrJt4Qqt40MeML4r7aEla7BFhn1sII4wqZTJywY63QKOP86DICST3%2BSEOFDoWMDi6QeKfXz4eDaZoGt8TpXuRe1sQbErrh2Cq6tp1n2iFLn50vvJt1LhdJEs06pSIerCS%2BqsD6800oBNjSb%2FwUZEpgcne0ECaItJelS9SXAFhyXgKTP404N6M65eme2titO4Z4Fg7afBfZB20bbkYh4jix%2FFcGS8fiWiovyX5Jbx1JY41i1M%2FjY18K7%2BobdAP21J7jbVsIQkJNjKCRBWKho28goYkJqXwvGOiyV%2Bt2N7TrOHDr3No%2Bg%2Bac2SUMWzpEtmqddr1TEbvGczqpyOUmSP%2FWtFIsAt5Wwo6CcZI%2BjxREKYSKmOcHjsuBs%2BFZw2T6GNCsDkOEk2YMn16kEGNrYI0NgL3C0SxNSTNcJd2jhWn62aDt%2BFXUcPNwi4tiD1XoRsWo3QXOGJWocwdNxP82OoYbPXmbIjGIfDw8IyaImcffGIjKAhls2sfQkYI7%2Fa&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAWYTKPUQQ5E4RBR2D%2F20260122%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Date=20260122T164641Z&X-Amz-Expires=43200&X-Amz-SignedHeaders=host&X-Amz-Signature=e518ba685fd2f50da7cb8edfe986cc76534e67d45ffecfc57d1501932a0c5fb9",
      "https://linhkiendiy.s3.ap-southeast-1.amazonaws.com/boost-buck-xl6009-lm2577-2.jpg?response-content-disposition=inline&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaDmFwLXNvdXRoZWFzdC0xIkgwRgIhAKdBP23CBGKhJvtAmfuO2W%2FBuP%2FDwS6eh1eFhWoSfHm8AiEA4sScKrItvJR%2FsyVxmW8nDfVyk3vfcmaOmZAzOfvlDU8qwgMI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARABGgw0NjUxNTM1MzI5NjEiDOt3NbrKK%2B7mEjkcqCqWAznGhF%2BFdnEzzKIEfZUU%2Bvnv%2BRhcIJnecQYK3oJ%2FnGvxgtl%2BfIzU6YFLvO1PhZQqAebLPY%2BZWcBwdOh8wXYJwXhRGTSjA9yufCtGMg2PT%2BaZSUambGVbHLWQSRb6E1j6U2yabsYcTqBwjdzb77hJ88G5U1Khb9BAlRMFirwQ89So5Cg8TOV%2FeLCyITwEO5JK9BUiumO5nh05aPuTXKIVxxbYl5LcNXBU00c%2B2b44rljY%2BiwTv7X%2BXUrP%2FGeM%2F29RsOeprQSCHai9rQb%2BuCcGRgWpoz%2BeGbvWrdEX4zgHXasIXUHe3arnG14a%2BtBvGmV32qt0oOM9%2FwJKZMKIdFxBIHiFzhdCxSLky4MTJ1ELsiE7Ay964r9mpEjNm%2F8Tlqmw8wqE9wVLYH%2FOgmmnalAjvKhJAaI3HdxCPVQnf7DaSMYio%2Bc96%2B3dWSly2y4bVAFd03QWU1Brgi4Iks0NEzOhnmlRFeLKFKTEeMCM2j%2FL2tGiZxJyqgz0I23rOqP1dpoxyrJt4Qqt40MeML4r7aEla7BFhn1sII4wqZTJywY63QKOP86DICST3%2BSEOFDoWMDi6QeKfXz4eDaZoGt8TpXuRe1sQbErrh2Cq6tp1n2iFLn50vvJt1LhdJEs06pSIerCS%2BqsD6800oBNjSb%2FwUZEpgcne0ECaItJelS9SXAFhyXgKTP404N6M65eme2titO4Z4Fg7afBfZB20bbkYh4jix%2FFcGS8fiWiovyX5Jbx1JY41i1M%2FjY18K7%2BobdAP21J7jbVsIQkJNjKCRBWKho28goYkJqXwvGOiyV%2Bt2N7TrOHDr3No%2Bg%2Bac2SUMWzpEtmqddr1TEbvGczqpyOUmSP%2FWtFIsAt5Wwo6CcZI%2BjxREKYSKmOcHjsuBs%2BFZw2T6GNCsDkOEk2YMn16kEGNrYI0NgL3C0SxNSTNcJd2jhWn62aDt%2BFXUcPNwi4tiD1XoRsWo3QXOGJWocwdNxP82OoYbPXmbIjGIfDw8IyaImcffGIjKAhls2sfQkYI7%2Fa&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAWYTKPUQQ5E4RBR2D%2F20260122%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Date=20260122T164707Z&X-Amz-Expires=43200&X-Amz-SignedHeaders=host&X-Amz-Signature=b49b887feefeedf63d3c4e66c2591f8c20b3609625c49eaf5abc761352759b74",
      "https://linhkiendiy.s3.ap-southeast-1.amazonaws.com/boost-buck-xl6009-lm2577-3.jpg?response-content-disposition=inline&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaDmFwLXNvdXRoZWFzdC0xIkgwRgIhAKdBP23CBGKhJvtAmfuO2W%2FBuP%2FDwS6eh1eFhWoSfHm8AiEA4sScKrItvJR%2FsyVxmW8nDfVyk3vfcmaOmZAzOfvlDU8qwgMI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARABGgw0NjUxNTM1MzI5NjEiDOt3NbrKK%2B7mEjkcqCqWAznGhF%2BFdnEzzKIEfZUU%2Bvnv%2BRhcIJnecQYK3oJ%2FnGvxgtl%2BfIzU6YFLvO1PhZQqAebLPY%2BZWcBwdOh8wXYJwXhRGTSjA9yufCtGMg2PT%2BaZSUambGVbHLWQSRb6E1j6U2yabsYcTqBwjdzb77hJ88G5U1Khb9BAlRMFirwQ89So5Cg8TOV%2FeLCyITwEO5JK9BUiumO5nh05aPuTXKIVxxbYl5LcNXBU00c%2B2b44rljY%2BiwTv7X%2BXUrP%2FGeM%2F29RsOeprQSCHai9rQb%2BuCcGRgWpoz%2BeGbvWrdEX4zgHXasIXUHe3arnG14a%2BtBvGmV32qt0oOM9%2FwJKZMKIdFxBIHiFzhdCxSLky4MTJ1ELsiE7Ay964r9mpEjNm%2F8Tlqmw8wqE9wVLYH%2FOgmmnalAjvKhJAaI3HdxCPVQnf7DaSMYio%2Bc96%2B3dWSly2y4bVAFd03QWU1Brgi4Iks0NEzOhnmlRFeLKFKTEeMCM2j%2FL2tGiZxJyqgz0I23rOqP1dpoxyrJt4Qqt40MeML4r7aEla7BFhn1sII4wqZTJywY63QKOP86DICST3%2BSEOFDoWMDi6QeKfXz4eDaZoGt8TpXuRe1sQbErrh2Cq6tp1n2iFLn50vvJt1LhdJEs06pSIerCS%2BqsD6800oBNjSb%2FwUZEpgcne0ECaItJelS9SXAFhyXgKTP404N6M65eme2titO4Z4Fg7afBfZB20bbkYh4jix%2FFcGS8fiWiovyX5Jbx1JY41i1M%2FjY18K7%2BobdAP21J7jbVsIQkJNjKCRBWKho28goYkJqXwvGOiyV%2Bt2N7TrOHDr3No%2Bg%2Bac2SUMWzpEtmqddr1TEbvGczqpyOUmSP%2FWtFIsAt5Wwo6CcZI%2BjxREKYSKmOcHjsuBs%2BFZw2T6GNCsDkOEk2YMn16kEGNrYI0NgL3C0SxNSTNcJd2jhWn62aDt%2BFXUcPNwi4tiD1XoRsWo3QXOGJWocwdNxP82OoYbPXmbIjGIfDw8IyaImcffGIjKAhls2sfQkYI7%2Fa&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAWYTKPUQQ5E4RBR2D%2F20260122%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Date=20260122T164725Z&X-Amz-Expires=43200&X-Amz-SignedHeaders=host&X-Amz-Signature=babb90a67abe6dcbac1bdc3532cbcde31aecdb20d229a2f26f3a61b58ab5f63c",
    ],
  },
  {
    id: "lm2596-cc-cv",
    name: "Module Buck LM2596S CC/CV 3A",
    short:
      "Module hạ áp DC-DC LM2596 có chỉnh điện áp và dòng (CV/CC), dùng sạc pin và cấp nguồn.",
    description:
      "Module LM2596S phiên bản nâng cấp có hỗ trợ điều chỉnh dòng (CC) và điện áp (CV). Phù hợp dùng làm mạch sạc pin lithium, nguồn cấp cho mạch điện tử, LED, motor nhỏ. Có đèn báo chế độ CC.",

    price: 0,
    currency: "VND",

    category: "Buck DC-DC (CV/CC)",
    brand: "Generic",
    model: "LM2596 CC/CV",
    stockStatus: "in_stock",

    specifications: [
      { key: "Điện áp đầu vào", value: "4 – 40V" },
      { key: "Điện áp đầu ra", value: "1.25 – 35V" },
      { key: "Dòng đầu ra", value: "Tối đa 3A (khuyến nghị ≤ 2A)" },
      { key: "Công suất", value: "≈ 20 – 30W (có tản nhiệt)" },
      { key: "Hiệu suất", value: "Lên tới 92%" },
      { key: "Chế độ", value: "CV / CC" },
      { key: "Biến trở", value: "3 biến trở (CV, CC, tinh chỉnh)" },
      { key: "Đèn báo", value: "Có đèn báo khi vào chế độ CC" },
      { key: "Tần số", value: "150 kHz" },
    ],

    usage: [
      "Sạc pin Lithium (18650, Li-ion)",
      "Nguồn cấp cho Arduino, ESP32",
      "Mạch LED công suất",
      "Nguồn thí nghiệm DIY",
    ],

    notes: [
      "Có thể dùng làm mạch sạc pin nhờ chế độ CC",
      "Nên gắn tản nhiệt khi dòng > 2A",
      "Không cấp ngược cực",
      "Dòng thực tế phụ thuộc tản nhiệt",
    ],

    tags: [
      "lm2596",
      "buck",
      "cc-cv",
      "dc-dc",
      "step-down",
      "battery-charger",
      "3A",
      "DIY",
    ],

    images: [
      "https://linhkiendiy.s3.ap-southeast-1.amazonaws.com/lm2596s/lm2596s-1.jpg?response-content-disposition=inline&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaDmFwLXNvdXRoZWFzdC0xIkYwRAIgK4HQlgr08nV1WTfkhjg%2F8tZggbGPgn40K3FH8Pk7po4CICa8JomIBT43u1ESzlE%2BRC8d8ouP76uRDrxDsMxK7lQzKsIDCOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQARoMNDY1MTUzNTMyOTYxIgzm6AS9Ky1GUQ2WOKEqlgNLziLsxrFmOBxzhv3CzOKDVuiB8Bs%2Fr4zVyIHNUa%2BI1MgnXZpfBPeDCtgNp2eM0GdflEYZNghyiIZTVbserQNu2cSEEPupKsYU2KJVShs%2B5wVZdwJFy6y2J1n1Bbnf4%2FyDfmwTQGpHMLPizNlRUnsil%2BDQ5j%2FHud62Gatpp%2FHfH8jQErkuD%2BFmjYhs5Zo6Q%2Fya5m84%2BCWetzgSbtpjmm0je%2Fm0b6rNd92zyGCcM73sGDjcExIJAChpzK5dKvy1Of6YodFkqPg06RFt9HfRBX6E8q5WyN0vHZP9DfM0PUanQCprXpb81BMvkdQ4Sn%2FqPNlnXideM81Stc4BUgHaZG4YgYNrYFDmXJC0VwXPeu%2FF05uMUAq5SgBFSEPbfsZblcNkTZBS5TSG5GEW8iI6DZl%2BJs3R%2BQ9usTDFXhLpE0gOJL1FSxOVZDF262WuNiTMK6anZtz98Et0ka3daAlgrBhvMkAAFpSWXTXCOcKGEcesgwFdKir9DM7PohdaonmmZMHUg2dQMfESdK8sJobxt9HWjU%2FMRHOHMKmUycsGOt8CiV8IieYiviI0vtDamJmcECrsSglJMmCmzkPTFhzrdAn8NaLbQUU2tny4wp74mBJdi0%2Fquf1zWVnLDaecObU2xDEhOLYs2A6bOEFLcQ%2FHUvRTIV1%2Bi3Hld4d4WDKcLRQ7xksEsRU%2BCZwwrTo5ZynhIHNNw8RQ7Co1dHEw41uoxYkil9CK2EekFURBVt%2Fw2cjzwpGelNNMYzzS6wZQCd44%2BJUW%2BbU7EupL5QOuERQLJxq5XUrg3o3osYolQO487XrnTLq5Eh80ALtL1v8V6eN14zp6CYH4v5KJA3d1Qw4lJ02EzdUky%2BWobwFlfocFq%2FvvH%2FXw38X4x7cIVMyP%2BIcrTdbzJgAJu6SApB6zOhLFH5DfhCf5QoTpNuqvQtV5xedgGrLirmgAACGRC8%2FyI%2FAtaH9EKApPS9ktHDguFamoGy1%2FqhpWbJ7lPjeeybUWRmazbNFckvDMSdIMWk6GgvhB&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAWYTKPUQQ4GRWIT6O%2F20260122%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Date=20260122T172027Z&X-Amz-Expires=43200&X-Amz-SignedHeaders=host&X-Amz-Signature=91dbbcff1819ccc5b995e1425e67094deffa3d223853ef40690fa748291b17a7",
      "https://linhkiendiy.s3.ap-southeast-1.amazonaws.com/lm2596s/lm2596s-2.jpg?response-content-disposition=inline&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaDmFwLXNvdXRoZWFzdC0xIkcwRQIgKvWX8csHzWJ3bvwi93q30U%2FU0B7O5m9M9hwGb0kk2VsCIQDQ8D%2FRx94XdV0QxrOXfCQZEL3dbFxWHEkoH2ov%2FCIQ%2BirCAwjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAEaDDQ2NTE1MzUzMjk2MSIMbptpbpJ6mqIJjJySKpYDk1%2FdlUbAVOsRpTh2pRovz73zVkRE17aYIB9n5OQQJfpSqfX84%2B%2Fo9VHQpTm0Y6Q0qaM7P8nIQ1iKZsLAwXGmBIRsgQNUtLF1lMm9r6u%2FsHD0Wg1p97RJrDKAX0JZj59tYx%2Bi9XnRzYpuCit4ar6J6Hxi7nYP%2BwmuIU1mhkY38cklkMqIkl%2ByjSecreXdwcYUHKbfrQZgwgG93F5RsVvcERj5d8gVnhzCBLdu0nxa1Ht7x6NDEdkEja%2F2G2VgCmnTTUXw%2BGJWEPKUaIcwchs%2Bfjn30DXVRRmPGroAGW85Q9jWVVw8fYf%2F%2Fz3gV7eJl9DCcIrs66H%2FX%2FbAdbMNZDzkySXVFzKMtw5CC1FxB4pPDSIS4d8%2BigCgW5W2xPm7naTQRn8VbwzRuW1da81CcCzlzA84%2FIcaBeo%2BXNkpzlSve6iqT8O2ZCorrByEI2ZeaX8K3nNtKRTGIY4ZcpQxMU%2BTj5fjIl9XiuUFiyMGzoAiLDPU7R9Zr8P1MXNBRzw5ojLtlTdR9XLsjRoBbmjE5Lc9Jv253KLKVTCplMnLBjreAmH1KAys%2BzQ6%2BQGINmTuLTmn19xnQ8jHTbkSRxjS7%2BGPVqvkKBOI%2B5jfDDNXtHtMC2GqHtnGeE2eR3QcHd9fEax3j1d0zUNir6gGU5%2BP12f3%2BN6NtEcTI1%2FV0ZCi7QvNNofZV0bl3xXhQy5kCtBmhSNn71ltD2Wzfq9slITSLvkvDzfblVfk8ul8YHkoyLoVLqgmu2A9aXfFAh0CcAcEBrxQYQvgImRR40%2BWBS%2FDvOU7tMyFP9qOZVBIoxtJUv2kFI9w0D7jc6D0tfwG9xPoCMjdZGoi%2FqQNrLHeQbuP9sZiwr%2FC7zbxXuXWs1q0px91ds940D27RRBh%2FUsR19%2BK3LQJ6YL1bQR5gWbYC7HBKw49e4oe4hecWvi79toQt8bSbiWzExCHAv%2BqHFoLbr2sp4YDAPZImNsDdfFWk4q8BVplD2IJ177FD%2B3JlacqwY1MYf2cMUyfm1Z29bU95VVB&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAWYTKPUQQR4ADT3QY%2F20260122%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Date=20260122T172616Z&X-Amz-Expires=43200&X-Amz-SignedHeaders=host&X-Amz-Signature=aa406a21d30bc0a65ada18d50faebc761de0c59380fcd6c9319ee1f14f47c379",
      "https://linhkiendiy.s3.ap-southeast-1.amazonaws.com/lm2596s/lm2596s-3.jpg?response-content-disposition=inline&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaDmFwLXNvdXRoZWFzdC0xIkcwRQIgKvWX8csHzWJ3bvwi93q30U%2FU0B7O5m9M9hwGb0kk2VsCIQDQ8D%2FRx94XdV0QxrOXfCQZEL3dbFxWHEkoH2ov%2FCIQ%2BirCAwjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAEaDDQ2NTE1MzUzMjk2MSIMbptpbpJ6mqIJjJySKpYDk1%2FdlUbAVOsRpTh2pRovz73zVkRE17aYIB9n5OQQJfpSqfX84%2B%2Fo9VHQpTm0Y6Q0qaM7P8nIQ1iKZsLAwXGmBIRsgQNUtLF1lMm9r6u%2FsHD0Wg1p97RJrDKAX0JZj59tYx%2Bi9XnRzYpuCit4ar6J6Hxi7nYP%2BwmuIU1mhkY38cklkMqIkl%2ByjSecreXdwcYUHKbfrQZgwgG93F5RsVvcERj5d8gVnhzCBLdu0nxa1Ht7x6NDEdkEja%2F2G2VgCmnTTUXw%2BGJWEPKUaIcwchs%2Bfjn30DXVRRmPGroAGW85Q9jWVVw8fYf%2F%2Fz3gV7eJl9DCcIrs66H%2FX%2FbAdbMNZDzkySXVFzKMtw5CC1FxB4pPDSIS4d8%2BigCgW5W2xPm7naTQRn8VbwzRuW1da81CcCzlzA84%2FIcaBeo%2BXNkpzlSve6iqT8O2ZCorrByEI2ZeaX8K3nNtKRTGIY4ZcpQxMU%2BTj5fjIl9XiuUFiyMGzoAiLDPU7R9Zr8P1MXNBRzw5ojLtlTdR9XLsjRoBbmjE5Lc9Jv253KLKVTCplMnLBjreAmH1KAys%2BzQ6%2BQGINmTuLTmn19xnQ8jHTbkSRxjS7%2BGPVqvkKBOI%2B5jfDDNXtHtMC2GqHtnGeE2eR3QcHd9fEax3j1d0zUNir6gGU5%2BP12f3%2BN6NtEcTI1%2FV0ZCi7QvNNofZV0bl3xXhQy5kCtBmhSNn71ltD2Wzfq9slITSLvkvDzfblVfk8ul8YHkoyLoVLqgmu2A9aXfFAh0CcAcEBrxQYQvgImRR40%2BWBS%2FDvOU7tMyFP9qOZVBIoxtJUv2kFI9w0D7jc6D0tfwG9xPoCMjdZGoi%2FqQNrLHeQbuP9sZiwr%2FC7zbxXuXWs1q0px91ds940D27RRBh%2FUsR19%2BK3LQJ6YL1bQR5gWbYC7HBKw49e4oe4hecWvi79toQt8bSbiWzExCHAv%2BqHFoLbr2sp4YDAPZImNsDdfFWk4q8BVplD2IJ177FD%2B3JlacqwY1MYf2cMUyfm1Z29bU95VVB&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAWYTKPUQQR4ADT3QY%2F20260122%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Date=20260122T172628Z&X-Amz-Expires=43200&X-Amz-SignedHeaders=host&X-Amz-Signature=7fca0e049aa2165dc20720a7e0e36a2f974404b4e54c2d493801b1cf9dfb66fe",
    ],
  },
];

export function getProductById(id: string) {
  return products.find((p) => p.id === id);
}
