# Shop DIY - Next.js (2 trang + SEO)

## Yêu cầu
- Node.js 18+ (khuyến nghị 20+)

## Chạy local
```bash
npm install
npm run dev
```
Mở: http://localhost:3000

## 2 trang
- `/` : Danh sách sản phẩm
- `/product/[id]` : Chi tiết + slider ảnh (client component)

## SEO đã có sẵn
- Metadata server-side (title/description/canonical/openGraph)
- `robots.txt` + `sitemap.xml` (tự sinh)
- Product JSON-LD + Breadcrumb JSON-LD

## Thay ảnh thật
Thay các file trong `public/images/` bằng ảnh thật (jpg/png) và giữ nguyên đường dẫn trong `data/products.ts`.
