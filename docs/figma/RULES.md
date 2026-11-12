# Prompt: pindahkan halaman artifact ke Figma (Silal IO)

Kamu melanjutkan pekerjaan memindahkan halaman web dari artifact Claude (HTML) ke file Figma yang sama dengan halaman-halaman sebelumnya. Baca seluruh prompt ini dulu. Ikuti aturannya secara literal. Kalau ada input yang kurang, tanya sekali dan singkat. Jangan tanya hal yang bisa dicek sendiri di file.

## 0. Serah-terima
- Repo `lainwebsite/silal-io`: `git pull --rebase` dulu, baca `docs/figma/HANDOFF.md` (status, frame yang sedang dikerjakan, langkah berikutnya). Klaim frame di HANDOFF sebelum mulai. Saat berhenti, perbarui HANDOFF, lalu commit dan push.

## 1. Sumber dan tujuan
- Artifact sumber: https://claude.ai/artifact/RcE4EZFnc5EXYJGShG4i4G
  - Baca dengan Artifact tool (`action: read`, `path: "<nama-halaman>.html"`). Contoh: `ivp-farm-innovation-fund.html`, `ivp-incubation.html`, `ivp-hub.html`.
- File Figma: fileKey `LzMPMHjE8ACvMMazS8Qofp`, halaman **"SILAL IO"** (page id `6101:11894`).
  - Panggil `create_session` dulu, lalu pakai sessionId-nya di setiap tool Figma.
- Section di halaman SILAL IO:
  - **"FIX"** (`6204:14737`): halaman final versi lama (IVP, FIF, Incubation, Team, Section 2). Jangan diubah.
  - **"FIX · aturan baru"** (`6217:4464`): versi yang sudah memakai aturan di prompt ini. Halaman baru masuk ke sini.
    - IVP `6217:4465`, FIF `6217:6215`, Incubation `6217:7823`.
    - Frame dokumentasi "IO v2 · Design System" `6233:4151`.
- Header dan footer: clone dari halaman yang sudah jadi (misalnya FIF `6217:6215`), jangan dibangun ulang. Versi header di atas foto hero: latar transparan, teks putih, wordmark putih, garis pemisah putih.
- Kalau saya belum memberi nama halaman, node target, atau frame referensi, tanya sekali.

## 1b. WAJIB: pakai design system yang sudah ada di file
Semua fondasi sudah ada di file Figma ini. Pakai yang ada, jangan buat ulang dan jangan mengetik nilai mentah. Dokumentasi lengkapnya ada di frame **"IO v2 · Design System"** (`6233:4151`). Baca frame itu dulu.

| Fondasi | Lokasi di file | Cara pakai |
|---|---|---|
| **Text style** | Folder style `IO v2/` (Display, Heading, Label, Body, Caption, Button, Pill) | `textStyleId` ke style yang sesuai. Heading berdasarkan peran (bagian 9). |
| **Warna** | Variable koleksi **"IO v2 · Color"** (token semantik). Nilainya dari "IO v2 · Primitives". | Fill, stroke, dan teks diikat dengan `setBoundVariableForPaint` ke token `bg/…`, `text/…`, `border/…`, `icon/…`, `status/…`. Jangan pakai hex. |
| **Gap dan padding** | Variable koleksi **"IO v2 · Spacing"**: `space/5`, `space/10` … `space/160` (kelipatan 10), dan `space/section-x` = 64 | Ikat `itemSpacing`, `counterAxisSpacing`, `paddingTop/Right/Bottom/Left` dengan `setBoundVariable`. Padding kiri-kanan section = `space/section-x`. |
| **Radius** | Variable koleksi **"IO v2 · Radius"**: `radius/xs` 4, `radius/md` 12, `radius/full` 999 | Ikat keempat sudut. Pill, badge bulat, titik, dan lingkaran pakai `radius/full`. |
| **Contoh komponen** | Pill `6217:8230`, badge nomor `6217:8258`, halaman jadi di section "FIX · aturan baru" | Tiru struktur dan ukurannya. Header dan footer di-clone dari halaman yang sudah jadi. |

- Koleksi **"2. Radius"**, **"3. Spacing"**, **"4. Widths"**, "Veyre", "Thundercat", dan "MONSTER Colors" milik project atau library lain. **Jangan dipakai.**
- Style lama di luar folder `IO v2/` (misalnya `Heading/H2 42.3/…`, `Label/Eyebrow 12/…`) juga **jangan dipakai.**
- Nilai spacing besar sekali pakai (di atas 160, misalnya offset kolom yang sejajar dengan sticky) boleh tidak diikat. Sebutkan di laporan.
- Kalau butuh token atau style yang belum ada:
  - jangan buat sendiri diam-diam;
  - tambahkan ke koleksi atau folder `IO v2` yang sesuai, dengan scope dan code syntax;
  - perbarui frame dokumentasi `6233:4151`;
  - laporkan ke saya.

## 2. Aturan umum
- **Tidak membuat backup.**
- **Satu frame dikerjakan oleh satu sesi saja.** Kalau ada perubahan yang bukan buatanmu muncul di frame target, berhenti dan tanyakan ke saya.
- Jangan ubah frame atau halaman lain. Jangan menimpa style atau variable milik sesi lain: cek dulu bentrok nama sebelum membuat yang baru.
- Tidak push ke `main` dan tidak deploy ke Vercel, kecuali saya minta. Artifact hanya dibaca, kecuali saya minta diedit.
- Kerjakan per section. Satu `use_figma` = satu section atau satu perbaikan.
  - Jangan menjalankan dua `use_figma` bersamaan. Screenshot yang dijalankan paralel dengan edit bisa menampilkan kondisi lama.

## 3. Cara kerja per halaman
1. Render halaman artifact di 1728px dengan Playwright, sebagai render statis:
   - blokir script gsap/ScrollTrigger/lenis/helix;
   - paksa elemen reveal terlihat;
   - header `position: relative`;
   - `html { scroll-behavior: auto }`;
   - `scrollIntoView` sebelum screenshot.
2. Ukur struktur tiap section: kotak, teks, warna, padding, gap.
3. Bangun section di Figma mengikuti aturan bagian 4–9, langsung pakai text style dan variable warna yang sudah ada.
4. Foto:
   - Konversi WebP ke JPG (WebP tampil putih di Figma). Logo dirender sebagai PNG transparan 3x.
   - Upload dengan `upload_assets` + `nodeIds`, lalu `curl -F "file=@x.jpg;type=image/jpeg" <submitUrl>`.
   - Crop dengan fill `scaleMode: CROP` dan `imageTransform` yang sama dengan object-fit web.
5. Verifikasi tiap section (bagian 10), lalu lanjut ke section berikutnya.
6. Setelah semua section selesai: audit seluruh halaman, penomoran nama frame, laporan.

## 4. Struktur
- Kurangi frame bersarang. Wrapper tanpa fill, stroke, efek, clip, atau tugas layout dihapus.
- Container baru hanya untuk mengelompokkan item satu kolom/baris atau item dengan gap yang sama.
- Frame Image, Icon, Overlay, dekorasi, ilustrasi, dan diagram posisi bebas tidak dipaksa auto layout. Isinya boleh auto layout satu per satu.
- Tanda sudut putih di foto digambar sebagai layer "Corners". Kolom sticky atau scroll-pinned dibuat ABSOLUTE di posisi render statis.
- Frame struktur utama tetap bernama Body, Header, Main Content, Footer.

## 5. Auto layout
- Semua section, kolom, card, list, tombol, dan tag pakai auto layout.
- Arah ditentukan dengan pemotongan XY: kolom kalau jarak ≥56px, selain itu baris. Dua kolom berjarak besar pakai `SPACE_BETWEEN`.
- Urutan set: layoutMode → padding → sizing mode → HUG/FILL.
  - `resize()` mengembalikan sizing ke FIXED, jadi set ulang sizing setelah resize.
- Frame ber-fill/stroke/clip pakai FIXED. Frame polos pakai HUG. Anak FILL hanya kalau parent bukan HUG.
- Overlay pakai ABSOLUTE dan relativeTransform, tanpa scale negatif.

## 6. Spacing
- Jarak antar child pakai `itemSpacing` milik parent.
- Dilarang: padding di child kedua, wrapper berpadding untuk mendorong, spacer, margin tiruan.
- Gap yang tidak sama dikelompokkan ke sub-container.
- Nilai yang boleh: **0, 5, 10, 20, 30…** (kelipatan 10, terkecil 5).
  - Pembulatan: 1–2 → 0, 3–7 → 5, lainnya ke kelipatan 10 terdekat. Nilai tengah ke atas (15 → 20).
- **Pengecualian:** padding kiri-kanan section = **64**.

## 7. Garis
- Hairline, divider, garis tabel, dan outline pill: tebal **0,5**.
- Tebal **1** hanya untuk garis yang harus menonjol: aksen biru IO, indikator aktif, garis bawah text link.
- Aksen 2–3px dan stroke ikon tidak diubah.

## 8. Pill (tombol, tag, chip, status)
- Contoh di Figma: pill `6217:8230`, badge nomor `6217:8258`.
- Ukuran **HUG**. Radius 999. Stroke dihitung masuk layout.
- Padding atas-bawah 10, kiri-kanan 20 (kiri-kanan harus lebih lebar dari atas-bawah).
- Teks di dalam pill pakai style **`IO v2/Pill/…`** (sudah memakai trim tinggi huruf kapital).
  - Jangan set trim langsung di node teks yang memakai style biasa. Figma ikut menyimpan trim itu ke style-nya dan merusak teks lain.
- Badge nomor (1–2 karakter): lingkaran **fixed 30×30**, isi di tengah, semua sama besar.
- Bar CTA lebar dengan isi kiri dan kanan (misalnya "Download all"): lebar **FILL** mengikuti kolom.

## 9. Text style dan warna (sudah ada di file, pakai ini)
**Text style `IO v2/`** (Readex Pro, ukuran genap base 16, line-height dalam persen, maksimal 140%):

| Style | Size | LH | Weight | Peran |
|---|---|---|---|---|
| Display/Large | 84 | 95% | Light | Angka besar |
| Display/Medium | 56 | 100% | Light | Angka sorot |
| Display/Small | 52 | 110% | Light | Judul CTA besar |
| Heading/H1 | 68 | 105% | Light | Judul hero, satu per halaman |
| Heading/H2 | 42 | 110% | Light | Judul utama tiap section |
| Heading/H3 | 26 | 125% | Light | Judul card, tab, langkah |
| Heading/H4 | 20 | 140% | Regular | Judul item kecil |
| Label/Default | 12 | 140% | Medium, UPPERCASE, LS 1,6 | Eyebrow, nomor, tag |
| Body/Lead | 20 | 140% | Light | Intro besar |
| Body/Large | 16 | 140% | Regular | |
| Body/Default | 14 | 140% | Regular | Paragraf |
| Body/Default Medium | 14 | 140% | Medium | |
| Body/Small | 12 | 140% | Regular | |
| Caption/Regular | 12 | 140% | Regular | |
| Caption/Medium | 12 | 140% | Medium | |
| Button/Default | 14 | 140% | Medium | |
| Button/Link | 16 | 140% | Medium | |
| Pill/Label, Pill/Caption, Pill/Caption Medium, Pill/Body, Pill/Button, Pill/Button Large | sama dengan style dasarnya, plus trim | | | Hanya untuk teks di dalam pill |

- Heading ditentukan oleh **peran**, bukan ukuran. Ukuran dari web yang tidak rapi dibulatkan ke style terdekat (67,4 → 68, 20,7 → 20).
- Tidak boleh ada teks tanpa style.

**Warna:** pakai variable koleksi **"IO v2 · Color"** (token semantik). Koleksi **"IO v2 · Primitives"** hanya sebagai sumber nilai, jangan dipakai langsung.
- `bg/`: page, subtle, brand, accent, accent-subtle, inverse, placeholder.
- `text/`: primary, secondary, tertiary, disabled, strong, brand, brand-deep, on-brand, on-brand-secondary, on-brand-muted, on-brand-accent.
- `border/`: default, strong, brand, on-brand, on-photo.
- `icon/`: brand, on-brand.
- `status/`: success.
- Token transparan (border/default, border/strong, border/on-brand, border/on-photo, bg/accent-subtle, text/on-brand-secondary, text/on-brand-muted) sudah membawa nilai transparansinya. Opacity paint harus 100%. `setBoundVariableForPaint` menyimpan opacity lama, jadi set ulang ke 1.
- Jangan pakai hex langsung. Logo dan foto tidak diberi token.
- Kalau butuh warna atau style baru: tambahkan ke koleksi atau folder `IO v2` yang sudah ada, perbarui frame dokumentasi `6233:4151`, dan laporkan.

## 10. Teks
- Tanpa Enter manual. Paragraf pakai textAutoResize HEIGHT dengan lebar disetel sampai jumlah barisnya sama dengan web. Kalau baris bertambah, naikkan lebar bertahap, maksimal sekitar 8%.
- Satu kalimat satu node. Beda warna/bold pakai range, bukan node terpisah. Jangan salah gabung item list/grid.
- Teks pendek satu baris pakai WIDTH_AND_HEIGHT.
- Muat font sebelum mengedit teks atau style. Termasuk saat mengubah style yang sedang dipakai teks lain.

## 11. Verifikasi (tiap section)
- Screenshot Figma dibandingkan dengan render artifact. Selisih piksel dilaporkan, tapi tidak jadi syarat lulus, karena aturan spacing, line-height, dan pill memang mengubah tampilan.
- Cek:
  - tidak ada yang tumpang tindih atau terpotong;
  - tidak ada node flip;
  - foto dan ikon tampil;
  - jumlah baris teks sama dengan web;
  - tidak ada pelanggaran gap/padding.
- Audit akhir, semua harus 0:
  - teks tanpa style;
  - teks ber-Enter;
  - line-height di atas 140%;
  - nilai spacing di luar aturan;
  - warna fill/stroke/teks yang belum memakai token (kecuali logo dan foto);
  - gap/padding dari skala yang belum diikat ke `IO v2 · Spacing`;
  - radius yang belum diikat ke `IO v2 · Radius`.

## 12. Penamaan
- Semua frame diberi nama "Frame <9 digit>", urut +1 depth-first sesuai panel layer, mulai dari satu angka acak.
- Kecuali Body, Header, Main Content, Footer, Image, dan Icon.
- Dikerjakan terakhir, lalu diverifikasi tanpa celah dan tanpa duplikat.

## 13. Laporan akhir (singkat)
- Jumlah frame: berapa yang auto layout, berapa yang bukan dan alasannya.
- Jumlah wrapper dan nesting terdalam.
- Hasil audit dari bagian 11.
- Penomoran: angka awal, angka akhir, jumlah frame, urut atau tidak.
- Tinggi dan selisih per section.
- Hal yang belum beres atau keputusan yang butuh jawaban saya.
