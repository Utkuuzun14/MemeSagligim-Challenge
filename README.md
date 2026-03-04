# 🎀 Meme Sağlığım - Mobil Uygulama Projesi
**Samsun Üniversitesi Yazılım Mühendisliği | Güz Dönemi Projesi**

Bu proje, meme sağlığı farkındalığını artırmak ve kullanıcıların periyodik sağlık takiplerini dijital bir ortamda güvenle gerçekleştirmelerini sağlamak amacıyla geliştirilmiş bir **Full-Stack** mobil uygulamadır.

---

## 🛠 Teknik Mimari ve Teknolojiler
Proje, modern mobil uygulama standartlarına uygun olarak modüler bir yapıda geliştirilmiştir.

| Katman | Kullanılan Teknoloji | Görevi |
| :--- | :--- | :--- |
| **Frontend** | React Native & Expo | Çapraz platform mobil arayüz yönetimi. |
| **Backend** | Node.js & Express.js | API servisleri ve veri yönetimi. |
| **Build Tools** | Gradle, NDK, Ninja | Yerel Android derleme ve paketleme süreçleri. |
| **Paket Yönetimi** | npm | Bağımlılık ve kütüphane yönetimi. |

---

## 🚀 Yerel Kurulum ve Çalıştırma
Uygulamayı kendi geliştirme ortamınızda ayağa kaldırmak için aşağıdaki adımları izleyin:

### 1. Ön Gereksinimler
Sistemin çalışması için aşağıdaki araçların kurulu olması gerekmektedir:
* **Node.js**: v18 veya üzeri.
* **Java SDK**: v17+.
* **Android Studio**: Android SDK ve Emülatör yapılandırması.

### 2. Kurulum Adımları
Terminali açın ve aşağıdaki komutları sırayla çalıştırın:
1. **Dizine Geçiş**: Proje dosyalarının bulunduğu `C:\frontend` dizinine gidin.
2. **Bağımlılıkların Yüklenmesi**: 
   ```powershell
   npm install
Expo Build Ayarları: SDK 34 uyumluluğu için gerekli eklentiyi yükleyin:

PowerShell
npx expo install expo-build-properties
3. Uygulamayı Başlatma
Metro Bundler: Sunucuyu başlatmak için terminale npx expo start yazın.

Android Emülatör: Terminal ekranı geldiğinde klavyeden a tuşuna basarak uygulamayı emülatöre yükleyin.

🎥 Uygulama Demo Videosu
Uygulamanın canlı kullanımı, arayüz geçişleri ve pembe temalı tasarımı aşağıdaki videoda gösterilmiştir:

İzlemek için Tıklayın: Meme Sağlığım Tanıtım Videosu (YouTube Shorts)

📥 Derlenmiş Paketler (Build Artifacts)
Uygulamanın Android cihazlara kuruluma hazır profesyonel versiyonu aşağıdadır:

Android Paketi (AAB): Meme Sağlığım v1.0.0 İndir

Önemli Not: Google Play standartlarına uygun .aab (Android App Bundle) formatı üretilmiştir. SDK 34 yapılandırması ve newArchEnabled: false ayarı ile %100 stabilite sağlanmıştır.

✨ Proje Özellikleri
Dinamik Veri Girişi: Kullanıcıların periyodik kontrollerini kaydedebileceği form yapıları.

Modern UI/UX: Erişilebilirlik odaklı, kullanıcı dostu pembe tema tasarımı.

Expo Go Desteği: Yerel derleme gerektirmeden hızlı test imkanı.
