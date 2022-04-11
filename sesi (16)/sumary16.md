Sesi 16 | State Management with redux
INTRO Front-end Architecture Timeline●80-an kita punya MVC●90-an ada MVP●2005 ada MVVM, VIPER●2009 ada DCI data, context interaction●2013 Flux munculKenapa banyak bermunculan berbagai arsitektur? Dan pasti akan muncul lagi arsitektur-arsitektur lainnya nanti ditahun-tahun mendatang. Yang pasti karena managing state itu adalah sesuatu yang kritikal, dan tidak mudah. Makanyabanyak yang menciptakan solusi untuk itu

Flux Architecture FlavorsKita akan fokus ke flux architecture. Nah Flux ini ada banyak rasa, ada:●Flux●Redux●MobX●Unstated●banyak lagiKita akan fokus ke Redux, karena untuk saat ini yg jadi de-facto-nya Redux ditambah Dan Abramov yang bikin Reduxdirekrut Facebook dan bekerja fulltime di React, Redux dan teman-temannya.

When Do I Need Redux?●Complex data flow●Many actions●Same data used in multiple placesDengan Flux, perubahan menjadi lebih terprediksi.Dan dengan Redux data jadi terpusat, adanya sudah pasti di Store. Dan sedikit berbeda dengan library lain seperti Flux,dan MobX, Redux ini store nya 1 doang. Semua data ada di 1 tempat.

Redux PrinciplesSingle Source of TruthState global dari Front End disimpang di sebuah object tree dengan sebuah store ( single store )State is Read OnlySatu-satunya cara untuk merubah state adalah melalui action. Action adalah sebuah object yang menggambarkan apayang harus terjadiChanges are made with pure functionsUntuk menjelaskan secara detail bagaimana sebuah state dapat di “ubah” oleh action, kita harus menulis sebuah reducer
