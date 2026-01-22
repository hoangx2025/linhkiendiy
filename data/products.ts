export type StockStatus = "in_stock" | "low_stock" | "out_of_stock" | "pre_order";

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
        value: "3A ổn định, tối đa 4A (khi tản nhiệt tốt)",
      },
      {
        key: "Công suất",
        value: "35W (tản nhiệt tự nhiên), 60W (có tản nhiệt)",
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
      "Không dùng module không có CC để sạc pin",
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
];

export function getProductById(id: string) {
  return products.find((p) => p.id === id);
}
