var express = require('express');
var router = express.Router();

/* GET home page. */
const anaSayfa=function(req, res, next) {
    res.render('anasayfa',
    { 
        "baslik": 'Anasayfa',
        "sayfaBaslik": {
            "siteAd": "MekanBul",
            "slogan": "Civardaki Mekanları Keşfet!"
        },
        "mekanlar":[
            {
                "ad": "Starbucks",
                "puan": "5",
                "adres": "Centrum Garden AVM",
                "imkanlar": ["Dünya Kahveleri","Çay","Kek"],
                "mesafe": "10km"
            },
            {
                "ad": "Barida Cafe",
                "puan": "4",
                "adres": "SDÜ Batı Kampüsü",
                "imkanlar": ["Kahve","Çay","Kek"],
                "mesafe": "1km"
            }

        ]
    }
    );
};
const mekanBilgisi=function(req, res, next) {
    res.render('mekanbilgisi',
    { "baslik": 'Mekan Bilgisi',
    "mekanBaslik": "Starbucks",
    "mekanDetay": {
        "ad": "Starbucks",
        "adres": "Centrum Garden AVM",
        "puan":"4",
        "saatler": [
            {
                "gunler": "Pazartesi-Cuma",
                "acilis": "9:00",
                "kapanis": "23:00",
                "kapali": false
            },
            {
                "gunler": "Cumartesi-Pazar",
                "acilis": "8:00",
                "kapanis": "22:00",
                "kapali": false
            }
        ],
        "imkanlar": ["Dünya Kahveleri","Çay","Kek"],
        "koordinatlar":{
            "enlem": "37.7",
            "boylam": "30.5"
        },
        "yorumlar":[
            {
                "yorumYapan": "Abdullah Deniz Tonka",
                "yorumMetni": "Kötü",
                "tarih": "20 Ekim 2022",
                "puan": "1"
            },
            {
                "yorumYapan": "Abdullah Deniz Tonka",
                "yorumMetni": "Eh iste",
                "tarih": "10 Ekim 2022",
                "puan": "5"
            },
        ]
    }
});
};
const yorumEkle=function(req, res, next) {
    res.render('yorumekle', { title: 'Yorum Sayfası' });
};

module.exports={
    anaSayfa,
    mekanBilgisi,
    yorumEkle
}