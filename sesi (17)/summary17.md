Sesi 17 | Server Side Rendering Concept
Server Side Rendering atau biasa di sebut SSR adalah teknik untuk merender Single Page Application atau biasa disebut SPA yang akan dirender di sisi server lalu semua hasil render tersebut dikirimkan ke sisi klien. Jika di ilustrasikan cara kerja server side rendering akan seperti gambar berikut1.Browser menerima response dari server sekaligus element hasil render dari server.2.Browser kemudian mendownload file-file yang diload(css, js, dll). Pada saat ini element sudah terender.3.Selanjutnya Browser akan mengeksekusi react. Pada saat ini element sudah terender juga.4.Terakhir, semua element tersebut sudah bisa berinteraksi dengan user

Sesi 17 | Server Side Rendering ConceptMengapa beralih ke SERVER SIDE RENDERING ?1. Search Engine Optimization React Server Side Rendering membantu search engine melakukan crawling konten website kita.tetapi khusus untuk google kita bisa membuat google melakukan crawling konten tanpa menggunakan react server siderendering. Crawling dari search engine pada dasarnya tidak mendukung javascript. Aplikasi yang kita build dengan reactakan di crawl oleh search engine sebagai halaman kosong.2. Meningkatkan Performance Setelah browser mendownload html dan css, konten akan langsung ditampilkan tanpa harus menunggu browsermendownload javascript atau react melakukan render pada konten. Sehingga jika ukuran javascript kita sangat besar itutidak akan memakan waktu untuk menampilkannya.Salah satu Framework yang digunakan untuk membuat react server side rendering adalah Next.Js