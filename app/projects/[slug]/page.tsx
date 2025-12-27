'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Github, ExternalLink, Smartphone, Calendar, Code, Sparkles, X, ChevronLeft, ChevronRight } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { useState, useEffect } from 'react'

const projects = [
  {
    id: 'seyrimizan',
    slug: 'seyrimizan',
    title: 'Seyr-i Mizan',
    titleEn: 'Seyr-i Mizan',
    description: 'Seyr-i Mizan, geleneksel namaz vakti uygulamalarının çok ötesine geçen, kişisel bir manevi gelişim ve hesaplaşma asistanıdır. Uygulamamız, güncel ve doğru Namaz Vakitleri ile Kıble Bulucu özelliklerini sunarken; asıl gücünü "Mizan" (Denge) felsefesinden alır. Kullanıcıların Bulûğ yaşından itibaren tahmini Kaza Namazı ve Kaza Orucu borçlarını hesaplayarak, bu manevi sorumlulukları tek dokunuşla takip etmelerini sağlar. Aynı zamanda, kişinin günlük ibadet performansını ölçen Gündelik İbadet İlerleme Skoru ile manevi gelişimine somut bir yön verir. Her namaz vaktine ve ihtiyaca özel Tevekkül Hadisleri ve özelleştirilebilir Vird (Tesbihat) takibi ile kullanıcının manevi yolculuğunu (Seyr) destekler. Seyr-i Mizan, sadece bir araç değil, hayatınızdaki manevi dengeyi kurmanıza yardımcı olan, destekleyici ve şeffaf bir yol arkadaşıdır.',
    descriptionEn: 'Seyr-i Mizan is a personal spiritual development and accountability assistant that goes far beyond traditional prayer time applications. While our app offers current and accurate Prayer Times and Qibla Finder features, its true power comes from the philosophy of "Mizan" (Balance). It allows users to calculate estimated missed prayers and fasting debts from the age of maturity (Bulûğ), enabling them to track these spiritual responsibilities with a single touch. At the same time, it provides concrete direction for spiritual growth through the Daily Worship Progress Score, which measures a person\'s daily worship performance. With Tawakkul Hadiths specific to each prayer time and need, and customizable Wird (Dhikr) tracking, it supports the user\'s spiritual journey (Seyr). Seyr-i Mizan is not just a tool, but a supportive and transparent companion that helps you establish spiritual balance in your life.',
    features: [
      {
        title: 'Namaz Vakitleri & Kıble Bulucu',
        description: 'Güncel ve doğru namaz vakitleri ile hassas kıble yönü tespiti.'
      },
      {
        title: 'Kaza Hesaplama',
        description: 'Bulûğ yaşından itibaren tahmini kaza namazı ve oruç borçlarını otomatik hesaplama.'
      },
      {
        title: 'Gündelik İbadet Skoru',
        description: 'Günlük ibadet performansınızı ölçen ve manevi gelişiminize yön veren ilerleme sistemi.'
      },
      {
        title: 'Tevekkül Hadisleri',
        description: 'Her namaz vaktine ve ihtiyaca özel seçilmiş manevi rehberlik hadisleri.'
      },
      {
        title: 'Vird Takibi',
        description: 'Kişiselleştirilebilir tesbihat ve zikir takip sistemi.'
      },
      {
        title: 'Manevi Gelişim Takibi',
        description: 'Uzun vadeli manevi yolculuğunuzu görselleştiren ve destekleyen sistem.'
      }
    ],
    featuresEn: [
      {
        title: 'Prayer Times & Qibla Finder',
        description: 'Current and accurate prayer times with precise Qibla direction detection.'
      },
      {
        title: 'Missed Prayer Calculation',
        description: 'Automatic calculation of estimated missed prayers and fasting debts from the age of maturity.'
      },
      {
        title: 'Daily Worship Score',
        description: 'A progress system that measures your daily worship performance and guides your spiritual development.'
      },
      {
        title: 'Tawakkul Hadiths',
        description: 'Spiritually guiding hadiths selected specifically for each prayer time and need.'
      },
      {
        title: 'Wird Tracking',
        description: 'Personalizable dhikr and tasbih tracking system.'
      },
      {
        title: 'Spiritual Growth Tracking',
        description: 'A system that visualizes and supports your long-term spiritual journey.'
      }
    ],
    tags: ['Flutter', 'Dart', 'Firebase', 'Geolocator', 'Provider', 'Shared Preferences'],
    image: '/projects/seyrimizan.png',
    github: null,
    demo: null,
    status: 'development',
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
    description: 'KoleksiyonHub, koleksiyon yapmayı bir tutku olarak görenler için özel olarak tasarlanmış, standart bir e-ticaret platformunun ötesindedir. Burası, kayıp parçaları bulmaktan daha fazlasını vaat eder; burası bir topluluktur. Platformumuzda, koleksiyonlarınızı sergileyebilir, sitenin eşsiz Açık Artırma sistemi ile en nadir parçaları rekabetçi bir ortamda koleksiyonunuza katabilir veya fazlalıklarınızı değerinde elden çıkarabilirsiniz. En önemlisi, özel ilgi alanlarınıza göre kendi gruplarınızı oluşturabilir ve güvenilir koleksiyoncularla anında, adil ve güvenli bir şekilde Takas yapabilirsiniz. KoleksiyonHub, sadece alım-satım yapılan bir pazar yeri değil, ortak bir tutkuyu paylaşanların buluşma noktasıdır. Kayıp halkanızı bulun, topluluğunuzu kurun ve koleksiyonunuzu zirveye taşıyın!',
    descriptionEn: 'KoleksiyonHub is a platform designed specifically for those who see collecting as a passion, going beyond a standard e-commerce platform. This is more than just finding missing pieces; this is a community. On our platform, you can showcase your collections, add the rarest pieces to your collection through the site\'s unique Auction system in a competitive environment, or sell your duplicates at their true value. Most importantly, you can create your own groups based on your specific interests and Trade instantly, fairly and securely with trusted collectors. KoleksiyonHub is not just a marketplace for buying and selling, but a meeting point for those who share a common passion. Find your missing link, build your community and take your collection to the top!',
    descriptionFr: 'KoleksiyonHub est une plateforme conçue spécifiquement pour ceux qui considèrent la collection comme une passion, allant au-delà d\'une plateforme e-commerce standard. C\'est plus qu\'un simple moyen de trouver des pièces manquantes ; c\'est une communauté. Sur notre plateforme, vous pouvez présenter vos collections, ajouter les pièces les plus rares à votre collection grâce au système d\'Enchères unique du site dans un environnement compétitif, ou vendre vos doublons à leur juste valeur. Plus important encore, vous pouvez créer vos propres groupes en fonction de vos intérêts spécifiques et échanger instantanément, équitablement et en toute sécurité avec des collectionneurs de confiance. KoleksiyonHub n\'est pas seulement un marché pour acheter et vendre, mais un point de rencontre pour ceux qui partagent une passion commune. Trouvez votre chaînon manquant, construisez votre communauté et portez votre collection au sommet !',
    descriptionAr: 'KoleksiyonHub هي منصة مصممة خصيصًا لأولئك الذين يرون جمع التحف كشغف، تتجاوز منصة التجارة الإلكترونية القياسية. هذا أكثر من مجرد العثور على القطع المفقودة؛ هذا مجتمع. على منصتنا، يمكنك عرض مجموعاتك، وإضافة أندر القطع إلى مجموعتك من خلال نظام المزاد الفريد للموقع في بيئة تنافسية، أو بيع مكرراتك بقيمتها الحقيقية. والأهم من ذلك، يمكنك إنشاء مجموعاتك الخاصة بناءً على اهتماماتك المحددة والتداول على الفور وبشكل عادل وآمن مع جامعي التحف الموثوقين. KoleksiyonHub ليست مجرد سوق للشراء والبيع، بل نقطة التقاء لأولئك الذين يتشاركون شغفًا مشتركًا. ابحث عن الحلقة المفقودة، وابنِ مجتمعك وارفع مجموعتك إلى القمة!',
    features: [
      {
        title: 'Koleksiyon Sergileme',
        description: 'Koleksiyonlarınızı profesyonel bir şekilde sergileyin ve diğer koleksiyoncularla paylaşın. Yüksek çözünürlüklü fotoğraflar ve detaylı açıklamalarla koleksiyonunuzu en iyi şekilde tanıtın.'
      },
      {
        title: 'Açık Artırma Sistemi',
        description: 'Eşsiz açık artırma sistemi ile nadir parçaları rekabetçi bir ortamda koleksiyonunuza katın. Gerçek zamanlı teklif takibi ve otomatik artırma özellikleri ile heyecan verici bir deneyim.'
      },
      {
        title: 'Takas Platformu',
        description: 'Güvenilir koleksiyoncularla anında, adil ve güvenli takas işlemleri gerçekleştirin. Güvenlik skorları ve kullanıcı değerlendirmeleri ile güvenli bir takas ortamı.'
      },
      {
        title: 'Özel Gruplar',
        description: 'İlgi alanlarınıza göre özel gruplar oluşturun ve benzer tutkuları paylaşanlarla bağlantı kurun. Topluluk içinde tartışmalar yapın ve deneyimlerinizi paylaşın.'
      },
      {
        title: 'Güvenli Ödeme',
        description: 'Güvenli ödeme altyapısı ile sorunsuz alım-satım deneyimi. Çoklu ödeme yöntemleri ve korumalı işlemler ile güvenli alışveriş.'
      },
      {
        title: 'Topluluk Özellikleri',
        description: 'Koleksiyon topluluğu ile etkileşim kurun, deneyimlerinizi paylaşın ve bilgi edinin. Forumlar, blog yazıları ve uzman tavsiyeleri ile koleksiyon bilginizi artırın.'
      }
    ],
    featuresEn: [
      {
        title: 'Collection Showcase',
        description: 'Showcase your collections professionally and share them with other collectors. Present your collection in the best way with high-resolution photos and detailed descriptions.'
      },
      {
        title: 'Auction System',
        description: 'Add rare pieces to your collection through the unique auction system in a competitive environment. An exciting experience with real-time bid tracking and automatic bidding features.'
      },
      {
        title: 'Trading Platform',
        description: 'Conduct instant, fair and secure trading transactions with trusted collectors. A secure trading environment with security scores and user reviews.'
      },
      {
        title: 'Custom Groups',
        description: 'Create custom groups based on your interests and connect with those who share similar passions. Have discussions within the community and share your experiences.'
      },
      {
        title: 'Secure Payment',
        description: 'Seamless buying and selling experience with secure payment infrastructure. Secure shopping with multiple payment methods and protected transactions.'
      },
      {
        title: 'Community Features',
        description: 'Interact with the collecting community, share your experiences and gain knowledge. Increase your collection knowledge with forums, blog posts and expert advice.'
      }
    ],
    featuresFr: [
      {
        title: 'Vitrine de Collection',
        description: 'Présentez vos collections de manière professionnelle et partagez-les avec d\'autres collectionneurs. Présentez votre collection de la meilleure façon avec des photos haute résolution et des descriptions détaillées.'
      },
      {
        title: 'Système d\'Enchères',
        description: 'Ajoutez des pièces rares à votre collection grâce au système d\'enchères unique dans un environnement compétitif. Une expérience passionnante avec le suivi des enchères en temps réel et les fonctionnalités d\'enchères automatiques.'
      },
      {
        title: 'Plateforme d\'Échange',
        description: 'Effectuez des transactions d\'échange instantanées, équitables et sécurisées avec des collectionneurs de confiance. Un environnement d\'échange sécurisé avec des scores de sécurité et des avis d\'utilisateurs.'
      },
      {
        title: 'Groupes Personnalisés',
        description: 'Créez des groupes personnalisés en fonction de vos intérêts et connectez-vous avec ceux qui partagent des passions similaires. Ayez des discussions au sein de la communauté et partagez vos expériences.'
      },
      {
        title: 'Paiement Sécurisé',
        description: 'Expérience d\'achat et de vente fluide avec une infrastructure de paiement sécurisée. Shopping sécurisé avec plusieurs méthodes de paiement et transactions protégées.'
      },
      {
        title: 'Fonctionnalités Communautaires',
        description: 'Interagissez avec la communauté des collectionneurs, partagez vos expériences et acquérez des connaissances. Augmentez vos connaissances en collection avec des forums, des articles de blog et des conseils d\'experts.'
      }
    ],
    featuresAr: [
      {
        title: 'عرض المجموعات',
        description: 'اعرض مجموعاتك بشكل احترافي وشاركها مع جامعي التحف الآخرين. قدم مجموعتك بأفضل طريقة مع صور عالية الدقة وأوصاف مفصلة.'
      },
      {
        title: 'نظام المزاد',
        description: 'أضف القطع النادرة إلى مجموعتك من خلال نظام المزاد الفريد في بيئة تنافسية. تجربة مثيرة مع تتبع العطاءات في الوقت الفعلي وميزات المزايدة التلقائية.'
      },
      {
        title: 'منصة التداول',
        description: 'قم بإجراء معاملات تداول فورية وعادلة وآمنة مع جامعي التحف الموثوقين. بيئة تداول آمنة مع درجات الأمان ومراجعات المستخدمين.'
      },
      {
        title: 'مجموعات مخصصة',
        description: 'أنشئ مجموعات مخصصة بناءً على اهتماماتك وتواصل مع أولئك الذين يتشاركون شغفًا مشابهًا. قم بإجراء مناقشات داخل المجتمع وشارك تجاربك.'
      },
      {
        title: 'دفع آمن',
        description: 'تجربة شراء وبيع سلسة مع بنية تحتية للدفع آمنة. تسوق آمن مع طرق دفع متعددة ومعاملات محمية.'
      },
      {
        title: 'ميزات المجتمع',
        description: 'تفاعل مع مجتمع جمع التحف، شارك تجاربك واكتسب المعرفة. زد من معرفتك بالمجموعات مع المنتديات ومنشورات المدونة ونصائح الخبراء.'
      }
    ],
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'NextAuth', 'Stripe'],
    image: '/projects/KoleksiyonHub/koleksiyonhub.png',
    screenshots: [
      '/projects/KoleksiyonHub/koleksiyonhub1.png',
      '/projects/KoleksiyonHub/koleksiyonhub2.png',
      '/projects/KoleksiyonHub/koleksiyonhub3.png'
    ].sort(),
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
    description: 'SmartSupport, özel bir şirketin IT çalışanları için özel olarak tasarlanmış kapsamlı bir destek ve proje yönetim platformudur. Bu platform, IT ekibinin karşılaştıkları sorunları çözmelerine ve bu çözümleri kolayca paylaşmalarına olanak tanır. Proje yürütme alanı ile ekiplerin projelerini takip etmelerini sağlar, dokümantasyon ekleme alanı ile bilgi birikimini merkezileştirir. Kullanıcı panelinde, detaylı yetki yönetimi sistemi, kullanıcı istatistiklerini görüntüleme ve indirme özellikleri, ayrıca backup indirme ve yükleme gibi kritik veri yönetimi özellikleri bulunmaktadır. Platform, modern web teknolojileri ile geliştirilmiş olup, Tauri framework\'ü kullanılarak masaüstü uygulamasına dönüştürülmüştür. Bu sayede kullanıcılar hem web tarayıcısı hem de masaüstü uygulaması üzerinden platforma erişebilirler. Fikir bana aittir ve şirket içi IT operasyonlarının verimliliğini artırmak için tasarlanmıştır. Not: Ekran görüntüleri şirket gizlilik politikası gereği bulanıklaştırılmıştır.',
    descriptionEn: 'SmartSupport is a comprehensive support and project management platform specifically designed for the IT employees of a private company. This platform enables IT teams to solve problems they encounter and easily share these solutions. With its project execution area, it allows teams to track their projects, and with its documentation area, it centralizes knowledge accumulation. In the user panel, there are detailed permission management systems, features to view and download user statistics, as well as critical data management features such as backup download and upload. The platform is developed with modern web technologies and converted to a desktop application using the Tauri framework. This way, users can access the platform both via web browser and desktop application. The idea belongs to me and is designed to increase the efficiency of in-house IT operations. Note: Screenshots are blurred due to company privacy policy.',
    descriptionFr: 'SmartSupport est une plateforme complète de support et de gestion de projet conçue spécifiquement pour les employés IT d\'une entreprise privée. Cette plateforme permet aux équipes IT de résoudre les problèmes qu\'elles rencontrent et de partager facilement ces solutions. Avec sa zone d\'exécution de projet, elle permet aux équipes de suivre leurs projets, et avec sa zone d\'ajout de documentation, elle centralise l\'accumulation de connaissances. Dans le panneau utilisateur, il y a des systèmes de gestion des permissions détaillés, des fonctionnalités pour visualiser et télécharger les statistiques des utilisateurs, ainsi que des fonctionnalités de gestion des données critiques telles que le téléchargement et le téléversement de sauvegarde. La plateforme est développée avec des technologies web modernes et convertie en application de bureau en utilisant le framework Tauri. De cette façon, les utilisateurs peuvent accéder à la plateforme à la fois via un navigateur web et une application de bureau. L\'idée m\'appartient et est conçue pour augmenter l\'efficacité des opérations IT internes. Note : Les captures d\'écran sont floutées en raison de la politique de confidentialité de l\'entreprise.',
    descriptionAr: 'SmartSupport هي منصة شاملة للدعم وإدارة المشاريع مصممة خصيصًا لموظفي تكنولوجيا المعلومات في شركة خاصة. تمكن هذه المنصة فرق تكنولوجيا المعلومات من حل المشكلات التي يواجهونها ومشاركة هذه الحلول بسهولة. مع منطقة تنفيذ المشاريع الخاصة بها، تسمح للفرق بتتبع مشاريعها، ومع منطقة إضافة الوثائق، تركز تراكم المعرفة. في لوحة المستخدم، هناك أنظمة إدارة أذونات مفصلة، وميزات لعرض وتنزيل إحصائيات المستخدمين، بالإضافة إلى ميزات إدارة البيانات الحرجة مثل تنزيل ورفع النسخ الاحتياطي. تم تطوير المنصة باستخدام تقنيات الويب الحديثة وتحويلها إلى تطبيق سطح مكتب باستخدام إطار عمل Tauri. بهذه الطريقة، يمكن للمستخدمين الوصول إلى المنصة عبر متصفح الويب وتطبيق سطح المكتب. الفكرة ملكي ومصممة لزيادة كفاءة عمليات تكنولوجيا المعلومات الداخلية. ملاحظة: تم تعتيم لقطات الشاشة بسبب سياسة خصوصية الشركة.',
    features: [
      {
        title: 'Sorun Çözüm Paylaşımı',
        description: 'IT çalışanları karşılaştıkları sorunları ve çözümlerini platform üzerinden paylaşabilir. Arama ve filtreleme özellikleri ile hızlıca çözüm bulunabilir.'
      },
      {
        title: 'Proje Yürütme Alanı',
        description: 'Ekiplerin projelerini takip edebileceği kapsamlı bir proje yönetim alanı. Görev atama, ilerleme takibi ve zaman çizelgesi yönetimi gibi özellikler içerir.'
      },
      {
        title: 'Dokümantasyon Yönetimi',
        description: 'Teknik dokümantasyonları merkezi bir yerde toplama ve yönetme imkanı. Kategorilere ayırma, versiyon kontrolü ve erişim yetkisi yönetimi sunar.'
      },
      {
        title: 'Yetki Yönetimi',
        description: 'Detaylı kullanıcı yetki yönetim sistemi ile farklı rol ve izin seviyeleri tanımlanabilir. Güvenli ve kontrollü bir erişim yapısı sağlar.'
      },
      {
        title: 'Kullanıcı İstatistikleri',
        description: 'Kullanıcı aktivitelerini görüntüleme ve istatistikleri indirme özelliği. Raporlama ve analiz için detaylı veri sağlar.'
      },
      {
        title: 'Backup Yönetimi',
        description: 'Sistem verilerinin yedeklenmesi ve geri yüklenmesi için backup indirme ve yükleme özellikleri. Veri güvenliği ve felaket kurtarma için kritik özellikler.'
      },
      {
        title: 'Masaüstü Uygulaması',
        description: 'Tauri framework kullanılarak geliştirilmiş masaüstü uygulaması. Hem web hem masaüstü üzerinden erişim imkanı sunar.'
      }
    ],
    featuresEn: [
      {
        title: 'Problem Solution Sharing',
        description: 'IT employees can share problems they encounter and their solutions on the platform. Quick solution finding with search and filtering features.'
      },
      {
        title: 'Project Execution Area',
        description: 'A comprehensive project management area where teams can track their projects. Includes features such as task assignment, progress tracking, and timeline management.'
      },
      {
        title: 'Documentation Management',
        description: 'Ability to collect and manage technical documentation in a central location. Offers categorization, version control, and access permission management.'
      },
      {
        title: 'Permission Management',
        description: 'Different role and permission levels can be defined with a detailed user permission management system. Provides a secure and controlled access structure.'
      },
      {
        title: 'User Statistics',
        description: 'Feature to view user activities and download statistics. Provides detailed data for reporting and analysis.'
      },
      {
        title: 'Backup Management',
        description: 'Backup download and upload features for backing up and restoring system data. Critical features for data security and disaster recovery.'
      },
      {
        title: 'Desktop Application',
        description: 'Desktop application developed using Tauri framework. Provides access both via web and desktop.'
      }
    ],
    featuresFr: [
      {
        title: 'Partage de Solutions de Problèmes',
        description: 'Les employés IT peuvent partager les problèmes qu\'ils rencontrent et leurs solutions sur la plateforme. Trouver rapidement des solutions avec des fonctionnalités de recherche et de filtrage.'
      },
      {
        title: 'Zone d\'Exécution de Projet',
        description: 'Une zone de gestion de projet complète où les équipes peuvent suivre leurs projets. Inclut des fonctionnalités telles que l\'attribution de tâches, le suivi des progrès et la gestion des calendriers.'
      },
      {
        title: 'Gestion de Documentation',
        description: 'Capacité à collecter et gérer la documentation technique dans un emplacement central. Offre la catégorisation, le contrôle de version et la gestion des permissions d\'accès.'
      },
      {
        title: 'Gestion des Permissions',
        description: 'Différents niveaux de rôle et de permission peuvent être définis avec un système de gestion des permissions utilisateur détaillé. Fournit une structure d\'accès sécurisée et contrôlée.'
      },
      {
        title: 'Statistiques Utilisateur',
        description: 'Fonctionnalité pour visualiser les activités des utilisateurs et télécharger les statistiques. Fournit des données détaillées pour le reporting et l\'analyse.'
      },
      {
        title: 'Gestion des Sauvegardes',
        description: 'Fonctionnalités de téléchargement et de téléversement de sauvegarde pour sauvegarder et restaurer les données système. Fonctionnalités critiques pour la sécurité des données et la reprise après sinistre.'
      },
      {
        title: 'Application de Bureau',
        description: 'Application de bureau développée en utilisant le framework Tauri. Offre un accès à la fois via le web et le bureau.'
      }
    ],
    featuresAr: [
      {
        title: 'مشاركة حلول المشكلات',
        description: 'يمكن لموظفي تكنولوجيا المعلومات مشاركة المشكلات التي يواجهونها وحلولهم على المنصة. إيجاد حلول سريعة مع ميزات البحث والتصفية.'
      },
      {
        title: 'منطقة تنفيذ المشروع',
        description: 'منطقة إدارة مشاريع شاملة حيث يمكن للفرق تتبع مشاريعها. يتضمن ميزات مثل تعيين المهام وتتبع التقدم وإدارة الجدول الزمني.'
      },
      {
        title: 'إدارة الوثائق',
        description: 'القدرة على جمع وإدارة الوثائق التقنية في مكان مركزي. يقدم التصنيف ومراقبة الإصدارات وإدارة أذونات الوصول.'
      },
      {
        title: 'إدارة الأذونات',
        description: 'يمكن تعريف مستويات مختلفة من الأدوار والأذونات مع نظام إدارة أذونات المستخدم التفصيلي. يوفر بنية وصول آمنة ومتحكم بها.'
      },
      {
        title: 'إحصائيات المستخدم',
        description: 'ميزة لعرض أنشطة المستخدمين وتنزيل الإحصائيات. يوفر بيانات مفصلة لإعداد التقارير والتحليل.'
      },
      {
        title: 'إدارة النسخ الاحتياطي',
        description: 'ميزات تنزيل ورفع النسخ الاحتياطي لعمل نسخ احتياطية واستعادة بيانات النظام. ميزات حرجة لأمان البيانات والتعافي من الكوارث.'
      },
      {
        title: 'تطبيق سطح المكتب',
        description: 'تطبيق سطح مكتب تم تطويره باستخدام إطار عمل Tauri. يوفر الوصول عبر الويب وسطح المكتب.'
      }
    ],
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Tauri', 'Desktop App', 'PostgreSQL'],
    image: '/projects/SmartSupport/1.png',
    screenshots: [
      '/projects/SmartSupport/1.png',
      '/projects/SmartSupport/2.png',
      '/projects/SmartSupport/3.png',
      '/projects/SmartSupport/4.png',
      '/projects/SmartSupport/5.png'
    ].sort(),
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
    description: 'TekTıkCV, profesyonel CV ve ön yazı oluşturma platformudur. Kullanıcılar, 10\'dan fazla profesyonel şablon arasından seçim yaparak bilgilerini kolayca girebilir ve canlı önizleme özelliği ile anında düzenleyebilir. Oluşturulan CV\'ler güvenli bir şekilde kullanıcı panelinde saklanır ve gerektiğinde tekrar indirilebilir. Platform, modern ve kullanıcı dostu arayüzü, yüksek kaliteli PDF çıktısı ve blog sayfası ile kullanıcı deneyimini en üst seviyeye çıkarır. JWT tabanlı kimlik doğrulama, Google OAuth entegrasyonu, PayTR ödeme sistemi ve PDFShift API ile profesyonel PDF oluşturma gibi gelişmiş özellikler sunar. Kullanıcılar CV\'lerini oluştururken, bilgilerini React Hook Form ve Zod validasyonu ile güvenli bir şekilde kaydedebilir. TekTıkCV, iş arayanların profesyonel CV\'lerini kolayca oluşturmalarına ve kariyer hedeflerine ulaşmalarına yardımcı olan kapsamlı bir çözümdür.',
    descriptionEn: 'TekTıkCV is a professional CV and cover letter creation platform. Users can easily enter their information by choosing from more than 10 professional templates and instantly edit them with the live preview feature. Created CVs are securely stored in the user panel and can be downloaded again when needed. The platform elevates the user experience with its modern and user-friendly interface, high-quality PDF output, and blog page. It offers advanced features such as JWT-based authentication, Google OAuth integration, PayTR payment system, and professional PDF creation with PDFShift API. While creating their CVs, users can securely save their information with React Hook Form and Zod validation. TekTıkCV is a comprehensive solution that helps job seekers easily create professional CVs and achieve their career goals.',
    descriptionFr: 'TekTıkCV est une plateforme de création de CV et de lettres de motivation professionnels. Les utilisateurs peuvent facilement saisir leurs informations en choisissant parmi plus de 10 modèles professionnels et les modifier instantanément avec la fonctionnalité d\'aperçu en direct. Les CV créés sont stockés en toute sécurité dans le panneau utilisateur et peuvent être téléchargés à nouveau si nécessaire. La plateforme élève l\'expérience utilisateur avec son interface moderne et conviviale, sa sortie PDF de haute qualité et sa page de blog. Elle offre des fonctionnalités avancées telles que l\'authentification basée sur JWT, l\'intégration Google OAuth, le système de paiement PayTR et la création de PDF professionnels avec l\'API PDFShift. Lors de la création de leurs CV, les utilisateurs peuvent sauvegarder leurs informations en toute sécurité avec React Hook Form et la validation Zod. TekTıkCV est une solution complète qui aide les demandeurs d\'emploi à créer facilement des CV professionnels et à atteindre leurs objectifs de carrière.',
    descriptionAr: 'TekTıkCV هي منصة لإنشاء السير الذاتية ورسائل الغلاف المهنية. يمكن للمستخدمين بسهولة إدخال معلوماتهم من خلال الاختيار من بين أكثر من 10 قوالب احترافية وتعديلها على الفور مع ميزة المعاينة المباشرة. يتم تخزين السير الذاتية المنشأة بأمان في لوحة المستخدم ويمكن تنزيلها مرة أخرى عند الحاجة. ترفع المنصة تجربة المستخدم بواجهة حديثة وسهلة الاستخدام، وإخراج PDF عالي الجودة، وصفحة مدونة. تقدم ميزات متقدمة مثل المصادقة القائمة على JWT، وتكامل Google OAuth، ونظام الدفع PayTR، وإنشاء PDF احترافي مع PDFShift API. أثناء إنشاء سيرهم الذاتية، يمكن للمستخدمين حفظ معلوماتهم بأمان مع React Hook Form والتحقق من Zod. TekTıkCV هو حل شامل يساعد الباحثين عن عمل على إنشاء سير ذاتية احترافية بسهولة وتحقيق أهدافهم المهنية.',
    features: [
      {
        title: '10+ Profesyonel CV Şablonu',
        description: 'Kullanıcılar, farklı sektörler ve pozisyonlar için tasarlanmış 10\'dan fazla profesyonel CV şablonu arasından seçim yapabilir. Her şablon, modern tasarım prensipleri ile oluşturulmuştur.'
      },
      {
        title: 'Canlı Önizleme',
        description: 'CV\'nizi oluştururken anında canlı önizleme görüntüleyebilirsiniz. Yaptığınız her değişiklik gerçek zamanlı olarak görüntülenir, böylece CV\'nizi mükemmel hale getirebilirsiniz.'
      },
      {
        title: 'Güvenli Kullanıcı Paneli',
        description: 'Oluşturduğunuz tüm CV\'ler güvenli bir şekilde kullanıcı panelinizde saklanır. İstediğiniz zaman CV\'lerinizi görüntüleyebilir, düzenleyebilir veya yeniden indirebilirsiniz.'
      },
      {
        title: 'Yüksek Kaliteli PDF Çıktısı',
        description: 'PDFShift API entegrasyonu ile profesyonel ve yüksek kaliteli PDF çıktıları oluşturun. CV\'leriniz ATS (Application Tracking Systems) uyumlu formatta oluşturulur.'
      },
      {
        title: 'Kimlik Doğrulama ve Güvenlik',
        description: 'JWT tabanlı kimlik doğrulama sistemi ve bcryptjs ile şifreleme ile verileriniz güvende. Google OAuth ile hızlı ve güvenli giriş yapabilirsiniz.'
      },
      {
        title: 'Ödeme Entegrasyonu',
        description: 'PayTR entegrasyonu ile güvenli ödeme işlemleri. Kullanıcılar premium şablonlara veya özel özelliklere kolayca erişebilir.'
      },
      {
        title: 'E-posta Bildirimleri',
        description: 'Resend API entegrasyonu ile kullanıcılara işlem onayları, şifre sıfırlama ve önemli bildirimler e-posta ile gönderilir.'
      },
      {
        title: 'Blog Sayfası',
        description: 'Kariyer tavsiyeleri, CV yazma ipuçları ve iş dünyası haberleri için kapsamlı bir blog sayfası. Kullanıcılar kariyer yolculuklarında rehberlik bulabilir.'
      },
      {
        title: 'Form Validasyonu',
        description: 'React Hook Form ve Zod kullanarak güçlü form validasyonu. Kullanıcılar hatasız ve eksiksiz CV bilgileri girebilir.'
      },
      {
        title: 'Veritabanı ve ORM',
        description: 'PostgreSQL ve Prisma ORM ile güvenilir veri yönetimi. Hızlı sorgular ve veri bütünlüğü sağlanır.'
      }
    ],
    featuresEn: [
      {
        title: '10+ Professional CV Templates',
        description: 'Users can choose from more than 10 professional CV templates designed for different industries and positions. Each template is created with modern design principles.'
      },
      {
        title: 'Live Preview',
        description: 'View your CV instantly with live preview while creating it. Every change you make is displayed in real-time, so you can perfect your CV.'
      },
      {
        title: 'Secure User Panel',
        description: 'All CVs you create are securely stored in your user panel. You can view, edit, or download your CVs again anytime you want.'
      },
      {
        title: 'High-Quality PDF Output',
        description: 'Create professional and high-quality PDF outputs with PDFShift API integration. Your CVs are created in ATS (Application Tracking Systems) compatible format.'
      },
      {
        title: 'Authentication and Security',
        description: 'Your data is safe with JWT-based authentication system and bcryptjs encryption. You can log in quickly and securely with Google OAuth.'
      },
      {
        title: 'Payment Integration',
        description: 'Secure payment transactions with PayTR integration. Users can easily access premium templates or special features.'
      },
      {
        title: 'Email Notifications',
        description: 'Transaction confirmations, password resets, and important notifications are sent to users via email with Resend API integration.'
      },
      {
        title: 'Blog Page',
        description: 'A comprehensive blog page for career advice, CV writing tips, and business news. Users can find guidance on their career journey.'
      },
      {
        title: 'Form Validation',
        description: 'Strong form validation using React Hook Form and Zod. Users can enter error-free and complete CV information.'
      },
      {
        title: 'Database and ORM',
        description: 'Reliable data management with PostgreSQL and Prisma ORM. Fast queries and data integrity are ensured.'
      }
    ],
    featuresFr: [
      {
        title: '10+ Modèles de CV Professionnels',
        description: 'Les utilisateurs peuvent choisir parmi plus de 10 modèles de CV professionnels conçus pour différentes industries et postes. Chaque modèle est créé avec des principes de design modernes.'
      },
      {
        title: 'Aperçu en Direct',
        description: 'Visualisez votre CV instantanément avec l\'aperçu en direct pendant sa création. Chaque modification que vous apportez est affichée en temps réel, vous permettant de perfectionner votre CV.'
      },
      {
        title: 'Panneau Utilisateur Sécurisé',
        description: 'Tous les CV que vous créez sont stockés en toute sécurité dans votre panneau utilisateur. Vous pouvez visualiser, modifier ou télécharger vos CV à nouveau à tout moment.'
      },
      {
        title: 'Sortie PDF de Haute Qualité',
        description: 'Créez des sorties PDF professionnelles et de haute qualité avec l\'intégration de l\'API PDFShift. Vos CV sont créés dans un format compatible ATS (Application Tracking Systems).'
      },
      {
        title: 'Authentification et Sécurité',
        description: 'Vos données sont sécurisées avec un système d\'authentification basé sur JWT et le chiffrement bcryptjs. Vous pouvez vous connecter rapidement et en toute sécurité avec Google OAuth.'
      },
      {
        title: 'Intégration de Paiement',
        description: 'Transactions de paiement sécurisées avec l\'intégration PayTR. Les utilisateurs peuvent facilement accéder aux modèles premium ou aux fonctionnalités spéciales.'
      },
      {
        title: 'Notifications par E-mail',
        description: 'Les confirmations de transaction, les réinitialisations de mot de passe et les notifications importantes sont envoyées aux utilisateurs par e-mail avec l\'intégration de l\'API Resend.'
      },
      {
        title: 'Page de Blog',
        description: 'Une page de blog complète pour les conseils de carrière, les astuces de rédaction de CV et les actualités professionnelles. Les utilisateurs peuvent trouver des conseils sur leur parcours professionnel.'
      },
      {
        title: 'Validation de Formulaire',
        description: 'Validation de formulaire robuste utilisant React Hook Form et Zod. Les utilisateurs peuvent saisir des informations CV sans erreur et complètes.'
      },
      {
        title: 'Base de Données et ORM',
        description: 'Gestion de données fiable avec PostgreSQL et Prisma ORM. Des requêtes rapides et l\'intégrité des données sont assurées.'
      }
    ],
    featuresAr: [
      {
        title: '10+ قوالب سيرة ذاتية احترافية',
        description: 'يمكن للمستخدمين الاختيار من بين أكثر من 10 قوالب سيرة ذاتية احترافية مصممة لصناعات ومناصب مختلفة. يتم إنشاء كل قالب وفقًا لمبادئ التصميم الحديثة.'
      },
      {
        title: 'معاينة مباشرة',
        description: 'اعرض سيرتك الذاتية على الفور مع المعاينة المباشرة أثناء إنشائها. كل تغيير تقوم به يتم عرضه في الوقت الفعلي، حتى تتمكن من تحسين سيرتك الذاتية.'
      },
      {
        title: 'لوحة مستخدم آمنة',
        description: 'يتم تخزين جميع السير الذاتية التي تنشئها بأمان في لوحة المستخدم الخاصة بك. يمكنك عرض أو تعديل أو تنزيل سيرك الذاتية مرة أخرى في أي وقت.'
      },
      {
        title: 'إخراج PDF عالي الجودة',
        description: 'أنشئ مخرجات PDF احترافية وعالية الجودة مع تكامل PDFShift API. يتم إنشاء سيرك الذاتية بتنسيق متوافق مع أنظمة تتبع الطلبات (ATS).'
      },
      {
        title: 'المصادقة والأمان',
        description: 'بياناتك آمنة مع نظام المصادقة القائم على JWT والتشفير bcryptjs. يمكنك تسجيل الدخول بسرعة وأمان مع Google OAuth.'
      },
      {
        title: 'تكامل الدفع',
        description: 'معاملات دفع آمنة مع تكامل PayTR. يمكن للمستخدمين الوصول بسهولة إلى القوالب المميزة أو الميزات الخاصة.'
      },
      {
        title: 'إشعارات البريد الإلكتروني',
        description: 'يتم إرسال تأكيدات المعاملات وإعادة تعيين كلمة المرور والإشعارات المهمة إلى المستخدمين عبر البريد الإلكتروني مع تكامل Resend API.'
      },
      {
        title: 'صفحة المدونة',
        description: 'صفحة مدونة شاملة لنصائح المسيرة المهنية ونصائح كتابة السيرة الذاتية وأخبار الأعمال. يمكن للمستخدمين العثور على التوجيه في رحلتهم المهنية.'
      },
      {
        title: 'التحقق من النموذج',
        description: 'التحقق القوي من النموذج باستخدام React Hook Form وZod. يمكن للمستخدمين إدخال معلومات السيرة الذاتية خالية من الأخطاء وكاملة.'
      },
      {
        title: 'قاعدة البيانات وORM',
        description: 'إدارة بيانات موثوقة مع PostgreSQL وPrisma ORM. يتم ضمان استعلامات سريعة وسلامة البيانات.'
      }
    ],
    tags: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL', 'JWT', 'PayTR', 'PDFShift', 'Resend', 'Google OAuth', 'React Hook Form', 'Zod'],
    image: '/projects/TekTıkCV/1.png',
    screenshots: [
      '/projects/TekTıkCV/1.png',
      '/projects/TekTıkCV/2.png',
      '/projects/TekTıkCV/3.png'
    ].sort(),
    github: null,
    demo: 'https://tektikcv.com.tr',
    status: 'production',
    featured: true,
    year: '2024',
    type: 'Web Platform'
  },
]

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const { language } = useLanguage()
  const project = projects.find(p => p.slug === params.slug)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!lightboxOpen || !(project as any)?.screenshots) return

    const handleKeyDown = (e: KeyboardEvent) => {
      const sortedScreenshots = [...(project as any).screenshots].sort()
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => 
          prev === 0 ? sortedScreenshots.length - 1 : prev - 1
        )
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => 
          prev === sortedScreenshots.length - 1 ? 0 : prev + 1
        )
      } else if (e.key === 'Escape') {
        setLightboxOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightboxOpen, project])

  if (!project) {
    return (
      <div className="container-custom py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">
          {language === 'en' ? 'Project Not Found' : 'Proje Bulunamadı'}
        </h1>
        <Link href="/projects" className="text-blue-400 hover:text-blue-300">
          {language === 'en' ? 'Back to Projects' : 'Projelere Dön'}
        </Link>
      </div>
    )
  }

  const title = language === 'en' && project.titleEn ? project.titleEn :
                language === 'fr' && project.titleFr ? project.titleFr :
                language === 'ar' && project.titleAr ? project.titleAr :
                project.title
  
  const description = language === 'en' && project.descriptionEn ? project.descriptionEn :
                      language === 'fr' && project.descriptionFr ? project.descriptionFr :
                      language === 'ar' && project.descriptionAr ? project.descriptionAr :
                      project.description
  
  const features = language === 'en' && project.featuresEn ? project.featuresEn :
                   language === 'fr' && project.featuresFr ? project.featuresFr :
                   language === 'ar' && project.featuresAr ? project.featuresAr :
                   project.features

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
    <div className="min-h-screen">
      {/* Hero Image */}
      <div className="relative h-[400px] md:h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-900/60 to-gray-950 z-10" />
            {project.image && (
              <Image
                src={project.image}
                alt={title}
                fill
                className={`object-cover scale-105 ${project.slug === 'smartsupport' ? 'blur-md' : ''}`}
                priority
              />
            )}
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-gray-950 via-gray-950/50 to-transparent" />
        
        <div className="absolute inset-0 z-20 flex items-end">
          <div className="container-custom pb-8">
            {/* Back Button - Modern Design */}
            <Link 
              href="/projects"
              className="group inline-flex items-center gap-3 px-6 py-3 bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-full hover:bg-gray-800 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="relative">
                <ArrowLeft className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors group-hover:-translate-x-1 transition-transform" />
                <div className="absolute inset-0 blur-md bg-blue-500/0 group-hover:bg-blue-500/30 rounded-full transition-all" />
              </div>
              <span className="text-gray-300 group-hover:text-white font-medium transition-colors">
                {language === 'en' ? 'Back to Projects' : 'Projelere Dön'}
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Project Content */}
      <article className="container-custom py-12 md:py-16">
        <div className="max-w-5xl mx-auto">
          {/* Project Header */}
          <header className="mb-12">
            {/* Status & Meta Info */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold border backdrop-blur-sm ${statusColors[project.status as keyof typeof statusColors]}`}>
                <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
                {statusText[project.status as keyof typeof statusText]}
              </span>
              {project.type && (
                <span className="flex items-center gap-2 text-gray-400 text-sm bg-gray-900/50 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-800">
                  <Smartphone className="w-4 h-4 text-blue-400" />
                  <span>{project.type}</span>
                </span>
              )}
              {project.year && (
                <span className="flex items-center gap-2 text-gray-400 text-sm bg-gray-900/50 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-800">
                  <Calendar className="w-4 h-4 text-purple-400" />
                  <span>{project.year}</span>
                </span>
              )}
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              <span className="gradient-text">{title}</span>
            </h1>
          </header>

          {/* Description Section */}
          <section className="mb-16">
            <div className="card border-2 border-blue-500/20 bg-gradient-to-br from-gray-900 to-gray-950">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                {description}
              </p>
            </div>
          </section>

          {/* Tags & Tech Stack */}
          <section className="mb-16">
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <Code className="w-5 h-5 text-blue-400" />
              <h2 className="text-2xl font-bold">
                {language === 'en' ? 'Tech Stack' : 'Teknolojiler'}
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-2 text-sm bg-gray-800/50 backdrop-blur-sm text-gray-300 px-4 py-2.5 rounded-full border border-gray-700 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all cursor-default"
                >
                  <Code className="w-3.5 h-3.5 text-blue-400" />
                  {tag}
                </span>
              ))}
            </div>
          </section>

          {/* Action Buttons */}
          <section className="mb-16">
            <div className="flex flex-wrap gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 bg-gray-800/80 backdrop-blur-sm hover:bg-gray-700 px-6 py-3.5 rounded-xl transition-all text-sm font-medium border border-gray-700 hover:border-gray-600 hover:shadow-lg hover:shadow-gray-900/50"
                >
                  <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>{language === 'en' ? 'View Code' : 'Kodu Görüntüle'}</span>
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-6 py-3.5 rounded-xl transition-all text-sm font-semibold transform hover:scale-105 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40"
                >
                  <ExternalLink className="w-5 h-5 group-hover:rotate-[-45deg] transition-transform" />
                  <span>{language === 'en' ? 'Live Demo' : 'Canlı Demo'}</span>
                </a>
              )}
              {!project.github && !project.demo && (
                <div className="flex items-center gap-3 px-6 py-3.5 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700">
                  <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
                  <span className="text-sm text-gray-400 italic">
                    {language === 'en' ? 'Repository and demo coming soon' : 'Depo ve demo yakında'}
                  </span>
                </div>
              )}
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-12">
              <div className="p-2 bg-blue-500/20 rounded-lg">
                <Sparkles className="w-6 h-6 text-blue-400" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                {language === 'en' ? 'Key Features' : 'Özellikler'}
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group relative card hover:border-blue-500/50 transition-all overflow-hidden"
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/5 group-hover:to-purple-600/5 transition-all duration-300" />
                  
                  {/* Number badge */}
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                    {index + 1}
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-colors">
                        <Sparkles className="w-6 h-6 text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-gray-400 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Image Gallery Section */}
          {((project as any).screenshots && (project as any).screenshots.length > 0) || project.image ? (
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-purple-500/20 rounded-lg">
                  <Smartphone className="w-6 h-6 text-purple-400" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">
                  {language === 'en' ? 'Screenshots' : 'Ekran Görüntüleri'}
                </h2>
              </div>
              {/* Privacy Notice for SmartSupport */}
              {project.slug === 'smartsupport' && (
                <div className="mb-6 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                  <p className="text-sm text-yellow-400/90">
                    {language === 'en' 
                      ? '⚠️ Note: Screenshots are blurred due to company privacy policy.'
                      : language === 'fr'
                      ? '⚠️ Note : Les captures d\'écran sont floutées en raison de la politique de confidentialité de l\'entreprise.'
                      : language === 'ar'
                      ? '⚠️ ملاحظة: تم تعتيم لقطات الشاشة بسبب سياسة خصوصية الشركة.'
                      : '⚠️ Not: Ekran görüntüleri şirket gizlilik politikası gereği bulanıklaştırılmıştır.'}
                  </p>
                </div>
              )}
              {(project as any).screenshots && (project as any).screenshots.length > 0 ? (
                <>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[...(project as any).screenshots].sort().map((screenshot: string, index: number) => (
                      <div
                        key={index}
                        onClick={() => {
                          const sortedScreenshots = [...(project as any).screenshots].sort()
                          setLightboxIndex(sortedScreenshots.indexOf(screenshot))
                          setLightboxOpen(true)
                        }}
                        className="relative h-64 md:h-80 rounded-2xl overflow-hidden border-2 border-gray-800 bg-gradient-to-br from-gray-900 to-gray-950 group cursor-pointer hover:border-blue-500/50 transition-all"
                      >
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/50 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <Image
                          src={screenshot}
                          alt={`${title} ${language === 'en' ? 'screenshot' : 'ekran görüntüsü'} ${index + 1}`}
                          fill
                          className={`object-cover group-hover:scale-110 transition-transform duration-500 ${project.slug === 'smartsupport' ? 'blur-md' : ''}`}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Lightbox Modal */}
                  {lightboxOpen && (project as any).screenshots && (
                    <div
                      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
                      onClick={() => setLightboxOpen(false)}
                    >
                      {/* Close Button */}
                      <button
                        onClick={() => setLightboxOpen(false)}
                        className="absolute top-4 right-4 z-60 p-2 bg-gray-900/80 hover:bg-gray-800 rounded-full border border-gray-700 transition-all group"
                      >
                        <X className="w-6 h-6 text-white group-hover:rotate-90 transition-transform" />
                      </button>

                      {/* Previous Button */}
                      {(project as any).screenshots.length > 1 && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            const sortedScreenshots = [...(project as any).screenshots].sort()
                            setLightboxIndex((prev) => 
                              prev === 0 ? sortedScreenshots.length - 1 : prev - 1
                            )
                          }}
                          className="absolute left-4 z-60 p-3 bg-gray-900/80 hover:bg-gray-800 rounded-full border border-gray-700 transition-all group"
                        >
                          <ChevronLeft className="w-8 h-8 text-white group-hover:-translate-x-1 transition-transform" />
                        </button>
                      )}

                      {/* Next Button */}
                      {(project as any).screenshots.length > 1 && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            const sortedScreenshots = [...(project as any).screenshots].sort()
                            setLightboxIndex((prev) => 
                              prev === sortedScreenshots.length - 1 ? 0 : prev + 1
                            )
                          }}
                          className="absolute right-4 z-60 p-3 bg-gray-900/80 hover:bg-gray-800 rounded-full border border-gray-700 transition-all group"
                        >
                          <ChevronRight className="w-8 h-8 text-white group-hover:translate-x-1 transition-transform" />
                        </button>
                      )}

                      {/* Image */}
                      <div
                        className="relative w-full h-full max-w-7xl max-h-[90vh] flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Image
                          src={[...(project as any).screenshots].sort()[lightboxIndex]}
                          alt={`${title} ${language === 'en' ? 'screenshot' : 'ekran görüntüsü'} ${lightboxIndex + 1}`}
                          width={1920}
                          height={1080}
                          className={`object-contain max-w-full max-h-full rounded-lg ${project.slug === 'smartsupport' ? 'blur-md' : ''}`}
                          priority
                        />
                      </div>

                      {/* Image Counter */}
                      {(project as any).screenshots.length > 1 && (
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-60 px-4 py-2 bg-gray-900/80 backdrop-blur-sm rounded-full border border-gray-700">
                          <span className="text-white text-sm">
                            {lightboxIndex + 1} / {(project as any).screenshots.length}
                          </span>
                        </div>
                      )}
                    </div>
                  )}
                </>
              ) : project.image ? (
                <div className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden border-2 border-gray-800 bg-gradient-to-br from-gray-900 to-gray-950 group">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/50 to-transparent z-10" />
                  <Image
                    src={project.image}
                    alt={`${title} ${language === 'en' ? 'screenshot' : 'ekran görüntüsü'}`}
                    fill
                    className={`object-contain p-4 group-hover:scale-105 transition-transform duration-500 ${project.slug === 'smartsupport' ? 'blur-md' : ''}`}
                  />
                </div>
              ) : null}
            </section>
          ) : null}

          {/* Back to Projects - Modern CTA */}
          <section className="mt-20">
            <div className="card border-2 border-blue-500/30 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10 backdrop-blur-sm text-center relative overflow-hidden">
              {/* Animated background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-purple-600/0 to-pink-600/0 opacity-0 hover:opacity-10 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <Sparkles className="w-12 h-12 mx-auto mb-4 text-blue-400" />
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  {language === 'en' ? 'Explore More Projects' : 'Diğer Projeleri Keşfet'}
                </h3>
                <p className="text-gray-400 mb-6 max-w-xl mx-auto">
                  {language === 'en' 
                    ? 'Check out my other projects and see what else I\'ve been working on.' 
                    : 'Diğer projelerimi inceleyin ve üzerinde çalıştığım diğer çalışmaları görün.'}
                </p>
                <Link
                  href="/projects"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl transition-all text-sm font-semibold transform hover:scale-105 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50"
                >
                  <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                  <span>{language === 'en' ? 'View All Projects' : 'Tüm Projeleri Gör'}</span>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </article>
    </div>
  )
}

