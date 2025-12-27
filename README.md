# Caner Dev - Kişisel Web Sitesi

Modern ve koyu temalı bir kişisel web sitesi. Blog yazıları, projeler ve hakkımda bölümleri içerir.

## 🚀 Özellikler

- ✨ Modern ve responsive tasarım
- 🌙 Koyu tema (Dark Mode)
- 📝 Blog yazı sistemi
- 💼 Proje portfolyosu
- 🎨 Tailwind CSS ile özelleştirilmiş tasarım
- ⚡ Next.js 14 App Router
- 🔷 TypeScript desteği
- 🎯 SEO optimizasyonu
- 🎭 Smooth animasyonlar

## 🛠️ Teknolojiler

- **Framework:** Next.js 14
- **Dil:** TypeScript
- **Styling:** Tailwind CSS
- **İkonlar:** Lucide React
- **Deployment:** Vercel (önerilir)

## 📦 Kurulum

1. Projeyi klonlayın:
\`\`\`bash
git clone <repo-url>
cd canerdev.com
\`\`\`

2. Bağımlılıkları yükleyin:
\`\`\`bash
npm install
# veya
yarn install
# veya
pnpm install
\`\`\`

3. Geliştirme sunucusunu başlatın:
\`\`\`bash
npm run dev
# veya
yarn dev
# veya
pnpm dev
\`\`\`

4. Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresini açın.

## 📁 Proje Yapısı

\`\`\`
canerdev.com/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Ana layout
│   ├── page.tsx           # Ana sayfa
│   ├── globals.css        # Global stiller
│   ├── blog/              # Blog sayfaları
│   ├── projects/          # Projeler sayfası
│   └── about/             # Hakkımda sayfası
├── components/            # React bileşenleri
│   ├── Navigation.tsx     # Navigasyon bileşeni
│   └── Footer.tsx         # Footer bileşeni
├── public/                # Statik dosyalar
├── tailwind.config.ts     # Tailwind yapılandırması
├── tsconfig.json          # TypeScript yapılandırması
└── package.json           # Proje bağımlılıkları
\`\`\`

## 🎨 Özelleştirme

### Renkler

Tailwind konfigürasyonunu düzenleyerek renkleri özelleştirebilirsiniz:

\`\`\`typescript
// tailwind.config.ts
theme: {
  extend: {
    colors: {
      primary: {
        // Özel renkleriniz
      }
    }
  }
}
\`\`\`

### İçerik

- Blog yazılarını \`app/blog/page.tsx\` dosyasından düzenleyebilirsiniz
- Projeleri \`app/projects/page.tsx\` dosyasından güncelleyebilirsiniz
- Kişisel bilgilerinizi \`app/about/page.tsx\` dosyasından değiştirebilirsiniz

## 🚀 Deployment

### Vercel

En kolay deployment yöntemi Vercel kullanmaktır:

1. [Vercel](https://vercel.com) hesabı oluşturun
2. Projeyi GitHub'a yükleyin
3. Vercel'de "Import Project" seçeneğini kullanın
4. Otomatik deployment yapılacaktır

### Diğer Platformlar

Next.js, Netlify, Railway, Render gibi platformlarda da çalışır.

## 📝 Lisans

Bu proje kişisel kullanım için oluşturulmuştur.

## 💬 İletişim

- Website: [canerdev.com](https://canerdev.com)
- GitHub: [@canerdev](https://github.com)
- LinkedIn: [Caner Dev](https://linkedin.com)

---

Made with ❤️ and Next.js

