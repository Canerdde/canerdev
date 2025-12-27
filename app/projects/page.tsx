'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ExternalLink, Github, Star, Smartphone, Sparkles } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const projects = [
  {
    id: 'seyrimizan',
    slug: 'seyrimizan',
    title: 'Seyr-i Mizan',
    titleEn: 'Seyr-i Mizan',
    description: 'Seyr-i Mizan, geleneksel namaz vakti uygulamalarının çok ötesine geçen, kişisel bir manevi gelişim ve hesaplaşma asistanıdır. Uygulamamız, güncel ve doğru Namaz Vakitleri ile Kıble Bulucu özelliklerini sunarken; asıl gücünü "Mizan" (Denge) felsefesinden alır.',
    descriptionEn: 'Seyr-i Mizan is a personal spiritual development and accountability assistant that goes far beyond traditional prayer time applications. While our app offers current and accurate Prayer Times and Qibla Finder features, its true power comes from the philosophy of "Mizan" (Balance).',
    features: [
      { title: 'Namaz Vakitleri & Kıble Bulucu', description: 'Güncel ve doğru namaz vakitleri ile hassas kıble yönü tespiti.' },
      { title: 'Kaza Hesaplama', description: 'Bulûğ yaşından itibaren tahmini kaza namazı ve oruç borçlarını otomatik hesaplama.' },
      { title: 'Gündelik İbadet Skoru', description: 'Günlük ibadet performansınızı ölçen ve manevi gelişiminize yön veren ilerleme sistemi.' },
      { title: 'Tevekkül Hadisleri', description: 'Her namaz vaktine ve ihtiyaca özel seçilmiş manevi rehberlik hadisleri.' },
      { title: 'Vird Takibi', description: 'Kişiselleştirilebilir tesbihat ve zikir takip sistemi.' },
      { title: 'Manevi Gelişim Takibi', description: 'Uzun vadeli manevi yolculuğunuzu görselleştiren ve destekleyen sistem.' }
    ],
    featuresEn: [
      { title: 'Prayer Times & Qibla Finder', description: 'Current and accurate prayer times with precise Qibla direction detection.' },
      { title: 'Missed Prayer Calculation', description: 'Automatic calculation of estimated missed prayers and fasting debts from the age of maturity.' },
      { title: 'Daily Worship Score', description: 'A progress system that measures your daily worship performance and guides your spiritual development.' },
      { title: 'Tawakkul Hadiths', description: 'Spiritually guiding hadiths selected specifically for each prayer time and need.' },
      { title: 'Wird Tracking', description: 'Personalizable dhikr and tasbih tracking system.' },
      { title: 'Spiritual Growth Tracking', description: 'A system that visualizes and supports your long-term spiritual journey.' }
    ],
    tags: ['Flutter', 'Dart', 'Firebase', 'Geolocator', 'Provider', 'Shared Preferences'],
    image: '/projects/seyrimizan.png',
    github: null, // Private repository
    demo: null,
    status: 'development', // 'development' | 'completed' | 'production'
    featured: true,
    year: '2024',
    type: 'Mobile Application'
  },
  {
    id: 'koleksiyonhub',
    slug: 'koleksiyonhub',
    title: 'KoleksiyonHub',
    titleEn: 'KoleksiyonHub',
    titleFr: 'KoleksiyonHub',
    titleAr: 'KoleksiyonHub',
    description: 'KoleksiyonHub, koleksiyon yapmayı bir tutku olarak görenler için özel olarak tasarlanmış, standart bir e-ticaret platformunun ötesindedir. Burası, kayıp parçaları bulmaktan daha fazlasını vaat eder; burası bir topluluktur. Platformumuzda, koleksiyonlarınızı sergileyebilir, sitenin eşsiz Açık Artırma sistemi ile en nadir parçaları rekabetçi bir ortamda koleksiyonunuza katabilir veya fazlalıklarınızı değerinde elden çıkarabilirsiniz. En önemlisi, özel ilgi alanlarınıza göre kendi gruplarınızı oluşturabilir ve güvenilir koleksiyoncularla anında, adil ve güvenli bir şekilde Takas yapabilirsiniz. KoleksiyonHub, sadece alım-satım yapılan bir pazar yeri değil, ortak bir tutkuyu paylaşanların buluşma noktasıdır.',
    descriptionEn: 'KoleksiyonHub is a platform designed specifically for those who see collecting as a passion, going beyond a standard e-commerce platform. This is more than just finding missing pieces; this is a community. On our platform, you can showcase your collections, add the rarest pieces to your collection through the site\'s unique Auction system in a competitive environment, or sell your duplicates at their true value. Most importantly, you can create your own groups based on your specific interests and Trade instantly, fairly and securely with trusted collectors. KoleksiyonHub is not just a marketplace for buying and selling, but a meeting point for those who share a common passion.',
    descriptionFr: 'KoleksiyonHub est une plateforme conçue spécifiquement pour ceux qui considèrent la collection comme une passion, allant au-delà d\'une plateforme e-commerce standard. C\'est plus qu\'un simple moyen de trouver des pièces manquantes ; c\'est une communauté. Sur notre plateforme, vous pouvez présenter vos collections, ajouter les pièces les plus rares à votre collection grâce au système d\'Enchères unique du site dans un environnement compétitif, ou vendre vos doublons à leur juste valeur. Plus important encore, vous pouvez créer vos propres groupes en fonction de vos intérêts spécifiques et échanger instantanément, équitablement et en toute sécurité avec des collectionneurs de confiance. KoleksiyonHub n\'est pas seulement un marché pour acheter et vendre, mais un point de rencontre pour ceux qui partagent une passion commune.',
    descriptionAr: 'KoleksiyonHub هي منصة مصممة خصيصًا لأولئك الذين يرون جمع التحف كشغف، تتجاوز منصة التجارة الإلكترونية القياسية. هذا أكثر من مجرد العثور على القطع المفقودة؛ هذا مجتمع. على منصتنا، يمكنك عرض مجموعاتك، وإضافة أندر القطع إلى مجموعتك من خلال نظام المزاد الفريد للموقع في بيئة تنافسية، أو بيع مكرراتك بقيمتها الحقيقية. والأهم من ذلك، يمكنك إنشاء مجموعاتك الخاصة بناءً على اهتماماتك المحددة والتداول على الفور وبشكل عادل وآمن مع جامعي التحف الموثوقين. KoleksiyonHub ليست مجرد سوق للشراء والبيع، بل نقطة التقاء لأولئك الذين يتشاركون شغفًا مشتركًا.',
    features: [
      { title: 'Koleksiyon Sergileme', description: 'Koleksiyonlarınızı profesyonel bir şekilde sergileyin ve diğer koleksiyoncularla paylaşın.' },
      { title: 'Açık Artırma Sistemi', description: 'Eşsiz açık artırma sistemi ile nadir parçaları rekabetçi bir ortamda koleksiyonunuza katın.' },
      { title: 'Takas Platformu', description: 'Güvenilir koleksiyoncularla anında, adil ve güvenli takas işlemleri gerçekleştirin.' },
      { title: 'Özel Gruplar', description: 'İlgi alanlarınıza göre özel gruplar oluşturun ve benzer tutkuları paylaşanlarla bağlantı kurun.' },
      { title: 'Güvenli Ödeme', description: 'Güvenli ödeme altyapısı ile sorunsuz alım-satım deneyimi.' },
      { title: 'Topluluk Özellikleri', description: 'Koleksiyon topluluğu ile etkileşim kurun, deneyimlerinizi paylaşın ve bilgi edinin.' }
    ],
    featuresEn: [
      { title: 'Collection Showcase', description: 'Showcase your collections professionally and share them with other collectors.' },
      { title: 'Auction System', description: 'Add rare pieces to your collection through the unique auction system in a competitive environment.' },
      { title: 'Trading Platform', description: 'Conduct instant, fair and secure trading transactions with trusted collectors.' },
      { title: 'Custom Groups', description: 'Create custom groups based on your interests and connect with those who share similar passions.' },
      { title: 'Secure Payment', description: 'Seamless buying and selling experience with secure payment infrastructure.' },
      { title: 'Community Features', description: 'Interact with the collecting community, share your experiences and gain knowledge.' }
    ],
    featuresFr: [
      { title: 'Vitrine de Collection', description: 'Présentez vos collections de manière professionnelle et partagez-les avec d\'autres collectionneurs.' },
      { title: 'Système d\'Enchères', description: 'Ajoutez des pièces rares à votre collection grâce au système d\'enchères unique dans un environnement compétitif.' },
      { title: 'Plateforme d\'Échange', description: 'Effectuez des transactions d\'échange instantanées, équitables et sécurisées avec des collectionneurs de confiance.' },
      { title: 'Groupes Personnalisés', description: 'Créez des groupes personnalisés en fonction de vos intérêts et connectez-vous avec ceux qui partagent des passions similaires.' },
      { title: 'Paiement Sécurisé', description: 'Expérience d\'achat et de vente fluide avec une infrastructure de paiement sécurisée.' },
      { title: 'Fonctionnalités Communautaires', description: 'Interagissez avec la communauté des collectionneurs, partagez vos expériences et acquérez des connaissances.' }
    ],
    featuresAr: [
      { title: 'عرض المجموعات', description: 'اعرض مجموعاتك بشكل احترافي وشاركها مع جامعي التحف الآخرين.' },
      { title: 'نظام المزاد', description: 'أضف القطع النادرة إلى مجموعتك من خلال نظام المزاد الفريد في بيئة تنافسية.' },
      { title: 'منصة التداول', description: 'قم بإجراء معاملات تداول فورية وعادلة وآمنة مع جامعي التحف الموثوقين.' },
      { title: 'مجموعات مخصصة', description: 'أنشئ مجموعات مخصصة بناءً على اهتماماتك وتواصل مع أولئك الذين يتشاركون شغفًا مشابهًا.' },
      { title: 'دفع آمن', description: 'تجربة شراء وبيع سلسة مع بنية تحتية للدفع آمنة.' },
      { title: 'ميزات المجتمع', description: 'تفاعل مع مجتمع جمع التحف، شارك تجاربك واكتسب المعرفة.' }
    ],
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'NextAuth', 'Stripe'],
    image: '/projects/KoleksiyonHub/koleksiyonhub.png',
    github: null,
    demo: null,
    status: 'completed',
    featured: true,
    year: '2024',
    type: 'Web Platform'
  },
  {
    id: 'smartsupport',
    slug: 'smartsupport',
    title: 'SmartSupport',
    titleEn: 'SmartSupport',
    titleFr: 'SmartSupport',
    titleAr: 'SmartSupport',
    description: 'SmartSupport, özel bir şirketin IT çalışanları için özel olarak tasarlanmış kapsamlı bir destek ve proje yönetim platformudur. Bu platform, IT ekibinin karşılaştıkları sorunları çözmelerine ve bu çözümleri kolayca paylaşmalarına olanak tanır. Proje yürütme alanı ile ekiplerin projelerini takip etmelerini sağlar, dokümantasyon ekleme alanı ile bilgi birikimini merkezileştirir.',
    descriptionEn: 'SmartSupport is a comprehensive support and project management platform specifically designed for the IT employees of a private company. This platform enables IT teams to solve problems they encounter and easily share these solutions. With its project execution area, it allows teams to track their projects.',
    descriptionFr: 'SmartSupport est une plateforme complète de support et de gestion de projet conçue spécifiquement pour les employés IT d\'une entreprise privée. Cette plateforme permet aux équipes IT de résoudre les problèmes qu\'elles rencontrent et de partager facilement ces solutions.',
    descriptionAr: 'SmartSupport هي منصة شاملة للدعم وإدارة المشاريع مصممة خصيصًا لموظفي تكنولوجيا المعلومات في شركة خاصة.',
    features: [
      { title: 'Sorun Çözüm Paylaşımı', description: 'IT çalışanları karşılaştıkları sorunları ve çözümlerini platform üzerinden paylaşabilir.' },
      { title: 'Proje Yürütme Alanı', description: 'Ekiplerin projelerini takip edebileceği kapsamlı bir proje yönetim alanı.' },
      { title: 'Dokümantasyon Yönetimi', description: 'Teknik dokümantasyonları merkezi bir yerde toplama ve yönetme imkanı.' },
      { title: 'Yetki Yönetimi', description: 'Detaylı kullanıcı yetki yönetim sistemi ile farklı rol ve izin seviyeleri tanımlanabilir.' },
      { title: 'Kullanıcı İstatistikleri', description: 'Kullanıcı aktivitelerini görüntüleme ve istatistikleri indirme özelliği.' },
      { title: 'Backup Yönetimi', description: 'Sistem verilerinin yedeklenmesi ve geri yüklenmesi için backup indirme ve yükleme özellikleri.' },
      { title: 'Masaüstü Uygulaması', description: 'Tauri framework kullanılarak geliştirilmiş masaüstü uygulaması.' }
    ],
    featuresEn: [
      { title: 'Problem Solution Sharing', description: 'IT employees can share problems they encounter and their solutions on the platform.' },
      { title: 'Project Execution Area', description: 'A comprehensive project management area where teams can track their projects.' },
      { title: 'Documentation Management', description: 'Ability to collect and manage technical documentation in a central location.' },
      { title: 'Permission Management', description: 'Different role and permission levels can be defined with a detailed user permission management system.' },
      { title: 'User Statistics', description: 'Feature to view user activities and download statistics.' },
      { title: 'Backup Management', description: 'Backup download and upload features for backing up and restoring system data.' },
      { title: 'Desktop Application', description: 'Desktop application developed using Tauri framework.' }
    ],
    featuresFr: [
      { title: 'Partage de Solutions de Problèmes', description: 'Les employés IT peuvent partager les problèmes qu\'ils rencontrent et leurs solutions sur la plateforme.' },
      { title: 'Zone d\'Exécution de Projet', description: 'Une zone de gestion de projet complète où les équipes peuvent suivre leurs projets.' },
      { title: 'Gestion de Documentation', description: 'Capacité à collecter et gérer la documentation technique dans un emplacement central.' },
      { title: 'Gestion des Permissions', description: 'Différents niveaux de rôle et de permission peuvent être définis avec un système de gestion des permissions utilisateur détaillé.' },
      { title: 'Statistiques Utilisateur', description: 'Fonctionnalité pour visualiser les activités des utilisateurs et télécharger les statistiques.' },
      { title: 'Gestion des Sauvegardes', description: 'Fonctionnalités de téléchargement et de téléversement de sauvegarde pour sauvegarder et restaurer les données système.' },
      { title: 'Application de Bureau', description: 'Application de bureau développée en utilisant le framework Tauri.' }
    ],
    featuresAr: [
      { title: 'مشاركة حلول المشكلات', description: 'يمكن لموظفي تكنولوجيا المعلومات مشاركة المشكلات التي يواجهونها وحلولهم على المنصة.' },
      { title: 'منطقة تنفيذ المشروع', description: 'منطقة إدارة مشاريع شاملة حيث يمكن للفرق تتبع مشاريعها.' },
      { title: 'إدارة الوثائق', description: 'القدرة على جمع وإدارة الوثائق التقنية في مكان مركزي.' },
      { title: 'إدارة الأذونات', description: 'يمكن تعريف مستويات مختلفة من الأدوار والأذونات مع نظام إدارة أذونات المستخدم التفصيلي.' },
      { title: 'إحصائيات المستخدم', description: 'ميزة لعرض أنشطة المستخدمين وتنزيل الإحصائيات.' },
      { title: 'إدارة النسخ الاحتياطي', description: 'ميزات تنزيل ورفع النسخ الاحتياطي لعمل نسخ احتياطية واستعادة بيانات النظام.' },
      { title: 'تطبيق سطح المكتب', description: 'تطبيق سطح مكتب تم تطويره باستخدام إطار عمل Tauri.' }
    ],
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Tauri', 'Desktop App', 'PostgreSQL'],
    image: '/projects/SmartSupport/1.png',
    github: null,
    demo: null,
    status: 'completed',
    featured: true,
    year: '2024',
    type: 'Desktop Application'
  },
  {
    id: 'tektikcv',
    slug: 'tektikcv',
    title: 'TekTıkCV',
    titleEn: 'TekTıkCV',
    titleFr: 'TekTıkCV',
    titleAr: 'TekTıkCV',
    description: 'TekTıkCV, profesyonel CV ve ön yazı oluşturma platformudur. Kullanıcılar, 10\'dan fazla profesyonel şablon arasından seçim yaparak bilgilerini kolayca girebilir ve canlı önizleme özelliği ile anında düzenleyebilir. Oluşturulan CV\'ler güvenli bir şekilde kullanıcı panelinde saklanır ve gerektiğinde tekrar indirilebilir.',
    descriptionEn: 'TekTıkCV is a professional CV and cover letter creation platform. Users can easily enter their information by choosing from more than 10 professional templates and instantly edit them with the live preview feature. Created CVs are securely stored in the user panel and can be downloaded again when needed.',
    descriptionFr: 'TekTıkCV est une plateforme de création de CV et de lettres de motivation professionnels. Les utilisateurs peuvent facilement saisir leurs informations en choisissant parmi plus de 10 modèles professionnels et les modifier instantanément avec la fonctionnalité d\'aperçu en direct.',
    descriptionAr: 'TekTıkCV هي منصة لإنشاء السير الذاتية ورسائل الغلاف المهنية. يمكن للمستخدمين بسهولة إدخال معلوماتهم من خلال الاختيار من بين أكثر من 10 قوالب احترافية وتعديلها على الفور مع ميزة المعاينة المباشرة.',
    features: [
      { title: '10+ Profesyonel CV Şablonu', description: 'Farklı sektörler için tasarlanmış profesyonel şablonlar arasından seçim yapın.' },
      { title: 'Canlı Önizleme', description: 'CV\'nizi oluştururken anında canlı önizleme görüntüleyin.' },
      { title: 'Güvenli Kullanıcı Paneli', description: 'CV\'lerinizi güvenli bir şekilde saklayın ve istediğiniz zaman erişin.' },
      { title: 'Yüksek Kaliteli PDF', description: 'PDFShift API ile profesyonel PDF çıktıları oluşturun.' },
      { title: 'Kimlik Doğrulama', description: 'JWT ve Google OAuth ile güvenli giriş yapın.' },
      { title: 'Ödeme Entegrasyonu', description: 'PayTR ile güvenli ödeme işlemleri.' },
      { title: 'Blog Sayfası', description: 'Kariyer tavsiyeleri ve CV yazma ipuçları için blog sayfası.' },
      { title: 'Form Validasyonu', description: 'React Hook Form ve Zod ile güçlü form validasyonu.' }
    ],
    featuresEn: [
      { title: '10+ Professional CV Templates', description: 'Choose from professional templates designed for different industries.' },
      { title: 'Live Preview', description: 'View your CV instantly with live preview while creating it.' },
      { title: 'Secure User Panel', description: 'Securely store your CVs and access them anytime.' },
      { title: 'High-Quality PDF', description: 'Create professional PDF outputs with PDFShift API.' },
      { title: 'Authentication', description: 'Secure login with JWT and Google OAuth.' },
      { title: 'Payment Integration', description: 'Secure payment transactions with PayTR.' },
      { title: 'Blog Page', description: 'Blog page for career advice and CV writing tips.' },
      { title: 'Form Validation', description: 'Strong form validation using React Hook Form and Zod.' }
    ],
    featuresFr: [
      { title: '10+ Modèles de CV Professionnels', description: 'Choisissez parmi des modèles professionnels conçus pour différentes industries.' },
      { title: 'Aperçu en Direct', description: 'Visualisez votre CV instantanément avec l\'aperçu en direct.' },
      { title: 'Panneau Utilisateur Sécurisé', description: 'Stockez vos CV en toute sécurité et accédez-y à tout moment.' },
      { title: 'PDF de Haute Qualité', description: 'Créez des sorties PDF professionnelles avec l\'API PDFShift.' },
      { title: 'Authentification', description: 'Connexion sécurisée avec JWT et Google OAuth.' },
      { title: 'Intégration de Paiement', description: 'Transactions de paiement sécurisées avec PayTR.' },
      { title: 'Page de Blog', description: 'Page de blog pour les conseils de carrière et les astuces de rédaction de CV.' },
      { title: 'Validation de Formulaire', description: 'Validation de formulaire robuste utilisant React Hook Form et Zod.' }
    ],
    featuresAr: [
      { title: '10+ قوالب سيرة ذاتية احترافية', description: 'اختر من بين قوالب احترافية مصممة لصناعات مختلفة.' },
      { title: 'معاينة مباشرة', description: 'اعرض سيرتك الذاتية على الفور مع المعاينة المباشرة.' },
      { title: 'لوحة مستخدم آمنة', description: 'قم بتخزين سيرك الذاتية بأمان والوصول إليها في أي وقت.' },
      { title: 'PDF عالي الجودة', description: 'أنشئ مخرجات PDF احترافية مع PDFShift API.' },
      { title: 'المصادقة', description: 'تسجيل دخول آمن مع JWT وGoogle OAuth.' },
      { title: 'تكامل الدفع', description: 'معاملات دفع آمنة مع PayTR.' },
      { title: 'صفحة المدونة', description: 'صفحة مدونة لنصائح المسيرة المهنية ونصائح كتابة السيرة الذاتية.' },
      { title: 'التحقق من النموذج', description: 'التحقق القوي من النموذج باستخدام React Hook Form وZod.' }
    ],
    tags: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL', 'JWT', 'PayTR', 'PDFShift', 'Resend', 'Google OAuth'],
    image: '/projects/TekTıkCV/1.png',
    github: null,
    demo: 'https://tektikcv.com.tr',
    status: 'production',
    featured: true,
    year: '2024',
    type: 'Web Platform'
  },
]

export default function ProjectsPage() {
  const { t, language } = useLanguage()
  const router = useRouter()
  const featuredProjects = projects.filter(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

  const getProjectTitle = (project: typeof projects[0]) => {
    if (language === 'en' && project.titleEn) return project.titleEn
    if (language === 'fr' && project.titleFr) return project.titleFr
    if (language === 'ar' && project.titleAr) return project.titleAr
    return project.title
  }

  const getProjectDescription = (project: typeof projects[0]) => {
    if (language === 'en' && project.descriptionEn) return project.descriptionEn
    if (language === 'fr' && project.descriptionFr) return project.descriptionFr
    if (language === 'ar' && project.descriptionAr) return project.descriptionAr
    return project.description
  }

  const getProjectFeatures = (project: typeof projects[0]) => {
    if (language === 'en' && project.featuresEn) return project.featuresEn
    if (language === 'fr' && project.featuresFr) return project.featuresFr
    if (language === 'ar' && project.featuresAr) return project.featuresAr
    return project.features
  }

  const getStatusBadge = (status: string) => {
    const statusText = {
      development: language === 'en' ? 'In Development' : 'Geliştirme Aşamasında',
      completed: language === 'en' ? 'Completed' : 'Tamamlandı',
      production: language === 'en' ? 'Live' : 'Yayında'
    }
    
    const statusColors = {
      development: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
      completed: 'bg-green-500/20 text-green-400 border-green-500/30',
      production: 'bg-blue-500/20 text-blue-400 border-blue-500/30'
    }

    return (
      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${statusColors[status as keyof typeof statusColors]}`}>
        <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
        {statusText[status as keyof typeof statusText]}
      </span>
    )
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10 border-b border-gray-800">
        <div className="container-custom py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 px-4 py-2 rounded-full mb-6 animate-slide-up">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-300">{language === 'en' ? 'My Work' : 'Çalışmalarım'}</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-slide-up" style={{animationDelay: '0.1s'}}>
              <span className="gradient-text">{t.projects.title}</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto animate-slide-up" style={{animationDelay: '0.2s'}}>
              {t.projects.subtitle}
            </p>
          </div>
        </div>
      </div>

      <div className="container-custom py-12">
        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <section className="mb-20">
            <div className="flex items-center gap-3 mb-12">
              <Star className="w-8 h-8 text-yellow-500 fill-current" />
              <h2 className="text-3xl md:text-4xl font-bold">{t.projects.featured}</h2>
            </div>
            
            <div className="space-y-12">
              {featuredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="group card overflow-hidden p-0 hover:scale-[1.02] transition-all duration-300 block relative cursor-pointer"
                  onClick={() => router.push(`/projects/${project.slug}`)}
                >
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Image Section */}
                    <div className="relative h-64 md:h-full min-h-[400px] bg-gradient-to-br from-gray-900 to-gray-950 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent z-10" />
                      {project.image && (
                        <Image
                          src={project.image}
                          alt={getProjectTitle(project)}
                          fill
                          className={`object-cover group-hover:scale-110 transition-transform duration-700 ${project.slug === 'smartsupport' ? 'blur-md' : ''}`}
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      )}
                      <div className="absolute top-4 left-4 z-20">
                        {getStatusBadge(project.status)}
                      </div>
                      {project.status === 'development' && (
                        <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2">
                          <Smartphone className="w-5 h-5 text-blue-400" />
                          <span className="text-sm text-gray-300">
                            {language === 'en' ? 'Mobile App' : 'Mobil Uygulama'}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Content Section */}
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                      <div className="mb-4">
                        <h3 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
                          {getProjectTitle(project)}
                        </h3>
                        <p className="text-gray-400 leading-relaxed text-lg mb-6">
                          {getProjectDescription(project)}
                        </p>
                      </div>

                      {/* Features */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wide">
                          {language === 'en' ? 'Key Features' : 'Özellikler'}
                        </h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {getProjectFeatures(project).slice(0, 6).map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                              {typeof feature === 'string' ? feature : feature.title}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs bg-gray-800 text-gray-300 px-3 py-1.5 rounded-full border border-gray-700"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="flex gap-3 mt-auto" onClick={(e) => e.stopPropagation()}>
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-4 py-2.5 rounded-lg transition-all text-sm font-medium border border-gray-700 hover:border-gray-600"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Github className="w-4 h-4" />
                            {t.projects.code}
                          </a>
                        )}
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-4 py-2.5 rounded-lg transition-all text-sm font-semibold transform hover:scale-105"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink className="w-4 h-4" />
                            {t.projects.liveDemo}
                          </a>
                        )}
                        {!project.github && !project.demo && (
                          <span className="text-sm text-gray-500 italic">
                            {language === 'en' ? 'Repository and demo coming soon' : 'Depo ve demo yakında'}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <section>
            <h2 className="text-3xl font-bold mb-12">{t.projects.other}</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="card group overflow-hidden p-0 hover:-translate-y-2 transition-all duration-300 block cursor-pointer"
                  onClick={() => router.push(`/projects/${project.slug}`)}
                >
                  {/* Image */}
                  <div className="relative h-48 bg-gradient-to-br from-gray-900 to-gray-950 overflow-hidden">
                    {project.image && (
                      <Image
                        src={project.image}
                        alt={getProjectTitle(project)}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    )}
                    <div className="absolute top-3 right-3 z-10">
                      {getStatusBadge(project.status)}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                      {getProjectTitle(project)}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                      {getProjectDescription(project)}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-gray-800 text-gray-300 px-2.5 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-2" onClick={(e) => e.stopPropagation()}>
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 bg-gray-800 hover:bg-gray-700 px-3 py-2 rounded-lg transition-colors text-xs"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github className="w-3.5 h-3.5" />
                          {t.projects.code}
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-3 py-2 rounded-lg transition-all text-xs font-semibold"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          {t.projects.liveDemo}
                        </a>
                        )}
                      </div>
                    </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="mt-20 card text-center max-w-2xl mx-auto border-2 border-blue-500/30">
          <Sparkles className="w-12 h-12 mx-auto mb-4 text-blue-400" />
          <h3 className="text-2xl font-bold mb-4">{t.projects.workTogether}</h3>
          <p className="text-gray-400 mb-6">
            {t.projects.workTogetherDesc}
          </p>
          <Link href="/about" className="btn-primary inline-block">
            {t.projects.contactMe}
          </Link>
        </section>
      </div>
    </div>
  )
}
