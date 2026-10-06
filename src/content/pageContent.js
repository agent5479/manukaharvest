/**
 * Page copy for Mānuka Harvest.
 * Edit this file until the Firebase editor is connected.
 * Keep the same keys in `en` and `zh`.
 *
 * Email below is a placeholder. Replace it with the working inbox
 * before the site goes live. The phone is Julian's published mobile.
 */
const asset = (file) => `${import.meta.env.BASE_URL}${file}`;

export const pageContent = {
  site: {
    brand: "Mānuka Harvest",
    legalName: "Manuka Harvest Limited",
    holding: "40 Degrees South Limited",
    director: "Julian Edward Hall",
    incorporated: "28 March 2007",
    years: "19",
    nzbn: "9429033502335",
    companyNumber: "1925722",
    phoneDisplay: "+64 21 083 4794",
    phoneHref: "tel:+642108347944",
    email: "enquiries@manukaharvest.co.nz",
    mapHref:
      "https://maps.google.com/?q=17+Rangihaeata+Road+Takaka+New+Zealand",
    images: {
      hero: asset("images/steep.jpg"),
      ranges: asset("images/julian-outdoors.jpg"),
      bush: asset("images/julian-hiking.jpg"),
      founder: asset("images/julian-hall.jpg"),
      cup: asset("images/loose-leaf.jpg"),
      tree: asset("images/manuka-tree.jpg"),
      tips: asset("images/manuka-tips.jpg"),
      flower: asset("images/manuka-flower.jpg"),
      grove: asset("images/manuka-grove.jpg"),
    },
  },
  en: {
    nav: [
      { href: "/tea/", label: "The tea" },
      { href: "/origin/", label: "Origin" },
      { href: "/order/", label: "Order" },
      { href: "/contact/", label: "Contact" },
    ],
    skip: "Skip to content",
    langLabel: "中文",
    otherLang: "zh",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    hero: {
      kicker: "Golden Bay, New Zealand",
      title: "Mānuka Harvest",
      han: "Wild mānuka leaf, packed for China",
      lede: "Loose-leaf herbal tea from native mānuka, cut by hand in the sheltered gullies above Tākaka. Dried, graded, and packed in small batches, then sent mostly to China.",
      primary: "Request supply",
      secondary: "The tea",
      imageAlt: "Loose leaf steeping in a glass infuser",
      seal: ["Wild grown", "Est. 2007", "Tākaka"],
    },
    stats: [
      { value: "2007", label: "Company incorporated" },
      { value: "19", label: "Years of small batches" },
      { value: "100%", label: "Wild mānuka leaf" },
      { value: "0", label: "Caffeine, by nature" },
    ],
    seo: {
      home: {
        title: "Mānuka Harvest — Wild leaf tea from Golden Bay",
        description:
          "Loose-leaf mānuka tea, hand-harvested in Golden Bay, New Zealand, and supplied mainly to China. Caffeine-free. Packed in Tākaka since 2007.",
      },
      tea: {
        title: "Loose-leaf mānuka tea | Mānuka Harvest",
        description:
          "Earthy, resinous mānuka leaf tea. Whole leaf, nothing added, naturally caffeine-free. 25g and 60g bags from Golden Bay.",
      },
      origin: {
        title: "Hand-harvested in Tākaka | Mānuka Harvest",
        description:
          "Wild mānuka from New Zealand, hand-harvested for tea. Traditional use for colds, digestion, and the skin, and the oils studied in the leaf.",
      },
      order: {
        title: "Wholesale mānuka tea for export | Mānuka Harvest",
        description:
          "Request supply of Mānuka Harvest tea for China and other export markets, or for a New Zealand shop.",
      },
      contact: {
        title: "Contact Mānuka Harvest | Tākaka",
        description:
          "Write to the packing room at 17 Rangihaeata Road, Tākaka, Golden Bay, New Zealand.",
      },
    },
    home: {
      gates: [
        {
          href: "/tea/",
          title: "The tea",
          text: "Earthy and resinous, with a floral edge. Whole leaf, nothing added, no caffeine.",
        },
        {
          href: "/origin/",
          title: "The bay",
          text: "Wild mānuka above the South Island. Soft tips only, and a leaf long kept as a medicinal cup.",
        },
        {
          href: "/order/",
          title: "Supply",
          text: "Most of the leaf goes to China. New Zealand shops are welcome too.",
        },
      ],
    },
    place: {
      index: "01",
      kicker: "The place",
      title: "A leaf from the bay, not a plantation row",
      body: [
        "Mānuka Harvest works with wild Leptospermum scoparium growing around Golden Bay. The trees are not planted in lines for this tea. Harvesters look for recent growth in shade and shelter, because wind-exposed tips come up harder in the hand.",
        "Only the soft ends are taken. A small part of each tree is cut, the tree is left standing, and the same plant can be visited again about six months later. The leaf is then dried, graded, and packed at 17 Rangihaeata Road, Tākaka.",
      ],
      imageAlt: "A wild mānuka tree in white flower, Westland, New Zealand",
      caption:
        "Flowering mānuka, Westland Tai Poutini National Park. Photo: Krzysztof Golik, CC BY-SA 4.0.",
    },
    tea: {
      index: "02",
      kicker: "The leaf",
      title: "Earthy, resinous, quietly floral",
      lede: "A caffeine-free loose-leaf herbal tea. Nothing is added. The cup is aromatic, with a slight bitterness and a floral edge if you steep it longer.",
      imageAlt: "White mānuka flowers and narrow leaves on a wild branch",
      caption:
        "The soft tips, in flower. Abel Tasman National Park. Photo: Krzysztof Golik, CC BY-SA 4.0.",
      benefitsTitle: "What the leaf has been taken for",
      benefits: [
        "A hot infusion for seasonal colds and fever, and for a tight chest.",
        "A cup associated with an unsettled stomach and with urinary discomfort.",
        "Bruised leaves, bound on the skin, in the older treatment of wounds.",
        "Aromatic oils in the leaf, including leptospermone, studied for antibacterial and antioxidant activity.",
      ],
      packs: [
        {
          weight: "25g",
          name: "Signature bag",
          detail:
            "The usual retail pack. Loose whole leaf, enough for a run of cups or a gift.",
        },
        {
          weight: "60g",
          name: "Pantry bag",
          detail:
            "The same leaf in a larger bag for a household or a tea counter.",
        },
      ],
      exportTitle: "Export formats",
      exportBody:
        "China is the main market. Retail bags and larger export packs are prepared to order in Tākaka. Carton size, labelling, and documents are agreed with each buyer. We do not publish a standing price list here.",
      points: [
        "100% wild-grown mānuka leaf",
        "Hand-picked, graded, and packed",
        "Naturally dried in small batches",
        "No additives or preservatives",
        "Naturally caffeine-free",
        "Whole leaf, not a dust tea bag",
      ],
    },
    craft: {
      index: "03",
      kicker: "The work",
      title: "Four quiet steps, then a sealed bag",
      steps: [
        {
          n: "01",
          title: "Choose",
          text: "Soft new growth, from trees in shade or out of the prevailing wind.",
        },
        {
          n: "02",
          title: "Cut",
          text: "By hand, and only a little from each tree, so the plant keeps growing.",
        },
        {
          n: "03",
          title: "Dry",
          text: "Naturally dried, then graded. Batches stay small enough to watch.",
        },
        {
          n: "04",
          title: "Pack",
          text: "Loose leaf into 25g and 60g bags, or an export format agreed in advance.",
        },
      ],
      quote:
        "Only the soft tips. Only the sheltered trees. Then we leave them to grow.",
      imageAlt: "Flowering mānuka trees in the Silver Peaks, Otago",
      credit: "Silver Peaks, Otago. Photo: Tomas Sobek, CC BY-SA 4.0.",
    },
    heritage: {
      index: "04",
      kicker: "A long use",
      title: "The medicinal uses of the leaf",
      imageAlt: "Close view of wild mānuka flowers and leaves",
      caption:
        "Mānuka in flower, Cullen Point, Marlborough. Photo: Krzysztof Golik, CC BY-SA 4.0.",
      cards: [
        {
          title: "Colds and fever",
          text: "Māori brewed the leaf, and later settlers did the same. A hot infusion was drunk for seasonal colds and fever. The steam was used when the chest felt tight. In 1769, crew from Cook’s voyage were already drinking the green leaf after a long passage. That habit is where the English name “tea tree” comes from.",
        },
        {
          title: "Digestion and urinary discomfort",
          text: "In the same traditional practice the cup was taken for an unsettled stomach, and for urinary complaints. It was a household drink for those discomforts, not a clinic preparation.",
        },
        {
          title: "Skin",
          text: "Fresh leaves were bruised into a poultice and bound on, sometimes with flax, for wounds and irritated skin. That is a use of the leaf on the body. It is separate from the cup.",
        },
        {
          title: "The oils that have been studied",
          text: "The leaf carries aromatic oils, including leptospermone, one of the β-triketones that give mānuka its resinous smell. Laboratory work has examined antibacterial and antioxidant activity in the leaf and its oil. Those studies are about the plant. They are not a clinical trial of this tea.",
        },
      ],
      disclaimer:
        "Mānuka Harvest sells the dried leaf as a food. The uses above are tradition, and published laboratory research on the plant. This tea is not a medicine, and it is not sold to diagnose, treat, cure, or prevent any condition.",
    },
    brew: {
      index: "05",
      kicker: "In the cup, and in the kitchen",
      title: "One teaspoon. Boiling water. A few quiet minutes.",
      steps: [
        "Measure about one teaspoon of leaf for each cup.",
        "Put it in a pot or an infuser. This is loose leaf, not a paper bag.",
        "Pour freshly boiled water over the leaf.",
        "Steep for three to five minutes. Longer gives a deeper, more resinous cup.",
      ],
      kitchenTitle: "Beyond the pot",
      kitchen:
        "The dried whole leaf is also used as a rub for roasted meats, especially lamb and game, and can be warmed into a cooking oil. Once a bag is open, keep it sealed and away from heat and moisture.",
      imageAlt: "Loose leaf tea in a pot",
      caption: "Steeped loose leaf.",
    },
    founder: {
      index: "06",
      kicker: "The person who packs it",
      title: "Julian Edward Hall",
      role: "Director and founder, Manuka Harvest Limited",
      body: [
        "Julian has been director since the company was incorporated on 28 March 2007. The shares are held by 40 Degrees South Limited, the ultimate holding company, at the same address on Rangihaeata Road.",
        "He was born in Tākaka and has lived in Golden Bay for most of his life. He grew up at Tukurua, on the western side of the bay, where his parents took on a farm and a camping ground in the early 1970s.",
        "With his wife Nicola he runs a family food and beverage business trading into Asia and Europe. His part of that work is the marketing and the accounts. Before the business, he spent twenty-one years in the Scientific Observer Programme, with time in the Falkland Islands, Africa, and the Antarctic.",
        "The tea is still a small-batch job at home in Tākaka. Nineteen years on, the leaf is chosen the same way: wild trees, soft tips, a short trip from the hill to the packing table.",
      ],
      imageAlt: "Portrait of Julian Edward Hall",
      caption: "Julian Edward Hall, Tākaka.",
    },
    order: {
      index: "07",
      kicker: "How to order",
      title: "Write to the packing room",
      lede: "Supply is arranged from the packing room in Tākaka. China is the main market. New Zealand shops are welcome too.",
      paths: [
        {
          title: "China and export",
          text: "Tell us your company, city, and whether you want 25g bags, 60g bags, or a bulk format. We confirm what leaf is on hand for the season, agree the pack and the papers, and ship from Golden Bay with your forwarder or on terms we set together.",
        },
        {
          title: "New Zealand shops",
          text: "The tea is also stocked by selected health shops and specialty tea retailers in New Zealand. If you are a shop, write with your counter details. If you are looking for a bag locally, ask us and we will point you to a stockist when we can.",
        },
      ],
      stepsTitle: "What happens next",
      steps: [
        "You send a note with name, company, city, and the format you need.",
        "We reply with availability for the current season.",
        "Packing, labelling, and export papers are agreed before anything leaves Tākaka.",
        "The leaf ships. Repeat orders are easier once a format is set.",
      ],
    },
    contact: {
      index: "08",
      kicker: "Contact",
      title: "Tākaka, when you are ready",
      lede: "Julian reads the enquiries. Include a WeChat ID if that is the easier way to continue the conversation.",
      addressTitle: "Packing room",
      address: [
        "Manuka Harvest Limited",
        "17 Rangihaeata Road",
        "RD 2, Tākaka 7182",
        "Golden Bay, New Zealand",
      ],
      visit: "Open the map",
      fields: {
        name: "Your name",
        company: "Company",
        city: "City",
        country: "Country",
        email: "Email",
        wechat: "WeChat ID",
        interest: "I am writing about",
        message: "What you need",
      },
      interests: [
        "Export to China",
        "Other export",
        "A New Zealand shop",
        "A personal order",
      ],
      optional: "optional",
      submit: "Send the enquiry",
      successTitle: "Received.",
      success: "We reply from Tākaka.",
      subject: "Mānuka Harvest enquiry",
    },
    footer: {
      line: "Wild mānuka leaf from Golden Bay, packed in Tākaka since 2007.",
      holding: "Ultimate holding company",
      rights: "Manuka Harvest Limited",
    },
  },
  zh: {
    nav: [
      { href: "/tea/", label: "茶品" },
      { href: "/origin/", label: "产地" },
      { href: "/order/", label: "订购" },
      { href: "/contact/", label: "联络" },
    ],
    skip: "跳到正文",
    langLabel: "EN",
    otherLang: "en",
    menuOpen: "打开菜单",
    menuClose: "关闭菜单",
    hero: {
      kicker: "新西兰黄金湾",
      title: "Mānuka Harvest",
      han: "野生麦卢卡叶茶",
      lede: "叶子采自塔卡卡一带避风山谷中的野生麦卢卡。手工采下嫩梢，自然阴干，小批量分级包装。大部分供应中国市场。",
      primary: "洽谈供货",
      secondary: "茶品",
      imageAlt: "玻璃杯中的散叶茶正在浸泡",
      seal: ["野生", "2007", "塔卡卡"],
    },
    stats: [
      { value: "2007", label: "公司成立" },
      { value: "19", label: "年小批量制作" },
      { value: "100%", label: "野生麦卢卡叶" },
      { value: "0", label: "咖啡因" },
    ],
    seo: {
      home: {
        title: "Mānuka Harvest 麦卢卡收获 — 黄金湾野生叶茶",
        description:
          "新西兰黄金湾野生麦卢卡散叶茶，塔卡卡手工采收、小批量包装，主要供应中国。天然不含咖啡因。",
      },
      tea: {
        title: "麦卢卡散叶茶 | Mānuka Harvest",
        description:
          "泥土气与树脂香的麦卢卡叶茶。整叶、无添加、天然不含咖啡因。25克与60克，来自黄金湾。",
      },
      origin: {
        title: "塔卡卡手工采收 | Mānuka Harvest",
        description:
          "新西兰野生麦卢卡，手工采收成茶。传统上用于感冒、消化和皮肤，叶子中的芳香油也有实验室研究。",
      },
      order: {
        title: "麦卢卡叶茶出口供应 | Mānuka Harvest",
        description: "向中国及其他市场申请供货，新西兰店铺亦可来信。由塔卡卡包装间直接安排。",
      },
      contact: {
        title: "联络麦卢卡收获 | 塔卡卡",
        description: "写信至新西兰黄金湾塔卡卡兰吉亚塔路17号包装间。",
      },
    },
    home: {
      gates: [
        {
          href: "/tea/",
          title: "茶品",
          text: "泥土气、树脂香，底子里有一点花。整叶，无添加，不含咖啡因。",
        },
        {
          href: "/origin/",
          title: "产地",
          text: "南岛的野生麦卢卡。只取嫩梢。这片叶子长久以来也被当作药用茶饮。",
        },
        {
          href: "/order/",
          title: "供货",
          text: "大部分运往中国。新西兰店铺也同样欢迎。",
        },
      ],
    },
    place: {
      index: "01",
      kicker: "产地",
      title: "不是成排种植，是海湾里的野树",
      body: [
        "麦卢卡收获使用的是黄金湾一带野生的麦卢卡（Leptospermum scoparium）。这些树不是为做茶而栽成行列的。采收人找的是荫处和避风处刚抽出的嫩梢。迎风的叶子摸上去更硬、更扎手。",
        "只取柔软的梢头，每棵树只剪一小部分，树还留在原地。大约六个月后可以再来。叶子随后在塔卡卡兰吉亚塔路 17 号阴干、分级、包装。",
      ],
      imageAlt: "新西兰西地开满白花的野生麦卢卡",
      caption:
        "开花的麦卢卡，西地大普蒂尼国家公园。摄影：Krzysztof Golik，CC BY-SA 4.0。",
    },
    tea: {
      index: "02",
      kicker: "这片叶子",
      title: "泥土气、树脂香，底子里有一点花",
      lede: "这是一种不含咖啡因的散叶草本茶。不添加任何东西。汤色清爽，香气明显；浸泡稍久，苦味和花香会更清楚。",
      imageAlt: "野生枝条上的白花麦卢卡与窄叶",
      caption:
        "开花的嫩梢。阿贝尔塔斯曼国家公园。摄影：Krzysztof Golik，CC BY-SA 4.0。",
      benefitsTitle: "这片叶子传统上用来做什么",
      benefits: [
        "热饮用于季节性感冒和发热，也用于胸口发紧的时候。",
        "传统上这杯茶和肠胃不适、泌尿不适连在一起。",
        "新鲜叶子捣碎外敷，是旧日处理伤口的一种用法。",
        "叶子中的芳香油，包括 leptospermone，已有抗菌与抗氧化方面的实验室研究。",
      ],
      packs: [
        {
          weight: "25克",
          name: "常规袋",
          detail: "常见的零售规格。整片散叶，适合日常冲泡，也适合作为礼物。",
        },
        {
          weight: "60克",
          name: "家用袋",
          detail: "同一片叶子，袋装更大，适合家庭或茶柜台。",
        },
      ],
      exportTitle: "出口规格",
      exportBody:
        "中国是主要市场。零售袋和更大的出口包装都在塔卡卡按订单准备。箱规、标签和单证与每位买家单独商定。本页不刊登固定价格。",
      points: [
        "百分之百野生麦卢卡叶",
        "手工采收、分级、包装",
        "小批量自然阴干",
        "无添加、无防腐剂",
        "天然不含咖啡因",
        "整叶散茶，不是碎末袋泡",
      ],
    },
    craft: {
      index: "03",
      kicker: "做法",
      title: "四步，然后封口",
      steps: [
        {
          n: "01",
          title: "选",
          text: "选荫处或避开常风的树上，刚长出的柔软新梢。",
        },
        {
          n: "02",
          title: "剪",
          text: "手工剪取，每棵树只取少许，让树继续生长。",
        },
        {
          n: "03",
          title: "干",
          text: "自然阴干，再分级。每一批都小到可以亲自看着做完。",
        },
        {
          n: "04",
          title: "装",
          text: "散叶装入 25 克或 60 克袋，或事先说好的出口规格。",
        },
      ],
      quote: "只取嫩梢，只选避风的树，然后把树留下。",
      imageAlt: "奥塔哥银峰开花的麦卢卡灌丛",
      credit: "奥塔哥银峰。摄影：Tomas Sobek，CC BY-SA 4.0。",
    },
    heritage: {
      index: "04",
      kicker: "长久的用法",
      title: "这片叶子的药用",
      imageAlt: "野生麦卢卡的花与叶特写",
      caption:
        "开花的麦卢卡，马尔堡卡伦角。摄影：Krzysztof Golik，CC BY-SA 4.0。",
      cards: [
        {
          title: "感冒与发热",
          text: "毛利人煎煮这种叶子，后来的移民也这样做。热饮用于季节性感冒和发热，胸口发紧时也用它的蒸汽。1769 年，库克船队在长途航行之后已经在喝这种绿叶的浸液。英文俗名 “tea tree”（茶树）就是这样来的。",
        },
        {
          title: "消化与泌尿不适",
          text: "在同一套传统里，这杯茶被用来应对肠胃不适，也和泌尿方面的不适连在一起。它是家庭里的一杯饮品，不是诊所里的制剂。",
        },
        {
          title: "皮肤",
          text: "新鲜叶子会被捣成敷剂，有时用麻草包扎，用于伤口和受刺激的皮肤。这是把叶子用在身上，和饮用是两回事。",
        },
        {
          title: "已被研究的芳香油",
          text: "叶子含有芳香油，包括 leptospermone，这是带来树脂香的 β-三酮之一。实验室研究考察过叶子及其精油的抗菌与抗氧化活性。这些研究针对的是这种植物，不是对这款茶的临床试验。",
        },
      ],
      disclaimer:
        "麦卢卡收获出售的是作为食品的干叶。上面写的是传统用法，以及对这种植物已发表的实验室研究。这款茶不是药品，不用于诊断、治疗、治愈或预防任何疾病。",
    },
    brew: {
      index: "05",
      kicker: "杯中，以及厨房里",
      title: "一茶匙。沸水。安静地等几分钟。",
      steps: [
        "每杯大约一茶匙叶子。",
        "放进茶壶或滤网。这是散叶，不是纸袋。",
        "注入刚刚煮开的水。",
        "浸泡三到五分钟。时间更长，树脂感更明显。",
      ],
      kitchenTitle: "不只是喝",
      kitchen:
        "干燥的整叶也可以作烤肉的抹料，尤其适合羊肉和野味，也可以温入食用油。袋子开封后请密封，远离高温和潮湿。",
      imageAlt: "壶中的散叶茶",
      caption: "浸泡后的散叶。",
    },
    founder: {
      index: "06",
      kicker: "包装这片叶子的人",
      title: "朱利安·爱德华·霍尔",
      role: "麦卢卡收获有限公司董事、创始人",
      body: [
        "公司于 2007 年 3 月 28 日注册，朱利安自那时起担任董事。股份由最终控股公司 40 Degrees South Limited 持有，注册地址同在兰吉亚塔路。",
        "他出生在塔卡卡，大半生都住在黄金湾。童年在海湾西侧的图库鲁阿度过。1970 年代初，他的父母在那里接手了一处农场和露营地。",
        "他与妻子尼古拉一起经营家族食品饮料生意，市场在亚洲和欧洲。他负责市场与财务。做生意之前，他在科学观察员项目工作了二十一年，足迹包括福克兰群岛、非洲和南极。",
        "茶至今仍是塔卡卡家里的小批量工作。十九年过去，选叶的方式没有变：野树、嫩梢，从山坡到包装台只有很短的一段路。",
      ],
      imageAlt: "朱利安·爱德华·霍尔肖像",
      caption: "朱利安·爱德华·霍尔，塔卡卡。",
    },
    order: {
      index: "07",
      kicker: "如何订购",
      title: "写信到包装间",
      lede: "供货由塔卡卡的包装间直接安排。中国是主要市场，新西兰店铺也同样欢迎。",
      paths: [
        {
          title: "中国与出口",
          text: "请告知公司、城市，以及您需要 25 克袋、60 克袋，还是散装规格。我们会确认当季有多少叶子，谈妥包装和单证，再从黄金湾发出。运输可走您的货代，或按双方商定的条款。",
        },
        {
          title: "新西兰门店",
          text: "茶也在新西兰部分健康商店和特色茶店有售。如果您是店铺，请来信说明柜台情况。如果您在当地找一袋茶，也可以问我们，能介绍时我们会告诉您哪里有货。",
        },
      ],
      stepsTitle: "接下来",
      steps: [
        "来信写上姓名、公司、城市，以及需要的规格。",
        "我们回复当季是否有货。",
        "包装、标签和出口单证在离开塔卡卡之前谈妥。",
        "叶子发出。规格一旦定下，再次订货会更省事。",
      ],
    },
    contact: {
      index: "08",
      kicker: "联络",
      title: "准备好了，就写到塔卡卡",
      lede: "询问由朱利安阅读。若用微信更方便，请留下微信号。",
      addressTitle: "包装间",
      address: [
        "Manuka Harvest Limited",
        "17 Rangihaeata Road",
        "RD 2, Tākaka 7182",
        "新西兰黄金湾",
      ],
      visit: "打开地图",
      fields: {
        name: "姓名",
        company: "公司",
        city: "城市",
        country: "国家",
        email: "邮箱",
        wechat: "微信号",
        interest: "来信事由",
        message: "您的需要",
      },
      interests: ["出口到中国", "其他出口", "新西兰店铺", "个人购买"],
      optional: "选填",
      submit: "提交询盘",
      successTitle: "已收到。",
      success: "我们会从塔卡卡回复。",
      subject: "麦卢卡收获 询盘",
    },
    footer: {
      line: "黄金湾野生麦卢卡叶，自 2007 年起在塔卡卡包装。",
      holding: "最终控股公司",
      rights: "Manuka Harvest Limited",
    },
  },
};
