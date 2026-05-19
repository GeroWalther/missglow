import {
  BETOXPRICE,
  FACECLEANSERPRICE,
  FRESHEZESPRICE,
  LONGEVITYPRICE,
  MAGICELIXIRPRICE,
  MAGICLIPSPRICE,
  PRICEMAGICGLOW,
  productImagesFaceCleanser,
  productImagesFresh,
  productImagesGlowCreme,
  productImagesLongevity,
  productImagesMagicElixir,
  productImgsBetox,
  productImgsLips,
} from '../../../../consts';

type BiLine = { de: string; en: string };

export type ProductContent = {
  id: string;
  slug: string;
  name: string;
  price: number;
  images: string[];
  volume: BiLine;
  shippingNote: BiLine;
  tagline: BiLine;
  shortDesc: BiLine;
  features: { de: string[]; en: string[] };
  longDescParagraphs: { de: string[]; en: string[] };
  highlights: { de: string[]; en: string[] };
  applicationTitle: BiLine;
  applicationBody: BiLine;
  inci: BiLine;
  faq: {
    question: BiLine;
    answer: BiLine;
  }[];
};

const COMMON_FAQ: ProductContent['faq'] = [
  {
    question: {
      de: 'Wie lange hält das Produkt?',
      en: 'How long does the product last?',
    },
    answer: {
      de: 'Die Haltbarkeit des Produkts beträgt 6 Monate nach dem Öffnen.',
      en: 'The product has a shelf life of 6 months after opening.',
    },
  },
  {
    question: {
      de: 'Ist das Produkt tierversuchsfrei?',
      en: 'Is the product cruelty-free?',
    },
    answer: {
      de: 'Ja, das Produkt ist tierversuchsfrei und 100 % vegan.',
      en: 'Yes, the product is cruelty-free and 100% vegan.',
    },
  },
  {
    question: {
      de: 'Ist das Produkt klinisch getestet?',
      en: 'Is the product clinically tested?',
    },
    answer: {
      de: 'Ja, das Produkt wurde in klinischen Studien getestet und ist selbst für empfindliche und sensible Hauttypen geeignet.',
      en: 'Yes, the product has been tested in clinical studies and is suitable also for sensitive skin types.',
    },
  },
];

export const PRODUCTS_V2: ProductContent[] = [
  {
    id: 'magicLips',
    slug: 'magicLips',
    name: 'Magic Lips Serum',
    price: MAGICLIPSPRICE,
    images: productImgsLips,
    volume: { de: '30ml', en: '30ml' },
    shippingNote: {
      de: 'Wird in 1–2 Wochen versendet.',
      en: 'Ships within 1–2 weeks.',
    },
    tagline: {
      de: 'Lippenpflege mit Plumping-Effekt',
      en: 'Lip care with plumping effect',
    },
    shortDesc: {
      de: 'Bis zu 78 % mehr Lippenvolumen — absolute Aufpolsterung und intensive Pflege. Hocheffektive Wirkstoffkosmetik für sichtbar attraktivere Lippen.',
      en: 'Up to 78% more lip volume — full plumping and intensive care. Highly effective active cosmetics for visibly more attractive lips.',
    },
    features: {
      de: [
        '78 % aufpolsternde Wirkung auf die Lippen',
        'Nach nur 1 Anwendung sofort sichtbar volle Lippen',
        'Verleiht der Lippenpartie ein volles und definiertes Aussehen',
        'Reduziert Rillen und Lippenfältchen',
        'Hebt das natürliche Lippenrot hervor',
      ],
      en: [
        '78% plumping effect on the lips',
        'Visibly full lips after just 1 application',
        'Gives the lip area a full and defined appearance',
        'Reduces lip lines and wrinkles',
        'Enhances the natural lip colour',
      ],
    },
    longDescParagraphs: {
      de: [
        'Magic Lips Serum besitzt ein hochaktives OLIGO-Peptid, das speziell für die Mund- und Lippenpartie entwickelt wurde. Es aktiviert die Protein- und Proteoglykansynthese und erhöht so die Dichte des Bindegewebes.',
        'Magic Lips Serum spendet den Lippen Feuchtigkeit, stellt Glykosaminoglykane und Kollagen wieder her, erhöht die Lippenfeuchtigkeit und verleiht jugendliches Lippenvolumen.',
        'Diese ANTI-AGING Behandlung der Lippen ist cosmezeutisch und basiert auf einem Botenpeptid, das Glykosaminoglykane und Kollagen wiederherstellt.',
      ],
      en: [
        'Magic Lips Serum contains a highly active OLIGO peptide specially developed for the mouth and lip area. It activates protein and proteoglycan synthesis, increasing the density of the connective tissue.',
        'Magic Lips Serum moisturises the lips, restores glycosaminoglycans and collagen, increases lip hydration and gives youthful lip volume.',
        'This ANTI-AGING lip treatment is cosmeceutical and is based on a messenger peptide that restores glycosaminoglycans and collagen.',
      ],
    },
    highlights: {
      de: [
        'Sofort sichtbare Wirksamkeit.',
        'Bis zu 78 % mehr Lippenvolumen. Wohlgeformte, weiche und sinnliche Lippen — ohne Rillen und Fältchen.',
      ],
      en: [
        'Instantly visible effectiveness.',
        'Up to 78% more lip volume. Well-shaped, soft and sensual lips — without grooves or fine lines.',
      ],
    },
    applicationTitle: { de: 'Anwendung', en: 'Application' },
    applicationBody: {
      de: 'Täglich auf Lippen und Mundregion auftragen. Bei regelmäßiger Anwendung polstert sich das Lippenvolumen sichtbar auf.',
      en: 'Apply daily to lips and mouth area. With regular use the lip volume visibly plumps up.',
    },
    inci: {
      de: 'INCI: Centella Asiatica Extract, Brassica Alba Sprout Extract, Tripeptide-1, Vitamin ACE, OLIGO-Aminosäuren, Rubus Idaeus Acid Extract, Eclipta.',
      en: 'INCI: Centella Asiatica Extract, Brassica Alba Sprout Extract, Tripeptide-1, Vitamin ACE, OLIGO Amino Acids, Rubus Idaeus Acid Extract, Eclipta.',
    },
    faq: [
      ...COMMON_FAQ,
      {
        question: {
          de: 'Welchen Effekt hat Magic Lips Serum?',
          en: 'What effect does Magic Lips Serum have?',
        },
        answer: {
          de: 'Das Produkt hat eine aufpolsternde Wirkung auf die Lippen — bereits nach einer Anwendung sind die Lippen sichtbar voller. Es verleiht der Lippenpartie ein volles, definiertes Aussehen und reduziert Rillen und Lippenfältchen.',
          en: 'The product has a plumping effect on the lips — visibly fuller lips after just one application. It gives the lip area a full, defined appearance and reduces lip lines and wrinkles.',
        },
      },
      {
        question: {
          de: 'Für wen ist Magic Lips Serum geeignet?',
          en: 'Who is Magic Lips Serum suitable for?',
        },
        answer: {
          de: 'Für jede Frau, die die Hautalterung hinauszögern, die Mundpartie verjüngen und die Lippen aufpolstern möchte.',
          en: 'For every woman who wants to delay skin ageing, rejuvenate the mouth area and plump the lips.',
        },
      },
    ],
  },
  {
    id: 'betoxserum',
    slug: 'betoxserum',
    name: 'Betox Serum',
    price: BETOXPRICE,
    images: productImgsBetox,
    volume: { de: '30ml', en: '30ml' },
    shippingNote: {
      de: 'Wird in 1–2 Wochen versendet.',
      en: 'Ships within 1–2 weeks.',
    },
    tagline: {
      de: 'Augenpflege mit „Botox-Effekt"',
      en: 'Eye care with “Botox effect”',
    },
    shortDesc: {
      de: 'Augenpflege mit Botox-Effekt: −64 % Falten in 30 Tagen, intensive Feuchtigkeit für die empfindliche Augenpartie.',
      en: 'Eye care with botox effect: −64% wrinkles in 30 days, intensive moisture for the sensitive eye area.',
    },
    features: {
      de: [
        '−64 % Falten innerhalb eines Monats',
        'Sichtbarer Soforteffekt nach 10 Minuten',
        'Intensive Feuchtigkeitsversorgung',
        'Verbessert die Hautstruktur und Glättung',
        'Sanft genug für empfindliche Haut',
      ],
      en: [
        '−64% wrinkles within one month',
        'Visible instant effect after 10 minutes',
        'Deep hydration',
        'Improves skin texture and smoothness',
        'Gentle enough for sensitive skin',
      ],
    },
    longDescParagraphs: {
      de: [
        'Betox Serum reduziert Falten innerhalb eines Monats um 64 %. Zusätzlich zu dieser Wirkung kommt eine intensive Feuchtigkeit für die empfindliche Augenpartie — Fältchen werden aufgepolstert und entspannt.',
        'Bereits etwa 10 Minuten nach dem Auftragen kann man eine deutliche Glättung wahrnehmen, besonders um die Augenpartie und Stirn.',
        'Die natürlichen bioaktiven Inhaltsstoffe sorgen für einen frischen, aufgepolsterten Teint und eine verbesserte Hautstruktur.',
      ],
      en: [
        'Betox Serum reduces wrinkles by 64% within one month. Alongside this effect, it provides intensive moisture for the sensitive eye area — fine lines are plumped and relaxed.',
        'Within about 10 minutes of application you can notice a clear smoothing, especially around the eye area and forehead.',
        'The natural bioactive ingredients deliver a fresh, plumped complexion and improved skin texture.',
      ],
    },
    highlights: {
      de: ['Sichtbarer Soforteffekt.', 'Klinisch belegt: −64 % Falten in 30 Tagen.'],
      en: ['Visible instant effect.', 'Clinically proven: −64% wrinkles in 30 days.'],
    },
    applicationTitle: { de: 'Anwendung', en: 'Application' },
    applicationBody: {
      de: 'Morgens und abends sanft um die Augenpartie und auf Stirnfalten auftragen. Einziehen lassen.',
      en: 'Apply gently around the eye area and to forehead lines morning and evening. Allow to absorb.',
    },
    inci: {
      de: 'INCI: Natürliche bioaktive Wirkstoffkomplexe aus hochwertigen Aktiven für sichtbare Hautverjüngung.',
      en: 'INCI: Natural bioactive complex of high-quality actives for visible skin rejuvenation.',
    },
    faq: [
      ...COMMON_FAQ,
      {
        question: {
          de: 'Welchen Effekt hat Betox Serum?',
          en: 'What effect does Betox Serum have?',
        },
        answer: {
          de: 'Sichtbarer Soforteffekt: bereits etwa 10 Minuten nach dem Auftragen ist eine deutliche Glättung wahrnehmbar — besonders um Augenpartie und Stirn. Intensive Feuchtigkeit & Elastizität für einen frischen, aufgepolsterten Teint.',
          en: 'Visible instant effect: within ~10 minutes of application you can notice a clear smoothing, especially around the eye area and forehead. Deep hydration and elasticity for a fresh, plumped complexion.',
        },
      },
      {
        question: {
          de: 'Für wen ist Betox Serum geeignet?',
          en: 'Who is Betox Serum suitable for?',
        },
        answer: {
          de: 'Für alle Frauen, die eine natürliche Verjüngung wünschen — sanft genug auch für sensible Haut.',
          en: 'For anyone seeking natural rejuvenation — gentle enough also for sensitive skin.',
        },
      },
    ],
  },
  {
    id: 'magicGlow',
    slug: 'magicGlow',
    name: 'Magic Glow Cream',
    price: PRICEMAGICGLOW,
    images: productImagesGlowCreme,
    volume: { de: '50ml', en: '50ml' },
    shippingNote: {
      de: 'Wird in 1–2 Wochen versendet.',
      en: 'Ships within 1–2 weeks.',
    },
    tagline: {
      de: 'Tagespflege mit Sofort-Glow-Effekt',
      en: 'Day cream with instant glow effect',
    },
    shortDesc: {
      de: 'Tagespflege mit Sofort-Glow-Effekt für ein sichtbar strahlendes Hautbild und straffe, jugendliche Haut.',
      en: 'Day cream with instant glow effect for a visibly radiant complexion and firm, youthful skin.',
    },
    features: {
      de: [
        'Intensive Hautstraffung',
        'Reduziert Falten und Fältchen',
        'Schützt vor oxidativem Stress',
        'Regt das Zellwachstum an',
        'Strahlender Sofort-Glow',
      ],
      en: [
        'Intensive skin tightening',
        'Reduces wrinkles and fine lines',
        'Protects against oxidative stress',
        'Stimulates cell renewal',
        'Radiant instant glow',
      ],
    },
    longDescParagraphs: {
      de: [
        'Magic Glow Cream besitzt gezielte verjüngende Inhaltsstoffe, die die Hautalterung verlangsamen und die Haut straffen.',
        'Die Creme sorgt für eine intensive Hautstraffung und reduziert Falten. Die Haut wird vor oxidativem Stress geschützt und das Zellwachstum wird angeregt.',
        'Die Haut fühlt sich nach der Anwendung straffer und jünger an — mit einem sichtbaren Sofort-Glow.',
      ],
      en: [
        'Magic Glow Cream contains targeted rejuvenating ingredients that slow skin ageing and firm the skin.',
        'The cream provides intensive skin tightening and reduces wrinkles. The skin is protected against oxidative stress and cell renewal is stimulated.',
        'After application the skin feels firmer and younger — with a visible instant glow.',
      ],
    },
    highlights: {
      de: ['Verjüngung & Glow in einer Anwendung.', 'Tägliches Luxusritual für strahlende Haut.'],
      en: ['Rejuvenation & glow in one step.', 'A daily luxury ritual for radiant skin.'],
    },
    applicationTitle: { de: 'Anwendung', en: 'Application' },
    applicationBody: {
      de: 'Morgens und abends auf die gereinigte Haut auftragen und sanft einmassieren.',
      en: 'Apply to cleansed skin morning and evening and massage in gently.',
    },
    inci: {
      de: 'INCI: Centella Asiatica Extract, OLIGO-HA, mikromolekulare Hyaluronsäure, Palmitoyl Tripeptide-1, Baikal-Helmkraut-Wurzelextrakt, Eclipta Prostrata, Centella Asiatica Acid.',
      en: 'INCI: Centella Asiatica Extract, OLIGO-HA, micro-molecular Hyaluronic Acid, Palmitoyl Tripeptide-1, Baikal Skullcap Root Extract, Eclipta Prostrata, Centella Asiatica Acid.',
    },
    faq: [
      ...COMMON_FAQ,
      {
        question: {
          de: 'Welchen Effekt hat Magic Glow Cream?',
          en: 'What effect does Magic Glow Cream have?',
        },
        answer: {
          de: 'Verjüngende Inhaltsstoffe verlangsamen die Hautalterung und straffen die Haut. Die Creme reduziert Falten, schützt vor oxidativem Stress und sorgt für einen sichtbaren Sofort-Glow.',
          en: 'Rejuvenating ingredients slow skin ageing and tighten the skin. The cream reduces wrinkles, protects against oxidative stress and delivers a visible instant glow.',
        },
      },
      {
        question: {
          de: 'Für wen ist Magic Glow Cream geeignet?',
          en: 'Who is Magic Glow Cream suitable for?',
        },
        answer: {
          de: 'Für jede Frau, die sich verjüngen oder länger jung aussehen möchte.',
          en: 'For every woman who wants to rejuvenate or look younger for longer.',
        },
      },
    ],
  },
  {
    id: 'freshEyes',
    slug: 'freshEyes',
    name: 'Fresh Eyes Serum',
    price: FRESHEZESPRICE,
    images: productImagesFresh,
    volume: { de: '50ml', en: '50ml' },
    shippingNote: {
      de: 'Wird in 1–2 Wochen versendet.',
      en: 'Ships within 1–2 weeks.',
    },
    tagline: {
      de: 'Pflege für einen frischen Blick',
      en: 'Care for a fresh, awake look',
    },
    shortDesc: {
      de: 'Intensive Pflege für die Augenpartie — reduziert Augenringe und Schwellungen für einen sichtbar frischen Blick.',
      en: 'Intensive eye-area care — reduces dark circles and puffiness for a visibly fresh, awake look.',
    },
    features: {
      de: [
        'Reduziert Augenringe und Schwellungen',
        'Glättet feine Linien um die Augen',
        'Spendet intensive Feuchtigkeit',
        'Verleiht einen wachen, frischen Blick',
        'Leichte Textur, schnell einziehend',
      ],
      en: [
        'Reduces dark circles and puffiness',
        'Smooths fine lines around the eyes',
        'Provides deep hydration',
        'Delivers an awake, fresh look',
        'Lightweight, fast-absorbing texture',
      ],
    },
    longDescParagraphs: {
      de: [
        'Fresh Eyes Serum pflegt die empfindliche Augenpartie mit hochwirksamen Aktivstoffen.',
        'Die leichte Textur zieht schnell ein und hinterlässt einen frischen, gepflegten Blick.',
        'Bei regelmäßiger Anwendung werden Augenringe und Schwellungen sichtbar reduziert.',
      ],
      en: [
        'Fresh Eyes Serum cares for the delicate eye area with highly effective active ingredients.',
        'The lightweight texture absorbs quickly and leaves a fresh, well-cared look.',
        'With regular use, dark circles and puffiness are visibly reduced.',
      ],
    },
    highlights: {
      de: ['Wacher Blick in nur einer Anwendung.', 'Sanfte, hochwirksame Pflege.'],
      en: ['An awake look in a single application.', 'Gentle, highly effective care.'],
    },
    applicationTitle: { de: 'Anwendung', en: 'Application' },
    applicationBody: {
      de: 'Morgens und abends mit dem Ringfinger sanft um die Augenpartie auftragen.',
      en: 'Apply gently around the eye area with the ring finger morning and evening.',
    },
    inci: {
      de: 'INCI: Hochwirksame natürliche Wirkstoffe für die Augenpartie.',
      en: 'INCI: Highly effective natural actives for the eye area.',
    },
    faq: [
      ...COMMON_FAQ,
      {
        question: {
          de: 'Welchen Effekt hat Fresh Eyes Serum?',
          en: 'What effect does Fresh Eyes Serum have?',
        },
        answer: {
          de: 'Reduziert Augenringe und Schwellungen, glättet feine Linien um die Augen und verleiht einen wachen, frischen Blick.',
          en: 'Reduces dark circles and puffiness, smooths fine lines around the eyes and delivers an awake, fresh look.',
        },
      },
      {
        question: {
          de: 'Für wen ist Fresh Eyes Serum geeignet?',
          en: 'Who is Fresh Eyes Serum suitable for?',
        },
        answer: {
          de: 'Für jede Frau, die Müdigkeitszeichen reduzieren und die Augenpartie sichtbar frischer wirken lassen möchte.',
          en: 'For every woman who wants to reduce signs of fatigue and visibly refresh the eye area.',
        },
      },
    ],
  },
  {
    id: 'magicElixir',
    slug: 'magicElixir',
    name: 'Magic Elixir',
    price: MAGICELIXIRPRICE,
    images: productImagesMagicElixir,
    volume: { de: '10ml', en: '10ml' },
    shippingNote: {
      de: 'Wird in 1–2 Wochen versendet.',
      en: 'Ships within 1–2 weeks.',
    },
    tagline: {
      de: 'Konzentriertes Anti-Aging-Elixier',
      en: 'Concentrated anti-ageing elixir',
    },
    shortDesc: {
      de: 'Hochkonzentriertes Elixier für jugendliche, strahlende Haut — die Kraftformel für jeden Tag.',
      en: 'Highly concentrated elixir for youthful, radiant skin — the power formula for every day.',
    },
    features: {
      de: [
        'Verjüngt sichtbar von der ersten Anwendung an',
        'Stärkt die Hautbarriere',
        'Intensive Anti-Aging-Wirkung',
        'Verleiht ebenmäßigen, strahlenden Teint',
        'Konzentrierte Wirkstoffe',
      ],
      en: [
        'Visibly rejuvenates from the first application',
        'Strengthens the skin barrier',
        'Intensive anti-ageing action',
        'Delivers an even, radiant complexion',
        'Concentrated actives',
      ],
    },
    longDescParagraphs: {
      de: [
        'Magic Elixir ist die Kraftformel der Miss Glow Beauty Routine — eine hochkonzentrierte Mischung aus aktiven Wirkstoffen.',
        'Bei regelmäßiger Anwendung sieht die Haut sichtbar jünger, ebenmäßiger und strahlender aus.',
        'Das Elixier stärkt die Hautbarriere und sorgt für ein langanhaltend gepflegtes Hautgefühl.',
      ],
      en: [
        'Magic Elixir is the power formula of the Miss Glow Beauty routine — a highly concentrated blend of active ingredients.',
        'With regular use the skin looks visibly younger, more even and more radiant.',
        'The elixir strengthens the skin barrier and delivers a long-lasting feel of well-cared-for skin.',
      ],
    },
    highlights: {
      de: ['Die Kraftformel.', 'Konzentrierte Wirkstoffkosmetik — für sichtbar jüngere Haut.'],
      en: ['The power formula.', 'Concentrated active cosmetics — for visibly younger skin.'],
    },
    applicationTitle: { de: 'Anwendung', en: 'Application' },
    applicationBody: {
      de: 'Wenige Tropfen morgens und abends auf die gereinigte Haut auftragen — vor der Tages- oder Nachtpflege.',
      en: 'Apply a few drops to cleansed skin morning and evening — before day or night care.',
    },
    inci: {
      de: 'INCI: Hochkonzentrierte natürliche Aktivwirkstoffe für intensive Hautverjüngung.',
      en: 'INCI: Highly concentrated natural active ingredients for intensive skin rejuvenation.',
    },
    faq: [
      ...COMMON_FAQ,
      {
        question: {
          de: 'Welchen Effekt hat Magic Elixir?',
          en: 'What effect does Magic Elixir have?',
        },
        answer: {
          de: 'Konzentrierte Anti-Aging-Wirkung: stärkt die Hautbarriere, verleiht einen ebenmäßigen Teint und lässt die Haut sichtbar jünger und strahlender aussehen.',
          en: 'Concentrated anti-ageing action: strengthens the skin barrier, delivers an even complexion and leaves skin visibly younger and more radiant.',
        },
      },
      {
        question: {
          de: 'Für wen ist Magic Elixir geeignet?',
          en: 'Who is Magic Elixir suitable for?',
        },
        answer: {
          de: 'Für jede Frau, die intensive Wirkstoffpflege für sichtbar jüngere Haut sucht.',
          en: 'For every woman seeking intensive active care for visibly younger skin.',
        },
      },
    ],
  },
  {
    id: 'faceCleanser',
    slug: 'faceCleanser',
    name: 'Face Cleanser',
    price: FACECLEANSERPRICE,
    images: productImagesFaceCleanser,
    volume: { de: '150ml', en: '150ml' },
    shippingNote: {
      de: 'Wird in 1–2 Wochen versendet.',
      en: 'Ships within 1–2 weeks.',
    },
    tagline: {
      de: 'Sanfte Reinigung — Schritt 1 deiner Routine',
      en: 'Gentle cleansing — step 1 of your routine',
    },
    shortDesc: {
      de: 'Sanfte Reinigung, die Make-up und Unreinheiten zuverlässig entfernt — ohne die Haut auszutrocknen.',
      en: 'Gentle cleansing that reliably removes make-up and impurities — without drying the skin.',
    },
    features: {
      de: [
        'Entfernt Make-up und Unreinheiten',
        'Reinigt sanft, ohne auszutrocknen',
        'Erhält das natürliche Gleichgewicht der Haut',
        'Für alle Hauttypen geeignet',
        'Vegan & tierversuchsfrei',
      ],
      en: [
        'Removes make-up and impurities',
        'Cleanses gently without drying',
        'Preserves the skin’s natural balance',
        'Suitable for all skin types',
        'Vegan & cruelty-free',
      ],
    },
    longDescParagraphs: {
      de: [
        'Der Face Cleanser ist der erste Schritt deiner Miss Glow Beauty Routine.',
        'Er reinigt die Haut sanft, entfernt Make-up und Unreinheiten und bereitet sie optimal auf die anschließende Pflege vor — ohne das natürliche Gleichgewicht zu stören.',
      ],
      en: [
        'The Face Cleanser is the first step of your Miss Glow Beauty routine.',
        'It gently cleanses the skin, removes make-up and impurities and prepares it perfectly for the care that follows — without disturbing the natural balance.',
      ],
    },
    highlights: {
      de: ['Sanfte Reinigung. Spürbar reine Haut.'],
      en: ['Gentle cleansing. Noticeably clean skin.'],
    },
    applicationTitle: { de: 'Anwendung', en: 'Application' },
    applicationBody: {
      de: 'Auf die feuchte Haut auftragen, sanft einmassieren und mit lauwarmem Wasser abspülen.',
      en: 'Apply to damp skin, massage in gently and rinse with lukewarm water.',
    },
    inci: {
      de: 'INCI: Milde, vegane Reinigungsbasis mit natürlichen Inhaltsstoffen.',
      en: 'INCI: Mild, vegan cleansing base with natural ingredients.',
    },
    faq: [
      ...COMMON_FAQ,
      {
        question: {
          de: 'Für welche Hauttypen ist der Face Cleanser geeignet?',
          en: 'Which skin types is the Face Cleanser suitable for?',
        },
        answer: {
          de: 'Für alle Hauttypen — auch für sensible Haut.',
          en: 'For all skin types — including sensitive skin.',
        },
      },
      {
        question: {
          de: 'Wie oft sollte ich den Cleanser anwenden?',
          en: 'How often should I use the cleanser?',
        },
        answer: {
          de: 'Morgens und abends als erster Schritt deiner Pflegeroutine.',
          en: 'Morning and evening as the first step of your skincare routine.',
        },
      },
    ],
  },
  {
    id: 'longevity',
    slug: 'longevity',
    name: 'Longevity Beauty',
    price: LONGEVITYPRICE,
    images: productImagesLongevity,
    volume: { de: '100 ml / 60 g', en: '100 ml / 60 g' },
    shippingNote: {
      de: 'Wird in 1–2 Wochen versendet.',
      en: 'Ships within 1–2 weeks.',
    },
    tagline: {
      de: 'Wohlbefinden, Energie & Beauty Support',
      en: 'Wellbeing, energy & beauty support',
    },
    shortDesc: {
      de: 'Modernes Nahrungsergänzungsmittel mit Fokus auf ganzheitliches Wohlbefinden, Vitalität und Beauty-Unterstützung — Where Nature Meets Science.',
      en: 'A modern supplement focused on holistic wellbeing, vitality and beauty support — Where Nature Meets Science.',
    },
    features: {
      de: [
        'Unterstützt Energie und mentale Klarheit',
        'Fördert ein angenehmes Körpergefühl',
        'Beauty-Support von innen',
        'Ergänzung für einen aktiven Lebensstil',
        'Where Nature Meets Science',
      ],
      en: [
        'Supports energy and mental clarity',
        'Promotes a pleasant body feeling',
        'Beauty support from within',
        'Complement to an active lifestyle',
        'Where Nature Meets Science',
      ],
    },
    longDescParagraphs: {
      de: [
        'LONGEVITY BEAUTY präsentiert sich als modernes Nahrungsergänzungsmittel mit Fokus auf ganzheitliches Wohlbefinden, Vitalität und Beauty-Unterstützung. Bereits das Konzept „Where Nature Meets Science" — der Anspruch, natürliche Inhaltsstoffe mit einem modernen Gesundheitsansatz zu verbinden.',
        'Im Alltag überzeugt LONGEVITY BEAUTY vor allem durch das angenehme Körpergefühl und das subjektiv gesteigerte Energielevel. Viele Anwender wünschen sich im hektischen Alltag mehr Balance, mentale Klarheit und körperliches Wohlbefinden — genau hier setzt das Produkt an.',
        'Besonders positiv fällt auf, dass LONGEVITY BEAUTY dazu beitragen kann, sich energiegeladener, fokussierter und insgesamt vitaler zu fühlen. Gleichzeitig berichten Nutzer häufig über ein verbessertes Körpergefühl und einen klareren Geist im Alltag.',
        'Im Rahmen einer ausgewogenen Ernährung und eines aktiven Lebensstils kann LONGEVITY BEAUTY den Körper dabei unterstützen, sich leichter und wohler zu fühlen. Das Produkt wird häufig mit einem aktivierten Wohlbefinden und einer Unterstützung des Stoffwechsels in Verbindung gebracht.',
        'Gerade in Kombination mit Bewegung und bewusster Ernährung kann LONGEVITY BEAUTY eine sinnvolle Ergänzung sein, wenn das Ziel ein gesünderes Körpergefühl und die Unterstützung einer schlankeren Figur ist.',
        'Das Produkt macht einen hochwertigen Eindruck und richtet sich an Menschen, die ihren Körper ganzheitlich unterstützen möchten — insbesondere in den Bereichen Energie, Beauty, Wohlbefinden und innere Balance.',
        'MISS GLOW BEAUTY – LONGEVITY BEAUTY hinterlässt einen modernen und vielversprechenden Eindruck für alle, die mehr Vitalität, innere Balance und Wohlbefinden in ihren Alltag integrieren möchten. Besonders hervorzuheben sind das gesteigerte Energiegefühl, mentale Klarheit sowie das angenehme Körpergefühl. In Kombination mit einem gesunden Lebensstil kann das Produkt eine wertvolle Unterstützung sein.',
      ],
      en: [
        'LONGEVITY BEAUTY is a modern supplement focused on holistic wellbeing, vitality and beauty support. The concept "Where Nature Meets Science" reflects the ambition to combine natural ingredients with a modern approach to health.',
        'In everyday life LONGEVITY BEAUTY stands out through a pleasant body feeling and a subjectively higher energy level. Many users are looking for more balance, mental clarity and physical wellbeing in a busy day — and that is exactly where this product comes in.',
        'It can help you feel more energised, more focused and overall more vital. Users frequently report an improved body feeling and a clearer mind throughout the day.',
        'As part of a balanced diet and an active lifestyle, LONGEVITY BEAUTY can support your body to feel lighter and more comfortable. The product is often associated with activated wellbeing and metabolic support.',
        'Combined with movement and mindful eating, LONGEVITY BEAUTY can be a meaningful addition when the goal is a healthier body feeling and support for a slimmer figure.',
        'The product feels high-quality and is designed for people who want to support their body holistically — especially in the areas of energy, beauty, wellbeing and inner balance.',
        'MISS GLOW BEAUTY – LONGEVITY BEAUTY leaves a modern and promising impression for anyone who wants to add more vitality, inner balance and wellbeing to their everyday life. Particularly notable are the boost in energy, mental clarity and the pleasant body feeling. Combined with a healthy lifestyle, it can be a valuable companion.',
      ],
    },
    highlights: {
      de: [
        'Where Nature Meets Science.',
        'Vitalität, Balance und Beauty Support — von innen.',
      ],
      en: [
        'Where Nature Meets Science.',
        'Vitality, balance and beauty support — from within.',
      ],
    },
    applicationTitle: { de: 'Anwendung', en: 'Application' },
    applicationBody: {
      de: '1 Teelöffel in etwas Tee, Wasser oder Kaffee einrühren — kann auch in einen Smoothie eingerührt werden.',
      en: '1 teaspoon stirred into tea, water or coffee — also works in a smoothie.',
    },
    inci: {
      de: 'INCI / Zutatenliste folgt.',
      en: 'INCI / ingredient list to be added.',
    },
    faq: [
      ...COMMON_FAQ,
      {
        question: {
          de: 'Wie wende ich Longevity Beauty an?',
          en: 'How do I take Longevity Beauty?',
        },
        answer: {
          de: '1 Teelöffel in etwas Tee, Wasser oder Kaffee einrühren — kann auch in einen Smoothie eingerührt werden.',
          en: '1 teaspoon stirred into tea, water or coffee — also works in a smoothie.',
        },
      },
      {
        question: {
          de: 'Für wen ist Longevity Beauty geeignet?',
          en: 'Who is Longevity Beauty suitable for?',
        },
        answer: {
          de: 'Für alle, die ihren Körper ganzheitlich in den Bereichen Energie, Beauty, Wohlbefinden und innere Balance unterstützen möchten.',
          en: 'For anyone wanting to holistically support their body across energy, beauty, wellbeing and inner balance.',
        },
      },
    ],
  },
];

export function getProductV2(slug: string): ProductContent | undefined {
  return PRODUCTS_V2.find((p) => p.slug === slug);
}
