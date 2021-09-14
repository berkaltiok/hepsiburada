import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginStatus: 'NOT_LOGGED_IN', // NOT_LOGGED_IN, LOGGED_IN
    user: [],
    slider: [
      {
        title: "Bugüne Özel",
        items: [
          {
            color: "#FFFFFF",
            link: "/",
            images: {
              card: "https://images.hepsiburada.net/banners/s/0/1344-756/bannerImage2115_20210819193618.png",
              background: "https://images.hepsiburada.net/banners/s/0/1920-540/backgroundImage2152_20210819193551.png",
              thumbnail: "https://images.hepsiburada.net/banners/s/0/1344-756/bannerImage2115_20210819193618.png"
            },
            content: {
              title: "Vade farksız 9 taksit fırsatı ile",
              text: "teknoloji ürünlerini yenile",
              info: "",
              bold: true,
              button: {
                text: "Acele et kaçırma",
                color: {
                  default: "#3f44e4",
                  hover: "#3237c9"
                }
              }
            }
          },
          {
            color: "#FFFFFF",
            link: "/",
            images: {
              card: "https://images.hepsiburada.net/banners/0/bannerImage2128_20210911134529.png",
              background: "https://images.hepsiburada.net/banners/0/backgroundImage2117_20210911134517.png",
              thumbnail: "https://images.hepsiburada.net/banners/0/thumbnailImage2122_20210911134522.png"
            },
            content: {
              title: "Boş yok",
              text: "herkese anında hediye para var",
              info: "",
              bold: false,
              button: {
                text: "Acele et kaçırma",
                color: {
                  default: "#7723DB",
                  hover: "#6d19d1"
                }
              }
            }
          },
          {
            color: "#FFFFFF",
            link: "/",
            images: {
              card: "https://images.hepsiburada.net/banners/0/bannerImage2125_20210910175912.png",
              background: "https://images.hepsiburada.net/banners/0/backgroundImage2150_20210913104157.png",
              thumbnail: "https://images.hepsiburada.net/banners/0/thumbnailImage2116_20210910175859.png"
            },
            content: {
              title: "Seçili Sleepy bebek bezlerinde",
              text: "2.'si 1 TL",
              info: "*İade işlemi için yalnızca kampanyalı ürün iade edilebilir veya siparişin tamamı iptal edilebilir.",
              bold: false,
              button: {
                text: "Acele et kaçırma",
                color: {
                  default: "#7723db",
                  hover: "#6d19d1"
                }
              }
            }
          },
          {
            color: "#FFFFFF",
            link: "/",
            images: {
              card: "https://images.hepsiburada.net/banners/0/bannerImage2141_20210910145632.png",
              background: "https://images.hepsiburada.net/banners/0/backgroundImage2163_20210910145356.png",
              thumbnail: "https://images.hepsiburada.net/banners/0/thumbnailImage2162_20210910145553.png"
            },
            content: {
              title: "Aksesuar Günleri’ne özel",
              text: "%50'ye varan indirimler",
              info: "",
              bold: false,
              button: {
                text: "Acele et kaçırma",
                color: {
                  default: "#5210b1",
                  hover: "#4806a7"
                }
              }
            }
          },
          {
            color: "#FFFFFF",
            link: "/",
            images: {
              card: "https://images.hepsiburada.net/banners/0/bannerImage2147_20210910164546.png",
              background: "https://images.hepsiburada.net/banners/0/backgroundImage2137_20210910164536.png",
              thumbnail: "https://images.hepsiburada.net/banners/0/thumbnailImage2141_20210910164540.png"
            },
            content: {
              title: "Süper fiyatlar",
              text: "sadece burada",
              info: "",
              bold: false,
              button: {
                text: "Acele et kaçırma",
                color: {
                  default: "#000000",
                  hover: "#0"
                }
              }
            }
          },
          {
            color: "#FFFFFF",
            link: "/",
            images: {
              card: "https://images.hepsiburada.net/banners/0/bannerImage2131_20210912173835.png",
              background: "https://images.hepsiburada.net/banners/0/backgroundImage2117_20210912173622.png",
              thumbnail: "https://images.hepsiburada.net/banners/0/thumbnailImage2121_20210912173823.png"
            },
            content: {
              title: "Spor ve outdoor ürünlerinde",
              text: "tüm indirimlere ek süper fırsatlar",
              info: "*Tüm indirimlere ek 350 TL'ye 50 TL, 700 TL'ye 100 TL indirim uygulanacaktır.",
              bold: false,
              button: {
                text: "Acele et kaçırma",
                color: {
                  default: "#73186d",
                  hover: "#690e63"
                }
              }
            }
          },
          {
            color: "#FFFFFF",
            link: "/",
            images: {
              card: "https://images.hepsiburada.net/banners/0/bannerImage2149_20210910175057.png",
              background: "https://images.hepsiburada.net/banners/0/backgroundImage2140_20210910175034.png",
              thumbnail: "https://images.hepsiburada.net/banners/0/thumbnailImage2145_20210910175038.png"
            },
            content: {
              title: "3.500 TL ve altı seçili telefonlarda",
              text: "sepette %7’ye varan indirimler",
              info: "",
              bold: false,
              button: {
                text: "Acele et kaçırma",
                color: {
                  default: "#cf9c53",
                  hover: "#c59249"
                }
              }
            }
          },
          {
            color: "#484848",
            link: "/",
            images: {
              card: "https://images.hepsiburada.net/banners/0/bannerImage2130_20210726232152.png",
              background: "https://images.hepsiburada.net/banners/0/backgroundImage2116_20210726232119.png",
              thumbnail: "https://images.hepsiburada.net/banners/0/thumbnailImage2123_20210726232125.png"
            },
            content: {
              title: "Ev ve yaşam ürünlerinde",
              text: "150 TL'ye varan indirimler",
              info: "",
              bold: false,
              button: {
                text: "Acele et kaçırma",
                color: {
                  default: "#ff2db2",
                  hover: "#f523a8"
                }
              }
            }
          },
          {
            color: "#484848",
            link: "/",
            images: {
              card: "https://images.hepsiburada.net/banners/0/bannerImage2106_20210531120758.png",
              background: "https://images.hepsiburada.net/banners/0/backgroundImage2171_20210531135300.png",
              thumbnail: "https://images.hepsiburada.net/banners/0/thumbnailImage2103_20210531120641.png"
            },
            content: {
              title: "Ofis ve kırtasiye ihtiyaçları için",
              text: "süper indirimler",
              info: "",
              bold: false,
              button: {
                text: "Acele et kaçırma",
                color: {
                  default: "#6e2fb3",
                  hover: "#6425a9"
                }
              }
            }
          },
          {
            color: "#FFFFFF",
            link: "/",
            images: {
              card: "https://images.hepsiburada.net/banners/0/bannerImage2147_20210913124153.png",
              background: "https://images.hepsiburada.net/banners/0/backgroundImage2134_20210913124140.png",
              thumbnail: "https://images.hepsiburada.net/banners/0/thumbnailImage2101_20210913124204.png"
            },
            content: {
              title: "Üç saatte bir yenilenen",
              text: "süper indirimler",
              info: "",
              bold: false,
              button: {
                text: "Acele et kaçırma",
                color: {
                  default: "#651fbc",
                  hover: "#5b15b2"
                }
              }
            }
          },
          {
            color: "#FFFFFF",
            link: "/",
            images: {
              card: "https://images.hepsiburada.net/banners/0/bannerImage2074_20210910091907.png",
              background: "https://images.hepsiburada.net/banners/0/backgroundImage2067_20210910091802.png",
              thumbnail: "https://images.hepsiburada.net/banners/0/thumbnailImage2075_20210910091808.png"
            },
            content: {
              title: "HP bilgisayar ve ekipmanlarında",
              text: "sepette %15'e varan indirimler",
              info: "",
              bold: false,
              button: {
                text: "Acele et kaçırma",
                color: {
                  default: "#ff6000",
                  hover: "#f55600"
                }
              }
            }
          },
          {
            color: "#FFFFFF",
            link: "/",
            images: {
              card: "https://images.hepsiburada.net/banners/0/bannerImage2169_20210611165800.png",
              background: "https://images.hepsiburada.net/banners/0/backgroundImage2148_20210611165737.png",
              thumbnail: "https://images.hepsiburada.net/banners/0/thumbnailImage2159_20210611165747.png"
            },
            content: {
              title: "Küçük ev aletlerinde",
              text: "%50'ye varan indirimler",
              info: "",
              bold: false,
              button: {
                text: "Alışverişe başla",
                color: {
                  default: "#f53d5b",
                  hover: "#eb3351"
                }
              }
            }
          },
          {
            color: "#FFFFFF",
            link: "/",
            images: {
              card: "https://images.hepsiburada.net/banners/0/bannerImage2123_20210818122838.png",
              background: "https://images.hepsiburada.net/banners/0/backgroundImage2110_20210818122232.png",
              thumbnail: "https://images.hepsiburada.net/banners/0/thumbnailImage2092_20210818122310.png"
            },
            content: {
              title: "Seçili temizlik ürünlerinde",
              text: "100 TL'ye 20 TL indirim",
              info: "",
              bold: false,
              button: {
                text: "Acele et kaçırma",
                color: {
                  default: "#1680a5",
                  hover: "#c769b"
                }
              }
            }
          },
        ]
      },
      {
        title: "Okula Dönüş",
        items: [
          {
            color: "#484848",
            link: "/",
            images: {
              card: "https://images.hepsiburada.net/banners/0/bannerImage2133_20210910231200.png",
              background: "https://images.hepsiburada.net/banners/0/backgroundImage2127_20210910231055.png",
              thumbnail: "https://images.hepsiburada.net/banners/0/thumbnailImage2129_20210910231155.png"
            },
            content: {
              title: "En sevilen oyuncaklarda",
              text: "150 TL'ye anında 20 TL indirim",
              info: "",
              bold: false,
              button: {
                text: "Acele et kaçırma",
                color: {
                  default: "#f65162",
                  hover: "#ec4758"
                }
              }
            }
          },
          {
            color: "#FFFFFF",
            link: "/",
            images: {
              card: "https://images.hepsiburada.net/banners/0/bannerImage2158_20210910154512.png",
              background: "https://images.hepsiburada.net/banners/0/backgroundImage2150_20210910154451.png",
              thumbnail: "https://images.hepsiburada.net/banners/0/thumbnailImage2154_20210910154455.png"
            },
            content: {
              title: "Beyaz eşyalarda",
              text: "sepette %10 net indirim",
              info: "",
              bold: false,
              button: {
                text: "Acele et kaçırma",
                color: {
                  default: "#ff6000",
                  hover: "#f55600"
                }
              }
            }
          },
          {
            color: "#FFFFFF",
            link: "/",
            images: {
              card: "https://images.hepsiburada.net/banners/0/bannerImage2123_20210326163233.png",
              background: "https://images.hepsiburada.net/banners/0/backgroundImage2098_20210326163210.png",
              thumbnail: "https://images.hepsiburada.net/banners/0/thumbnailImage2113_20210326163221.png"
            },
            content: {
              title: "İhtiyacın olan bakım ürünlerinde",
              text: "süper fırsatlar",
              info: "",
              bold: false,
              button: {
                text: "Hemen keşfet",
                color: {
                  default: "#ff6000",
                  hover: "#f55600"
                }
              }
            }
          },
          {
            color: "#484848",
            link: "/",
            images: {
              card: "https://images.hepsiburada.net/banners/0/bannerImage2097_20210729171458.png",
              background: "https://images.hepsiburada.net/banners/0/backgroundImage2104_20210729171318.png",
              thumbnail: "https://images.hepsiburada.net/banners/0/thumbnailImage2093_20210729171405.png"
            },
            content: {
              title: "Yapı Market İndirim Festivali'ne özel",
              text: "süper fiyatlar",
              info: "",
              bold: false,
              button: {
                text: "Acele et kaçırma",
                color: {
                  default: "#ff6000",
                  hover: "#f55600"
                }
              }
            }
          },
          {
            color: "#fff",
            link: "/",
            images: {
              card: "https://images.hepsiburada.net/banners/0/bannerImage2164_20210827154945.png",
              background: "https://images.hepsiburada.net/banners/0/backgroundImage2125_20210827154508.png",
              thumbnail: "https://images.hepsiburada.net/banners/0/thumbnailImage2131_20210827154514.png"
            },
            content: {
              title: "Çok satan televizyonlarda",
              text: "%7 net indirim",
              info: "",
              bold: false,
              button: {
                text: "Acele et kaçırma",
                color: {
                  default: "#f69f29",
                  hover: "#ec951f"
                }
              }
            }
          },
          {
            color: "#484848",
            link: "/",
            images: {
              card: "https://images.hepsiburada.net/banners/0/bannerImage2116_20210910165724.png",
              background: "https://images.hepsiburada.net/banners/0/backgroundImage2113_20210910165700.png",
              thumbnail: "https://images.hepsiburada.net/banners/0/thumbnailImage2167_20210910165655.png"
            },
            content: {
              title: "Sonbahar Bağışıklık Festivali'ne özel",
              text: "Aptamil ürünlerinde süper fırsatlar",
              info: "*Bebeğin için en üstün besin anne sütüdür. Eksikliğinde doktorunuza danışınız.",
              bold: false,
              button: {
                text: "Acele et kaçırma",
                color: {
                  default: "#c972f1",
                  hover: "#bf68e7"
                }
              }
            }
          }
        ]
      }
    ]
  },
  getters: {
    isLoggedIn: state => state.loginStatus === "LOGGED_IN"
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
