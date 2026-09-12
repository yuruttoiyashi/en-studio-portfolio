export type Work = {
  id: string
  title: string
  category: string
  description: string
  focus: string[]
  technologies: string[]
  url: string
  image: string
  imageAlt: string
}

export type Service = {
  title: string
  description: string
}

export type ProcessStep = {
  number: string
  title: string
  description: string
}

export const content = {
  brand: {
    name: 'EN STUDIO',
    tagline: 'ご縁をつなぐ、Web制作。',
    introduction:
      '個人店から企業まで、届けたい想いと必要な情報を整理し、伝わるWebサイトに仕立てます。',
  },
  navigation: [
    { label: 'Works', href: '#works' },
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ],
  works: [
    {
      id: 'mood',
      title: 'MOOD.',
      category: '美容サロン / ヘアサロン',
      description: 'なりたい雰囲気を髪から選べる、都会的な美容サロンの公式サイト。',
      focus: ['ブランドの世界観', '複数店舗の情報設計', '予約までの導線'],
      technologies: ['Next.js', 'TypeScript', 'CSS Modules'],
      url: 'https://mood-salon-five.vercel.app',
      image: '/projects/mood.webp',
      imageAlt: 'モノトーンとシルバーを基調にしたMOOD.のサイトプレビュー',
    },
    {
      id: 'yuzuki',
      title: '癒し処 結月',
      category: 'ドライヘッドスパ / エステ',
      description: 'がんばる毎日に深い休息を届ける、女性専用サロンの公式サイト。',
      focus: ['静けさと上質感', 'メニュー情報の整理', '安心感のある予約導線'],
      technologies: ['React', 'TypeScript', 'Vite'],
      url: 'https://yuzuki-site-cehl.vercel.app/',
      image: '/projects/yuzuki.webp',
      imageAlt: '深いブラウンと淡い光を使った癒し処 結月のサイトプレビュー',
    },
    {
      id: 'mofumofu',
      title: 'もふもふ日和',
      category: 'ペットサロン',
      description: '犬と猫の飼い主が安心して相談できる、やさしく清潔感のあるサイト。',
      focus: ['飼い主への安心材料', 'サービスの見つけやすさ', '親しみやすいブランド表現'],
      technologies: ['React', 'TypeScript', 'Vite'],
      url: 'https://mofumofu-biyori.vercel.app/',
      image: '/projects/mofumofu.webp',
      imageAlt: '犬と猫に寄り添うペットサロン もふもふ日和のサイトプレビュー',
    },
  ] satisfies Work[],
  services: [
    {
      title: '店舗・サロンサイト',
      description: 'お店の雰囲気とサービス内容が伝わり、来店前の不安を減らすサイト。',
    },
    {
      title: '企業サイト',
      description: '事業内容や強みを整理し、会社の信頼感を伝えるコーポレートサイト。',
    },
    {
      title: '採用サイト',
      description: '仕事内容や働く環境をわかりやすく伝え、応募のきっかけをつくるサイト。',
    },
    {
      title: 'ランディングページ',
      description: 'ひとつのサービスやキャンペーンに焦点をあて、行動につなげるページ。',
    },
  ] satisfies Service[],
  process: [
    {
      number: '01',
      title: 'ヒアリング',
      description: '目的、届けたい相手、必要な情報を整理します。',
    },
    {
      number: '02',
      title: '企画・構成',
      description: 'ページ構成と、迷わず進める導線を設計します。',
    },
    {
      number: '03',
      title: 'デザイン',
      description: '業種やブランドに合う見た目と伝え方をつくります。',
    },
    {
      number: '04',
      title: '実装',
      description: 'スマートフォンとPCの両方で使いやすく組み立てます。',
    },
    {
      number: '05',
      title: '公開・改善',
      description: '公開前後の表示を確認し、必要な調整を行います。',
    },
  ] satisfies ProcessStep[],
  skills: ['React', 'TypeScript', 'Next.js', 'Vite', 'HTML', 'CSS', 'レスポンシブ対応'],
  contact: {
    eyebrow: 'CONTACT',
    title: 'まずは、つくりたいものを聞かせてください。',
    description:
      '店舗サイト、企業サイト、採用サイトなど、まだ構想段階のご相談も歓迎しています。',
  },
} as const
