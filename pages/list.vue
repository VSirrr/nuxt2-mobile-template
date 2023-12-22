<template>
  <v-lazy-container tag="ul">
    <li v-for="item in list" :key="item.masterId">
      <v-lazy-img
        class="logo"
        alt="car logo"
        :src="item.logoUrl"
        :wp-src="item.logoUrlWebp.replace('{0}', '100')"
        error-src="https://img5.bitautoimg.com/yc-common/imgs/lazyload-brand.png"
        loading-src="https://img5.bitautoimg.com/yc-common/imgs/lazyload-brand.png"
      />
      {{ item.masterName }}
    </li>
  </v-lazy-container>
</template>

<script>
export default {
  scrollToTop: true,
  data() {
    return {
      list: [
        {
          masterId: 9,
          masterName: "奥迪",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/127/2023052327779482594512788119.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/127/w{0}_yichecar_2023052327779482594512788119.png.webp",
          serialList: [
            {
              serialId: 2573,
              serialName: "奥迪A6L",
            },
            {
              serialId: 2593,
              serialName: "奥迪A4L",
            },
            {
              serialId: 7379,
              serialName: "奥迪A7L",
            },
            {
              serialId: 5394,
              serialName: "奥迪Q5L",
            },
            {
              serialId: 3999,
              serialName: "奥迪A3",
            },
            {
              serialId: 2070,
              serialName: "奥迪A8",
            },
            {
              serialId: 3395,
              serialName: "奥迪Q3",
            },
            {
              serialId: 1994,
              serialName: "奥迪Q7",
            },
            {
              serialId: 8014,
              serialName: "奥迪Q6",
            },
            {
              serialId: 2382,
              serialName: "奥迪A5",
            },
            {
              serialId: 2837,
              serialName: "奥迪A7",
            },
            {
              serialId: 2071,
              serialName: "奥迪A6",
            },
            {
              serialId: 3736,
              serialName: "奥迪Q2L",
            },
            {
              serialId: 7483,
              serialName: "奥迪Q5 e-tron",
            },
            {
              serialId: 5786,
              serialName: "奥迪Q4 e-tron",
            },
            {
              serialId: 3750,
              serialName: "奥迪Q8",
            },
            {
              serialId: 3841,
              serialName: "奥迪RS 7",
            },
            {
              serialId: 2075,
              serialName: "奥迪A4(进口)",
            },
            {
              serialId: 7162,
              serialName: "奥迪Q5L Sportback",
            },
            {
              serialId: 2347,
              serialName: "奥迪R8",
            },
            {
              serialId: 7161,
              serialName: "奥迪Q3 Sportback",
            },
            {
              serialId: 2582,
              serialName: "奥迪S4",
            },
            {
              serialId: 5191,
              serialName: "奥迪A6L 插电混动",
            },
            {
              serialId: 2591,
              serialName: "奥迪S8",
            },
            {
              serialId: 5725,
              serialName: "奥迪Q2L e-tron",
            },
            {
              serialId: 3824,
              serialName: "奥迪RS 6",
            },
            {
              serialId: 2623,
              serialName: "奥迪S5",
            },
            {
              serialId: 2847,
              serialName: "奥迪RS 5",
            },
            {
              serialId: 3633,
              serialName: "奥迪S7",
            },
            {
              serialId: 5999,
              serialName: "奥迪RS Q8",
            },
            {
              serialId: 5229,
              serialName: "奥迪RS 4",
            },
            {
              serialId: 5556,
              serialName: "奥迪e-tron GT",
            },
            {
              serialId: 7388,
              serialName: "奥迪RS e-tron GT",
            },
            {
              serialId: 3634,
              serialName: "奥迪S6",
            },
            {
              serialId: 6739,
              serialName: "奥迪e-tron",
            },
            {
              serialId: 3829,
              serialName: "奥迪SQ5",
            },
            {
              serialId: 5476,
              serialName: "奥迪e-tron(进口)",
            },
            {
              serialId: 9765,
              serialName: "奥迪SQ5 Sportback",
            },
          ],
        },
        {
          masterId: 295,
          masterName: "埃安",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230711/803/202307118790906087080394774.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230711/803/w{0}_yichecar_202307118790906087080394774.png.webp",
          serialList: [
            {
              serialId: 5536,
              serialName: "AION S",
            },
            {
              serialId: 7229,
              serialName: "AION Y",
            },
            {
              serialId: 6277,
              serialName: "AION V",
            },
            {
              serialId: 5746,
              serialName: "AION LX",
            },
          ],
        },
        {
          masterId: 629,
          masterName: "AITO",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/297/2023052339421483384729706329.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/297/w{0}_yichecar_2023052339421483384729706329.png.webp",
          serialList: [
            {
              serialId: 8278,
              serialName: "问界M7",
            },
            {
              serialId: 7664,
              serialName: "问界M5",
            },
          ],
        },
        {
          masterId: 97,
          masterName: "阿斯顿·马丁",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230601/928/202306014711561877192840628.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230601/928/w{0}_yichecar_202306014711561877192840628.png.webp",
          serialList: [
            {
              serialId: 2140,
              serialName: "V8 Vantage",
            },
            {
              serialId: 6008,
              serialName: "阿斯顿·马丁DBX",
            },
            {
              serialId: 2620,
              serialName: "阿斯顿·马丁DBS",
            },
            {
              serialId: 10306,
              serialName: "阿斯顿·马丁DB12",
            },
            {
              serialId: 4765,
              serialName: "阿斯顿·马丁DB11",
            },
          ],
        },
        {
          masterId: 619,
          masterName: "阿维塔",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/951/2023052339444483386195163563.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/951/w{0}_yichecar_2023052339444483386195163563.png.webp",
          serialList: [
            {
              serialId: 10385,
              serialName: "阿维塔12",
            },
            {
              serialId: 8029,
              serialName: "阿维塔11",
            },
          ],
        },
        {
          masterId: 92,
          masterName: "阿尔法·罗密欧",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/31/2023052330041482751003124458.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/31/w{0}_yichecar_2023052330041482751003124458.png.webp",
          serialList: [
            {
              serialId: 4598,
              serialName: "Giulia",
            },
            {
              serialId: 5656,
              serialName: "Tonale托纳利",
            },
            {
              serialId: 4985,
              serialName: "Stelvio斯坦维",
            },
          ],
        },
        {
          masterId: 458,
          masterName: "AUXUN傲旋",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/254/2023052339503483389325406264.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/254/w{0}_yichecar_2023052339503483389325406264.png.webp",
          serialList: [
            {
              serialId: 7643,
              serialName: "傲旋",
            },
          ],
        },
        {
          masterId: 536,
          masterName: "安凯客车",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/66/2023052339605483395106601713.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/66/w{0}_yichecar_2023052339605483395106601713.png.webp",
          serialList: [
            {
              serialId: 9665,
              serialName: "安凯Q5",
            },
            {
              serialId: 9653,
              serialName: "安凯快乐运",
            },
          ],
        },
        {
          masterId: 555,
          masterName: "ARMADILLO",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/552/2023052340048483420055211111.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/552/w{0}_yichecar_2023052340048483420055211111.png.webp",
          serialList: [
            {
              serialId: 10274,
              serialName: "征服者系列",
            },
            {
              serialId: 10273,
              serialName: "挑战者系列",
            },
            {
              serialId: 10539,
              serialName: "先锋官",
            },
            {
              serialId: 7865,
              serialName: "锐行者",
            },
          ],
        },
        {
          masterId: 26,
          masterName: "本田",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/114/2023052342609483601911466929.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/114/w{0}_yichecar_2023052342609483601911466929.png.webp",
          serialList: [
            {
              serialId: 2406,
              serialName: "雅阁",
            },
            {
              serialId: 1660,
              serialName: "本田CR-V",
            },
            {
              serialId: 1661,
              serialName: "思域",
            },
            {
              serialId: 4279,
              serialName: "本田XR-V",
            },
            {
              serialId: 5985,
              serialName: "皓影",
            },
            {
              serialId: 7661,
              serialName: "型格",
            },
            {
              serialId: 2408,
              serialName: "飞度",
            },
            {
              serialId: 2750,
              serialName: "奥德赛",
            },
            {
              serialId: 9673,
              serialName: "本田HR-V",
            },
            {
              serialId: 5464,
              serialName: "英仕派",
            },
            {
              serialId: 4794,
              serialName: "冠道",
            },
            {
              serialId: 4117,
              serialName: "缤智",
            },
            {
              serialId: 7026,
              serialName: "本田CR-V e:PHEV",
            },
            {
              serialId: 3720,
              serialName: "凌派",
            },
            {
              serialId: 4792,
              serialName: "本田UR-V",
            },
            {
              serialId: 3701,
              serialName: "艾力绅",
            },
            {
              serialId: 5644,
              serialName: "享域",
            },
            {
              serialId: 10048,
              serialName: "雅阁 e:PHEV",
            },
            {
              serialId: 2051,
              serialName: "思域(进口)",
            },
            {
              serialId: 7220,
              serialName: "皓影 锐·混动e+",
            },
            {
              serialId: 6966,
              serialName: "LIFE",
            },
            {
              serialId: 9512,
              serialName: "ZR-V 致在",
            },
            {
              serialId: 7744,
              serialName: "本田e:NS1",
            },
            {
              serialId: 10281,
              serialName: "英仕派 e:PHEV",
            },
            {
              serialId: 7899,
              serialName: "e:NP1 极湃1",
            },
          ],
        },
        {
          masterId: 2,
          masterName: "奔驰",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/826/2023052342657483602882615752.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/826/w{0}_yichecar_2023052342657483602882615752.png.webp",
          serialList: [
            {
              serialId: 1987,
              serialName: "奔驰E级",
            },
            {
              serialId: 2364,
              serialName: "奔驰C级",
            },
            {
              serialId: 4597,
              serialName: "奔驰GLC",
            },
            {
              serialId: 5381,
              serialName: "奔驰A级",
            },
            {
              serialId: 5512,
              serialName: "奔驰GLB",
            },
            {
              serialId: 4373,
              serialName: "迈巴赫S级",
            },
            {
              serialId: 2259,
              serialName: "奔驰S级",
            },
            {
              serialId: 4401,
              serialName: "奔驰GLE",
            },
            {
              serialId: 4662,
              serialName: "奔驰GLS",
            },
            {
              serialId: 2257,
              serialName: "奔驰C级(进口)",
            },
            {
              serialId: 4477,
              serialName: "奔驰GLA",
            },
            {
              serialId: 2356,
              serialName: "奔驰G级",
            },
            {
              serialId: 2765,
              serialName: "奔驰E级(进口)",
            },
            {
              serialId: 3673,
              serialName: "奔驰CLA级",
            },
            {
              serialId: 3038,
              serialName: "威霆",
            },
            {
              serialId: 4138,
              serialName: "奔驰V级",
            },
            {
              serialId: 3976,
              serialName: "奔驰G级 AMG",
            },
            {
              serialId: 6150,
              serialName: "迈巴赫GLS",
            },
            {
              serialId: 2261,
              serialName: "奔驰CLS级",
            },
            {
              serialId: 5869,
              serialName: "奔驰E级 插电混动",
            },
            {
              serialId: 4496,
              serialName: "奔驰GLC轿跑",
            },
            {
              serialId: 5747,
              serialName: "奔驰A级 AMG",
            },
            {
              serialId: 2616,
              serialName: "奔驰B级",
            },
            {
              serialId: 2564,
              serialName: "奔驰A级(进口)",
            },
            {
              serialId: 3975,
              serialName: "奔驰C级 AMG",
            },
            {
              serialId: 4319,
              serialName: "奔驰GT AMG",
            },
            {
              serialId: 8271,
              serialName: "奔驰EQE",
            },
            {
              serialId: 5466,
              serialName: "奔驰EQC",
            },
            {
              serialId: 4426,
              serialName: "奔驰GLE AMG",
            },
            {
              serialId: 7521,
              serialName: "奔驰EQB",
            },
            {
              serialId: 5931,
              serialName: "奔驰GLB AMG",
            },
            {
              serialId: 6468,
              serialName: "奔驰C级 插电混动",
            },
            {
              serialId: 3984,
              serialName: "奔驰A级 AMG(进口)",
            },
            {
              serialId: 3980,
              serialName: "奔驰SL级 AMG",
            },
            {
              serialId: 7520,
              serialName: "奔驰EQA",
            },
            {
              serialId: 4755,
              serialName: "奔驰GLC AMG",
            },
            {
              serialId: 3985,
              serialName: "奔驰CLA级 AMG",
            },
            {
              serialId: 7544,
              serialName: "奔驰GLE轿跑",
            },
            {
              serialId: 3983,
              serialName: "奔驰E级 AMG",
            },
            {
              serialId: 6021,
              serialName: "奔驰EQS",
            },
            {
              serialId: 5148,
              serialName: "奔驰S级 插电混动",
            },
            {
              serialId: 9843,
              serialName: "奔驰EQE SUV",
            },
            {
              serialId: 10106,
              serialName: "迈巴赫S级 插电混动",
            },
            {
              serialId: 5291,
              serialName: "奔驰GLE 插电混动",
            },
            {
              serialId: 4663,
              serialName: "奔驰GLS AMG",
            },
            {
              serialId: 7545,
              serialName: "奔驰GLE轿跑 AMG",
            },
            {
              serialId: 7546,
              serialName: "奔驰GLC轿跑 AMG",
            },
            {
              serialId: 4104,
              serialName: "奔驰GLA AMG",
            },
            {
              serialId: 9060,
              serialName: "奔驰EQS SUV",
            },
            {
              serialId: 7547,
              serialName: "奔驰GLE轿跑 插电混动",
            },
            {
              serialId: 7650,
              serialName: "奔驰EQS AMG",
            },
            {
              serialId: 8275,
              serialName: "奔驰EQE AMG",
            },
          ],
        },
        {
          masterId: 15,
          masterName: "比亚迪",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/626/2023052342669483604862653689.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/626/w{0}_yichecar_2023052342669483604862653689.png.webp",
          serialList: [
            {
              serialId: 7219,
              serialName: "秦PLUS新能源",
            },
            {
              serialId: 7350,
              serialName: "宋PLUS新能源",
            },
            {
              serialId: 9539,
              serialName: "海鸥",
            },
            {
              serialId: 7669,
              serialName: "海豹",
            },
            {
              serialId: 6157,
              serialName: "汉",
            },
            {
              serialId: 5710,
              serialName: "宋Pro新能源",
            },
            {
              serialId: 7596,
              serialName: "元PLUS",
            },
            {
              serialId: 7480,
              serialName: "海豚",
            },
            {
              serialId: 5521,
              serialName: "唐新能源",
            },
            {
              serialId: 7620,
              serialName: "驱逐舰05",
            },
            {
              serialId: 8902,
              serialName: "护卫舰07",
            },
            {
              serialId: 7425,
              serialName: "元Pro",
            },
            {
              serialId: 5748,
              serialName: "比亚迪e2",
            },
            {
              serialId: 5457,
              serialName: "宋MAX新能源",
            },
            {
              serialId: 4850,
              serialName: "秦新能源",
            },
            {
              serialId: 7209,
              serialName: "比亚迪e9",
            },
            {
              serialId: 6877,
              serialName: "比亚迪D1",
            },
            {
              serialId: 7446,
              serialName: "比亚迪V3",
            },
            {
              serialId: 5944,
              serialName: "比亚迪e3",
            },
          ],
        },
        {
          masterId: 3,
          masterName: "宝马",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/782/2023052342660483603878209526.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/782/w{0}_yichecar_2023052342660483603878209526.png.webp",
          serialList: [
            {
              serialId: 2412,
              serialName: "宝马5系",
            },
            {
              serialId: 1729,
              serialName: "宝马3系",
            },
            {
              serialId: 8108,
              serialName: "宝马X5",
            },
            {
              serialId: 5301,
              serialName: "宝马X3",
            },
            {
              serialId: 3544,
              serialName: "宝马X1",
            },
            {
              serialId: 4853,
              serialName: "宝马1系",
            },
            {
              serialId: 2033,
              serialName: "宝马7系",
            },
            {
              serialId: 8107,
              serialName: "宝马i3",
            },
            {
              serialId: 3943,
              serialName: "宝马2系",
            },
            {
              serialId: 3486,
              serialName: "宝马4系",
            },
            {
              serialId: 5794,
              serialName: "宝马X2",
            },
            {
              serialId: 2390,
              serialName: "宝马X6",
            },
            {
              serialId: 4581,
              serialName: "宝马X7",
            },
            {
              serialId: 2034,
              serialName: "宝马5系(进口)",
            },
            {
              serialId: 2751,
              serialName: "宝马Z4",
            },
            {
              serialId: 6731,
              serialName: "宝马iX3",
            },
            {
              serialId: 5141,
              serialName: "宝马5系 插电混动",
            },
            {
              serialId: 3274,
              serialName: "宝马X4",
            },
            {
              serialId: 2037,
              serialName: "宝马X3(进口)",
            },
            {
              serialId: 5251,
              serialName: "宝马6系GT",
            },
            {
              serialId: 5104,
              serialName: "宝马8系",
            },
            {
              serialId: 3998,
              serialName: "宝马M4",
            },
            {
              serialId: 9962,
              serialName: "宝马iX1",
            },
            {
              serialId: 4059,
              serialName: "宝马M2",
            },
            {
              serialId: 5637,
              serialName: "宝马X3 M",
            },
            {
              serialId: 3991,
              serialName: "宝马M3",
            },
            {
              serialId: 3994,
              serialName: "宝马X5 M",
            },
            {
              serialId: 5216,
              serialName: "宝马M8",
            },
            {
              serialId: 8095,
              serialName: "宝马i7",
            },
            {
              serialId: 6148,
              serialName: "宝马i4",
            },
            {
              serialId: 5836,
              serialName: "宝马iX",
            },
            {
              serialId: 8025,
              serialName: "宝马XM",
            },
            {
              serialId: 3995,
              serialName: "宝马X6 M",
            },
            {
              serialId: 5143,
              serialName: "宝马7系 插电混动",
            },
            {
              serialId: 5638,
              serialName: "宝马X4 M",
            },
          ],
        },
        {
          masterId: 127,
          masterName: "别克",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/520/2023052342728483605752095693.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/520/w{0}_yichecar_2023052342728483605752095693.png.webp",
          serialList: [
            {
              serialId: 1825,
              serialName: "别克GL8",
            },
            {
              serialId: 2614,
              serialName: "君威",
            },
            {
              serialId: 3379,
              serialName: "昂科威",
            },
            {
              serialId: 4457,
              serialName: "威朗",
            },
            {
              serialId: 2731,
              serialName: "君越",
            },
            {
              serialId: 5987,
              serialName: "昂科旗",
            },
            {
              serialId: 9907,
              serialName: "别克E5",
            },
            {
              serialId: 5364,
              serialName: "微蓝VELITE 6 纯电动",
            },
            {
              serialId: 9796,
              serialName: "世纪",
            },
            {
              serialId: 3600,
              serialName: "昂科拉",
            },
            {
              serialId: 5693,
              serialName: "昂科拉GX",
            },
            {
              serialId: 9963,
              serialName: "昂科拉Plus",
            },
            {
              serialId: 9542,
              serialName: "别克E4",
            },
            {
              serialId: 9568,
              serialName: "昂扬",
            },
          ],
        },
        {
          masterId: 82,
          masterName: "保时捷",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/944/2023052342729483606694448292.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/944/w{0}_yichecar_2023052342729483606694448292.png.webp",
          serialList: [
            {
              serialId: 2629,
              serialName: "Panamera",
            },
            {
              serialId: 2046,
              serialName: "Cayenne",
            },
            {
              serialId: 3787,
              serialName: "Macan",
            },
            {
              serialId: 4820,
              serialName: "保时捷718",
            },
            {
              serialId: 2045,
              serialName: "保时捷911",
            },
            {
              serialId: 5407,
              serialName: "Taycan",
            },
            {
              serialId: 5149,
              serialName: "Cayenne E-Hybrid",
            },
            {
              serialId: 5150,
              serialName: "Panamera E-Hybrid",
            },
          ],
        },
        {
          masterId: 163,
          masterName: "北京",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/551/2023052342730483607755159079.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/551/w{0}_yichecar_2023052342730483607755159079.png.webp",
          serialList: [
            {
              serialId: 2947,
              serialName: "北京BJ40",
            },
            {
              serialId: 8153,
              serialName: "北京BJ60",
            },
            {
              serialId: 3645,
              serialName: "北京BJ80",
            },
            {
              serialId: 5557,
              serialName: "北京BJ90",
            },
            {
              serialId: 6926,
              serialName: "北京BJ30",
            },
            {
              serialId: 6042,
              serialName: "北京F40",
            },
          ],
        },
        {
          masterId: 59,
          masterName: "奔腾",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/680/2023052342792483611068030063.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/680/w{0}_yichecar_2023052342792483611068030063.png.webp",
          serialList: [
            {
              serialId: 1918,
              serialName: "奔腾B70",
            },
            {
              serialId: 10115,
              serialName: "奔腾T90",
            },
            {
              serialId: 7199,
              serialName: "奔腾T55",
            },
            {
              serialId: 5785,
              serialName: "奔腾T99",
            },
            {
              serialId: 5452,
              serialName: "奔腾T77",
            },
            {
              serialId: 9723,
              serialName: "奔腾M9",
            },
            {
              serialId: 7538,
              serialName: "奔腾B70S",
            },
            {
              serialId: 7341,
              serialName: "奔腾NAT",
            },
            {
              serialId: 6097,
              serialName: "奔腾E01",
            },
          ],
        },
        {
          masterId: 157,
          masterName: "宝骏",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/817/2023052342778483608681760709.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/817/w{0}_yichecar_2023052342778483608681760709.png.webp",
          serialList: [
            {
              serialId: 9798,
              serialName: "宝骏悦也",
            },
            {
              serialId: 10301,
              serialName: "宝骏云朵",
            },
            {
              serialId: 7514,
              serialName: "宝骏KiWi EV",
            },
          ],
        },
        {
          masterId: 5,
          masterName: "标致",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/166/2023052342779483609616606849.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/166/w{0}_yichecar_2023052342779483609616606849.png.webp",
          serialList: [
            {
              serialId: 2859,
              serialName: "标致408",
            },
            {
              serialId: 5544,
              serialName: "标致508L",
            },
            {
              serialId: 5085,
              serialName: "标致5008",
            },
            {
              serialId: 4866,
              serialName: "标致4008",
            },
            {
              serialId: 4066,
              serialName: "标致2008",
            },
            {
              serialId: 9613,
              serialName: "标致408X",
            },
            {
              serialId: 5731,
              serialName: "标致508L PHEV",
            },
            {
              serialId: 6014,
              serialName: "标致4008 PHEV",
            },
          ],
        },
        {
          masterId: 85,
          masterName: "宾利",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/791/2023052342829483612479151519.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/791/w{0}_yichecar_2023052342829483612479151519.png.webp",
          serialList: [
            {
              serialId: 3859,
              serialName: "飞驰",
            },
            {
              serialId: 2078,
              serialName: "欧陆",
            },
            {
              serialId: 3631,
              serialName: "添越",
            },
            {
              serialId: 7585,
              serialName: "飞驰 插电混动",
            },
            {
              serialId: 5765,
              serialName: "添越 插电混动",
            },
          ],
        },
        {
          masterId: 14,
          masterName: "北汽制造",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/134/2023052342920483617513447931.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/134/w{0}_yichecar_2023052342920483617513447931.png.webp",
          serialList: [
            {
              serialId: 2383,
              serialName: "212",
            },
            {
              serialId: 9547,
              serialName: "王牌M7",
            },
            {
              serialId: 8237,
              serialName: "元宝",
            },
            {
              serialId: 9645,
              serialName: "卡路里",
            },
            {
              serialId: 5402,
              serialName: "勇士",
            },
            {
              serialId: 8238,
              serialName: "北汽家宝",
            },
            {
              serialId: 9942,
              serialName: "王牌M7新能源",
            },
            {
              serialId: 1564,
              serialName: "勇士皮卡",
            },
            {
              serialId: 8235,
              serialName: "鲸卡T7",
            },
            {
              serialId: 8236,
              serialName: "鲸卡T6",
            },
            {
              serialId: 6945,
              serialName: "北汽小河马",
            },
            {
              serialId: 10164,
              serialName: "鲸卡T7 EV",
            },
          ],
        },
        {
          masterId: 195,
          masterName: "北京汽车",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/786/2023052342903483616578666398.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/786/w{0}_yichecar_2023052342903483616578666398.png.webp",
          serialList: [
            {
              serialId: 5726,
              serialName: "北京X3",
            },
            {
              serialId: 8050,
              serialName: "魔方",
            },
            {
              serialId: 6705,
              serialName: "北京X7",
            },
            {
              serialId: 7512,
              serialName: "北京EU5 PLUS",
            },
            {
              serialId: 5927,
              serialName: "北京EU5",
            },
            {
              serialId: 6722,
              serialName: "北京U5",
            },
            {
              serialId: 6842,
              serialName: "北京X7 PHEV",
            },
            {
              serialId: 7511,
              serialName: "北京U5 PLUS",
            },
            {
              serialId: 5505,
              serialName: "北京U7",
            },
            {
              serialId: 5567,
              serialName: "北京EX5",
            },
            {
              serialId: 5566,
              serialName: "北京EX3",
            },
            {
              serialId: 5903,
              serialName: "北京EU7",
            },
          ],
        },
        {
          masterId: 172,
          masterName: "博速",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/467/2023052342961483618446728001.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/467/w{0}_yichecar_2023052342961483618446728001.png.webp",
          serialList: [
            {
              serialId: 3598,
              serialName: "博速G级",
            },
            {
              serialId: 6405,
              serialName: "博速V级",
            },
          ],
        },
        {
          masterId: 129,
          masterName: "北汽昌河",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/208/2023052342971483619420849719.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/208/w{0}_yichecar_2023052342971483619420849719.png.webp",
          serialList: [
            {
              serialId: 5679,
              serialName: "昌河北斗星",
            },
            {
              serialId: 6706,
              serialName: "昌河北斗星X5",
            },
            {
              serialId: 4641,
              serialName: "北汽昌河M50S",
            },
            {
              serialId: 6130,
              serialName: "北斗星EC100",
            },
            {
              serialId: 5898,
              serialName: "北汽EV2",
            },
            {
              serialId: 5995,
              serialName: "北汽EV5",
            },
            {
              serialId: 7205,
              serialName: "福瑞达K12S",
            },
            {
              serialId: 4838,
              serialName: "福瑞达K22",
            },
            {
              serialId: 7204,
              serialName: "福瑞达K11S",
            },
            {
              serialId: 5432,
              serialName: "福瑞达K21",
            },
          ],
        },
        {
          masterId: 427,
          masterName: "奔驰卡车",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/826/2023052343034483621182662316.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/826/w{0}_yichecar_2023052343034483621182662316.png.webp",
          serialList: [
            {
              serialId: 10378,
              serialName: "乌尼莫克U4023",
            },
            {
              serialId: 10379,
              serialName: "乌尼莫克U5023",
            },
          ],
        },
        {
          masterId: 744,
          masterName: "巴菲特",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230919/651/202309196619511376965153232.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230919/651/w{0}_yichecar_202309196619511376965153232.png.webp",
          serialList: [
            {
              serialId: 10452,
              serialName: "巴菲特600",
            },
            {
              serialId: 10257,
              serialName: "巴菲特S",
            },
          ],
        },
        {
          masterId: 456,
          masterName: "北汽瑞翔",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/955/2023052343043483623095550692.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/955/w{0}_yichecar_2023052343043483623095550692.png.webp",
          serialList: [
            {
              serialId: 8112,
              serialName: "瑞翔X3",
            },
            {
              serialId: 7568,
              serialName: "瑞翔X5",
            },
            {
              serialId: 9322,
              serialName: "博腾V1",
            },
            {
              serialId: 9500,
              serialName: "博腾M3",
            },
            {
              serialId: 9323,
              serialName: "博腾V2",
            },
            {
              serialId: 9507,
              serialName: "博腾V2 EV",
            },
          ],
        },
        {
          masterId: 411,
          masterName: "北奔重卡",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/104/2023052343146483627710495283.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/104/w{0}_yichecar_2023052343146483627710495283.png.webp",
          serialList: [
            {
              serialId: 7338,
              serialName: "北奔NG80",
            },
            {
              serialId: 7340,
              serialName: "北奔V3",
            },
            {
              serialId: 7339,
              serialName: "北奔V3ET",
            },
          ],
        },
        {
          masterId: 462,
          masterName: "百智新能源",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/175/2023052343099483626017598601.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/175/w{0}_yichecar_2023052343099483626017598601.png.webp",
          serialList: [
            {
              serialId: 7672,
              serialName: "百智大熊",
            },
          ],
        },
        {
          masterId: 746,
          masterName: "北汽雷驰",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/393/2023052345327483776639394219.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/393/w{0}_yichecar_2023052345327483776639394219.png.webp",
          serialList: [
            {
              serialId: 10311,
              serialName: "北汽雷驰MINI卡",
            },
            {
              serialId: 10352,
              serialName: "北汽雷驰小卡",
            },
          ],
        },
        {
          masterId: 286,
          masterName: "铂驰",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/41/2023052343182483630704157986.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/41/w{0}_yichecar_2023052343182483630704157986.png.webp",
          serialList: [
            {
              serialId: 5208,
              serialName: "铂驰V系列",
            },
          ],
        },
        {
          masterId: 548,
          masterName: "宝骐汽车",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/291/2023052343229483633729107402.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/291/w{0}_yichecar_2023052343229483633729107402.png.webp",
          serialList: [
            {
              serialId: 7857,
              serialName: "帅骐",
            },
          ],
        },
        {
          masterId: 579,
          masterName: "比克汽车",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/743/2023052343966483674774319245.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/743/w{0}_yichecar_2023052343966483674774319245.png.webp",
          serialList: [
            {
              serialId: 7901,
              serialName: "比克兴熠",
            },
          ],
        },
        {
          masterId: 136,
          masterName: "长安",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/994/2023052341516483538899459864.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/994/w{0}_yichecar_2023052341516483538899459864.png.webp",
          serialList: [
            {
              serialId: 5665,
              serialName: "长安CS75PLUS",
            },
            {
              serialId: 7617,
              serialName: "长安UNI-V",
            },
            {
              serialId: 3062,
              serialName: "逸动",
            },
            {
              serialId: 6119,
              serialName: "长安CS55PLUS",
            },
            {
              serialId: 8903,
              serialName: "长安Lumin",
            },
            {
              serialId: 3987,
              serialName: "长安CS75",
            },
            {
              serialId: 5499,
              serialName: "长安CS35PLUS",
            },
            {
              serialId: 9846,
              serialName: "逸达",
            },
            {
              serialId: 6216,
              serialName: "长安UNI-T",
            },
            {
              serialId: 7178,
              serialName: "长安UNI-K",
            },
            {
              serialId: 3901,
              serialName: "长安CS95",
            },
            {
              serialId: 9517,
              serialName: "长安UNI-V 智电iDD",
            },
            {
              serialId: 6078,
              serialName: "锐程CC",
            },
            {
              serialId: 4930,
              serialName: "逸动EV",
            },
            {
              serialId: 9634,
              serialName: "锐程PLUS",
            },
            {
              serialId: 9979,
              serialName: "长安CS75PLUS 智电iDD",
            },
            {
              serialId: 4675,
              serialName: "长安CS15",
            },
            {
              serialId: 5341,
              serialName: "逸动DT",
            },
            {
              serialId: 7673,
              serialName: "长安UNI-K 智电iDD",
            },
            {
              serialId: 5425,
              serialName: "长安CS85COUPE",
            },
            {
              serialId: 9729,
              serialName: "览拓者",
            },
            {
              serialId: 9684,
              serialName: "峰景房车",
            },
            {
              serialId: 10540,
              serialName: "长安F70蓝鲸",
            },
            {
              serialId: 10178,
              serialName: "览拓者EV",
            },
          ],
        },
        {
          masterId: 740,
          masterName: "长安启源",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230627/511/202306275924784960951191685.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230627/511/w{0}_yichecar_202306275924784960951191685.png.webp",
          serialList: [
            {
              serialId: 10227,
              serialName: "长安启源A07",
            },
            {
              serialId: 10343,
              serialName: "长安启源A05",
            },
          ],
        },
        {
          masterId: 159,
          masterName: "长安欧尚",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/638/2023052341521483540663842843.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/638/w{0}_yichecar_2023052341521483540663842843.png.webp",
          serialList: [
            {
              serialId: 6709,
              serialName: "长安欧尚X5",
            },
            {
              serialId: 8092,
              serialName: "长安欧尚Z6",
            },
            {
              serialId: 7465,
              serialName: "长安欧尚X7 PLUS",
            },
            {
              serialId: 9676,
              serialName: "长安欧尚X5 PLUS",
            },
            {
              serialId: 8900,
              serialName: "长安欧尚Z6新能源",
            },
            {
              serialId: 6270,
              serialName: "奔奔E-Star",
            },
            {
              serialId: 5498,
              serialName: "长安欧尚科尚",
            },
            {
              serialId: 6691,
              serialName: "长安欧尚科尚EV",
            },
          ],
        },
        {
          masterId: 21,
          masterName: "长城",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/374/2023052341541483542137433896.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/374/w{0}_yichecar_2023052341541483542137433896.png.webp",
          serialList: [
            {
              serialId: 5722,
              serialName: "炮",
            },
            {
              serialId: 9760,
              serialName: "山海炮",
            },
            {
              serialId: 3263,
              serialName: "风骏5",
            },
            {
              serialId: 9286,
              serialName: "金刚炮",
            },
            {
              serialId: 5484,
              serialName: "风骏7",
            },
            {
              serialId: 6022,
              serialName: "炮EV",
            },
            {
              serialId: 6030,
              serialName: "风骏7 EV",
            },
          ],
        },
        {
          masterId: 281,
          masterName: "长安凯程",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230815/703/202308155366208774470359738.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230815/703/w{0}_yichecar_202308155366208774470359738.png.webp",
          serialList: [
            {
              serialId: 2214,
              serialName: "长安星卡",
            },
            {
              serialId: 3523,
              serialName: "欧诺S",
            },
            {
              serialId: 4502,
              serialName: "长安欧尚A600",
            },
            {
              serialId: 5798,
              serialName: "睿行M60",
            },
            {
              serialId: 6201,
              serialName: "长安之星5",
            },
            {
              serialId: 4054,
              serialName: "睿行M80",
            },
            {
              serialId: 4356,
              serialName: "长安之星9",
            },
            {
              serialId: 8282,
              serialName: "长安星卡PLUS",
            },
            {
              serialId: 5652,
              serialName: "长行",
            },
            {
              serialId: 7611,
              serialName: "神骐T30",
            },
            {
              serialId: 5428,
              serialName: "睿行EM80",
            },
            {
              serialId: 5660,
              serialName: "欧尚A600 EV",
            },
            {
              serialId: 6092,
              serialName: "睿行EM60",
            },
            {
              serialId: 5088,
              serialName: "睿行M70",
            },
            {
              serialId: 5573,
              serialName: "神骐T10",
            },
            {
              serialId: 3823,
              serialName: "神骐T20",
            },
            {
              serialId: 4728,
              serialName: "睿行M90",
            },
            {
              serialId: 6044,
              serialName: "长安星卡C系列",
            },
            {
              serialId: 9525,
              serialName: "神骐PLUS",
            },
            {
              serialId: 9294,
              serialName: "凯程F300",
            },
            {
              serialId: 5469,
              serialName: "长安之星9 EV",
            },
            {
              serialId: 6043,
              serialName: "长安星卡L系列",
            },
            {
              serialId: 9636,
              serialName: "长安星卡M系列",
            },
            {
              serialId: 5804,
              serialName: "长行EV",
            },
            {
              serialId: 6339,
              serialName: "神骐T10 EV",
            },
            {
              serialId: 10411,
              serialName: "神骐T30 EV",
            },
            {
              serialId: 5471,
              serialName: "长安星卡EV",
            },
          ],
        },
        {
          masterId: 283,
          masterName: "长安跨越",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/982/2023052341574483545298257458.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/982/w{0}_yichecar_2023052341574483545298257458.png.webp",
          serialList: [
            {
              serialId: 8054,
              serialName: "跨越星V3",
            },
            {
              serialId: 6060,
              serialName: "跨越者D5",
            },
            {
              serialId: 7433,
              serialName: "跨越星V5",
            },
            {
              serialId: 9703,
              serialName: "跨越星V7 EV",
            },
            {
              serialId: 8149,
              serialName: "跨越星V7",
            },
            {
              serialId: 5403,
              serialName: "新豹T3",
            },
            {
              serialId: 10287,
              serialName: "跨越王X7",
            },
            {
              serialId: 7614,
              serialName: "跨越星V5 EV",
            },
            {
              serialId: 4411,
              serialName: "跨越王X5",
            },
            {
              serialId: 7618,
              serialName: "跨越王F3",
            },
            {
              serialId: 5643,
              serialName: "跨越王X1",
            },
            {
              serialId: 5404,
              serialName: "跨越王X3",
            },
            {
              serialId: 7435,
              serialName: "新豹T1",
            },
            {
              serialId: 10192,
              serialName: "新豹T3 PLUS",
            },
            {
              serialId: 6059,
              serialName: "新豹T5",
            },
            {
              serialId: 10541,
              serialName: "跨越王X3 PLUS",
            },
            {
              serialId: 9974,
              serialName: "跨越者D5 EV",
            },
            {
              serialId: 9868,
              serialName: "跨越王X3 EV",
            },
            {
              serialId: 7579,
              serialName: "跨越王X1 EV",
            },
          ],
        },
        {
          masterId: 394,
          masterName: "创维汽车",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/247/2023052341575483546224722815.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/247/w{0}_yichecar_2023052341575483546224722815.png.webp",
          serialList: [
            {
              serialId: 9272,
              serialName: "创维HT-i",
            },
            {
              serialId: 7528,
              serialName: "创维EV6",
            },
          ],
        },
        {
          masterId: 738,
          masterName: "曹操",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/608/2023052341996483571160866977.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/608/w{0}_yichecar_2023052341996483571160866977.png.webp",
          serialList: [
            {
              serialId: 10118,
              serialName: "曹操60",
            },
          ],
        },
        {
          masterId: 443,
          masterName: "橙仕",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/84/2023052341635483548408455129.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/84/w{0}_yichecar_2023052341635483548408455129.png.webp",
          serialList: [
            {
              serialId: 7371,
              serialName: "橙仕01",
            },
            {
              serialId: 8279,
              serialName: "橙仕X2",
            },
            {
              serialId: 10177,
              serialName: "橙仕X7",
            },
          ],
        },
        {
          masterId: 403,
          masterName: "乘龙汽车",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/529/2023052341590483547152927672.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/529/w{0}_yichecar_2023052341590483547152927672.png.webp",
          serialList: [
            {
              serialId: 6989,
              serialName: "乘龙H5",
            },
            {
              serialId: 6991,
              serialName: "乘龙H7",
            },
            {
              serialId: 6996,
              serialName: "乘龙L2",
            },
            {
              serialId: 6995,
              serialName: "乘龙L3",
            },
            {
              serialId: 6993,
              serialName: "乘龙新M3",
            },
            {
              serialId: 6992,
              serialName: "乘龙T7",
            },
            {
              serialId: 6994,
              serialName: "乘龙T5",
            },
          ],
        },
        {
          masterId: 221,
          masterName: "成功汽车",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/198/2023052341636483549319813856.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/198/w{0}_yichecar_2023052341636483549319813856.png.webp",
          serialList: [
            {
              serialId: 8106,
              serialName: "斑马",
            },
            {
              serialId: 9822,
              serialName: "骆驼",
            },
            {
              serialId: 10468,
              serialName: "角马",
            },
            {
              serialId: 9996,
              serialName: "骆驼微卡",
            },
          ],
        },
        {
          masterId: 341,
          masterName: "车驰汽车",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/445/2023052341747483553944541229.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/445/w{0}_yichecar_2023052341747483553944541229.png.webp",
          serialList: [
            {
              serialId: 5874,
              serialName: "车驰Sprinter",
            },
          ],
        },
        {
          masterId: 8,
          masterName: "大众",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/126/2023052340659483469412601520.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/126/w{0}_yichecar_2023052340659483469412601520.png.webp",
          serialList: [
            {
              serialId: 2370,
              serialName: "朗逸",
            },
            {
              serialId: 1796,
              serialName: "帕萨特",
            },
            {
              serialId: 1909,
              serialName: "迈腾",
            },
            {
              serialId: 1765,
              serialName: "速腾",
            },
            {
              serialId: 4936,
              serialName: "途观L",
            },
            {
              serialId: 2381,
              serialName: "宝来",
            },
            {
              serialId: 5398,
              serialName: "途岳",
            },
            {
              serialId: 1793,
              serialName: "桑塔纳",
            },
            {
              serialId: 7572,
              serialName: "大众ID.3",
            },
            {
              serialId: 4873,
              serialName: "途昂",
            },
            {
              serialId: 4308,
              serialName: "凌渡",
            },
            {
              serialId: 5415,
              serialName: "探岳",
            },
            {
              serialId: 6600,
              serialName: "揽境",
            },
            {
              serialId: 2932,
              serialName: "一汽-大众CC",
            },
            {
              serialId: 5714,
              serialName: "途昂X",
            },
            {
              serialId: 1798,
              serialName: "Polo",
            },
            {
              serialId: 2714,
              serialName: "高尔夫",
            },
            {
              serialId: 9524,
              serialName: "揽巡",
            },
            {
              serialId: 5705,
              serialName: "探影",
            },
            {
              serialId: 6835,
              serialName: "ID.4 CROZZ",
            },
            {
              serialId: 6208,
              serialName: "ID.4 X",
            },
            {
              serialId: 2064,
              serialName: "途锐",
            },
            {
              serialId: 5275,
              serialName: "探歌",
            },
            {
              serialId: 4791,
              serialName: "辉昂",
            },
            {
              serialId: 6057,
              serialName: "威然",
            },
            {
              serialId: 5503,
              serialName: "途铠",
            },
            {
              serialId: 5561,
              serialName: "迈腾GTE 插电混动",
            },
            {
              serialId: 5450,
              serialName: "帕萨特 插电混动",
            },
            {
              serialId: 7416,
              serialName: "ID.6 CROZZ",
            },
            {
              serialId: 7383,
              serialName: "ID.6 X",
            },
            {
              serialId: 5463,
              serialName: "途观L 插电混动",
            },
            {
              serialId: 4726,
              serialName: "途安L",
            },
            {
              serialId: 6274,
              serialName: "探岳X",
            },
            {
              serialId: 6875,
              serialName: "途观X",
            },
            {
              serialId: 5562,
              serialName: "探岳GTE 插电混动",
            },
            {
              serialId: 4722,
              serialName: "蔚揽",
            },
            {
              serialId: 5563,
              serialName: "途锐 eHybrid",
            },
            {
              serialId: 6226,
              serialName: "Arteon",
            },
          ],
        },
        {
          masterId: 141,
          masterName: "东风风神",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/618/2023052340661483470361827030.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/618/w{0}_yichecar_2023052340661483470361827030.png.webp",
          serialList: [
            {
              serialId: 10083,
              serialName: "皓瀚",
            },
            {
              serialId: 5701,
              serialName: "奕炫",
            },
            {
              serialId: 7468,
              serialName: "奕炫MAX",
            },
            {
              serialId: 8148,
              serialName: "皓极",
            },
            {
              serialId: 4175,
              serialName: "风神AX7",
            },
            {
              serialId: 6465,
              serialName: "奕炫GS",
            },
            {
              serialId: 10272,
              serialName: "风神SKY EV01",
            },
            {
              serialId: 5223,
              serialName: "风神E70",
            },
          ],
        },
        {
          masterId: 115,
          masterName: "东风风行",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/219/2023052340662483471521956749.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/219/w{0}_yichecar_2023052340662483471521956749.png.webp",
          serialList: [
            {
              serialId: 6915,
              serialName: "风行T5 EVO",
            },
            {
              serialId: 5379,
              serialName: "风行T5",
            },
            {
              serialId: 2384,
              serialName: "菱智",
            },
            {
              serialId: 7746,
              serialName: "风行游艇",
            },
            {
              serialId: 9726,
              serialName: "风行雷霆",
            },
            {
              serialId: 7194,
              serialName: "菱智PLUS",
            },
            {
              serialId: 5559,
              serialName: "风行M7",
            },
            {
              serialId: 4760,
              serialName: "风行SX6",
            },
            {
              serialId: 5277,
              serialName: "菱智M5 EV",
            },
            {
              serialId: 4116,
              serialName: "景逸S50",
            },
            {
              serialId: 8051,
              serialName: "风行S60 EV",
            },
            {
              serialId: 5276,
              serialName: "风行S50 EV",
            },
          ],
        },
        {
          masterId: 253,
          masterName: "东风风光",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/943/2023052340663483472894365245.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/943/w{0}_yichecar_2023052340663483472894365245.png.webp",
          serialList: [
            {
              serialId: 4727,
              serialName: "风光580",
            },
            {
              serialId: 5215,
              serialName: "风光S560",
            },
            {
              serialId: 4253,
              serialName: "风光330",
            },
            {
              serialId: 7748,
              serialName: "风光380",
            },
            {
              serialId: 7135,
              serialName: "风光500",
            },
            {
              serialId: 7747,
              serialName: "风光MINIEV",
            },
            {
              serialId: 6010,
              serialName: "风光ix7",
            },
            {
              serialId: 5367,
              serialName: "风光ix5",
            },
            {
              serialId: 7668,
              serialName: "风光E380",
            },
          ],
        },
        {
          masterId: 27,
          masterName: "东风",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/883/2023052340664483474488316439.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/883/w{0}_yichecar_2023052340664483474488316439.png.webp",
          serialList: [
            {
              serialId: 8888,
              serialName: "锐骐7",
            },
            {
              serialId: 7588,
              serialName: "猛士M50",
            },
            {
              serialId: 10064,
              serialName: "猛士MS600",
            },
            {
              serialId: 7176,
              serialName: "帕拉索",
            },
            {
              serialId: 2679,
              serialName: "锐骐",
            },
            {
              serialId: 5487,
              serialName: "锐骐6",
            },
            {
              serialId: 5480,
              serialName: "俊风E11K",
            },
            {
              serialId: 5797,
              serialName: "锐骐6 EV",
            },
          ],
        },
        {
          masterId: 438,
          masterName: "东风纳米",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20231117/882/202311172147018679888221335.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20231117/882/w{0}_yichecar_202311172147018679888221335.png.webp",
          serialList: [
            {
              serialId: 9544,
              serialName: "纳米BOX",
            },
            {
              serialId: 6017,
              serialName: "东风纳米EX1",
            },
          ],
        },
        {
          masterId: 205,
          masterName: "东风小康",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/792/2023052340666483476179255138.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/792/w{0}_yichecar_2023052340666483476179255138.png.webp",
          serialList: [
            {
              serialId: 1967,
              serialName: "东风小康K01",
            },
            {
              serialId: 4359,
              serialName: "东风小康C32",
            },
            {
              serialId: 4326,
              serialName: "东风小康K07S",
            },
            {
              serialId: 4358,
              serialName: "东风小康C31",
            },
            {
              serialId: 6919,
              serialName: "东风小康C56",
            },
            {
              serialId: 9855,
              serialName: "东风小康D72",
            },
            {
              serialId: 3869,
              serialName: "东风小康C35",
            },
            {
              serialId: 5481,
              serialName: "东风小康EC36",
            },
            {
              serialId: 10380,
              serialName: "东风小康EC36II",
            },
            {
              serialId: 4978,
              serialName: "东风小康K05S",
            },
            {
              serialId: 9854,
              serialName: "东风小康D71",
            },
            {
              serialId: 3255,
              serialName: "东风小康K02",
            },
            {
              serialId: 3607,
              serialName: "东风小康C37",
            },
            {
              serialId: 4246,
              serialName: "东风小康C36",
            },
            {
              serialId: 8144,
              serialName: "东风小康D72PLUS",
            },
            {
              serialId: 7526,
              serialName: "东风小康C72",
            },
            {
              serialId: 7525,
              serialName: "东风小康C71",
            },
            {
              serialId: 6222,
              serialName: "东风小康C51",
            },
            {
              serialId: 8143,
              serialName: "东风小康D71PLUS",
            },
            {
              serialId: 6223,
              serialName: "东风小康C52",
            },
            {
              serialId: 5564,
              serialName: "东风小康D51",
            },
          ],
        },
        {
          masterId: 179,
          masterName: "DS",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/57/2023052340705483478005715255.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/57/w{0}_yichecar_2023052340705483478005715255.png.webp",
          serialList: [
            {
              serialId: 6050,
              serialName: "DS 9",
            },
            {
              serialId: 3227,
              serialName: "DS 4",
            },
            {
              serialId: 4987,
              serialName: "DS 7",
            },
            {
              serialId: 6051,
              serialName: "DS 9 E-TENSE",
            },
            {
              serialId: 5763,
              serialName: "DS 3 E-TENSE",
            },
          ],
        },
        {
          masterId: 29,
          masterName: "东南",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/971/2023052340690483477097110380.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/971/w{0}_yichecar_2023052340690483477097110380.png.webp",
          serialList: [
            {
              serialId: 4790,
              serialName: "东南DX3",
            },
            {
              serialId: 4229,
              serialName: "东南DX7",
            },
            {
              serialId: 5447,
              serialName: "东南A5翼舞",
            },
            {
              serialId: 5952,
              serialName: "东南DX5",
            },
            {
              serialId: 9672,
              serialName: "东南DX8",
            },
            {
              serialId: 9823,
              serialName: "东南DX8S",
            },
            {
              serialId: 9626,
              serialName: "SEM DELICA",
            },
          ],
        },
        {
          masterId: 448,
          masterName: "东风轻型车",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/234/2023052340710483481823429312.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/234/w{0}_yichecar_2023052340710483481823429312.png.webp",
          serialList: [
            {
              serialId: 7013,
              serialName: "小霸王W15",
            },
            {
              serialId: 7017,
              serialName: "途逸T3",
            },
            {
              serialId: 6998,
              serialName: "凯普特K6",
            },
            {
              serialId: 7016,
              serialName: "途逸T5",
            },
            {
              serialId: 7002,
              serialName: "多利卡D5",
            },
            {
              serialId: 7004,
              serialName: "多利卡D7",
            },
            {
              serialId: 7015,
              serialName: "小霸王V",
            },
            {
              serialId: 7543,
              serialName: "小霸王W08",
            },
            {
              serialId: 6997,
              serialName: "凯普特K5",
            },
            {
              serialId: 7014,
              serialName: "小霸王W17",
            },
            {
              serialId: 7003,
              serialName: "多利卡D6",
            },
            {
              serialId: 7630,
              serialName: "小霸王W18",
            },
            {
              serialId: 7007,
              serialName: "多利卡D12",
            },
            {
              serialId: 7006,
              serialName: "多利卡D9",
            },
            {
              serialId: 7000,
              serialName: "凯普特K8",
            },
            {
              serialId: 7005,
              serialName: "多利卡D8",
            },
            {
              serialId: 6999,
              serialName: "凯普特K7",
            },
          ],
        },
        {
          masterId: 197,
          masterName: "东风风度",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/777/2023052340809483490577711059.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/777/w{0}_yichecar_2023052340809483490577711059.png.webp",
          serialList: [
            {
              serialId: 10225,
              serialName: "帕拉丁",
            },
          ],
        },
        {
          masterId: 371,
          masterName: "大运",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/513/2023052340707483480951316970.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/513/w{0}_yichecar_2023052340707483480951316970.png.webp",
          serialList: [
            {
              serialId: 6239,
              serialName: "悦虎",
            },
            {
              serialId: 6738,
              serialName: "远志M1",
            },
            {
              serialId: 7328,
              serialName: "大运N6",
            },
            {
              serialId: 7243,
              serialName: "大运小卡",
            },
            {
              serialId: 6487,
              serialName: "大运皮卡",
            },
            {
              serialId: 7245,
              serialName: "新奥普力",
            },
            {
              serialId: 7244,
              serialName: "祥龙",
            },
            {
              serialId: 7246,
              serialName: "奥普力",
            },
          ],
        },
        {
          masterId: 697,
          masterName: "大力牛魔王",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/733/2023052340757483484473320956.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/733/w{0}_yichecar_2023052340757483484473320956.png.webp",
          serialList: [
            {
              serialId: 9933,
              serialName: "大力牛魔王D01",
            },
            {
              serialId: 10510,
              serialName: "大力牛魔王D02",
            },
            {
              serialId: 10566,
              serialName: "大力牛魔王D05",
            },
          ],
        },
        {
          masterId: 706,
          masterName: "东风御风",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/67/2023052340728483482706729663.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/67/w{0}_yichecar_2023052340728483482706729663.png.webp",
          serialList: [
            {
              serialId: 5389,
              serialName: "御风",
            },
            {
              serialId: 7149,
              serialName: "御风EM26",
            },
            {
              serialId: 4702,
              serialName: "御风旅居车",
            },
            {
              serialId: 5805,
              serialName: "御风EV",
            },
            {
              serialId: 4696,
              serialName: "御风工程系列",
            },
          ],
        },
        {
          masterId: 404,
          masterName: "东风商用车",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/670/2023052340772483485967073094.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/670/w{0}_yichecar_2023052340772483485967073094.png.webp",
          serialList: [
            {
              serialId: 6981,
              serialName: "东风天锦KR",
            },
            {
              serialId: 6980,
              serialName: "东风天龙VL",
            },
            {
              serialId: 6983,
              serialName: "东风天锦KS",
            },
            {
              serialId: 6979,
              serialName: "东风天锦VR",
            },
          ],
        },
        {
          masterId: 457,
          masterName: "电动屋",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/765/2023052340748483483676538234.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/765/w{0}_yichecar_2023052340748483483676538234.png.webp",
          serialList: [
            {
              serialId: 7623,
              serialName: "YOUNG光小新",
            },
          ],
        },
        {
          masterId: 311,
          masterName: "东风富康",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/764/2023052340773483487276442492.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/764/w{0}_yichecar_2023052340773483487276442492.png.webp",
          serialList: [
            {
              serialId: 6236,
              serialName: "e爱丽舍",
            },
            {
              serialId: 8173,
              serialName: "富康ES600",
            },
            {
              serialId: 5522,
              serialName: "富康ES500",
            },
          ],
        },
        {
          masterId: 310,
          masterName: "东风·瑞泰特",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/80/2023052340805483489708064210.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/80/w{0}_yichecar_2023052340805483489708064210.png.webp",
          serialList: [
            {
              serialId: 5515,
              serialName: "东风·瑞泰特EM10",
            },
            {
              serialId: 5514,
              serialName: "东风·瑞泰特EM30",
            },
          ],
        },
        {
          masterId: 7,
          masterName: "丰田",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/872/2023052339009483359487242474.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/872/w{0}_yichecar_2023052339009483359487242474.png.webp",
          serialList: [
            {
              serialId: 1991,
              serialName: "凯美瑞",
            },
            {
              serialId: 7679,
              serialName: "锋兰达",
            },
            {
              serialId: 2701,
              serialName: "RAV4荣放",
            },
            {
              serialId: 2694,
              serialName: "汉兰达",
            },
            {
              serialId: 7750,
              serialName: "卡罗拉锐放",
            },
            {
              serialId: 1879,
              serialName: "卡罗拉",
            },
            {
              serialId: 6091,
              serialName: "威兰达",
            },
            {
              serialId: 5489,
              serialName: "亚洲龙",
            },
            {
              serialId: 7574,
              serialName: "赛那",
            },
            {
              serialId: 7451,
              serialName: "皇冠陆放",
            },
            {
              serialId: 4190,
              serialName: "雷凌",
            },
            {
              serialId: 2407,
              serialName: "威驰",
            },
            {
              serialId: 8231,
              serialName: "格瑞维亚",
            },
            {
              serialId: 3088,
              serialName: "埃尔法",
            },
            {
              serialId: 9762,
              serialName: "一汽丰田bZ3",
            },
            {
              serialId: 7595,
              serialName: "凌放",
            },
            {
              serialId: 7660,
              serialName: "威飒",
            },
            {
              serialId: 4322,
              serialName: "丰田C-HR",
            },
            {
              serialId: 8073,
              serialName: "广汽丰田铂智4X",
            },
            {
              serialId: 7212,
              serialName: "亚洲狮",
            },
            {
              serialId: 10012,
              serialName: "皇冠SportCross",
            },
            {
              serialId: 7203,
              serialName: "凌尚",
            },
            {
              serialId: 8901,
              serialName: "一汽丰田bZ4X",
            },
            {
              serialId: 5590,
              serialName: "威尔法",
            },
            {
              serialId: 5273,
              serialName: "奕泽",
            },
            {
              serialId: 4935,
              serialName: "威驰FS",
            },
            {
              serialId: 6079,
              serialName: "Mirai",
            },
            {
              serialId: 3840,
              serialName: "丰田86",
            },
            {
              serialId: 7221,
              serialName: "RAV4荣放 双擎E+",
            },
            {
              serialId: 5542,
              serialName: "卡罗拉 双擎E+",
            },
            {
              serialId: 7227,
              serialName: "威兰达 插电混动",
            },
            {
              serialId: 5584,
              serialName: "SUPRA",
            },
            {
              serialId: 1869,
              serialName: "柯斯达",
            },
            {
              serialId: 5738,
              serialName: "奕泽 E进擎",
            },
          ],
        },
        {
          masterId: 17,
          masterName: "福特",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/829/2023052339027483360482908832.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/829/w{0}_yichecar_2023052339027483360482908832.png.webp",
          serialList: [
            {
              serialId: 1610,
              serialName: "蒙迪欧",
            },
            {
              serialId: 4372,
              serialName: "锐界",
            },
            {
              serialId: 8021,
              serialName: "领睿",
            },
            {
              serialId: 7127,
              serialName: "领裕",
            },
            {
              serialId: 6593,
              serialName: "探险者",
            },
            {
              serialId: 2273,
              serialName: "福克斯",
            },
            {
              serialId: 9894,
              serialName: "游骑侠",
            },
            {
              serialId: 2498,
              serialName: "Mustang",
            },
            {
              serialId: 4214,
              serialName: "撼路者",
            },
            {
              serialId: 5695,
              serialName: "锐际",
            },
            {
              serialId: 3249,
              serialName: "福特F-150",
            },
            {
              serialId: 4871,
              serialName: "全顺",
            },
            {
              serialId: 2375,
              serialName: "新世代全顺",
            },
            {
              serialId: 7378,
              serialName: "福特电马",
            },
            {
              serialId: 4528,
              serialName: "途睿欧",
            },
            {
              serialId: 5448,
              serialName: "领界",
            },
            {
              serialId: 7488,
              serialName: "EVOS",
            },
            {
              serialId: 10602,
              serialName: "全顺T8",
            },
            {
              serialId: 6730,
              serialName: "锐际 插电混动",
            },
            {
              serialId: 5861,
              serialName: "领界EV",
            },
            {
              serialId: 10141,
              serialName: "全顺EV",
            },
          ],
        },
        {
          masterId: 128,
          masterName: "福田",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/814/2023052339331483378981452457.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/814/w{0}_yichecar_2023052339331483378981452457.png.webp",
          serialList: [
            {
              serialId: 4452,
              serialName: "图雅诺",
            },
            {
              serialId: 10212,
              serialName: "火星7",
            },
            {
              serialId: 5513,
              serialName: "祥菱M",
            },
            {
              serialId: 3758,
              serialName: "奥铃捷运",
            },
            {
              serialId: 10120,
              serialName: "火星9",
            },
            {
              serialId: 4239,
              serialName: "风景G7",
            },
            {
              serialId: 5193,
              serialName: "祥菱V",
            },
            {
              serialId: 7625,
              serialName: "领航S1",
            },
            {
              serialId: 6871,
              serialName: "大将军G9",
            },
            {
              serialId: 6864,
              serialName: "奥铃速运",
            },
            {
              serialId: 10458,
              serialName: "祥菱Q",
            },
            {
              serialId: 3957,
              serialName: "风景G9",
            },
            {
              serialId: 10142,
              serialName: "大将军F9 SUV",
            },
            {
              serialId: 2424,
              serialName: "风景G5",
            },
            {
              serialId: 10422,
              serialName: "图雅诺大麦",
            },
            {
              serialId: 7163,
              serialName: "欧马可S1",
            },
            {
              serialId: 2802,
              serialName: "萨普",
            },
            {
              serialId: 7151,
              serialName: "奥铃新捷运",
            },
            {
              serialId: 5252,
              serialName: "图雅诺EV",
            },
            {
              serialId: 8191,
              serialName: "将军F9",
            },
            {
              serialId: 9552,
              serialName: "智蓝精灵",
            },
            {
              serialId: 10143,
              serialName: "大将军G9 SUV",
            },
            {
              serialId: 6464,
              serialName: "福田征服者3",
            },
            {
              serialId: 8179,
              serialName: "大将军G7",
            },
            {
              serialId: 7077,
              serialName: "欧马可S3",
            },
            {
              serialId: 9521,
              serialName: "祥菱M EV",
            },
            {
              serialId: 7304,
              serialName: "瑞沃小金刚",
            },
            {
              serialId: 8276,
              serialName: "福田征服者5",
            },
            {
              serialId: 4261,
              serialName: "时代领航",
            },
            {
              serialId: 5767,
              serialName: "大将军EV",
            },
            {
              serialId: 7584,
              serialName: "风景G7 EV",
            },
            {
              serialId: 9989,
              serialName: "征服者plus",
            },
            {
              serialId: 9085,
              serialName: "福田征服者7",
            },
            {
              serialId: 7152,
              serialName: "奥铃大黄蜂",
            },
            {
              serialId: 7069,
              serialName: "欧曼EST-A",
            },
            {
              serialId: 7154,
              serialName: "时代M3",
            },
            {
              serialId: 10297,
              serialName: "时代EV6",
            },
            {
              serialId: 10282,
              serialName: "祥菱V EV",
            },
            {
              serialId: 7299,
              serialName: "瑞沃大金刚1",
            },
            {
              serialId: 10161,
              serialName: "风景G5 EV",
            },
            {
              serialId: 10459,
              serialName: "祥菱Q EV",
            },
            {
              serialId: 7150,
              serialName: "欧航R pro",
            },
            {
              serialId: 7300,
              serialName: "瑞沃大金刚3",
            },
            {
              serialId: 7306,
              serialName: "瑞沃Q9",
            },
            {
              serialId: 7308,
              serialName: "瑞沃E3",
            },
            {
              serialId: 7302,
              serialName: "瑞沃大金刚ES5",
            },
            {
              serialId: 7305,
              serialName: "瑞沃ES3",
            },
            {
              serialId: 7307,
              serialName: "瑞沃Q5",
            },
            {
              serialId: 7303,
              serialName: "瑞沃大金刚ES7",
            },
          ],
        },
        {
          masterId: 91,
          masterName: "法拉利",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/405/2023052339043483361940590839.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/405/w{0}_yichecar_2023052339043483361940590839.png.webp",
          serialList: [
            {
              serialId: 7577,
              serialName: "法拉利296",
            },
            {
              serialId: 8297,
              serialName: "Purosangue",
            },
            {
              serialId: 6140,
              serialName: "Roma",
            },
          ],
        },
        {
          masterId: 420,
          masterName: "飞凡汽车",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/382/2023052339332483380038285889.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/382/w{0}_yichecar_2023052339332483380038285889.png.webp",
          serialList: [
            {
              serialId: 9784,
              serialName: "飞凡F7",
            },
            {
              serialId: 7428,
              serialName: "飞凡R7",
            },
          ],
        },
        {
          masterId: 732,
          masterName: "方程豹",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20231023/805/20231023759802613080589472.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20231023/805/w{0}_yichecar_20231023759802613080589472.png.webp",
          serialList: [
            {
              serialId: 10166,
              serialName: "豹5",
            },
          ],
        },
        {
          masterId: 419,
          masterName: "飞碟汽车",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/752/2023052339334483380975220542.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/752/w{0}_yichecar_2023052339334483380975220542.png.webp",
          serialList: [
            {
              serialId: 7166,
              serialName: "缔途",
            },
            {
              serialId: 7167,
              serialName: "奥驰",
            },
            {
              serialId: 7537,
              serialName: "飞碟Q2V",
            },
            {
              serialId: 7524,
              serialName: "飞碟Q3",
            },
            {
              serialId: 7518,
              serialName: "飞碟W5",
            },
            {
              serialId: 9825,
              serialName: "缔途EV",
            },
            {
              serialId: 10500,
              serialName: "飞碟U6",
            },
            {
              serialId: 7536,
              serialName: "飞碟Q2T",
            },
          ],
        },
        {
          masterId: 147,
          masterName: "广汽传祺",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/127/2023052338276483312312724445.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/127/w{0}_yichecar_2023052338276483312312724445.png.webp",
          serialList: [
            {
              serialId: 10390,
              serialName: "传祺ES9",
            },
            {
              serialId: 5257,
              serialName: "传祺M8",
            },
            {
              serialId: 7185,
              serialName: "影豹",
            },
            {
              serialId: 10386,
              serialName: "传祺E8",
            },
            {
              serialId: 5374,
              serialName: "传祺M6",
            },
            {
              serialId: 4766,
              serialName: "传祺GS8",
            },
            {
              serialId: 4418,
              serialName: "传祺GS4",
            },
            {
              serialId: 9724,
              serialName: "传祺E9",
            },
            {
              serialId: 5173,
              serialName: "传祺GS3",
            },
            {
              serialId: 8062,
              serialName: "影酷",
            },
            {
              serialId: 7569,
              serialName: "传祺GS4 PLUS",
            },
            {
              serialId: 4209,
              serialName: "传祺GA6",
            },
            {
              serialId: 4479,
              serialName: "传祺GA8",
            },
            {
              serialId: 5137,
              serialName: "传祺GS4 PHEV",
            },
            {
              serialId: 6863,
              serialName: "传祺GS4 COUPE",
            },
          ],
        },
        {
          masterId: 349,
          masterName: "高合汽车",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/716/2023052338294483313771664610.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/716/w{0}_yichecar_2023052338294483313771664610.png.webp",
          serialList: [
            {
              serialId: 8026,
              serialName: "高合HiPhi Z",
            },
            {
              serialId: 10116,
              serialName: "高合HiPhi Y",
            },
            {
              serialId: 5973,
              serialName: "高合HiPhi X",
            },
          ],
        },
        {
          masterId: 356,
          masterName: "广汽集团",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/460/2023052338295483314646023469.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/460/w{0}_yichecar_2023052338295483314646023469.png.webp",
          serialList: [
            {
              serialId: 7198,
              serialName: "绎乐",
            },
          ],
        },
        {
          masterId: 331,
          masterName: "国机智骏",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/394/2023052338352483317539428997.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/394/w{0}_yichecar_2023052338352483317539428997.png.webp",
          serialList: [
            {
              serialId: 5753,
              serialName: "国机智骏GC2",
            },
            {
              serialId: 5752,
              serialName: "国机智骏GC1",
            },
            {
              serialId: 5754,
              serialName: "国机智骏GX5",
            },
          ],
        },
        {
          masterId: 290,
          masterName: "国金汽车",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/887/2023052338397483319588723607.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/887/w{0}_yichecar_2023052338397483319588723607.png.webp",
          serialList: [
            {
              serialId: 8898,
              serialName: "骏行",
            },
          ],
        },
        {
          masterId: 710,
          masterName: "国吉商用车",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/62/2023052338431483323406246331.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/62/w{0}_yichecar_2023052338431483323406246331.png.webp",
          serialList: [
            {
              serialId: 9975,
              serialName: "大象G40",
            },
          ],
        },
        {
          masterId: 58,
          masterName: "红旗",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/232/2023052337370483254123262700.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/232/w{0}_yichecar_2023052337370483254123262700.png.webp",
          serialList: [
            {
              serialId: 9769,
              serialName: "红旗H5",
            },
            {
              serialId: 5586,
              serialName: "红旗HS5",
            },
            {
              serialId: 10056,
              serialName: "红旗HS3",
            },
            {
              serialId: 6209,
              serialName: "红旗H9",
            },
            {
              serialId: 5520,
              serialName: "红旗HS7",
            },
            {
              serialId: 8154,
              serialName: "红旗H6",
            },
            {
              serialId: 7327,
              serialName: "红旗E-QM5",
            },
            {
              serialId: 5023,
              serialName: "红旗H5经典",
            },
            {
              serialId: 8155,
              serialName: "红旗HQ9",
            },
            {
              serialId: 6026,
              serialName: "红旗E-HS9",
            },
            {
              serialId: 8004,
              serialName: "红旗LS7",
            },
            {
              serialId: 3695,
              serialName: "红旗H7",
            },
            {
              serialId: 5572,
              serialName: "红旗E-HS3",
            },
          ],
        },
        {
          masterId: 196,
          masterName: "哈弗",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/9/2023052337410483256300931000.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/9/w{0}_yichecar_2023052337410483256300931000.png.webp",
          serialList: [
            {
              serialId: 3152,
              serialName: "哈弗H6",
            },
            {
              serialId: 10330,
              serialName: "哈弗猛龙",
            },
            {
              serialId: 10114,
              serialName: "哈弗枭龙MAX",
            },
            {
              serialId: 5158,
              serialName: "哈弗M6",
            },
            {
              serialId: 6783,
              serialName: "哈弗大狗",
            },
            {
              serialId: 9986,
              serialName: "哈弗H5",
            },
            {
              serialId: 3962,
              serialName: "哈弗H9",
            },
            {
              serialId: 9783,
              serialName: "哈弗二代大狗",
            },
            {
              serialId: 10113,
              serialName: "哈弗枭龙",
            },
            {
              serialId: 9757,
              serialName: "哈弗二代大狗PHEV",
            },
            {
              serialId: 7497,
              serialName: "哈弗酷狗",
            },
            {
              serialId: 7406,
              serialName: "哈弗赤兔",
            },
            {
              serialId: 7627,
              serialName: "哈弗H6S",
            },
            {
              serialId: 7498,
              serialName: "哈弗神兽",
            },
            {
              serialId: 8094,
              serialName: "哈弗H6 PHEV",
            },
          ],
        },
        {
          masterId: 754,
          masterName: "昊铂",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230710/656/202307101070895522065658722.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230710/656/w{0}_yichecar_202307101070895522065658722.png.webp",
          serialList: [
            {
              serialId: 10505,
              serialName: "昊铂HT",
            },
            {
              serialId: 9992,
              serialName: "昊铂GT",
            },
            {
              serialId: 9794,
              serialName: "昊铂SSR",
            },
          ],
        },
        {
          masterId: 32,
          masterName: "海马",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/262/2023052337411483257426271599.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/262/w{0}_yichecar_2023052337411483257426271599.png.webp",
          serialList: [
            {
              serialId: 5588,
              serialName: "海马8S",
            },
            {
              serialId: 6149,
              serialName: "海马7X",
            },
            {
              serialId: 6278,
              serialName: "海马6P",
            },
            {
              serialId: 9531,
              serialName: "海马7X-E",
            },
          ],
        },
        {
          masterId: 336,
          masterName: "合创汽车",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230913/168/202309134553460057016841695.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230913/168/w{0}_yichecar_202309134553460057016841695.png.webp",
          serialList: [
            {
              serialId: 8068,
              serialName: "合创A06",
            },
            {
              serialId: 10006,
              serialName: "合创V09",
            },
            {
              serialId: 7500,
              serialName: "合创Z03",
            },
            {
              serialId: 5799,
              serialName: "合创007",
            },
          ],
        },
        {
          masterId: 353,
          masterName: "恒驰",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/667/2023052337510483263166782510.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/667/w{0}_yichecar_2023052337510483263166782510.png.webp",
          serialList: [
            {
              serialId: 6906,
              serialName: "恒驰5",
            },
          ],
        },
        {
          masterId: 52,
          masterName: "黄海",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/138/2023052337508483262113888259.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/138/w{0}_yichecar_2023052337508483262113888259.png.webp",
          serialList: [
            {
              serialId: 2983,
              serialName: "瑞途",
            },
            {
              serialId: 4575,
              serialName: "黄海N2",
            },
            {
              serialId: 5840,
              serialName: "黄海N7",
            },
            {
              serialId: 4187,
              serialName: "黄海N1",
            },
            {
              serialId: 10528,
              serialName: "黄海野牛",
            },
            {
              serialId: 4617,
              serialName: "黄海N1S",
            },
            {
              serialId: 7193,
              serialName: "瑞途 纯电动",
            },
          ],
        },
        {
          masterId: 442,
          masterName: "华晨新日",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/592/2023052337470483261259227122.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/592/w{0}_yichecar_2023052337470483261259227122.png.webp",
          serialList: [
            {
              serialId: 7367,
              serialName: "华晨新日i03",
            },
            {
              serialId: 7581,
              serialName: "华晨新日i03A",
            },
          ],
        },
        {
          masterId: 749,
          masterName: "活越",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230526/382/202305263867508224838295253.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230526/382/w{0}_yichecar_202305263867508224838295253.png.webp",
          serialList: [
            {
              serialId: 10322,
              serialName: "活越神童01",
            },
            {
              serialId: 10323,
              serialName: "活越神童03",
            },
          ],
        },
        {
          masterId: 614,
          masterName: "华梓汽车",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/627/2023052337463483260362776387.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/627/w{0}_yichecar_2023052337463483260362776387.png.webp",
          serialList: [
            {
              serialId: 9833,
              serialName: "欧麦加",
            },
          ],
        },
        {
          masterId: 604,
          masterName: "恒润汽车",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/646/2023052337552483265364604017.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/646/w{0}_yichecar_2023052337552483265364604017.png.webp",
          serialList: [
            {
              serialId: 7953,
              serialName: "恒润HRS1",
            },
            {
              serialId: 9840,
              serialName: "恒润H23",
            },
          ],
        },
        {
          masterId: 181,
          masterName: "恒天",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/965/2023052337727483277996517349.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/965/w{0}_yichecar_2023052337727483277996517349.png.webp",
          serialList: [
            {
              serialId: 9130,
              serialName: "恒天L4600",
            },
          ],
        },
        {
          masterId: 674,
          masterName: "华夏领舰",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/616/2023052337583483267561609501.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/616/w{0}_yichecar_2023052337583483267561609501.png.webp",
          serialList: [
            {
              serialId: 9736,
              serialName: "华夏领舰HX-1",
            },
          ],
        },
        {
          masterId: 436,
          masterName: "华菱汽车",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/977/2023052337651483273097774425.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/977/w{0}_yichecar_2023052337651483273097774425.png.webp",
          serialList: [
            {
              serialId: 7347,
              serialName: "汉马H9",
            },
            {
              serialId: 7344,
              serialName: "华菱H3",
            },
            {
              serialId: 7345,
              serialName: "汉马H6",
            },
            {
              serialId: 7346,
              serialName: "汉马H7",
            },
          ],
        },
        {
          masterId: 262,
          masterName: "华凯",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/225/2023052337682483274022595286.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/225/w{0}_yichecar_2023052337682483274022595286.png.webp",
          serialList: [
            {
              serialId: 9802,
              serialName: "华凯VB06",
            },
            {
              serialId: 9778,
              serialName: "华凯新能源",
            },
            {
              serialId: 9803,
              serialName: "华凯新能源VE06",
            },
          ],
        },
        {
          masterId: 606,
          masterName: "宏远汽车",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/861/2023052337791483282286104402.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/861/w{0}_yichecar_2023052337791483282286104402.png.webp",
          serialList: [
            {
              serialId: 7956,
              serialName: "宏远EM60",
            },
          ],
        },
        {
          masterId: 170,
          masterName: "海格",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/781/2023052337817483283178107460.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/781/w{0}_yichecar_2023052337817483283178107460.png.webp",
          serialList: [
            {
              serialId: 9385,
              serialName: "御骏",
            },
          ],
        },
        {
          masterId: 34,
          masterName: "吉利汽车",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/475/2023052335939483153947563301.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/475/w{0}_yichecar_2023052335939483153947563301.png.webp",
          serialList: [
            {
              serialId: 7348,
              serialName: "星越L",
            },
            {
              serialId: 4283,
              serialName: "帝豪",
            },
            {
              serialId: 6241,
              serialName: "星瑞",
            },
            {
              serialId: 9661,
              serialName: "博越L",
            },
            {
              serialId: 4616,
              serialName: "博越",
            },
            {
              serialId: 5435,
              serialName: "缤越",
            },
            {
              serialId: 5401,
              serialName: "缤瑞",
            },
            {
              serialId: 9782,
              serialName: "熊猫",
            },
            {
              serialId: 5994,
              serialName: "吉利ICON",
            },
            {
              serialId: 9844,
              serialName: "豪越L",
            },
            {
              serialId: 4839,
              serialName: "远景X6",
            },
            {
              serialId: 9285,
              serialName: "帝豪L HiP",
            },
            {
              serialId: 5493,
              serialName: "嘉际",
            },
            {
              serialId: 3920,
              serialName: "博瑞",
            },
            {
              serialId: 7436,
              serialName: "帝豪S",
            },
            {
              serialId: 9722,
              serialName: "星越L 增程电动版",
            },
            {
              serialId: 4707,
              serialName: "帝豪EV",
            },
            {
              serialId: 5570,
              serialName: "嘉际PHEV",
            },
          ],
        },
        {
          masterId: 296,
          masterName: "捷途",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/587/2023052335944483155258757955.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/587/w{0}_yichecar_2023052335944483155258757955.png.webp",
          serialList: [
            {
              serialId: 8156,
              serialName: "捷途旅行者",
            },
            {
              serialId: 7174,
              serialName: "捷途X70 PLUS",
            },
            {
              serialId: 10504,
              serialName: "捷途山海L9",
            },
            {
              serialId: 7487,
              serialName: "捷途X90 PLUS",
            },
            {
              serialId: 7589,
              serialName: "捷途大圣",
            },
            {
              serialId: 5307,
              serialName: "捷途X70",
            },
            {
              serialId: 5377,
              serialName: "捷途X90",
            },
            {
              serialId: 10375,
              serialName: "捷途X70 PRO",
            },
            {
              serialId: 9508,
              serialName: "捷途大圣i-DM",
            },
            {
              serialId: 6076,
              serialName: "捷途X70M",
            },
            {
              serialId: 6240,
              serialName: "捷途X70 Coupe",
            },
            {
              serialId: 5715,
              serialName: "捷途X95",
            },
            {
              serialId: 5549,
              serialName: "捷途X70S",
            },
            {
              serialId: 5717,
              serialName: "捷途X70S EV",
            },
          ],
        },
        {
          masterId: 323,
          masterName: "捷达",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/537/2023052335999483159253788584.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/537/w{0}_yichecar_2023052335999483159253788584.png.webp",
          serialList: [
            {
              serialId: 5649,
              serialName: "捷达VS5",
            },
            {
              serialId: 5674,
              serialName: "捷达VS7",
            },
            {
              serialId: 5650,
              serialName: "捷达VA3",
            },
          ],
        },
        {
          masterId: 726,
          masterName: "吉利银河",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/368/2023052336514483198836851106.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/368/w{0}_yichecar_2023052336514483198836851106.png.webp",
          serialList: [
            {
              serialId: 10061,
              serialName: "银河L7",
            },
            {
              serialId: 10156,
              serialName: "银河L6",
            },
          ],
        },
        {
          masterId: 98,
          masterName: "捷豹",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/395/2023052336474483194739592158.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/395/w{0}_yichecar_2023052336474483194739592158.png.webp",
          serialList: [
            {
              serialId: 4864,
              serialName: "捷豹XFL",
            },
            {
              serialId: 5157,
              serialName: "捷豹XEL",
            },
            {
              serialId: 3786,
              serialName: "捷豹F-TYPE",
            },
            {
              serialId: 4433,
              serialName: "捷豹F-PACE",
            },
            {
              serialId: 5156,
              serialName: "捷豹E-PACE",
            },
          ],
        },
        {
          masterId: 450,
          masterName: "极氪",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/388/2023052336482483196838834071.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/388/w{0}_yichecar_2023052336482483196838834071.png.webp",
          serialList: [
            {
              serialId: 7440,
              serialName: "ZEEKR 001",
            },
            {
              serialId: 8897,
              serialName: "ZEEKR 009",
            },
            {
              serialId: 9887,
              serialName: "ZEEKR X",
            },
          ],
        },
        {
          masterId: 4,
          masterName: "Jeep",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/762/2023052336475483195776275557.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/762/w{0}_yichecar_2023052336475483195776275557.png.webp",
          serialList: [
            {
              serialId: 2115,
              serialName: "牧马人",
            },
            {
              serialId: 6225,
              serialName: "牧马人4xe",
            },
            {
              serialId: 7590,
              serialName: "大切诺基4xe",
            },
            {
              serialId: 5939,
              serialName: "角斗士",
            },
          ],
        },
        {
          masterId: 289,
          masterName: "ARCFOX极狐",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/111/2023052336599483203511175477.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/111/w{0}_yichecar_2023052336599483203511175477.png.webp",
          serialList: [
            {
              serialId: 6876,
              serialName: "极狐 阿尔法S",
            },
            {
              serialId: 10044,
              serialName: "极狐考拉",
            },
            {
              serialId: 6700,
              serialName: "极狐 阿尔法T",
            },
          ],
        },
        {
          masterId: 327,
          masterName: "吉利几何",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/659/2023052336513483197865957931.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/659/w{0}_yichecar_2023052336513483197865957931.png.webp",
          serialList: [
            {
              serialId: 8839,
              serialName: "吉利几何E萤火虫",
            },
            {
              serialId: 9718,
              serialName: "吉利几何G6",
            },
            {
              serialId: 5583,
              serialName: "吉利几何A",
            },
            {
              serialId: 6282,
              serialName: "吉利几何C",
            },
            {
              serialId: 9719,
              serialName: "吉利几何M6",
            },
          ],
        },
        {
          masterId: 37,
          masterName: "江铃",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/310/2023052336568483201631018392.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/310/w{0}_yichecar_2023052336568483201631018392.png.webp",
          serialList: [
            {
              serialId: 10094,
              serialName: "大道",
            },
            {
              serialId: 9700,
              serialName: "江铃福顺",
            },
            {
              serialId: 1640,
              serialName: "宝典",
            },
            {
              serialId: 3767,
              serialName: "域虎7",
            },
            {
              serialId: 4995,
              serialName: "特顺",
            },
            {
              serialId: 6847,
              serialName: "凯运",
            },
            {
              serialId: 5741,
              serialName: "域虎9",
            },
            {
              serialId: 2685,
              serialName: "顺达宽体",
            },
            {
              serialId: 4551,
              serialName: "顺达窄体",
            },
            {
              serialId: 9431,
              serialName: "顺威",
            },
            {
              serialId: 1572,
              serialName: "凯运升级版",
            },
            {
              serialId: 3361,
              serialName: "凯威",
            },
            {
              serialId: 5966,
              serialName: "特顺EV",
            },
            {
              serialId: 10339,
              serialName: "E路达",
            },
            {
              serialId: 9885,
              serialName: "E路顺",
            },
            {
              serialId: 5742,
              serialName: "域虎EV",
            },
            {
              serialId: 7532,
              serialName: "顺达EV",
            },
            {
              serialId: 10091,
              serialName: "凯锐EV",
            },
          ],
        },
        {
          masterId: 357,
          masterName: "捷尼赛思",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230810/256/202308104878165220225602037.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230810/256/w{0}_yichecar_202308104878165220225602037.png.webp",
          serialList: [
            {
              serialId: 6189,
              serialName: "捷尼赛思G70",
            },
            {
              serialId: 6303,
              serialName: "捷尼赛思G80",
            },
            {
              serialId: 6099,
              serialName: "捷尼赛思G90",
            },
            {
              serialId: 6100,
              serialName: "捷尼赛思GV80",
            },
            {
              serialId: 7187,
              serialName: "捷尼赛思GV70",
            },
            {
              serialId: 7628,
              serialName: "捷尼赛思GV60",
            },
            {
              serialId: 7462,
              serialName: "捷尼赛思G80 纯电动",
            },
            {
              serialId: 8065,
              serialName: "捷尼赛思GV70 纯电动",
            },
          ],
        },
        {
          masterId: 39,
          masterName: "金杯",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/108/2023052336556483200710809081.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/108/w{0}_yichecar_2023052336556483200710809081.png.webp",
          serialList: [
            {
              serialId: 1732,
              serialName: "阁瑞斯",
            },
            {
              serialId: 7467,
              serialName: "金海狮",
            },
            {
              serialId: 9504,
              serialName: "金海狮M",
            },
            {
              serialId: 3973,
              serialName: "小海狮X30",
            },
            {
              serialId: 4081,
              serialName: "金杯海狮",
            },
            {
              serialId: 4710,
              serialName: "新海狮X30L",
            },
            {
              serialId: 6929,
              serialName: "金杯海狮王",
            },
            {
              serialId: 4441,
              serialName: "金杯T3",
            },
            {
              serialId: 8008,
              serialName: "金杯金卡S3",
            },
            {
              serialId: 5483,
              serialName: "新海狮S",
            },
            {
              serialId: 6041,
              serialName: "金杯新快运",
            },
            {
              serialId: 5831,
              serialName: "鑫源X30",
            },
            {
              serialId: 9543,
              serialName: "金杯新能源新海狮EV",
            },
            {
              serialId: 4906,
              serialName: "金杯T5",
            },
            {
              serialId: 10159,
              serialName: "金杯金卡S6",
            },
            {
              serialId: 10160,
              serialName: "金杯金卡S2",
            },
            {
              serialId: 4299,
              serialName: "金杯T22",
            },
            {
              serialId: 4298,
              serialName: "金杯T20",
            },
            {
              serialId: 6314,
              serialName: "金杯T2S",
            },
            {
              serialId: 7318,
              serialName: "金杯T52S",
            },
            {
              serialId: 7317,
              serialName: "金杯T50S",
            },
            {
              serialId: 7320,
              serialName: "鑫卡T52 PLUS",
            },
            {
              serialId: 7592,
              serialName: "鑫源T52S",
            },
            {
              serialId: 10293,
              serialName: "新海豚EV",
            },
            {
              serialId: 7319,
              serialName: "鑫卡T50 PLUS",
            },
            {
              serialId: 7591,
              serialName: "鑫源T50S",
            },
          ],
        },
        {
          masterId: 35,
          masterName: "江汽集团",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230726/480/202307261477034177248005358.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230726/480/w{0}_yichecar_202307261477034177248005358.png.webp",
          serialList: [
            {
              serialId: 6881,
              serialName: "悍途",
            },
            {
              serialId: 4510,
              serialName: "江淮T6",
            },
            {
              serialId: 5440,
              serialName: "江淮T8",
            },
            {
              serialId: 3313,
              serialName: "星锐",
            },
            {
              serialId: 7089,
              serialName: "帅铃Q3",
            },
            {
              serialId: 7096,
              serialName: "骏铃V5",
            },
            {
              serialId: 7105,
              serialName: "康铃J3",
            },
            {
              serialId: 7111,
              serialName: "恺达X5",
            },
            {
              serialId: 8254,
              serialName: "冰博士帅铃",
            },
            {
              serialId: 7095,
              serialName: "骏铃V3",
            },
            {
              serialId: 7110,
              serialName: "恺达X6",
            },
            {
              serialId: 7085,
              serialName: "帅铃Q6",
            },
            {
              serialId: 7097,
              serialName: "骏铃V6",
            },
            {
              serialId: 5296,
              serialName: "江淮iEV7",
            },
            {
              serialId: 7561,
              serialName: "恺达X5献礼版",
            },
            {
              serialId: 10058,
              serialName: "蓝猫",
            },
            {
              serialId: 5335,
              serialName: "江淮iEVA50",
            },
            {
              serialId: 8256,
              serialName: "冰博士骏铃",
            },
            {
              serialId: 7103,
              serialName: "康铃H3",
            },
            {
              serialId: 7093,
              serialName: "骏铃V8",
            },
            {
              serialId: 7106,
              serialName: "康铃J5",
            },
            {
              serialId: 8253,
              serialName: "帅铃Q5",
            },
            {
              serialId: 7101,
              serialName: "骏铃E5",
            },
            {
              serialId: 8047,
              serialName: "江淮T8 EV",
            },
            {
              serialId: 10080,
              serialName: "恺达X1",
            },
            {
              serialId: 7100,
              serialName: "骏铃E3",
            },
            {
              serialId: 7113,
              serialName: "康铃H5",
            },
            {
              serialId: 10172,
              serialName: "江淮T6 EV",
            },
            {
              serialId: 7107,
              serialName: "康铃J6",
            },
            {
              serialId: 8255,
              serialName: "冰博士康铃",
            },
            {
              serialId: 7094,
              serialName: "骏铃V9L",
            },
            {
              serialId: 7116,
              serialName: "格尔发K5",
            },
            {
              serialId: 7104,
              serialName: "康铃H6",
            },
            {
              serialId: 7087,
              serialName: "帅铃E",
            },
            {
              serialId: 7083,
              serialName: "帅铃i6",
            },
            {
              serialId: 7086,
              serialName: "帅铃Q7",
            },
            {
              serialId: 7121,
              serialName: "格尔发A6",
            },
            {
              serialId: 8257,
              serialName: "擎天柱",
            },
            {
              serialId: 7560,
              serialName: "大金牛mini",
            },
            {
              serialId: 7098,
              serialName: "骏铃V7",
            },
            {
              serialId: 7099,
              serialName: "骏铃V9",
            },
            {
              serialId: 7542,
              serialName: "格尔发V7",
            },
            {
              serialId: 7118,
              serialName: "格尔发K7",
            },
            {
              serialId: 8251,
              serialName: "大金牛",
            },
            {
              serialId: 7117,
              serialName: "格尔发K6",
            },
            {
              serialId: 7084,
              serialName: "帅铃Q8",
            },
            {
              serialId: 8252,
              serialName: "大金牛pro",
            },
            {
              serialId: 7120,
              serialName: "格尔发A5",
            },
            {
              serialId: 10121,
              serialName: "恺达X7",
            },
            {
              serialId: 7090,
              serialName: "帅铃Q9",
            },
            {
              serialId: 10501,
              serialName: "运多多",
            },
            {
              serialId: 7115,
              serialName: "格尔发K3",
            },
          ],
        },
        {
          masterId: 655,
          masterName: "江淮瑞风",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/819/2023052336356483186681983892.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/819/w{0}_yichecar_2023052336356483186681983892.png.webp",
          serialList: [
            {
              serialId: 4198,
              serialName: "瑞风M3",
            },
            {
              serialId: 4764,
              serialName: "瑞风M4",
            },
            {
              serialId: 8070,
              serialName: "瑞风E3",
            },
            {
              serialId: 7210,
              serialName: "瑞风L6 MAX",
            },
            {
              serialId: 7640,
              serialName: "瑞风L5",
            },
          ],
        },
        {
          masterId: 752,
          masterName: "极石汽车",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230822/61/20230822512267028006153341.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230822/61/w{0}_yichecar_20230822512267028006153341.png.webp",
          serialList: [
            {
              serialId: 10341,
              serialName: "极石01",
            },
          ],
        },
        {
          masterId: 758,
          masterName: "江淮汽车",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230726/729/202307261930035401072945294.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230726/729/w{0}_yichecar_202307261930035401072945294.png.webp",
          serialList: [
            {
              serialId: 10237,
              serialName: "江淮QX PHEV",
            },
            {
              serialId: 10175,
              serialName: "江淮A5 PLUS",
            },
            {
              serialId: 10545,
              serialName: "江淮X8 PLUS",
            },
          ],
        },
        {
          masterId: 468,
          masterName: "江铃集团新能源",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/309/2023052336624483204530994797.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/309/w{0}_yichecar_2023052336624483204530994797.png.webp",
          serialList: [
            {
              serialId: 5488,
              serialName: "易至EV3",
            },
            {
              serialId: 9498,
              serialName: "小麒麟",
            },
            {
              serialId: 7472,
              serialName: "羿",
            },
          ],
        },
        {
          masterId: 734,
          masterName: "江淮钇为",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/141/2023052336935483223514144414.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/141/w{0}_yichecar_2023052336935483223514144414.png.webp",
          serialList: [
            {
              serialId: 10179,
              serialName: "江淮钇为3",
            },
          ],
        },
        {
          masterId: 293,
          masterName: "Polestar极星",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/233/2023052336625483205523334763.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/233/w{0}_yichecar_2023052336625483205523334763.png.webp",
          serialList: [
            {
              serialId: 8889,
              serialName: "Polestar 4",
            },
            {
              serialId: 8100,
              serialName: "Polestar 3",
            },
            {
              serialId: 5639,
              serialName: "Polestar 2",
            },
            {
              serialId: 5241,
              serialName: "Polestar 1",
            },
          ],
        },
        {
          masterId: 322,
          masterName: "钧天",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/377/2023052336636483206337753970.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/377/w{0}_yichecar_2023052336636483206337753970.png.webp",
          serialList: [
            {
              serialId: 5636,
              serialName: "勇猛者",
            },
            {
              serialId: 10313,
              serialName: "钧天黑武士Youth",
            },
            {
              serialId: 9968,
              serialName: "霸界",
            },
          ],
        },
        {
          masterId: 57,
          masterName: "金龙",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/620/2023052336687483207162007697.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/620/w{0}_yichecar_2023052336687483207162007697.png.webp",
          serialList: [
            {
              serialId: 4007,
              serialName: "金威",
            },
            {
              serialId: 4008,
              serialName: "凯歌",
            },
            {
              serialId: 5395,
              serialName: "凯锐浩克",
            },
            {
              serialId: 6849,
              serialName: "浩锐",
            },
            {
              serialId: 6789,
              serialName: "金龙龙耀8",
            },
            {
              serialId: 10357,
              serialName: "金龙龙耀5",
            },
            {
              serialId: 8239,
              serialName: "金龙龙耀6",
            },
          ],
        },
        {
          masterId: 678,
          masterName: "江南汽车",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/723/2023052336688483208172316128.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/723/w{0}_yichecar_2023052336688483208172316128.png.webp",
          serialList: [
            {
              serialId: 9786,
              serialName: "江南U2",
            },
          ],
        },
        {
          masterId: 624,
          masterName: "极越",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230815/488/202308151792206583748831559.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230815/488/w{0}_yichecar_202308151792206583748831559.png.webp",
          serialList: [
            {
              serialId: 8233,
              serialName: "极越01",
            },
          ],
        },
        {
          masterId: 161,
          masterName: "金旅",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/667/2023052336727483210266737707.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/667/w{0}_yichecar_2023052336727483210266737707.png.webp",
          serialList: [
            {
              serialId: 3871,
              serialName: "金旅海狮",
            },
            {
              serialId: 5670,
              serialName: "金旅大海狮",
            },
            {
              serialId: 5672,
              serialName: "金旅海狮EV",
            },
            {
              serialId: 5669,
              serialName: "金旅窄体大海狮",
            },
            {
              serialId: 5671,
              serialName: "金旅领特",
            },
            {
              serialId: 7197,
              serialName: "金旅领特EV",
            },
          ],
        },
        {
          masterId: 152,
          masterName: "九龙",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/704/2023052336778483213370455942.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/704/w{0}_yichecar_2023052336778483213370455942.png.webp",
          serialList: [
            {
              serialId: 5813,
              serialName: "九龙A6E",
            },
            {
              serialId: 5533,
              serialName: "九龙EM3",
            },
            {
              serialId: 5810,
              serialName: "九龙A6",
            },
            {
              serialId: 5808,
              serialName: "九龙A4",
            },
            {
              serialId: 5811,
              serialName: "九龙C6",
            },
            {
              serialId: 7606,
              serialName: "九龙W5",
            },
            {
              serialId: 7607,
              serialName: "九龙EW5",
            },
          ],
        },
        {
          masterId: 662,
          masterName: "嘉远汽车",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/567/2023052336876483218856740116.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/567/w{0}_yichecar_2023052336876483218856740116.png.webp",
          serialList: [
            {
              serialId: 9527,
              serialName: "KOMI",
            },
          ],
        },
        {
          masterId: 444,
          masterName: "江铃重汽",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/742/2023052336804483215574279922.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/742/w{0}_yichecar_2023052336804483215574279922.png.webp",
          serialList: [
            {
              serialId: 7372,
              serialName: "威龙",
            },
            {
              serialId: 7373,
              serialName: "威龙HV5",
            },
          ],
        },
        {
          masterId: 570,
          masterName: "金冠汽车",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/936/2023052336836483217693679634.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/936/w{0}_yichecar_2023052336836483217693679634.png.webp",
          serialList: [
            {
              serialId: 10527,
              serialName: "宾歌T10",
            },
            {
              serialId: 10525,
              serialName: "金冠G20",
            },
            {
              serialId: 7892,
              serialName: "金冠V级",
            },
          ],
        },
        {
          masterId: 730,
          masterName: "江铃晶马汽车",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/722/2023052336938483224372280205.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/722/w{0}_yichecar_2023052336938483224372280205.png.webp",
          serialList: [
            {
              serialId: 10162,
              serialName: " 江铃晶马福运新能源",
            },
            {
              serialId: 10569,
              serialName: "江铃晶马E路福",
            },
          ],
        },
        {
          masterId: 695,
          masterName: "金琥汽车",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/383/2023052336934483222638335208.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/383/w{0}_yichecar_2023052336934483222638335208.png.webp",
          serialList: [
            {
              serialId: 9935,
              serialName: "金琥EV48",
            },
          ],
        },
        {
          masterId: 107,
          masterName: "凯迪拉克",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/442/2023052330725482804644290532.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/442/w{0}_yichecar_2023052330725482804644290532.png.webp",
          serialList: [
            {
              serialId: 5895,
              serialName: "凯迪拉克CT5",
            },
            {
              serialId: 4469,
              serialName: "凯迪拉克CT6",
            },
            {
              serialId: 5587,
              serialName: "凯迪拉克XT6",
            },
            {
              serialId: 4470,
              serialName: "凯迪拉克XT5",
            },
            {
              serialId: 6075,
              serialName: "凯迪拉克CT4",
            },
            {
              serialId: 5338,
              serialName: "凯迪拉克XT4",
            },
            {
              serialId: 9564,
              serialName: "凯迪拉克GT4",
            },
            {
              serialId: 7703,
              serialName: "IQ锐歌",
            },
          ],
        },
        {
          masterId: 220,
          masterName: "凯翼",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/181/2023052330726482805618191613.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/181/w{0}_yichecar_2023052330726482805618191613.png.webp",
          serialList: [
            {
              serialId: 6171,
              serialName: "炫界",
            },
            {
              serialId: 9691,
              serialName: "凯翼昆仑",
            },
            {
              serialId: 7454,
              serialName: "轩度",
            },
            {
              serialId: 7671,
              serialName: "炫界Pro",
            },
            {
              serialId: 7677,
              serialName: "炫界Pro EV",
            },
            {
              serialId: 9685,
              serialName: "凯翼V7",
            },
          ],
        },
        {
          masterId: 150,
          masterName: "开瑞",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/304/2023052330739482806530433617.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/304/w{0}_yichecar_2023052330739482806530433617.png.webp",
          serialList: [
            {
              serialId: 4905,
              serialName: "开瑞K60",
            },
            {
              serialId: 5392,
              serialName: "优优EV",
            },
            {
              serialId: 6045,
              serialName: "海豚EV",
            },
            {
              serialId: 9533,
              serialName: "江豚",
            },
            {
              serialId: 2820,
              serialName: "优优",
            },
            {
              serialId: 8250,
              serialName: "开瑞X6",
            },
            {
              serialId: 2996,
              serialName: "优劲",
            },
            {
              serialId: 10033,
              serialName: "小象EV",
            },
            {
              serialId: 7554,
              serialName: "优劲T52",
            },
            {
              serialId: 7553,
              serialName: "优劲T50",
            },
            {
              serialId: 5393,
              serialName: "优劲EV",
            },
            {
              serialId: 6463,
              serialName: "大象EV",
            },
            {
              serialId: 7555,
              serialName: "优劲T70L",
            },
            {
              serialId: 7556,
              serialName: "优劲T72L",
            },
          ],
        },
        {
          masterId: 446,
          masterName: "克蒂汽车",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230605/717/20230605581593046371754615.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230605/717/w{0}_yichecar_20230605581593046371754615.png.webp",
          serialList: [
            {
              serialId: 7414,
              serialName: "克蒂巴赫系列",
            },
            {
              serialId: 10456,
              serialName: "克蒂魔术师系列",
            },
            {
              serialId: 7557,
              serialName: "克蒂怪兽SV系列",
            },
            {
              serialId: 10534,
              serialName: "克蒂空间大师系列",
            },
            {
              serialId: 9717,
              serialName: "克蒂帝亚系列",
            },
            {
              serialId: 10533,
              serialName: "克蒂大赢家系列",
            },
            {
              serialId: 7415,
              serialName: "克蒂圣姆峰系列",
            },
            {
              serialId: 9714,
              serialName: "克蒂翔翼系列",
            },
            {
              serialId: 7558,
              serialName: "克蒂雪堆白系列",
            },
            {
              serialId: 9715,
              serialName: "克蒂WALD系列",
            },
          ],
        },
        {
          masterId: 582,
          masterName: "开云汽车",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/273/2023052330769482809627333382.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/273/w{0}_yichecar_2023052330769482809627333382.png.webp",
          serialList: [
            {
              serialId: 7913,
              serialName: "开云电皮卡",
            },
          ],
        },
        {
          masterId: 465,
          masterName: "克慕勒",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/276/2023052331025482822227601624.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/276/w{0}_yichecar_2023052331025482822227601624.png.webp",
          serialList: [
            {
              serialId: 10185,
              serialName: "克慕勒GLS",
            },
            {
              serialId: 7999,
              serialName: "克慕勒GT系列",
            },
            {
              serialId: 7678,
              serialName: "克慕勒M系列",
            },
            {
              serialId: 10186,
              serialName: "克慕勒BOSS-L1",
            },
          ],
        },
        {
          masterId: 405,
          masterName: "凯马汽车",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/657/2023052331028482823265704341.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/657/w{0}_yichecar_2023052331028482823265704341.png.webp",
          serialList: [
            {
              serialId: 7325,
              serialName: "凯马锐航",
            },
            {
              serialId: 7323,
              serialName: "凯马HK",
            },
            {
              serialId: 7324,
              serialName: "凯马锐捷",
            },
            {
              serialId: 9829,
              serialName: "凯马锐航EV",
            },
            {
              serialId: 10203,
              serialName: "骏航",
            },
          ],
        },
        {
          masterId: 659,
          masterName: "焜驰",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/956/2023052331029482824295633202.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/956/w{0}_yichecar_2023052331029482824295633202.png.webp",
          serialList: [
            {
              serialId: 9526,
              serialName: "星影VLS",
            },
          ],
        },
        {
          masterId: 342,
          masterName: "开沃汽车",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230605/729/20230605577593038572911633.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230605/729/w{0}_yichecar_20230605577593038572911633.png.webp",
          serialList: [
            {
              serialId: 5878,
              serialName: "开沃D07",
            },
            {
              serialId: 9770,
              serialName: "开沃D07L",
            },
            {
              serialId: 10329,
              serialName: " 开沃K10P",
            },
            {
              serialId: 5881,
              serialName: "开沃D10",
            },
            {
              serialId: 10209,
              serialName: "开沃K15",
            },
            {
              serialId: 10208,
              serialName: "开沃K10",
            },
            {
              serialId: 5882,
              serialName: "开沃D11",
            },
          ],
        },
        {
          masterId: 214,
          masterName: "卡升",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/77/2023052331757482870307738229.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/77/w{0}_yichecar_2023052331757482870307738229.png.webp",
          serialList: [
            {
              serialId: 4157,
              serialName: "卡升威霆",
            },
            {
              serialId: 5100,
              serialName: "卡升V-class",
            },
          ],
        },
        {
          masterId: 728,
          masterName: "克罗斯哈特",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/605/2023052331771482871260514699.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/605/w{0}_yichecar_2023052331771482871260514699.png.webp",
          serialList: [
            {
              serialId: 10149,
              serialName: "克罗斯哈特C-1",
            },
          ],
        },
        {
          masterId: 96,
          masterName: "路虎",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230808/278/202308083645148882527876749.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230808/278/w{0}_yichecar_202308083645148882527876749.png.webp",
          serialList: [
            {
              serialId: 2149,
              serialName: "揽胜",
            },
            {
              serialId: 2293,
              serialName: "卫士",
            },
            {
              serialId: 4329,
              serialName: "揽胜极光",
            },
            {
              serialId: 2588,
              serialName: "揽胜运动版",
            },
            {
              serialId: 4984,
              serialName: "揽胜星脉",
            },
            {
              serialId: 6168,
              serialName: "发现运动版",
            },
            {
              serialId: 4961,
              serialName: "发现",
            },
            {
              serialId: 7639,
              serialName: "揽胜极光 插电混动",
            },
            {
              serialId: 5337,
              serialName: "揽胜 插电混动",
            },
            {
              serialId: 6949,
              serialName: "卫士 插电混动",
            },
            {
              serialId: 5278,
              serialName: "揽胜运动版 插电混动",
            },
            {
              serialId: 6880,
              serialName: "发现运动版 插电混动",
            },
          ],
        },
        {
          masterId: 267,
          masterName: "领克",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/681/2023052329745482724768150865.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/681/w{0}_yichecar_2023052329745482724768150865.png.webp",
          serialList: [
            {
              serialId: 5285,
              serialName: "领克03",
            },
            {
              serialId: 10099,
              serialName: "领克08",
            },
            {
              serialId: 6196,
              serialName: "领克06",
            },
            {
              serialId: 6197,
              serialName: "领克06 PHEV",
            },
            {
              serialId: 4902,
              serialName: "领克01",
            },
            {
              serialId: 7471,
              serialName: "领克09",
            },
            {
              serialId: 5283,
              serialName: "领克02",
            },
            {
              serialId: 7619,
              serialName: "领克09 PHEV",
            },
            {
              serialId: 5723,
              serialName: "领克05",
            },
            {
              serialId: 7485,
              serialName: "领克02 Hatchback",
            },
            {
              serialId: 5400,
              serialName: "领克01 PHEV",
            },
            {
              serialId: 6049,
              serialName: "领克05 PHEV",
            },
          ],
        },
        {
          masterId: 94,
          masterName: "雷克萨斯",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/82/2023052330047482753208238247.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/82/w{0}_yichecar_2023052330047482753208238247.png.webp",
          serialList: [
            {
              serialId: 2109,
              serialName: "雷克萨斯ES",
            },
            {
              serialId: 2130,
              serialName: "雷克萨斯RX",
            },
            {
              serialId: 1996,
              serialName: "雷克萨斯LS",
            },
            {
              serialId: 4165,
              serialName: "雷克萨斯NX",
            },
            {
              serialId: 5699,
              serialName: "雷克萨斯LM",
            },
            {
              serialId: 5272,
              serialName: "雷克萨斯UX",
            },
            {
              serialId: 8101,
              serialName: "雷克萨斯RZ",
            },
            {
              serialId: 4731,
              serialName: "雷克萨斯LC",
            },
            {
              serialId: 7603,
              serialName: "雷克萨斯NX 插电混动",
            },
            {
              serialId: 9553,
              serialName: "雷克萨斯RX 插电混动",
            },
          ],
        },
        {
          masterId: 309,
          masterName: "理想汽车",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/668/2023052329781482728766829933.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/668/w{0}_yichecar_2023052329781482728766829933.png.webp",
          serialList: [
            {
              serialId: 9805,
              serialName: "理想L7",
            },
            {
              serialId: 8105,
              serialName: "理想L9",
            },
            {
              serialId: 8894,
              serialName: "理想L8",
            },
          ],
        },
        {
          masterId: 95,
          masterName: "林肯",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/367/2023052330054482756836767309.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/367/w{0}_yichecar_2023052330054482756836767309.png.webp",
          serialList: [
            {
              serialId: 6195,
              serialName: "飞行家",
            },
            {
              serialId: 6729,
              serialName: "航海家",
            },
            {
              serialId: 5981,
              serialName: "冒险家",
            },
            {
              serialId: 8039,
              serialName: "林肯Z",
            },
            {
              serialId: 2086,
              serialName: "领航员",
            },
            {
              serialId: 6163,
              serialName: "冒险家 PHEV",
            },
          ],
        },
        {
          masterId: 301,
          masterName: "零跑汽车",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/211/2023052329832482731221191345.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/211/w{0}_yichecar_2023052329832482731221191345.png.webp",
          serialList: [
            {
              serialId: 10089,
              serialName: "零跑C11 增程版",
            },
            {
              serialId: 7496,
              serialName: "零跑C01",
            },
            {
              serialId: 6136,
              serialName: "零跑T03",
            },
            {
              serialId: 5696,
              serialName: "零跑C11 纯电动",
            },
          ],
        },
        {
          masterId: 80,
          masterName: "劳斯莱斯",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/210/2023052329831482730321081375.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/210/w{0}_yichecar_2023052329831482730321081375.png.webp",
          serialList: [
            {
              serialId: 2041,
              serialName: "幻影",
            },
            {
              serialId: 5390,
              serialName: "库里南",
            },
            {
              serialId: 2721,
              serialName: "古思特",
            },
            {
              serialId: 7701,
              serialName: "闪灵",
            },
          ],
        },
        {
          masterId: 86,
          masterName: "兰博基尼",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/523/2023052329833482732052384876.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/523/w{0}_yichecar_2023052329833482732052384876.png.webp",
          serialList: [
            {
              serialId: 10205,
              serialName: "Revuelto",
            },
            {
              serialId: 4094,
              serialName: "Huracán",
            },
            {
              serialId: 5293,
              serialName: "Urus",
            },
          ],
        },
        {
          masterId: 402,
          masterName: "岚图汽车",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/662/2023052329875482732866291760.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/662/w{0}_yichecar_2023052329875482732866291760.png.webp",
          serialList: [
            {
              serialId: 9231,
              serialName: "岚图梦想家",
            },
            {
              serialId: 7405,
              serialName: "岚图FREE",
            },
            {
              serialId: 9706,
              serialName: "岚图追光",
            },
          ],
        },
        {
          masterId: 83,
          masterName: "路特斯",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/296/2023052329935482736429626647.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/296/w{0}_yichecar_2023052329935482736429626647.png.webp",
          serialList: [
            {
              serialId: 7529,
              serialName: "Emira",
            },
            {
              serialId: 8899,
              serialName: "路特斯ELETRE",
            },
          ],
        },
        {
          masterId: 396,
          masterName: "凌宝汽车",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/29/2023052329898482735502969228.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/29/w{0}_yichecar_2023052329898482735502969228.png.webp",
          serialList: [
            {
              serialId: 7749,
              serialName: "凌宝Uni",
            },
            {
              serialId: 6692,
              serialName: "凌宝BOX",
            },
            {
              serialId: 7453,
              serialName: "凌宝COCO",
            },
          ],
        },
        {
          masterId: 99,
          masterName: "雷诺",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/923/2023052329994482740292323352.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/923/w{0}_yichecar_2023052329994482740292323352.png.webp",
          serialList: [
            {
              serialId: 10412,
              serialName: "雷诺QM6",
            },
          ],
        },
        {
          masterId: 737,
          masterName: "蓝电",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/160/2023052330342482783216085598.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/160/w{0}_yichecar_2023052330342482783216085598.png.webp",
          serialList: [
            {
              serialId: 9845,
              serialName: "蓝电E5",
            },
          ],
        },
        {
          masterId: 761,
          masterName: "拉帝",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230825/175/202308255836294188317588588.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230825/175/w{0}_yichecar_202308255836294188317588588.png.webp",
          serialList: [
            {
              serialId: 10447,
              serialName: "拉帝Escalade",
            },
            {
              serialId: 10448,
              serialName: "拉帝GLS",
            },
            {
              serialId: 10446,
              serialName: "拉帝V-Class",
            },
          ],
        },
        {
          masterId: 424,
          masterName: "LUMMA",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/666/2023052329953482738566602929.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/666/w{0}_yichecar_2023052329953482738566602929.png.webp",
          serialList: [
            {
              serialId: 7233,
              serialName: "LUMMA CLR G770",
            },
            {
              serialId: 7507,
              serialName: "LUMMA LD 挑战者",
            },
            {
              serialId: 7232,
              serialName: "LUMMA CLR RS",
            },
            {
              serialId: 7976,
              serialName: "LUMMA CLR X7",
            },
            {
              serialId: 7222,
              serialName: "LUMMA CLR V",
            },
            {
              serialId: 10463,
              serialName: "LUMMA CLR VR",
            },
          ],
        },
        {
          masterId: 278,
          masterName: "Lorinser",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/651/2023052330026482745265151209.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/651/w{0}_yichecar_2023052330026482745265151209.png.webp",
          serialList: [
            {
              serialId: 10009,
              serialName: " Lorinser 艾奈斯系列",
            },
            {
              serialId: 5663,
              serialName: "Lorinser GS系列",
            },
            {
              serialId: 9485,
              serialName: "Lorinser LX",
            },
            {
              serialId: 10451,
              serialName: "Lorinser M800",
            },
            {
              serialId: 5133,
              serialName: "Lorinser VS系列",
            },
            {
              serialId: 9486,
              serialName: "Lorinser LS系列",
            },
            {
              serialId: 5130,
              serialName: "Lorinser MS系列",
            },
          ],
        },
        {
          masterId: 750,
          masterName: "菱势汽车",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230529/450/202305292402534291845084978.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230529/450/w{0}_yichecar_202305292402534291845084978.png.webp",
          serialList: [
            {
              serialId: 10324,
              serialName: "菱势黄金卡",
            },
          ],
        },
        {
          masterId: 76,
          masterName: "力帆汽车",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/552/2023052330021482744355265451.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/552/w{0}_yichecar_2023052330021482744355265451.png.webp",
          serialList: [
            {
              serialId: 8230,
              serialName: "力帆枫叶80V",
            },
          ],
        },
        {
          masterId: 166,
          masterName: "理念",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/481/2023052330020482743048124970.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/481/w{0}_yichecar_2023052330020482743048124970.png.webp",
          serialList: [
            {
              serialId: 5525,
              serialName: "广汽本田VE-1",
            },
          ],
        },
        {
          masterId: 667,
          masterName: "雷达汽车",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/198/2023052330034482748219852352.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/198/w{0}_yichecar_2023052330034482748219852352.png.webp",
          serialList: [
            {
              serialId: 9654,
              serialName: "雷达RD6",
            },
          ],
        },
        {
          masterId: 346,
          masterName: "LEVC",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230605/830/20230605578593040183088884.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230605/830/w{0}_yichecar_20230605578593040183088884.png.webp",
          serialList: [
            {
              serialId: 7173,
              serialName: "LEVC TX",
            },
          ],
        },
        {
          masterId: 307,
          masterName: "领途汽车",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/985/2023052330078482769698583269.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/985/w{0}_yichecar_2023052330078482769698583269.png.webp",
          serialList: [
            {
              serialId: 10394,
              serialName: "领途缤纷",
            },
          ],
        },
        {
          masterId: 412,
          masterName: "联合卡车",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/559/2023052330040482749955934011.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/559/w{0}_yichecar_2023052330040482749955934011.png.webp",
          serialList: [
            {
              serialId: 7334,
              serialName: "联合卡车U+系",
            },
            {
              serialId: 7337,
              serialName: "联合卡车E系",
            },
            {
              serialId: 7336,
              serialName: "联合卡车U系",
            },
            {
              serialId: 7335,
              serialName: "联合卡车UX系",
            },
          ],
        },
        {
          masterId: 503,
          masterName: "龙程汽车",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/403/2023052330050482754040346748.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/403/w{0}_yichecar_2023052330050482754040346748.png.webp",
          serialList: [
            {
              serialId: 7768,
              serialName: "龙程V-Class",
            },
          ],
        },
        {
          masterId: 701,
          masterName: "LIMGENE凌际",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/230/2023052330053482755923022645.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/230/w{0}_yichecar_2023052330053482755923022645.png.webp",
          serialList: [
            {
              serialId: 9956,
              serialName: "凌际星云系列",
            },
            {
              serialId: 10234,
              serialName: "凌际威途系列",
            },
          ],
        },
        {
          masterId: 625,
          masterName: "莱茵汽车",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/135/2023052330048482753213540892.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/135/w{0}_yichecar_2023052330048482753213540892.png.webp",
          serialList: [
            {
              serialId: 9305,
              serialName: "莱茵旅行者",
            },
          ],
        },
        {
          masterId: 18,
          masterName: "马自达",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/562/2023052328152482618756233528.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/562/w{0}_yichecar_2023052328152482618756233528.png.webp",
          serialList: [
            {
              serialId: 4123,
              serialName: "马自达3 昂克赛拉",
            },
            {
              serialId: 3883,
              serialName: "马自达CX-5",
            },
            {
              serialId: 9971,
              serialName: "马自达CX-50 行也",
            },
            {
              serialId: 4065,
              serialName: "阿特兹",
            },
            {
              serialId: 4711,
              serialName: "马自达CX-4",
            },
            {
              serialId: 6234,
              serialName: "马自达CX-30",
            },
            {
              serialId: 5462,
              serialName: "马自达CX-8",
            },
            {
              serialId: 7482,
              serialName: "马自达CX-30 EV",
            },
          ],
        },
        {
          masterId: 79,
          masterName: "名爵",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/131/2023052328868482663813181356.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/131/w{0}_yichecar_2023052328868482663813181356.png.webp",
          serialList: [
            {
              serialId: 1752,
              serialName: "MG7",
            },
            {
              serialId: 6725,
              serialName: "MG Cyberster",
            },
            {
              serialId: 2723,
              serialName: "名爵6",
            },
            {
              serialId: 3372,
              serialName: "MG5",
            },
            {
              serialId: 9550,
              serialName: "MG4 EV",
            },
            {
              serialId: 8893,
              serialName: "MG5天蝎座",
            },
            {
              serialId: 5265,
              serialName: "名爵6 PHEV",
            },
            {
              serialId: 7593,
              serialName: "MG ONE",
            },
            {
              serialId: 6938,
              serialName: "MG领航",
            },
            {
              serialId: 7213,
              serialName: "MG领航 PHEV",
            },
          ],
        },
        {
          masterId: 93,
          masterName: "玛莎拉蒂",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/290/2023052330045482752229052141.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/290/w{0}_yichecar_2023052330045482752229052141.png.webp",
          serialList: [
            {
              serialId: 3874,
              serialName: "Ghibli",
            },
            {
              serialId: 2120,
              serialName: "Quattroporte",
            },
            {
              serialId: 4464,
              serialName: "Levante",
            },
            {
              serialId: 6312,
              serialName: "玛莎拉蒂MC20",
            },
            {
              serialId: 7401,
              serialName: "Grecale格雷嘉",
            },
            {
              serialId: 2246,
              serialName: "GranTurismo",
            },
            {
              serialId: 9494,
              serialName: "GranTurismo Folgore",
            },
          ],
        },
        {
          masterId: 81,
          masterName: "MINI",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/850/2023052328943482671285027695.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/850/w{0}_yichecar_2023052328943482671285027695.png.webp",
          serialList: [
            {
              serialId: 3297,
              serialName: "MINI",
            },
            {
              serialId: 3095,
              serialName: "MINI COUNTRYMAN",
            },
            {
              serialId: 2043,
              serialName: "MINI CLUBMAN",
            },
            {
              serialId: 2817,
              serialName: "MINI CABRIO",
            },
            {
              serialId: 4020,
              serialName: "MINI JCW",
            },
          ],
        },
        {
          masterId: 183,
          masterName: "迈凯伦",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/940/2023052328218482623694016665.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/940/w{0}_yichecar_2023052328218482623694016665.png.webp",
          serialList: [
            {
              serialId: 5941,
              serialName: "迈凯伦GT",
            },
            {
              serialId: 7392,
              serialName: "Artura",
            },
          ],
        },
        {
          masterId: 672,
          masterName: "猛士",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/665/2023052328314482627166542746.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/665/w{0}_yichecar_2023052328314482627166542746.png.webp",
          serialList: [
            {
              serialId: 9768,
              serialName: "猛士917",
            },
          ],
        },
        {
          masterId: 344,
          masterName: "迈莎锐",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/877/2023052328264482625387721665.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/877/w{0}_yichecar_2023052328264482625387721665.png.webp",
          serialList: [
            {
              serialId: 6895,
              serialName: "迈莎锐G级",
            },
            {
              serialId: 6897,
              serialName: "迈莎锐揽胜",
            },
            {
              serialId: 8075,
              serialName: "迈莎锐Panamera",
            },
            {
              serialId: 6914,
              serialName: "迈莎锐Urus",
            },
            {
              serialId: 10259,
              serialName: "迈莎锐GLS",
            },
            {
              serialId: 6896,
              serialName: "迈莎锐Cayenne",
            },
            {
              serialId: 5906,
              serialName: "迈莎锐V级",
            },
            {
              serialId: 6909,
              serialName: "迈莎锐添越",
            },
          ],
        },
        {
          masterId: 426,
          masterName: "摩登汽车",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/895/2023052328266482626289574771.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/895/w{0}_yichecar_2023052328266482626289574771.png.webp",
          serialList: [
            {
              serialId: 7242,
              serialName: "Modern in",
            },
          ],
        },
        {
          masterId: 687,
          masterName: "迈越",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/930/2023052328315482628393089205.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/930/w{0}_yichecar_2023052328315482628393089205.png.webp",
          serialList: [
            {
              serialId: 9866,
              serialName: "迈越iMAX8",
            },
          ],
        },
        {
          masterId: 547,
          masterName: "敏安汽车",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/508/2023052328328482629750870345.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/508/w{0}_yichecar_2023052328328482629750870345.png.webp",
          serialList: [
            {
              serialId: 9731,
              serialName: "敏微ET1",
            },
          ],
        },
        {
          masterId: 325,
          masterName: "哪吒汽车",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/681/2023052327829482597268107885.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/681/w{0}_yichecar_2023052327829482597268107885.png.webp",
          serialList: [
            {
              serialId: 10174,
              serialName: "哪吒GT",
            },
            {
              serialId: 6883,
              serialName: "哪吒S",
            },
            {
              serialId: 10494,
              serialName: "哪吒X",
            },
            {
              serialId: 10393,
              serialName: "哪吒AYA",
            },
            {
              serialId: 6869,
              serialName: "哪吒V",
            },
            {
              serialId: 5678,
              serialName: "哪吒U",
            },
          ],
        },
        {
          masterId: 413,
          masterName: "南骏汽车",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/0/2023052327833482599300027815.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/0/w{0}_yichecar_2023052327833482599300027815.png.webp",
          serialList: [
            {
              serialId: 7330,
              serialName: "瑞捷D30",
            },
            {
              serialId: 7329,
              serialName: "瑞吉J30",
            },
            {
              serialId: 7331,
              serialName: "瑞捷D20",
            },
          ],
        },
        {
          masterId: 305,
          masterName: "欧拉",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/141/2023052327607482586014162301.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/141/w{0}_yichecar_2023052327607482586014162301.png.webp",
          serialList: [
            {
              serialId: 6878,
              serialName: "欧拉好猫",
            },
            {
              serialId: 7459,
              serialName: "欧拉闪电猫",
            },
            {
              serialId: 7613,
              serialName: "欧拉好猫GT",
            },
            {
              serialId: 7624,
              serialName: "欧拉芭蕾猫",
            },
          ],
        },
        {
          masterId: 652,
          masterName: "OBBIN",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/47/2023052327647482589304759844.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/47/w{0}_yichecar_2023052327647482589304759844.png.webp",
          serialList: [
            {
              serialId: 9296,
              serialName: "OBBIN星海",
            },
            {
              serialId: 9291,
              serialName: "OBBIN星河",
            },
          ],
        },
        {
          masterId: 365,
          masterName: "欧铃汽车",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/497/2023052327659482590249710736.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/497/w{0}_yichecar_2023052327659482590249710736.png.webp",
          serialList: [
            {
              serialId: 6193,
              serialName: "赛菱",
            },
            {
              serialId: 9830,
              serialName: "吉运",
            },
          ],
        },
        {
          masterId: 440,
          masterName: "朋克汽车",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/112/2023052327389482574811221711.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/112/w{0}_yichecar_2023052327389482574811221711.png.webp",
          serialList: [
            {
              serialId: 7422,
              serialName: "朋克多多",
            },
            {
              serialId: 7355,
              serialName: "朋克美美",
            },
          ],
        },
        {
          masterId: 42,
          masterName: "奇瑞",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230810/773/202308106371166049377344284.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230810/773/w{0}_yichecar_202308106371166049377344284.png.webp",
          serialList: [
            {
              serialId: 9295,
              serialName: "艾瑞泽8",
            },
            {
              serialId: 9859,
              serialName: "瑞虎9",
            },
            {
              serialId: 8110,
              serialName: "瑞虎8 PRO",
            },
            {
              serialId: 5313,
              serialName: "瑞虎8",
            },
            {
              serialId: 6939,
              serialName: "瑞虎8 PLUS",
            },
            {
              serialId: 10036,
              serialName: "探索06 ",
            },
            {
              serialId: 4793,
              serialName: "瑞虎3x",
            },
            {
              serialId: 4557,
              serialName: "艾瑞泽5",
            },
            {
              serialId: 7612,
              serialName: "瑞虎7 PLUS",
            },
            {
              serialId: 4757,
              serialName: "瑞虎7",
            },
            {
              serialId: 5203,
              serialName: "瑞虎5x",
            },
            {
              serialId: 8036,
              serialName: "欧萌达",
            },
            {
              serialId: 7211,
              serialName: "艾瑞泽5 PLUS",
            },
            {
              serialId: 9297,
              serialName: "瑞虎8 PRO新能源",
            },
            {
              serialId: 9674,
              serialName: "艾瑞泽5 GT",
            },
            {
              serialId: 9713,
              serialName: "瑞虎7 PLUS新能源",
            },
          ],
        },
        {
          masterId: 28,
          masterName: "起亚",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/941/2023052328066482612294187402.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/941/w{0}_yichecar_2023052328066482612294187402.png.webp",
          serialList: [
            {
              serialId: 10430,
              serialName: "起亚EV5",
            },
            {
              serialId: 3323,
              serialName: "起亚K5",
            },
            {
              serialId: 1681,
              serialName: "嘉华",
            },
            {
              serialId: 3510,
              serialName: "起亚K3",
            },
            {
              serialId: 3086,
              serialName: "智跑",
            },
            {
              serialId: 10211,
              serialName: "赛图斯",
            },
            {
              serialId: 9688,
              serialName: "狮铂拓界",
            },
            {
              serialId: 5049,
              serialName: "焕驰",
            },
            {
              serialId: 5387,
              serialName: "奕跑",
            },
            {
              serialId: 4673,
              serialName: "起亚KX5",
            },
            {
              serialId: 2748,
              serialName: "福瑞迪",
            },
            {
              serialId: 4384,
              serialName: "KX3傲跑",
            },
            {
              serialId: 7420,
              serialName: "起亚EV6",
            },
            {
              serialId: 6155,
              serialName: "起亚K3 EV",
            },
          ],
        },
        {
          masterId: 156,
          masterName: "启辰",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20231103/797/202311035529900377979791502.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20231103/797/w{0}_yichecar_202311035529900377979791502.png.webp",
          serialList: [
            {
              serialId: 10395,
              serialName: "启辰VX6",
            },
            {
              serialId: 10008,
              serialName: "启辰大V DD-i超混动",
            },
            {
              serialId: 7539,
              serialName: "启辰大V",
            },
            {
              serialId: 5159,
              serialName: "启辰D60",
            },
            {
              serialId: 10613,
              serialName: "启辰大V 氢境",
            },
            {
              serialId: 6143,
              serialName: "启辰星",
            },
            {
              serialId: 5421,
              serialName: "启辰T60",
            },
            {
              serialId: 5713,
              serialName: "启辰e30",
            },
            {
              serialId: 4797,
              serialName: "启辰T90",
            },
            {
              serialId: 5846,
              serialName: "启辰D60 EV",
            },
            {
              serialId: 5721,
              serialName: "启辰T60 EV",
            },
          ],
        },
        {
          masterId: 463,
          masterName: "奇瑞新能源",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/772/2023052327228482560277265253.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/772/w{0}_yichecar_2023052327228482560277265253.png.webp",
          serialList: [
            {
              serialId: 7634,
              serialName: "QQ冰淇淋",
            },
            {
              serialId: 4981,
              serialName: "小蚂蚁",
            },
            {
              serialId: 10183,
              serialName: "奇瑞舒享家",
            },
            {
              serialId: 9298,
              serialName: "无界Pro",
            },
            {
              serialId: 5996,
              serialName: "艾瑞泽e",
            },
          ],
        },
        {
          masterId: 43,
          masterName: "庆铃五十铃",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/584/2023052328316482629158424493.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/584/w{0}_yichecar_2023052328316482629158424493.png.webp",
          serialList: [
            {
              serialId: 7368,
              serialName: "庆铃五十铃达咖H",
            },
            {
              serialId: 5302,
              serialName: "庆铃五十铃达咖",
            },
            {
              serialId: 5411,
              serialName: "庆铃五十铃T17",
            },
          ],
        },
        {
          masterId: 451,
          masterName: "青岛解放",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/14/2023052327239482564901425667.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/14/w{0}_yichecar_2023052327239482564901425667.png.webp",
          serialList: [
            {
              serialId: 6967,
              serialName: "解放JH6",
            },
            {
              serialId: 7417,
              serialName: "解放JK6",
            },
            {
              serialId: 6973,
              serialName: "解放JH6生活舱",
            },
            {
              serialId: 6971,
              serialName: "解放龙V",
            },
            {
              serialId: 6972,
              serialName: "解放途V",
            },
            {
              serialId: 6970,
              serialName: "解放天V",
            },
          ],
        },
        {
          masterId: 756,
          masterName: "前晨汽车",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230718/424/202307182815968509042410746.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230718/424/w{0}_yichecar_202307182815968509042410746.png.webp",
          serialList: [
            {
              serialId: 10400,
              serialName: "前晨iC1",
            },
          ],
        },
        {
          masterId: 30,
          masterName: "日产",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/405/2023052328085482614540587008.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/405/w{0}_yichecar_2023052328085482614540587008.png.webp",
          serialList: [
            {
              serialId: 1699,
              serialName: "轩逸",
            },
            {
              serialId: 2190,
              serialName: "逍客",
            },
            {
              serialId: 2409,
              serialName: "天籁",
            },
            {
              serialId: 2583,
              serialName: "奇骏",
            },
            {
              serialId: 5346,
              serialName: "途达",
            },
            {
              serialId: 2154,
              serialName: "途乐",
            },
            {
              serialId: 3492,
              serialName: "楼兰",
            },
            {
              serialId: 1698,
              serialName: "骐达",
            },
            {
              serialId: 5046,
              serialName: "劲客",
            },
            {
              serialId: 1694,
              serialName: "蓝鸟",
            },
            {
              serialId: 9495,
              serialName: "ARIYA艾睿雅",
            },
            {
              serialId: 5044,
              serialName: "纳瓦拉",
            },
          ],
        },
        {
          masterId: 78,
          masterName: "荣威",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/792/2023052328828482662479262246.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/792/w{0}_yichecar_2023052328828482662479262246.png.webp",
          serialList: [
            {
              serialId: 10345,
              serialName: "荣威D7",
            },
            {
              serialId: 5472,
              serialName: "荣威i5",
            },
            {
              serialId: 4767,
              serialName: "荣威RX5",
            },
            {
              serialId: 6313,
              serialName: "科莱威CLEVER",
            },
            {
              serialId: 6723,
              serialName: "荣威iMAX8",
            },
            {
              serialId: 5708,
              serialName: "荣威RX5 MAX",
            },
            {
              serialId: 6276,
              serialName: "荣威i6 MAX",
            },
            {
              serialId: 5123,
              serialName: "荣威RX3",
            },
            {
              serialId: 5122,
              serialName: "荣威eRX5",
            },
            {
              serialId: 9497,
              serialName: "荣威RX9",
            },
            {
              serialId: 8336,
              serialName: "荣威iMAX8 EV",
            },
            {
              serialId: 5270,
              serialName: "荣威Ei5",
            },
            {
              serialId: 7602,
              serialName: "荣威i6 MAX EV",
            },
          ],
        },
        {
          masterId: 395,
          masterName: "睿蓝汽车",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/365/2023052326660482515836557215.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/365/w{0}_yichecar_2023052326660482515836557215.png.webp",
          serialList: [
            {
              serialId: 9627,
              serialName: "睿蓝7",
            },
            {
              serialId: 8174,
              serialName: "睿蓝X3 PRO",
            },
            {
              serialId: 9632,
              serialName: "睿蓝9",
            },
            {
              serialId: 6918,
              serialName: "枫叶80v",
            },
            {
              serialId: 8234,
              serialName: "枫叶60s",
            },
            {
              serialId: 9810,
              serialName: "枫叶80v PRO",
            },
            {
              serialId: 9811,
              serialName: "枫叶60s PRO",
            },
          ],
        },
        {
          masterId: 337,
          masterName: "瑞驰新能源",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/659/2023052326673482517865952760.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/659/w{0}_yichecar_2023052326673482517865952760.png.webp",
          serialList: [
            {
              serialId: 10438,
              serialName: "瑞驰新能源EC75",
            },
            {
              serialId: 5824,
              serialName: "瑞驰新能源EC35",
            },
            {
              serialId: 5823,
              serialName: "瑞驰新能源EC31",
            },
            {
              serialId: 10182,
              serialName: "瑞驰新能源EC35V",
            },
            {
              serialId: 8908,
              serialName: "瑞驰新能源ED71",
            },
            {
              serialId: 8917,
              serialName: "瑞驰新能源EC55",
            },
            {
              serialId: 6917,
              serialName: "瑞驰新能源EK07S",
            },
            {
              serialId: 10136,
              serialName: "瑞驰新能源ED75",
            },
            {
              serialId: 7615,
              serialName: "瑞驰新能源EC71",
            },
            {
              serialId: 7575,
              serialName: "瑞驰新能源EK01S",
            },
            {
              serialId: 8011,
              serialName: "瑞驰新能源EC72",
            },
          ],
        },
        {
          masterId: 610,
          masterName: "容大智造",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/913/2023052326732482518691324170.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/913/w{0}_yichecar_2023052326732482518691324170.png.webp",
          serialList: [
            {
              serialId: 7960,
              serialName: "迈图",
            },
            {
              serialId: 7961,
              serialName: "迈乔",
            },
          ],
        },
        {
          masterId: 658,
          masterName: "深蓝汽车",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/171/2023052325840482451817187000.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/171/w{0}_yichecar_2023052325840482451817187000.png.webp",
          serialList: [
            {
              serialId: 9977,
              serialName: "深蓝S7",
            },
            {
              serialId: 7631,
              serialName: "深蓝SL03",
            },
          ],
        },
        {
          masterId: 165,
          masterName: "上汽大通MAXUS",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/921/2023052325792482447592122841.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/921/w{0}_yichecar_2023052325792482447592122841.png.webp",
          serialList: [
            {
              serialId: 5436,
              serialName: "上汽大通MAXUS G50",
            },
            {
              serialId: 8046,
              serialName: "上汽大通MAXUS G90",
            },
            {
              serialId: 4071,
              serialName: "上汽大通MAXUS G10",
            },
            {
              serialId: 10391,
              serialName: "上汽大通MAXUS G70",
            },
            {
              serialId: 3463,
              serialName: "上汽大通MAXUS 新途V80",
            },
            {
              serialId: 10222,
              serialName: "上汽大通MAXUS 大家7",
            },
            {
              serialId: 5577,
              serialName: "上汽大通MAXUS V80房车",
            },
            {
              serialId: 5675,
              serialName: "上汽大通MAXUS G20",
            },
            {
              serialId: 9915,
              serialName: "上汽大通MAXUS 新途V70",
            },
            {
              serialId: 6173,
              serialName: "上汽大通MAXUS V90房车",
            },
            {
              serialId: 5729,
              serialName: "上汽大通MAXUS 新途V90",
            },
            {
              serialId: 9629,
              serialName: "上汽大通MAXUS 大家5 插电混动",
            },
            {
              serialId: 6581,
              serialName: "上汽大通MAXUS D90 Pro",
            },
            {
              serialId: 9655,
              serialName: "上汽大通MAXUS 大家MIFA氢",
            },
            {
              serialId: 7469,
              serialName: "上汽大通MAXUS 大家9",
            },
            {
              serialId: 9679,
              serialName: "上汽大通MAXUS 领地",
            },
            {
              serialId: 5740,
              serialName: "上汽大通MAXUS T70",
            },
            {
              serialId: 5579,
              serialName: "上汽大通MAXUS D60",
            },
            {
              serialId: 7966,
              serialName: "上汽大通MAXUS V100",
            },
            {
              serialId: 5576,
              serialName: "上汽大通MAXUS EV30",
            },
            {
              serialId: 6887,
              serialName: "上汽大通MAXUS T90",
            },
            {
              serialId: 9628,
              serialName: "上汽大通MAXUS 大家5 纯电动",
            },
            {
              serialId: 9631,
              serialName: "上汽大通MAXUS 大家6 纯电动",
            },
            {
              serialId: 8890,
              serialName: "上汽大通MAXUS T90房车",
            },
            {
              serialId: 10304,
              serialName: "上汽大通MAXUS 大拿V1",
            },
            {
              serialId: 10389,
              serialName: "上汽大通MAXUS 新途EV70",
            },
            {
              serialId: 4912,
              serialName: "上汽大通MAXUS T60",
            },
            {
              serialId: 9419,
              serialName: "上汽大通MAXUS H90",
            },
            {
              serialId: 10368,
              serialName: "上汽大通MAXUS 星际L",
            },
            {
              serialId: 6931,
              serialName: "上汽大通MAXUS 新途EV90",
            },
            {
              serialId: 10370,
              serialName: "探索家·星际H",
            },
            {
              serialId: 10364,
              serialName: "上汽大通MAXUS 星际H",
            },
            {
              serialId: 9630,
              serialName: "上汽大通MAXUS 大家6 插电混动",
            },
            {
              serialId: 4386,
              serialName: "上汽大通MAXUS 新途EV80",
            },
            {
              serialId: 10367,
              serialName: "上汽大通MAXUS 星际R",
            },
            {
              serialId: 10516,
              serialName: "上汽大通MAXUS 大拿T1",
            },
            {
              serialId: 8076,
              serialName: "上汽大通MAXUS 上汽牛·魔王",
            },
            {
              serialId: 5282,
              serialName: "上汽大通MAXUS FCV80",
            },
            {
              serialId: 7231,
              serialName: "上汽大通MAXUS T90 EV",
            },
            {
              serialId: 10369,
              serialName: "上汽大通MAXUS 星际EV",
            },
          ],
        },
        {
          masterId: 25,
          masterName: "三菱",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/388/2023052327981482608538886298.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/388/w{0}_yichecar_2023052327981482608538886298.png.webp",
          serialList: [
            {
              serialId: 4847,
              serialName: "欧蓝德",
            },
            {
              serialId: 2082,
              serialName: "帕杰罗(进口)",
            },
            {
              serialId: 3686,
              serialName: "劲炫",
            },
            {
              serialId: 5376,
              serialName: "奕歌",
            },
            {
              serialId: 7492,
              serialName: "阿图柯",
            },
          ],
        },
        {
          masterId: 10,
          masterName: "斯柯达",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/874/2023052327780482595487460268.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/874/w{0}_yichecar_2023052327780482595487460268.png.webp",
          serialList: [
            {
              serialId: 4002,
              serialName: "速派",
            },
            {
              serialId: 4742,
              serialName: "柯迪亚克",
            },
            {
              serialId: 1811,
              serialName: "明锐",
            },
            {
              serialId: 5352,
              serialName: "柯米克",
            },
            {
              serialId: 5083,
              serialName: "柯珞克",
            },
            {
              serialId: 3765,
              serialName: "昕锐",
            },
            {
              serialId: 5502,
              serialName: "柯迪亚克GT",
            },
          ],
        },
        {
          masterId: 111,
          masterName: "斯巴鲁",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/690/2023052325867482453669018760.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/690/w{0}_yichecar_2023052325867482453669018760.png.webp",
          serialList: [
            {
              serialId: 2167,
              serialName: "森林人",
            },
            {
              serialId: 3570,
              serialName: "斯巴鲁BRZ",
            },
            {
              serialId: 2168,
              serialName: "傲虎",
            },
            {
              serialId: 9792,
              serialName: "旭豹",
            },
          ],
        },
        {
          masterId: 299,
          masterName: "思皓",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/645/2023052325866482452764520502.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/645/w{0}_yichecar_2023052325866482452764520502.png.webp",
          serialList: [
            {
              serialId: 9755,
              serialName: "思皓X8 PLUS",
            },
            {
              serialId: 7230,
              serialName: "花仙子",
            },
            {
              serialId: 6965,
              serialName: "思皓X8",
            },
            {
              serialId: 7129,
              serialName: "思皓A5",
            },
            {
              serialId: 7665,
              serialName: "思皓X6",
            },
            {
              serialId: 7609,
              serialName: "思皓曜",
            },
            {
              serialId: 7130,
              serialName: "思皓X4",
            },
            {
              serialId: 7359,
              serialName: "思皓QX",
            },
            {
              serialId: 7128,
              serialName: "思皓X7",
            },
            {
              serialId: 9290,
              serialName: "思皓爱跑",
            },
            {
              serialId: 6886,
              serialName: "思皓E50A",
            },
            {
              serialId: 6885,
              serialName: "思皓E40X",
            },
          ],
        },
        {
          masterId: 89,
          masterName: "smart",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/825/2023052330037482748582544748.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/825/w{0}_yichecar_2023052330037482748582544748.png.webp",
          serialList: [
            {
              serialId: 9904,
              serialName: "smart精灵#3",
            },
            {
              serialId: 9308,
              serialName: "smart精灵#1",
            },
          ],
        },
        {
          masterId: 260,
          masterName: "SWM斯威汽车",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/233/2023052325906482457423344972.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/233/w{0}_yichecar_2023052325906482457423344972.png.webp",
          serialList: [
            {
              serialId: 9574,
              serialName: "SWM斯威G01FF",
            },
            {
              serialId: 8175,
              serialName: "SWM斯威大虎",
            },
            {
              serialId: 4843,
              serialName: "SWM斯威X7",
            },
            {
              serialId: 9980,
              serialName: "SWM斯威大虎EDi",
            },
            {
              serialId: 5093,
              serialName: "SWM斯威X3",
            },
            {
              serialId: 5642,
              serialName: "SWM斯威G05",
            },
            {
              serialId: 5358,
              serialName: "SWM斯威G01",
            },
          ],
        },
        {
          masterId: 333,
          masterName: "思铭",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230605/926/20230605575593036092613681.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230605/926/w{0}_yichecar_20230605575593036092613681.png.webp",
          serialList: [
            {
              serialId: 6837,
              serialName: "本田M-NV",
            },
          ],
        },
        {
          masterId: 317,
          masterName: "SERES赛力斯",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/137/2023052326006482464713738252.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/137/w{0}_yichecar_2023052326006482464713738252.png.webp",
          serialList: [
            {
              serialId: 5704,
              serialName: "赛力斯SF5",
            },
          ],
        },
        {
          masterId: 416,
          masterName: "SONGSAN MOTORS",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/778/2023052325970482462077885130.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/778/w{0}_yichecar_2023052325970482462077885130.png.webp",
          serialList: [
            {
              serialId: 7123,
              serialName: "松散SS DOLPHIN",
            },
          ],
        },
        {
          masterId: 407,
          masterName: "陕汽重卡",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/147/2023052325971482463214725319.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/147/w{0}_yichecar_2023052325971482463214725319.png.webp",
          serialList: [
            {
              serialId: 7045,
              serialName: "德龙X5000",
            },
            {
              serialId: 7051,
              serialName: "德龙L3000",
            },
            {
              serialId: 7052,
              serialName: "德龙F3000",
            },
            {
              serialId: 7050,
              serialName: "德龙X3000",
            },
            {
              serialId: 7049,
              serialName: "德龙新M3000",
            },
          ],
        },
        {
          masterId: 408,
          masterName: "上汽轻卡",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/587/2023052326007482465658720206.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/587/w{0}_yichecar_2023052326007482465658720206.png.webp",
          serialList: [
            {
              serialId: 7183,
              serialName: "福运S(原小福星S)",
            },
            {
              serialId: 7164,
              serialName: "福运X",
            },
            {
              serialId: 9875,
              serialName: "福星ES80",
            },
            {
              serialId: 7180,
              serialName: "快运H",
            },
            {
              serialId: 7179,
              serialName: "运霸H",
            },
            {
              serialId: 7181,
              serialName: "超运C",
            },
            {
              serialId: 7182,
              serialName: "福运C",
            },
          ],
        },
        {
          masterId: 414,
          masterName: "时风",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/609/2023052326008482466560922997.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/609/w{0}_yichecar_2023052326008482466560922997.png.webp",
          serialList: [
            {
              serialId: 7282,
              serialName: "时风风菱",
            },
            {
              serialId: 7281,
              serialName: "时风风驰",
            },
            {
              serialId: 7283,
              serialName: "时风风顺",
            },
            {
              serialId: 7280,
              serialName: "时风风云",
            },
          ],
        },
        {
          masterId: 406,
          masterName: "三一集团",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/692/2023052326037482467469252801.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/692/w{0}_yichecar_2023052326037482467469252801.png.webp",
          serialList: [
            {
              serialId: 7155,
              serialName: "三一重卡王道",
            },
            {
              serialId: 10398,
              serialName: "三一电动轻卡",
            },
            {
              serialId: 7177,
              serialName: "三一重卡正义版",
            },
            {
              serialId: 10371,
              serialName: "三一重卡新朱宏旗舰版",
            },
            {
              serialId: 10374,
              serialName: "三一重卡新英雄旗舰版",
            },
            {
              serialId: 7157,
              serialName: "三一重卡朱宏版",
            },
            {
              serialId: 7156,
              serialName: "三一重卡英杰版",
            },
          ],
        },
        {
          masterId: 621,
          masterName: "沙龙汽车",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/728/2023052326040482468672876981.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/728/w{0}_yichecar_2023052326040482468672876981.png.webp",
          serialList: [
            {
              serialId: 8060,
              serialName: "机甲龙",
            },
          ],
        },
        {
          masterId: 418,
          masterName: "上汽红岩",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/487/2023052326041482469548703773.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/487/w{0}_yichecar_2023052326041482469548703773.png.webp",
          serialList: [
            {
              serialId: 7145,
              serialName: "红岩新金刚",
            },
            {
              serialId: 7144,
              serialName: "红岩杰狮",
            },
            {
              serialId: 7147,
              serialName: "红岩杰豹",
            },
            {
              serialId: 8150,
              serialName: "红岩杰虎",
            },
            {
              serialId: 7146,
              serialName: "红岩杰卡",
            },
          ],
        },
        {
          masterId: 708,
          masterName: "盛唐",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/20/2023052326074482472302019271.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/20/w{0}_yichecar_2023052326074482472302019271.png.webp",
          serialList: [
            {
              serialId: 9972,
              serialName: "盛唐V-Class",
            },
          ],
        },
        {
          masterId: 425,
          masterName: "陕汽轻卡",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/560/2023052326106482474256097925.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/560/w{0}_yichecar_2023052326106482474256097925.png.webp",
          serialList: [
            {
              serialId: 7235,
              serialName: "德龙K3000",
            },
            {
              serialId: 7236,
              serialName: "德龙N3000",
            },
          ],
        },
        {
          masterId: 415,
          masterName: "陕汽商用车",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/167/2023052326147482478116753549.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/167/w{0}_yichecar_2023052326147482478116753549.png.webp",
          serialList: [
            {
              serialId: 7057,
              serialName: "轩德翼3",
            },
            {
              serialId: 7062,
              serialName: "轩德X3",
            },
          ],
        },
        {
          masterId: 563,
          masterName: "神州",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/378/2023052326225482483437865495.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/378/w{0}_yichecar_2023052326225482483437865495.png.webp",
          serialList: [
            {
              serialId: 7879,
              serialName: "DST神州5号",
            },
            {
              serialId: 7878,
              serialName: "航天金龙",
            },
          ],
        },
        {
          masterId: 169,
          masterName: "陕汽通家",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/792/2023052326273482486679277399.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/792/w{0}_yichecar_2023052326273482486679277399.png.webp",
          serialList: [
            {
              serialId: 8277,
              serialName: "电牛2号",
            },
          ],
        },
        {
          masterId: 561,
          masterName: "申龙客车",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/69/2023052326274482487506907238.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/69/w{0}_yichecar_2023052326274482487506907238.png.webp",
          serialList: [
            {
              serialId: 7877,
              serialName: "申龙DST神州5号",
            },
            {
              serialId: 10524,
              serialName: "申龙地上铁510",
            },
            {
              serialId: 10526,
              serialName: "申龙V6",
            },
          ],
        },
        {
          masterId: 560,
          masterName: "上喆",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230704/483/202307041330844083548335298.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230704/483/w{0}_yichecar_202307041330844083548335298.png.webp",
          serialList: [
            {
              serialId: 7876,
              serialName: "上喆V-Class",
            },
          ],
        },
        {
          masterId: 189,
          masterName: "特斯拉",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/420/2023052324002482291542039183.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/420/w{0}_yichecar_2023052324002482291542039183.png.webp",
          serialList: [
            {
              serialId: 6224,
              serialName: "Model Y",
            },
            {
              serialId: 5845,
              serialName: "Model 3",
            },
            {
              serialId: 3843,
              serialName: "Model S",
            },
            {
              serialId: 3844,
              serialName: "Model X",
            },
          ],
        },
        {
          masterId: 453,
          masterName: "坦克",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/813/2023052324071482295181339234.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/813/w{0}_yichecar_2023052324071482295181339234.png.webp",
          serialList: [
            {
              serialId: 6866,
              serialName: "坦克300",
            },
            {
              serialId: 7583,
              serialName: "坦克500",
            },
            {
              serialId: 10263,
              serialName: "坦克400新能源",
            },
            {
              serialId: 9756,
              serialName: "坦克500新能源",
            },
          ],
        },
        {
          masterId: 175,
          masterName: "腾势",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/583/2023052324095482298358373000.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/583/w{0}_yichecar_2023052324095482298358373000.png.webp",
          serialList: [
            {
              serialId: 8380,
              serialName: "腾势D9",
            },
            {
              serialId: 9758,
              serialName: "腾势N7",
            },
            {
              serialId: 10122,
              serialName: "腾势N8",
            },
          ],
        },
        {
          masterId: 312,
          masterName: "天际汽车",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/862/2023052324147482299586271757.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/862/w{0}_yichecar_2023052324147482299586271757.png.webp",
          serialList: [
            {
              serialId: 7430,
              serialName: "天际ME5",
            },
            {
              serialId: 5528,
              serialName: "天际ME7",
            },
          ],
        },
        {
          masterId: 703,
          masterName: "拓锐斯特 ",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/738/2023052324148482301173888470.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/738/w{0}_yichecar_2023052324148482301173888470.png.webp",
          serialList: [
            {
              serialId: 9958,
              serialName: "拓锐斯特G20",
            },
            {
              serialId: 9959,
              serialName: "拓锐斯特威霆",
            },
            {
              serialId: 9960,
              serialName: "拓锐斯特V-Class",
            },
          ],
        },
        {
          masterId: 48,
          masterName: "五菱汽车",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230831/187/202308314335347215218715179.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230831/187/w{0}_yichecar_202308314335347215218715179.png.webp",
          serialList: [
            {
              serialId: 6580,
              serialName: "宏光MINIEV",
            },
            {
              serialId: 9905,
              serialName: "五菱缤果",
            },
            {
              serialId: 9569,
              serialName: "五菱星驰",
            },
            {
              serialId: 6786,
              serialName: "五菱凯捷",
            },
            {
              serialId: 8298,
              serialName: "五菱佳辰",
            },
            {
              serialId: 7452,
              serialName: "五菱星辰",
            },
            {
              serialId: 4147,
              serialName: "五菱宏光S",
            },
            {
              serialId: 7605,
              serialName: "五菱征程",
            },
            {
              serialId: 10302,
              serialName: "五菱星云",
            },
            {
              serialId: 5043,
              serialName: "五菱宏光S3",
            },
            {
              serialId: 6056,
              serialName: "五菱宏光PLUS",
            },
            {
              serialId: 1692,
              serialName: "五菱之光",
            },
            {
              serialId: 5657,
              serialName: "五菱宏光V",
            },
            {
              serialId: 5420,
              serialName: "五菱荣光新卡",
            },
            {
              serialId: 2576,
              serialName: "五菱荣光",
            },
            {
              serialId: 4571,
              serialName: "五菱荣光小卡",
            },
            {
              serialId: 9570,
              serialName: "五菱征程EV",
            },
            {
              serialId: 10464,
              serialName: "五菱荣光新卡房车",
            },
            {
              serialId: 4420,
              serialName: "五菱荣光V",
            },
            {
              serialId: 9061,
              serialName: "五菱Air ev晴空",
            },
            {
              serialId: 9873,
              serialName: "五菱微旅车",
            },
            {
              serialId: 7349,
              serialName: "五菱征途",
            },
            {
              serialId: 10210,
              serialName: "五菱龙卡",
            },
            {
              serialId: 6744,
              serialName: "五菱荣光S",
            },
            {
              serialId: 7458,
              serialName: "五菱NanoEV",
            },
            {
              serialId: 6721,
              serialName: "五菱之光小卡",
            },
            {
              serialId: 8281,
              serialName: "五菱E10",
            },
            {
              serialId: 6595,
              serialName: "五菱荣光EV",
            },
            {
              serialId: 6787,
              serialName: "五菱荣光小卡专用车",
            },
            {
              serialId: 6788,
              serialName: "五菱荣光新卡专用车",
            },
            {
              serialId: 6186,
              serialName: "五菱EV50",
            },
            {
              serialId: 10465,
              serialName: "五菱荣光小卡专用车EV",
            },
            {
              serialId: 10509,
              serialName: "五菱荣光新卡EV",
            },
            {
              serialId: 10413,
              serialName: "五菱EV80",
            },
            {
              serialId: 9720,
              serialName: "五菱荣光小卡EV",
            },
            {
              serialId: 7530,
              serialName: "五菱电卡",
            },
          ],
        },
        {
          masterId: 19,
          masterName: "沃尔沃",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/731/2023052327926482604173141397.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/731/w{0}_yichecar_2023052327926482604173141397.png.webp",
          serialList: [
            {
              serialId: 4340,
              serialName: "沃尔沃XC60",
            },
            {
              serialId: 4901,
              serialName: "沃尔沃S90",
            },
            {
              serialId: 2145,
              serialName: "沃尔沃XC90",
            },
            {
              serialId: 10548,
              serialName: "沃尔沃EM90",
            },
            {
              serialId: 3768,
              serialName: "沃尔沃S60",
            },
            {
              serialId: 5697,
              serialName: "沃尔沃XC40",
            },
            {
              serialId: 5274,
              serialName: "沃尔沃XC60 RECHARGE",
            },
            {
              serialId: 5192,
              serialName: "沃尔沃XC90 RECHARGE",
            },
            {
              serialId: 3268,
              serialName: "沃尔沃V60",
            },
            {
              serialId: 5405,
              serialName: "沃尔沃S90 RECHARGE",
            },
            {
              serialId: 4737,
              serialName: "沃尔沃V90",
            },
            {
              serialId: 5194,
              serialName: "沃尔沃S60 RECHARGE",
            },
            {
              serialId: 8280,
              serialName: "沃尔沃C40",
            },
            {
              serialId: 7056,
              serialName: "沃尔沃XC40 RECHARGE",
            },
          ],
        },
        {
          masterId: 266,
          masterName: "蔚来",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/745/202305239868480982874537995.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/745/w{0}_yichecar_202305239868480982874537995.png.webp",
          serialList: [
            {
              serialId: 5551,
              serialName: "蔚来ES6",
            },
            {
              serialId: 7969,
              serialName: "蔚来ET5",
            },
            {
              serialId: 5033,
              serialName: "蔚来ES8",
            },
            {
              serialId: 10355,
              serialName: "蔚来ET5T",
            },
            {
              serialId: 6213,
              serialName: "蔚来EC6",
            },
            {
              serialId: 5745,
              serialName: "蔚来ET7",
            },
            {
              serialId: 8151,
              serialName: "蔚来ES7",
            },
            {
              serialId: 9861,
              serialName: "蔚来EC7",
            },
          ],
        },
        {
          masterId: 270,
          masterName: "魏牌",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/308/202305239869480984030876055.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/308/w{0}_yichecar_202305239869480984030876055.png.webp",
          serialList: [
            {
              serialId: 9991,
              serialName: "高山 DHT PHEV",
            },
            {
              serialId: 9841,
              serialName: "蓝山 DHT PHEV",
            },
            {
              serialId: 7475,
              serialName: "拿铁",
            },
            {
              serialId: 7357,
              serialName: "摩卡 DHT PHEV",
            },
            {
              serialId: 9421,
              serialName: "拿铁 DHT PHEV",
            },
          ],
        },
        {
          masterId: 132,
          masterName: "五十铃",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/768/202305239903480985376877570.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/768/w{0}_yichecar_202305239903480985376877570.png.webp",
          serialList: [
            {
              serialId: 4280,
              serialName: "D-MAX",
            },
            {
              serialId: 5369,
              serialName: "铃拓",
            },
            {
              serialId: 4555,
              serialName: "牧游侠",
            },
            {
              serialId: 4671,
              serialName: "瑞迈",
            },
            {
              serialId: 6874,
              serialName: "翼放EC",
            },
            {
              serialId: 10354,
              serialName: "翼放EM",
            },
            {
              serialId: 6713,
              serialName: "翼放ES",
            },
            {
              serialId: 5553,
              serialName: "瑞迈EV",
            },
            {
              serialId: 7291,
              serialName: "翼放EV",
            },
          ],
        },
        {
          masterId: 725,
          masterName: "未奥汽车",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/558/2023052310133481002655868295.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/558/w{0}_yichecar_2023052310133481002655868295.png.webp",
          serialList: [
            {
              serialId: 10090,
              serialName: "未奥BOMA",
            },
          ],
        },
        {
          masterId: 763,
          masterName: "维努斯",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230831/380/202308313348347066338019915.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230831/380/w{0}_yichecar_202308313348347066338019915.png.webp",
          serialList: [
            {
              serialId: 5209,
              serialName: "维努斯Sprinter",
            },
            {
              serialId: 8078,
              serialName: "维努斯V-Class",
            },
          ],
        },
        {
          masterId: 510,
          masterName: "WALD",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/658/202305239946480989865861603.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/658/w{0}_yichecar_202305239946480989865861603.png.webp",
          serialList: [
            {
              serialId: 7781,
              serialName: "WALD V-Class",
            },
          ],
        },
        {
          masterId: 647,
          masterName: "伟昊汽车",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/414/202305239947480990841465780.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/414/w{0}_yichecar_202305239947480990841465780.png.webp",
          serialList: [
            {
              serialId: 8292,
              serialName: "卡漠兹V级",
            },
          ],
        },
        {
          masterId: 247,
          masterName: "潍柴欧睿",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/765/202305239983480991976562611.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/765/w{0}_yichecar_202305239983480991976562611.png.webp",
          serialList: [
            {
              serialId: 4623,
              serialName: "欧睿",
            },
          ],
        },
        {
          masterId: 673,
          masterName: "万象汽车",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/44/2023052310013480996704492867.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/44/w{0}_yichecar_2023052310013480996704492867.png.webp",
          serialList: [
            {
              serialId: 9721,
              serialName: "万象T01",
            },
            {
              serialId: 9712,
              serialName: "万象DST神州5号",
            },
            {
              serialId: 9711,
              serialName: "万象K01",
            },
          ],
        },
        {
          masterId: 13,
          masterName: "现代",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/781/2023052327827482596678163823.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/781/w{0}_yichecar_2023052327827482596678163823.png.webp",
          serialList: [
            {
              serialId: 1569,
              serialName: "伊兰特",
            },
            {
              serialId: 2874,
              serialName: "现代ix35",
            },
            {
              serialId: 1574,
              serialName: "途胜",
            },
            {
              serialId: 3821,
              serialName: "胜达",
            },
            {
              serialId: 4399,
              serialName: "索纳塔",
            },
            {
              serialId: 7066,
              serialName: "库斯途",
            },
            {
              serialId: 6297,
              serialName: "帕里斯帝",
            },
            {
              serialId: 2334,
              serialName: "悦动",
            },
            {
              serialId: 5426,
              serialName: "LAFESTA 菲斯塔",
            },
            {
              serialId: 3913,
              serialName: "名图",
            },
            {
              serialId: 10460,
              serialName: "伊兰特Elantra N",
            },
            {
              serialId: 4811,
              serialName: "悦纳",
            },
            {
              serialId: 7131,
              serialName: "名图 纯电动",
            },
            {
              serialId: 6066,
              serialName: "Nexo",
            },
            {
              serialId: 6851,
              serialName: "泓图",
            },
            {
              serialId: 4207,
              serialName: "创虎",
            },
            {
              serialId: 6850,
              serialName: "盛图",
            },
          ],
        },
        {
          masterId: 49,
          masterName: "雪佛兰",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/426/2023052328454482635042658254.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/426/w{0}_yichecar_2023052328454482635042658254.png.webp",
          serialList: [
            {
              serialId: 5531,
              serialName: "科鲁泽",
            },
            {
              serialId: 4738,
              serialName: "迈锐宝XL",
            },
            {
              serialId: 5648,
              serialName: "开拓者",
            },
            {
              serialId: 4932,
              serialName: "探界者",
            },
            {
              serialId: 9496,
              serialName: "星迈罗",
            },
            {
              serialId: 3794,
              serialName: "创酷",
            },
            {
              serialId: 5986,
              serialName: "畅巡",
            },
          ],
        },
        {
          masterId: 316,
          masterName: "星途",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/113/2023052323043482223411309337.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/113/w{0}_yichecar_2023052323043482223411309337.png.webp",
          serialList: [
            {
              serialId: 5790,
              serialName: "星途揽月",
            },
            {
              serialId: 9759,
              serialName: "星途瑶光",
            },
            {
              serialId: 5692,
              serialName: "星途凌云",
            },
            {
              serialId: 5552,
              serialName: "星途追风",
            },
            {
              serialId: 5280,
              serialName: "星途TX",
            },
            {
              serialId: 5791,
              serialName: "星途追风PHEV",
            },
          ],
        },
        {
          masterId: 297,
          masterName: "小鹏",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/386/2023052323071482224738653440.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/386/w{0}_yichecar_2023052323071482224738653440.png.webp",
          serialList: [
            {
              serialId: 5694,
              serialName: "小鹏P7",
            },
            {
              serialId: 8040,
              serialName: "小鹏G9",
            },
            {
              serialId: 10151,
              serialName: "小鹏G6",
            },
            {
              serialId: 7445,
              serialName: "小鹏P5",
            },
            {
              serialId: 5342,
              serialName: "小鹏G3",
            },
          ],
        },
        {
          masterId: 6,
          masterName: "雪铁龙",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/268/2023052327646482589126891663.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/268/w{0}_yichecar_2023052327646482589126891663.png.webp",
          serialList: [
            {
              serialId: 7457,
              serialName: "凡尔赛C5 X",
            },
            {
              serialId: 4832,
              serialName: "雪铁龙C6",
            },
            {
              serialId: 5009,
              serialName: "天逸 C5 AIRCROSS",
            },
            {
              serialId: 4306,
              serialName: "雪铁龙C3-XR",
            },
            {
              serialId: 6841,
              serialName: "天逸 C5 AIRCROSS 插电混动",
            },
          ],
        },
        {
          masterId: 464,
          masterName: "小虎",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/117/2023052323148482232811719346.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/117/w{0}_yichecar_2023052323148482232811719346.png.webp",
          serialList: [
            {
              serialId: 7676,
              serialName: "小虎FEV",
            },
          ],
        },
        {
          masterId: 338,
          masterName: "SRM鑫源",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/883/2023052323264482239188307188.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/883/w{0}_yichecar_2023052323264482239188307188.png.webp",
          serialList: [
            {
              serialId: 10010,
              serialName: "好运",
            },
            {
              serialId: 5312,
              serialName: "新海狮EV",
            },
            {
              serialId: 10415,
              serialName: "鑫源T1L EV",
            },
            {
              serialId: 5830,
              serialName: "好运1号",
            },
            {
              serialId: 6183,
              serialName: "小海狮EV",
            },
            {
              serialId: 10215,
              serialName: "鑫源T5L EV",
            },
            {
              serialId: 5940,
              serialName: "鑫源T50 EV",
            },
            {
              serialId: 10011,
              serialName: "启运",
            },
            {
              serialId: 10477,
              serialName: "豪运",
            },
            {
              serialId: 10271,
              serialName: "鑫源T3L EV",
            },
            {
              serialId: 8000,
              serialName: "鑫源T2S EV",
            },
          ],
        },
        {
          masterId: 208,
          masterName: "新龙马汽车",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/455/2023052323184482233945597224.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/455/w{0}_yichecar_2023052323184482233945597224.png.webp",
          serialList: [
            {
              serialId: 4649,
              serialName: "新龙马启腾EX80",
            },
            {
              serialId: 4107,
              serialName: "新龙马启腾M70",
            },
            {
              serialId: 7215,
              serialName: "新龙马启腾EX7",
            },
            {
              serialId: 7444,
              serialName: "新龙马启腾N50",
            },
            {
              serialId: 5180,
              serialName: "新龙马启腾M70 EV",
            },
            {
              serialId: 7443,
              serialName: "新龙马启腾N30",
            },
            {
              serialId: 8019,
              serialName: "新龙马启腾龙7",
            },
            {
              serialId: 8017,
              serialName: "新龙马启腾N60",
            },
            {
              serialId: 7160,
              serialName: "新龙马启腾N50 EV",
            },
          ],
        },
        {
          masterId: 435,
          masterName: "徐工汽车",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/157/2023052323231482237315760641.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/157/w{0}_yichecar_2023052323231482237315760641.png.webp",
          serialList: [
            {
              serialId: 7333,
              serialName: "祺龙",
            },
            {
              serialId: 7332,
              serialName: "汉风",
            },
          ],
        },
        {
          masterId: 623,
          masterName: "新吉奥",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/947/2023052323272482240194790842.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/947/w{0}_yichecar_2023052323272482240194790842.png.webp",
          serialList: [
            {
              serialId: 8064,
              serialName: "吉奥帅凌",
            },
            {
              serialId: 9268,
              serialName: "吉奥奥腾",
            },
            {
              serialId: 10317,
              serialName: "吉奥帅豹",
            },
            {
              serialId: 10318,
              serialName: "吉奥睿征",
            },
            {
              serialId: 9671,
              serialName: "吉奥帅舰",
            },
            {
              serialId: 8785,
              serialName: "吉奥帅驰",
            },
          ],
        },
        {
          masterId: 515,
          masterName: "AM晓奥汽车",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/572/2023052323273482241257253747.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/572/w{0}_yichecar_2023052323273482241257253747.png.webp",
          serialList: [
            {
              serialId: 7791,
              serialName: "晓奥V-Class",
            },
          ],
        },
        {
          masterId: 100,
          masterName: "英菲尼迪",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230707/373/202307071266869507137319246.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230707/373/w{0}_yichecar_202307071266869507137319246.png.webp",
          serialList: [
            {
              serialId: 7622,
              serialName: "英菲尼迪QX60",
            },
            {
              serialId: 4304,
              serialName: "英菲尼迪Q50L",
            },
            {
              serialId: 4349,
              serialName: "英菲尼迪QX50",
            },
            {
              serialId: 6122,
              serialName: "英菲尼迪QX55",
            },
          ],
        },
        {
          masterId: 689,
          masterName: "仰望",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/195/2023052314208481333319592726.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/195/w{0}_yichecar_2023052314208481333319592726.png.webp",
          serialList: [
            {
              serialId: 9889,
              serialName: "仰望U8",
            },
          ],
        },
        {
          masterId: 41,
          masterName: "依维柯",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/448/2023052328265482626044872171.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/448/w{0}_yichecar_2023052328265482626044872171.png.webp",
          serialList: [
            {
              serialId: 3624,
              serialName: "依维柯得意",
            },
            {
              serialId: 1775,
              serialName: "依维柯欧胜",
            },
            {
              serialId: 9969,
              serialName: "依维柯聚星",
            },
            {
              serialId: 3627,
              serialName: "依维柯Ouba",
            },
            {
              serialId: 10619,
              serialName: "依维柯聚星 纯电动",
            },
            {
              serialId: 9921,
              serialName: "依维柯欧风",
            },
            {
              serialId: 7510,
              serialName: "依维柯欧胜 纯电动",
            },
          ],
        },
        {
          masterId: 409,
          masterName: "一汽解放",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/530/2023052314134481330353029279.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/530/w{0}_yichecar_2023052314134481330353029279.png.webp",
          serialList: [
            {
              serialId: 6978,
              serialName: "解放J6L",
            },
            {
              serialId: 6976,
              serialName: "解放J6P",
            },
            {
              serialId: 7315,
              serialName: "解放霸铃",
            },
            {
              serialId: 6975,
              serialName: "解放J7",
            },
            {
              serialId: 7313,
              serialName: "解放经典1系",
            },
            {
              serialId: 7314,
              serialName: "解放公狮",
            },
            {
              serialId: 7311,
              serialName: "解放经典5系",
            },
            {
              serialId: 7310,
              serialName: "解放经典7系",
            },
            {
              serialId: 7316,
              serialName: "解放经典2系",
            },
            {
              serialId: 7312,
              serialName: "解放经典3系",
            },
          ],
        },
        {
          masterId: 285,
          masterName: "云度",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/635/2023052314267481335963587023.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/635/w{0}_yichecar_2023052314267481335963587023.png.webp",
          serialList: [
            {
              serialId: 9970,
              serialName: "云兔",
            },
            {
              serialId: 5196,
              serialName: "云度π1",
            },
          ],
        },
        {
          masterId: 53,
          masterName: "一汽",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/293/2023052328571482642329390233.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/293/w{0}_yichecar_2023052328571482642329390233.png.webp",
          serialList: [
            {
              serialId: 7586,
              serialName: "森雅鸿雁",
            },
            {
              serialId: 5848,
              serialName: "一汽蓝舰H6",
            },
          ],
        },
        {
          masterId: 348,
          masterName: "远程",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/916/2023052314284481337891623360.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/916/w{0}_yichecar_2023052314284481337891623360.png.webp",
          serialList: [
            {
              serialId: 8296,
              serialName: "远程星享V",
            },
            {
              serialId: 5955,
              serialName: "远程E5",
            },
            {
              serialId: 5954,
              serialName: "远程E6",
            },
            {
              serialId: 5978,
              serialName: "远程RE500",
            },
            {
              serialId: 7582,
              serialName: "远程星智",
            },
            {
              serialId: 6839,
              serialName: "远程FX",
            },
            {
              serialId: 10617,
              serialName: "远程锋锐V5M",
            },
            {
              serialId: 10294,
              serialName: "远程星享F1E",
            },
            {
              serialId: 5956,
              serialName: "远程E200",
            },
            {
              serialId: 7680,
              serialName: "锋锐F3E",
            },
            {
              serialId: 9895,
              serialName: "锋锐V5E",
            },
            {
              serialId: 5957,
              serialName: "远程E200S",
            },
          ],
        },
        {
          masterId: 138,
          masterName: "野马汽车",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230605/784/20230605572593031678438009.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230605/784/w{0}_yichecar_20230605572593031678438009.png.webp",
          serialList: [
            {
              serialId: 5287,
              serialName: "博骏",
            },
            {
              serialId: 5186,
              serialName: "斯派卡",
            },
            {
              serialId: 6717,
              serialName: "斯派卡EV",
            },
            {
              serialId: 7670,
              serialName: "野马MINI卡",
            },
          ],
        },
        {
          masterId: 447,
          masterName: "一汽解放轻卡",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/691/2023052314231481334769167262.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/691/w{0}_yichecar_2023052314231481334769167262.png.webp",
          serialList: [
            {
              serialId: 6974,
              serialName: "解放虎VR",
            },
            {
              serialId: 6950,
              serialName: "解放J6F",
            },
            {
              serialId: 6951,
              serialName: "解放领途",
            },
            {
              serialId: 7143,
              serialName: "解放虎VH",
            },
            {
              serialId: 7142,
              serialName: "解放虎VN",
            },
            {
              serialId: 6952,
              serialName: "解放麟VH",
            },
          ],
        },
        {
          masterId: 258,
          masterName: "驭胜",
          logoUrl:
            "https://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_258_100.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/bt/car/default/images/logo/masterbrand/png/100/w{0}_yichecar_m_258_100.png.webp",
          serialList: [
            {
              serialId: 3288,
              serialName: "驭胜S350",
            },
          ],
        },
        {
          masterId: 178,
          masterName: "宇通客车",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/962/2023052314365481342796281666.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/962/w{0}_yichecar_2023052314365481342796281666.png.webp",
          serialList: [
            {
              serialId: 4835,
              serialName: "宇通T7",
            },
            {
              serialId: 6884,
              serialName: "宇通T7E",
            },
          ],
        },
        {
          masterId: 707,
          masterName: "野马新能源",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/9/2023052314333481340900993205.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/9/w{0}_yichecar_2023052314333481340900993205.png.webp",
          serialList: [
            {
              serialId: 5460,
              serialName: "野马EC60",
            },
          ],
        },
        {
          masterId: 731,
          masterName: "运良",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230605/288/20230605583593050928802861.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230605/288/w{0}_yichecar_20230605583593050928802861.png.webp",
          serialList: [
            {
              serialId: 10163,
              serialName: "战马",
            },
          ],
        },
        {
          masterId: 437,
          masterName: "一汽凌河",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/615/2023052314425481348661570103.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/615/w{0}_yichecar_2023052314425481348661570103.png.webp",
          serialList: [
            {
              serialId: 10523,
              serialName: "雷神",
            },
            {
              serialId: 7342,
              serialName: "一汽凌河 F200",
            },
            {
              serialId: 7343,
              serialName: "沪尊S200",
            },
          ],
        },
        {
          masterId: 517,
          masterName: "雅升汽车",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/755/2023052314394481347175550302.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/755/w{0}_yichecar_2023052314394481347175550302.png.webp",
          serialList: [
            {
              serialId: 7794,
              serialName: "雅升V-Class",
            },
          ],
        },
        {
          masterId: 769,
          masterName: "越界",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230927/83/202309273874580915608386408.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230927/83/w{0}_yichecar_202309273874580915608386408.png.webp",
          serialList: [
            {
              serialId: 10531,
              serialName: "露营大师7系",
            },
          ],
        },
        {
          masterId: 439,
          masterName: "智己汽车",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/659/2023052313932481302665956339.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/659/w{0}_yichecar_2023052313932481302665956339.png.webp",
          serialList: [
            {
              serialId: 10346,
              serialName: "智己LS6",
            },
            {
              serialId: 7354,
              serialName: "智己LS7",
            },
            {
              serialId: 7353,
              serialName: "智己L7",
            },
          ],
        },
        {
          masterId: 77,
          masterName: "众泰",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/675/2023052328827482661267513869.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/675/w{0}_yichecar_2023052328827482661267513869.png.webp",
          serialList: [
            {
              serialId: 5140,
              serialName: "众泰T300",
            },
          ],
        },
        {
          masterId: 364,
          masterName: "中国重汽VGV",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/201/2023052313931481301020198981.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/201/w{0}_yichecar_2023052313931481301020198981.png.webp",
          serialList: [
            {
              serialId: 9514,
              serialName: "VGV U70Pro",
            },
            {
              serialId: 7562,
              serialName: "VGV U75 PLUS",
            },
            {
              serialId: 6054,
              serialName: "VGV U70",
            },
            {
              serialId: 8147,
              serialName: "VGV U75",
            },
            {
              serialId: 8263,
              serialName: "VGV VX7",
            },
          ],
        },
        {
          masterId: 401,
          masterName: "中国重汽",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/384/2023052313933481304038473188.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/384/w{0}_yichecar_2023052313933481304038473188.png.webp",
          serialList: [
            {
              serialId: 6923,
              serialName: "HOWO统帅",
            },
            {
              serialId: 6922,
              serialName: "HOWO悍将",
            },
            {
              serialId: 6921,
              serialName: "HOWO追梦",
            },
            {
              serialId: 7019,
              serialName: "SITRAK G7",
            },
            {
              serialId: 7018,
              serialName: "SITRAK G5",
            },
            {
              serialId: 7022,
              serialName: "SITRAK G7H",
            },
            {
              serialId: 7032,
              serialName: "HOWO T7H",
            },
            {
              serialId: 10495,
              serialName: "HOWO小将",
            },
            {
              serialId: 7021,
              serialName: "SITRAK C5H",
            },
            {
              serialId: 7020,
              serialName: "SITRAK C7H",
            },
            {
              serialId: 7023,
              serialName: "HOWO TH7",
            },
            {
              serialId: 7033,
              serialName: "HOWO T5G",
            },
            {
              serialId: 7041,
              serialName: "豪瀚N5G",
            },
            {
              serialId: 7037,
              serialName: "斯太尔M5G",
            },
            {
              serialId: 7039,
              serialName: "豪瀚N5W",
            },
            {
              serialId: 7028,
              serialName: "HOWO G5X",
            },
            {
              serialId: 7040,
              serialName: "豪瀚N7W",
            },
            {
              serialId: 7043,
              serialName: "豪瀚N7G",
            },
            {
              serialId: 7042,
              serialName: "豪瀚N6G",
            },
          ],
        },
        {
          masterId: 33,
          masterName: "中兴",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/636/2023052328129482617563607039.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/636/w{0}_yichecar_2023052328129482617563607039.png.webp",
          serialList: [
            {
              serialId: 7450,
              serialName: "中兴1949",
            },
            {
              serialId: 4611,
              serialName: "小老虎",
            },
            {
              serialId: 10562,
              serialName: "中兴1949房车",
            },
            {
              serialId: 7702,
              serialName: "中兴1986",
            },
            {
              serialId: 1728,
              serialName: "威虎",
            },
            {
              serialId: 4856,
              serialName: "领主",
            },
          ],
        },
        {
          masterId: 246,
          masterName: "重汽王牌",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/9/2023052313996481309100948628.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/9/w{0}_yichecar_2023052313996481309100948628.png.webp",
          serialList: [
            {
              serialId: 7293,
              serialName: "王牌瑞狮",
            },
            {
              serialId: 7292,
              serialName: "王牌力狮",
            },
            {
              serialId: 7294,
              serialName: "王牌腾狮",
            },
            {
              serialId: 7295,
              serialName: "王牌佑狮",
            },
          ],
        },
        {
          masterId: 432,
          masterName: "重汽豪曼",
          logoUrl:
            "http://image.bitauto.com/cargroup/car/20230523/907/2023052313998481312090762353.png",
          logoUrlWebp:
            "https://img5.bitautoimg.com/usercenter/cargroup/car/20230523/907/w{0}_yichecar_2023052313998481312090762353.png.webp",
          serialList: [
            {
              serialId: 7287,
              serialName: "豪曼H5",
            },
            {
              serialId: 7286,
              serialName: "豪曼H3",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.logo {
  width: 40px;
  height: 40px;
}
</style>
