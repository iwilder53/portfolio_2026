export type L10n = { en: string; ja: string };
export type L10nList = { en: string[]; ja: string[] };
export type Locale = keyof L10n;

export const pick = <T>(value: { en: T; ja: T }, locale: string): T =>
  value[(locale === "ja" ? "ja" : "en") as Locale];

export type Role = {
  company: string;
  title: L10n;
  period: string;
  bullets: L10nList;
  tags: string[];
};


/* 
export const education = [
  {
    school: { en: "Your University", ja: "あなたの大学" },
    degree: { en: "B.E. in Electronics Engineering", ja: "電子工学 学士" },
    period: "2016 – 2020",
  },
];

export const certificates = [
  {
    name: { en: "Certificate name", ja: "資格名" },
    issuer: "Issuer",
    year: "2024",
    url: "", // optional credential link
  },
];

export const experience: Record<"embedded" | "systems" | "webmobile", Role[]> = {
  embedded: [
    {
      company: "Company A",
      title: { en: "Embedded Engineer", ja: "組込みエンジニア" },
      period: "2021 – 2023",
      bullets: {
        en: ["Wrote firmware for ARM Cortex-M boards.", "Brought up new hardware revisions."],
        ja: ["ARM Cortex-Mボード向けファームウェアを開発。", "新しいハードウェアの立ち上げを担当。"],
      },
      tags: ["C", "RTOS", "I2C", "SPI"],
    },
  ],
  systems: [
    {
      company: "Company B",
      title: { en: "Systems Engineer", ja: "システムエンジニア" },
      period: "2023 – 2024",
      bullets: {
        en: ["Built Linux tooling and services.", "Improved build and deploy pipelines."],
        ja: ["Linux向けツールとサービスを開発。", "ビルド・デプロイのパイプラインを改善。"],
      },
      tags: ["Linux", "C++", "Docker"],
    },
  ],
  webmobile: [
    {
      company: "Company C",
      title: { en: "Full-stack Developer", ja: "フルスタック開発者" },
      period: "2024 – Present",
      bullets: {
        en: ["Built web apps with Next.js.", "Shipped cross-platform mobile apps."],
        ja: ["Next.jsでWebアプリを開発。", "クロスプラットフォームのモバイルアプリをリリース。"],
      },
      tags: ["Next.js", "TypeScript", "Flutter", "PostgreSQL"],
    },
  ],
}; */

export const education = [
    {
      school: {
        en: "Nagpur University",
        ja: "ナーグプル大学",
      },
      degree: {
        en: "Bachelor of Computer Applications",
        ja: "コンピュータアプリケーション学士",
      },
      period: "2022",
    },
    {
      school: {
        en: "Nagpur University",
        ja: "ナーグプル大学",
      },
      degree: {
        en: "M.Sc. in Computer Science",
        ja: "コンピュータサイエンス修士",
      },
      period: "2024",
    },
  ];
  
  export const certificates = [
    {
      name: {
        en: "Embedded Systems Bare-Metal Programming Ground Up",
        ja: "Embedded Systems Bare-Metal Programming Ground Up",
      },
      issuer: "Udemy",
      year: "2023",
      url: "",
    },
    {
      name: {
        en: "DSP for STM32F4 Microcontrollers",
        ja: "DSP for STM32F4 Microcontrollers",
      },
      issuer: "Udemy",
      year: "2023",
      url: "",
    },
    {
      name: {
        en: "Student of the Year Award",
        ja: "Student of the Year Award",
      },
      issuer: "GH Raisoni College of Commerce, Science & Technology",
      year: "2024",
      url: "",
    },
  ];
  
  export const experience: Record<"embedded" | "systems" | "webmobile", Role[]> = {
    embedded: [
      {
        company: "Heta Datain",
        title: {
          en: "Embedded Software Engineer",
          ja: "組込みソフトウェアエンジニア",
        },
        period: "2020 – 2021",
        bullets: {
          en: [
            "Developed an ESP32-based Wi-Fi mesh network supporting over 250 nodes for pharmaceutical plant monitoring.",
            "Designed sensor drivers and environmental monitoring probes using ESP-IDF, C/C++, and Python.",
            "Developed a real-time pressure monitoring system using ESP32 and HX711 load cells, with an Android companion app.",
            "Built an IoT smart energy meter recording over 50 electrical parameters, including power factor, load, and frequency.",
            "Implemented low-level drivers and FreeRTOS firmware, including optimized Modbus drivers.",
            "Designed, tested, and deployed embedded hardware, including PCB development and hardware debugging.",
          ],
          ja: [
            "医薬品工場向けに、250台以上のノードに対応するESP32ベースのWi-Fiメッシュネットワークを開発。",
            "ESP-IDF、C/C++、Pythonを使用し、センサードライバーと環境監視プローブを設計・開発。",
            "ESP32とHX711ロードセルを使用したリアルタイム圧力監視システムとAndroidアプリを開発。",
            "力率、負荷、周波数など50以上の電気パラメータを記録するIoTスマート電力メーターを開発。",
            "低レベルドライバーとFreeRTOSファームウェアを実装し、Modbusドライバーを最適化。",
            "PCB設計、ハードウェアデバッグを含む組込みハードウェアの開発・試験・導入を担当。",
          ],
        },
        tags: [
          "C",
          "C++",
          "Python",
          "ESP32",
          "ESP-IDF",
          "FreeRTOS",
          "MQTT",
          "Modbus",
          "PCB Design",
        ],
      },
      {
        company: "Independent R&D",
        title: {
          en: "Embedded Systems Researcher",
          ja: "組込みシステム研究開発エンジニア",
        },
        period: "2022 – 2024",
        bullets: {
          en: [
            "Developed an offline IoT weather prediction device using onboard sensors and a TensorFlow Lite model running within 320 KB of RAM.",
            "Collected and processed local weather data, trained a machine learning model, and deployed inference on an ESP32.",
            "Completed the prototype and testing in two months; the project formed the basis of an M.Sc. thesis.",
            "Developed an ESP32-based IoT alarm system for examinations and lectures, deployed across university buildings.",
          ],
          ja: [
            "オンボードセンサーとTensorFlow Liteモデルを使用し、320KBのRAMで動作するオフラインIoT気象予測デバイスを開発。",
            "地域の気象データを収集・処理し、機械学習モデルを学習させ、ESP32上に推論機能を実装。",
            "2か月でプロトタイプの開発と試験を完了し、修士論文の研究テーマとして活用。",
            "大学の各学部棟に導入された、試験・講義向けESP32ベースのIoTアラームシステムを開発。",
          ],
        },
        tags: [
          "Embedded C",
          "Python",
          "ESP32",
          "TensorFlow",
          "TensorFlow Lite",
          "Machine Learning",
          "IoT",
        ],
      },
    ],
  
    systems: [
      {
        company: "Fundasta Corp.",
        title: {
          en: "Software Engineer",
          ja: "ソフトウェアエンジニア",
        },
        period: "2024 – 2026",
        bullets: {
          en: [
            "Migrated legacy COBOL-based data and databases to AWS S3 and DynamoDB.",
            "Built AWS Glue and Lambda ETL pipelines to process and migrate legacy data.",
            "Made archived S3 data accessible through Amazon Athena and exposed DynamoDB data for frontend consumption.",
            "Maintained and enhanced JAXA's D-NET RESCUE system for ground-to-air and ground-to-ground communications.",
            "Implemented and maintained flight planning, real-time tracking, and flight plan approval/rejection functionality.",
            "Applied software upgrades, security patches, and new features to an operational aviation coordination system.",
          ],
          ja: [
            "レガシーCOBOLシステムのデータおよびデータベースをAWS S3とDynamoDBへ移行。",
            "AWS GlueとLambdaを使用してETLパイプラインを構築し、レガシーデータの処理・移行を自動化。",
            "Amazon AthenaによるS3アーカイブデータへのアクセスと、フロントエンド向けのDynamoDBデータ提供を実現。",
            "JAXAのD-NET RESCUEシステムにおける対地・対空通信機能の保守・改修を担当。",
            "飛行計画の作成、リアルタイム追跡、飛行計画の承認・却下機能を実装・保守。",
            "航空機運用支援システムに対するアップグレード、セキュリティパッチ適用、新機能追加を実施。",
          ],
        },
        tags: [
          "Python",
          "Java",
          "Spring Boot",
          "MyBatis",
          "AWS Glue",
          "AWS Lambda",
          "S3",
          "DynamoDB",
          "Athena",
          "GitLab",
        ],
      },
      {
        company: "Freelance / TRG Computers",
        title: {
          en: "Software Engineer & Consultant",
          ja: "ソフトウェアエンジニア・コンサルタント",
        },
        period: "2014 – 2024",
        bullets: {
          en: [
            "Designed and developed backend services, REST APIs, and web applications for ecommerce and business systems.",
            "Built and maintained Linux-hosted WooCommerce platforms, including contract management batch jobs and integrations.",
            "Developed a complete ecommerce platform using MedusaJS and Next.js, with separate storefront, administration dashboard, and backend services.",
            "Implemented Redis caching and Docker/Nginx-based deployment workflows.",
            "Worked across requirements analysis, system design, implementation, testing, deployment, and maintenance.",
            "Supported team coordination, task allocation, scheduling, and code reviews.",
          ],
          ja: [
            "ECサイトや業務システム向けのバックエンドサービス、REST API、Webアプリケーションを設計・開発。",
            "Linux上のWooCommerceプラットフォームを保守し、契約管理バッチ処理やシステム連携を実装。",
            "MedusaJSとNext.jsを使用し、ストアフロント、管理ダッシュボード、バックエンドで構成されるECプラットフォームを開発。",
            "RedisによるキャッシュとDocker・Nginxを使用したデプロイ環境を構築。",
            "要件分析、システム設計、実装、テスト、導入、保守まで幅広く担当。",
            "タスク管理、スケジュール調整、コードレビューなど、チーム運営を支援。",
          ],
        },
        tags: [
          "C++",
          "Python",
          "JavaScript",
          "TypeScript",
          "Node.js",
          "Next.js",
          "PHP",
          "Linux",
          "Docker",
          "Nginx",
          "Redis",
          "MySQL",
        ],
      },
    ],
  
    webmobile: [
      {
        company: "Freelance / Heta Datain",
        title: {
          en: "Flutter & Mobile Application Developer",
          ja: "Flutter・モバイルアプリケーション開発者",
        },
        period: "2020 – 2021",
        bullets: {
          en: [
            "Developed cross-platform Flutter applications for iOS and Android.",
            "Built a smart energy monitoring dashboard showing factory machine-level power consumption and real-time business data.",
            "Integrated embedded energy meters with mobile applications and backend services.",
            "Designed application interfaces, implemented state management, and handled deployment and maintenance.",
            "Released applications through Google Play.",
          ],
          ja: [
            "Flutterを使用してiOS・Android向けのクロスプラットフォームアプリを開発。",
            "工場の機械ごとの電力消費量やリアルタイムデータを表示するエネルギー監視ダッシュボードを構築。",
            "組込み電力メーターとモバイルアプリケーション、バックエンドサービスを連携。",
            "UI設計、状態管理、アプリの導入・保守を担当。",
            "Google Playでアプリを公開。",
          ],
        },
        tags: [
          "Flutter",
          "Dart",
          "iOS",
          "Android",
          "Firebase",
          "REST API",
          "Provider",
        ],
      },
      {
        company: "Freelance / TRG Computers",
        title: {
          en: "Full-Stack Developer",
          ja: "フルスタック開発者",
        },
        period: "2014 – 2024",
        bullets: {
          en: [
            "Developed and maintained ecommerce websites, dashboards, and REST APIs.",
            "Built a QR-code-based student attendance system using Next.js, Node.js, Express, and Firebase.",
            "Developed frontend interfaces and backend services for web applications.",
            "Handled requirements gathering, technical design, implementation, testing, and production deployment.",
          ],
          ja: [
            "ECサイト、管理ダッシュボード、REST APIの開発・保守を担当。",
            "Next.js、Node.js、Express、Firebaseを使用し、QRコードによる学生出欠管理システムを開発。",
            "Webアプリケーションのフロントエンドとバックエンドサービスを実装。",
            "要件ヒアリング、技術設計、実装、テスト、本番環境への導入まで担当。",
          ],
        },
        tags: [
          "TypeScript",
          "JavaScript",
          "Next.js",
          "Node.js",
          "Express",
          "PHP",
          "HTML",
          "CSS",
          "Firebase",
          "MySQL",
        ],
      },
    ],
  };