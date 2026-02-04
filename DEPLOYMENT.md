# 🚀 Siteyi Yayına Alma Rehberi

## Seçenek 1: Vercel (ÖNERİLEN - En Kolay) ⭐

### Adımlar:

1. **GitHub'a Kodunuzu Yükleyin:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/tahadulger1/taha-dulger-portfolio.git
   git push -u origin main
   ```

2. **Vercel'e Giriş Yapın:**
   - https://vercel.com adresine gidin
   - "Sign Up" ile GitHub hesabınızla giriş yapın

3. **Projeyi İçe Aktarın:**
   - Dashboard'da "Add New Project" tıklayın
   - GitHub repository'nizi seçin (`taha-dulger-portfolio`)
   - Framework Preset: **Vite** seçin
   - Root Directory: `./` (varsayılan)
   - Build Command: `npm run build` (otomatik algılanır)
   - Output Directory: `dist` (otomatik algılanır)

4. **Deploy Edin:**
   - "Deploy" butonuna tıklayın
   - 1-2 dakika içinde siteniz hazır olacak!
   - Otomatik olarak `https://taha-dulger-portfolio.vercel.app` gibi bir URL alırsınız

5. **Özel Domain Eklemek (Opsiyonel):**
   - Project Settings → Domains
   - Kendi domain'inizi ekleyebilirsiniz

**Avantajlar:**
- ✅ Otomatik CI/CD (her push'ta otomatik deploy)
- ✅ Ücretsiz SSL sertifikası
- ✅ Global CDN
- ✅ Çok hızlı
- ✅ Kolay domain yönetimi

---

## Seçenek 2: Netlify

### Adımlar:

1. **GitHub'a Kodunuzu Yükleyin** (yukarıdaki gibi)

2. **Netlify'e Giriş Yapın:**
   - https://netlify.com adresine gidin
   - GitHub hesabınızla giriş yapın

3. **Projeyi İçe Aktarın:**
   - "Add new site" → "Import an existing project"
   - GitHub repository'nizi seçin
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`

4. **Deploy Edin:**
   - "Deploy site" butonuna tıklayın
   - Siteniz `https://random-name.netlify.app` şeklinde yayında olacak

**Alternatif: Drag & Drop**
- `npm run build` komutuyla `dist` klasörünü oluşturun
- Netlify dashboard'da "Sites" → "Add new site" → "Deploy manually"
- `dist` klasörünü sürükleyip bırakın

---

## Seçenek 3: GitHub Pages

### Adımlar:

1. **Vite Config'i Güncelleyin:**
   - `vite.config.js` dosyasına `base` ekleyin (repository adınıza göre)

2. **GitHub'a Push Edin**

3. **GitHub Pages'i Aktifleştirin:**
   - Repository → Settings → Pages
   - Source: "GitHub Actions" seçin

4. **GitHub Actions Workflow Oluşturun:**
   - `.github/workflows/deploy.yml` dosyası oluşturun

---

## Seçenek 4: VPS (Kendi Sunucunuz)

Eğer kendi VPS'iniz varsa (Giresun Yumurta projesinde kullandığınız gibi):

1. **Build Alın:**
   ```bash
   npm run build
   ```

2. **dist Klasörünü Sunucuya Yükleyin:**
   ```bash
   scp -r dist/* kullanici@sunucu-ip:/var/www/html/
   ```

3. **Nginx Yapılandırması:**
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;
       root /var/www/html;
       index index.html;

       location / {
           try_files $uri $uri/ /index.html;
       }
   }
   ```

---

## Hızlı Başlangıç (Vercel - Önerilen)

En hızlı yol için:

1. GitHub'a push edin
2. Vercel'e giriş yapın
3. Repository'yi seçin → Deploy
4. ✅ Hazır!

Her kod değişikliğinde otomatik olarak yeniden deploy edilir.
