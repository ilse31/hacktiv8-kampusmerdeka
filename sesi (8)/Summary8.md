Document Object Model - DOMDalam mengembangkan web, kita harus menyadari bahwa kita sekaligus membuat Document Object Model (DOM) yangtersusun dalam dokumen HTML. Dengan pengetahuan DOM, kita bisa secara lebih lengkap mengetahui dan mampu untukmembuat interaksi pada halaman web menggunakan JavaScript.DOM API di HTML umumnya adalah untuk node ataupun objek element, document, dan window. Setiap hal tersebut memilikiberbagai property (nilai) dan method (aksi), bahkan bisa juga dipasang sebuah penangan kejadian (event handler) sehinggajika ada kejadian tertentu dilakukan suatu statement akan dijalankan.●window: frame, parent, self, top●history●location●document●element: body, h1, p, button, dl

DOM TransversingApa itu DOM Transversing?Di layout HTML yang cukup kompleks, kita akan bertemu dengan banyak element HTML yang memiliki hubungan parent-child yangdalam, dan pada saat kita menggunakan JavaScript untuk menseleksi atau memanipulasinya, tidak mungkin kita harus memberikanid atau class ke semua element-nya. Kita bisa menseleksi element HTML dari parent atau dari childnya. Untuk lebih dalammemahami hal ini, kamu harus telah mengerti hierarki parent-child yang terjadi di susunan HTML. Tapi tenang saja, kita akanmengulas ulang hal tersebut

DOM Transversinghtml : merupakan parent paling atashead : merupakan child dari html body : merupakan child dari html, sibling dari head h1 : merupakan child dari bodydiv id="contoh-div-1" : merupakan child dari body, sibling dari <h1>p id="contoh-p-1" : merupakan child dari div id="contoh-div-1"strong : merupakan child dari p id="contoh-p-1"em : merupakan child dari p id="contoh-p-1", sibling dari strongdiv id="contoh-div-2" : merupakan child dari body, sibling dari h1 dan div id="contoh-div-1"h2 : merupakan child dari div id="contoh-div-2" p id="contoh-p-2" : merupakan child dari div id="contoh-div-2", sibling dari h2ul : merupakan child dari div id="contoh-div-2", sibling dari h2 dan p id="contoh-p-2"li : merupakan child dari ul

REGEXRegular Expression atau sering disingkat RegExp atau RE adalah suatu mekanisme pencocokan pola (pattern matching) yangdibuat dengan menggunakan karakter-karakter khusus. Fungsinya sangat beragam, mulai dari memeriksa apakah sebuah inputansudah sesuai atau belum (test), untuk membuat fitur pencarian (search) atau penggantian string (replace).Contoh method yang menggunakan RegExp sudah kita lihat pada pembahasan tentang string object. Diantaranya method search(),match() dan replace(). Selain itu juga terdapat beberapa method yang khusus "melekat" ke RegExp Object javascript.Penggunaan paling banyak dari RegExp adalah untuk proses validasi form. Sebagai contoh, bagaimana caranya kita memastikanseseorang sudah menginput alamat email dengan benar? Apakah yang diinput di kolom total pemesanan sudah berupa angka? ataumalah huruf? Bagaimana cara memastikan inputan password yang syaratnya harus dibuat dari 6 karakter dan mengandung minimal1 angka dan 1 huruf besar? Ini semua ditangani oleh RegExp.