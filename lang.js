/* Dil seçici — bağımlılıksız (Crazy Farm Escape sitesindekinin aynısı, anahtar adı farklı).
   Sayfa yüklenince tarayıcı dilini okuyup karşılığı varsa onu açıyor, yoksa İngilizce.
   Seçim localStorage'da tutuluyor ki sayfalar arasında gidip gelirken tekrar seçilmesin.
   ⚠️ `js-lang` sınıfı BURADA ekleniyor: JS çalışmazsa gizleme kuralı devreye girmiyor ve
   iki dil de görünür kalıyor — inceleme yapan biri hiçbir koşulda metinsiz kalmıyor. */
(function () {
  var kok = document.documentElement;
  var bloklar = document.querySelectorAll('.lang-block');
  var dugmeler = document.querySelectorAll('.lang-nav button');
  if (!bloklar.length || !dugmeler.length) return;
  kok.classList.add('js-lang');

  function ac(kod) {
    var bulundu = false;
    bloklar.forEach(function (b) {
      var e = b.id === kod;
      b.classList.toggle('on', e);
      if (e) bulundu = true;
    });
    if (!bulundu) return ac('en');
    dugmeler.forEach(function (d) { d.classList.toggle('on', d.dataset.go === kod); });
    kok.lang = kod;
    try { localStorage.setItem('cfg_lang', kod); } catch (e) {}
  }

  // Adres #tr / #en ile geldiyse (ör. Play'e yazılan bağlantı) o dil açılsın.
  // #delete-data / #silme gibi bir bölüme gelindiyse o bölümün dili açılsın.
  var secim = null, hedef = (location.hash || '').slice(1);
  if (hedef) {
    var el = document.getElementById(hedef);
    var blok = el && (el.classList.contains('lang-block') ? el : el.closest('.lang-block'));
    if (blok) secim = blok.id;
  }
  if (!secim) { try { secim = localStorage.getItem('cfg_lang'); } catch (e) {} }
  if (!secim) {
    var tar = (navigator.language || 'en').slice(0, 2).toLowerCase();
    secim = document.getElementById(tar) ? tar : 'en';
  }
  ac(secim);
  if (hedef && secim) { var h = document.getElementById(hedef); if (h && h.scrollIntoView) h.scrollIntoView(); }

  dugmeler.forEach(function (d) {
    d.addEventListener('click', function () { ac(d.dataset.go); });
  });
})();
