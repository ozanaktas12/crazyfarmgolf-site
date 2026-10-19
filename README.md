# Crazy Farm Golf — yayın sitesi

Düz HTML; derleme adımı ve bağımlılık yok. **Vercel** bu depoyu çekip yayınlıyor (Crazy Farm Escape gibi);
`main`'e her push otomatik yayına gider. Tek stil dosyası `style.css`, dil seçici `lang.js`
(JS kapalıysa iki dil de görünür). Crazy Farm Escape sitesinden uyarlandı; o depoya dokunulmadı.

Adresler `vercel.json`'daki `cleanUrls` ile uzantısız (`/privacy.html` → `/privacy`'ye yönlenir).

| adres | dosya | işi |
|---|---|---|
| `/` | `index.html` | tanıtım — Play/App Store **Web sitesi** alanı |
| `/privacy` | `privacy.html` | **gizlilik politikası** — Play Console zorunlu alanı |
| `/support` | `support.html` (`#delete-data` / `#silme`) | destek + veri silme açıklaması |
| `/app-ads.txt` | `app-ads.txt` | AdMob doğrulaması (şimdilik yer tutucu) |

Kısa yönlendirmeler: `/privacy-policy`, `/gizlilik` → `/privacy`; `/destek` → `/support`;
`/delete-data` → `/support#delete-data`.

Bağlantılar köke göre (`/style.css`, `/privacy`); dosyayı çift tıklayıp açınca stil gelmez,
yerelde `python3 onizle.py` ile bak (http://localhost:8090) (Vercel'in temiz adreslerini taklit eder).

## app-ads.txt

AdMob dosyayı yalnız alan adının kökünde arar; Vercel'de `https://<alan>/app-ads.txt` kök olduğu için çalışır.
Play Console'daki **Web sitesi** alanı ile app-ads.txt'nin durduğu kök aynı alan adı olmalı.
Eski GitHub Pages kopyası (`ozanaktas12.github.io/crazyfarmgolf-site/`) artık kullanılmıyor.

## Gizlilik politikası değişirse

Şu üçü birbirini tutmalı: bu sayfa · Play Console → Veri güvenliği · App Store Connect → App Privacy.
Rehber: `~/Desktop/SapanOyunu/Magaza/PLAY_KAPALI_TEST.md`.
