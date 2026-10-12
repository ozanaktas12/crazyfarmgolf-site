# Crazy Farm Golf — yayın sitesi

Düz HTML; derleme adımı ve bağımlılık yok. Tek stil dosyası `style.css`, dil seçici `lang.js`
(JS kapalıysa iki dil de görünür). Crazy Farm Escape sitesinden uyarlandı; o depoya dokunulmadı.

| dosya | adres (GitHub Pages planı) | işi |
|---|---|---|
| `index.html` | `https://ozanaktas12.github.io/crazyfarmgolf-site/` | tanıtım |
| `privacy.html` | `…/privacy.html` | **gizlilik politikası** — Play Console zorunlu alanı |
| `support.html` | `…/support.html` (`#delete-data` / `#silme`) | destek + veri silme açıklaması |
| `app-ads.txt` | — | AdMob doğrulaması (şimdilik yer tutucu) |

## ⚠️ app-ads.txt bu adreste ÇALIŞMAZ

AdMob dosyayı yalnız alan adının kökünde arar (`https://ozanaktas12.github.io/app-ads.txt`),
proje alt yolunda (`/crazyfarmgolf-site/app-ads.txt`) aramaz. Çözüm seçenekleri:
1. Ayrı bir `ozanaktas12.github.io` deposu (kullanıcı sitesi) açıp `app-ads.txt`'yi onun köküne koymak,
   **ya da**
2. Siteyi kendi alan adına / Vercel'e taşımak (Crazy Farm Escape gibi) ve Play'deki "Web sitesi"
   alanına o kökü yazmak.

Play Console'daki **Web sitesi** alanı ile app-ads.txt'nin durduğu kök aynı alan adı olmalı.

## Gizlilik politikası değişirse

Şu üçü birbirini tutmalı: bu sayfa · Play Console → Veri güvenliği · App Store Connect → App Privacy.
Rehber: `~/Desktop/SapanOyunu/Magaza/PLAY_KAPALI_TEST.md`.
