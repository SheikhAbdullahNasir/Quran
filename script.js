// Sample Quran data - In a real application, this would come from an API
const quranData = {
    surahs: [
        {
            number: 1,
            name: "Al-Fatihah",
            arabicName: "الفاتحة",
            englishName: "The Opening",
            verses: 7,
            revelationType: "Meccan",
            verses: [
                {
                    number: 1,
                    arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
                    translations: {
                        en: "In the name of Allah, the Entirely Merciful, the Especially Merciful.",
                        ur: "اللہ کے نام سے جو بہت مہربان، نہایت رحم والا ہے۔",
                        ar: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
                        fr: "Au nom d'Allah, le Tout Miséricordieux, le Très Miséricordieux.",
                        es: "En el nombre de Alá, el Compasivo, el Misericordioso."
                    },
                    tafseer: {
                        en: "This verse is known as the Basmala. It begins with the name of Allah, emphasizing that all actions should start with remembrance of Allah. The two attributes mentioned - Ar-Rahman (The Entirely Merciful) and Ar-Raheem (The Especially Merciful) - highlight Allah's infinite mercy and compassion.",
                        ur: "یہ آیت بسم اللہ کے نام سے جانی جاتی ہے۔ یہ اللہ کے نام سے شروع ہوتی ہے، اس بات پر زور دیتے ہوئے کہ تمام اعمال اللہ کی یاد سے شروع ہونے چاہیئے۔"
                    }
                },
                {
                    number: 2,
                    arabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
                    translations: {
                        en: "[All] praise is [due] to Allah, Lord of the worlds -",
                        ur: "تمام تعریفیں اللہ کے لیے ہیں جو تمام جہانوں کا پالنے والا ہے۔",
                        ar: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
                        fr: "Louange à Allah, Seigneur de l'univers.",
                        es: "Las alabanzas pertenecen a Alá, Señor del universo."
                    },
                    tafseer: {
                        en: "This verse establishes that all praise belongs to Allah alone. 'Rabb' means Lord, Master, and Sustainer. 'Al-Alameen' refers to all the worlds and everything that exists, showing Allah's dominion over all creation.",
                        ur: "یہ آیت یہ بتاتی ہے کہ تمام تعریف صرف اللہ کے لیے ہے۔ رب کا مطلب مالک، آقا اور پالنے والا ہے۔"
                    }
                },
                {
                    number: 3,
                    arabic: "الرَّحْمَٰنِ الرَّحِيمِ",
                    translations: {
                        en: "The Entirely Merciful, the Especially Merciful,",
                        ur: "بہت مہربان، نہایت رحم والا۔",
                        ar: "الرَّحْمَٰنِ الرَّحِيمِ",
                        fr: "Le Tout Miséricordieux, le Très Miséricordieux,",
                        es: "El Compasivo, el Misericordioso,"
                    },
                    tafseer: {
                        en: "These are two of the most beautiful names of Allah, both derived from 'Rahma' (mercy). Ar-Rahman refers to Allah's general mercy for all creation, while Ar-Raheem refers to His special mercy for the believers.",
                        ur: "یہ اللہ کے دو خوبصورت نام ہیں، دونوں رحمت سے نکلے ہیں۔ الرحمن عام رحمت کو ظاہر کرتا ہے جبکہ الرحیم خاص رحمت کو۔"
                    }
                },
                {
                    number: 4,
                    arabic: "مَالِكِ يَوْمِ الدِّينِ",
                    translations: {
                        en: "Sovereign of the Day of Recompense.",
                        ur: "انصاف کے دن کا مالک۔",
                        ar: "مَالِكِ يَوْمِ الدِّينِ",
                        fr: "Maître du Jour de la rétribution.",
                        es: "Soberano del Día del Juicio."
                    },
                    tafseer: {
                        en: "This verse reminds us that Allah is the ultimate judge and ruler of the Day of Judgment. 'Yawm ad-Deen' refers to the Day of Recompense when all will be held accountable for their deeds.",
                        ur: "یہ آیت ہمیں یاد دلاتی ہے کہ اللہ قیامت کے دن کا حتمی فیصلہ کرنے والا اور حکمران ہے۔"
                    }
                },
                {
                    number: 5,
                    arabic: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
                    translations: {
                        en: "It is You we worship and You we ask for help.",
                        ur: "ہم صرف تیری عبادت کرتے ہیں اور صرف تجھ سے مدد مانگتے ہیں۔",
                        ar: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
                        fr: "C'est Toi [Seul] que nous adorons, et c'est Toi [Seul] dont nous implorons secours.",
                        es: "Solo a Ti adoramos y solo de Ti imploramos ayuda."
                    },
                    tafseer: {
                        en: "This is the central verse of Al-Fatihah, expressing pure monotheism (Tawheed). It combines worship ('ibadah) with seeking help (isti'anah), showing that both our devotion and dependence should be directed to Allah alone.",
                        ur: "یہ سورہ فاتحہ کی مرکزی آیت ہے جو خالص توحید کا اظہار کرتی ہے۔ یہ عبادت اور مدد طلب کرنے کو ملاتی ہے۔"
                    }
                },
                {
                    number: 6,
                    arabic: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",
                    translations: {
                        en: "Guide us to the straight path -",
                        ur: "ہمیں سیدھا راستہ دکھا۔",
                        ar: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",
                        fr: "Guide-nous dans le droit chemin,",
                        es: "Guíanos por la senda recta,"
                    },
                    tafseer: {
                        en: "This is a prayer for guidance to the straight path - the path of Islam, righteousness, and truth. 'Sirat al-Mustaqeem' represents the balanced way of life that leads to Allah's pleasure and Paradise.",
                        ur: "یہ سیدھے راستے کی ہدایت کے لیے دعا ہے - اسلام، نیکی اور سچائی کا راستہ۔ صراط مستقیم متوازن زندگی کی نمائندگی کرتا ہے۔"
                    }
                },
                {
                    number: 7,
                    arabic: "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ",
                    translations: {
                        en: "The path of those upon whom You have bestowed favor, not of those who have evoked [Your] anger or of those who are astray.",
                        ur: "ان لوگوں کا راستہ جن پر تو نے انعام کیا، نہ کہ ان کا جن پر غضب ہوا اور نہ گمراہوں کا۔",
                        ar: "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ",
                        fr: "le chemin de ceux que Tu as comblés de faveurs, non pas de ceux qui ont encouru Ta colère, ni des égarés.",
                        es: "la senda de quienes has favorecido, no la de quienes son objeto de ira, ni la de los extraviados."
                    },
                    tafseer: {
                        en: "This verse clarifies the straight path by contrasting it with two deviant paths. Those favored by Allah include the prophets, truthful ones, martyrs, and righteous people. The verse asks Allah to keep us away from the path of those who earned His anger and those who went astray.",
                        ur: "یہ آیت سیدھے راستے کو دو گمراہ راستوں سے الگ کرکے واضح کرتی ہے۔ اللہ کے منعم علیہ لوگوں میں انبیاء، صدیقین، شہداء اور صالحین شامل ہیں۔"
                    }
                }
            ]
        },
        {
            number: 2,
            name: "Al-Baqarah",
            arabicName: "البقرة",
            englishName: "The Cow",
            verses: 286,
            revelationType: "Medinan",
            verses: [
                {
                    number: 1,
                    arabic: "الم",
                    translations: {
                        en: "Alif, Lam, Meem.",
                        ur: "الف، لام، میم۔",
                        ar: "الم",
                        fr: "Alif, Lam, Mim.",
                        es: "Alif, Lam, Mim."
                    },
                    tafseer: {
                        en: "These are the mysterious letters (Huruf Muqatta'at) that appear at the beginning of certain chapters of the Quran. Their exact meaning is known only to Allah, but they serve as a sign of the miraculous nature of the Quran.",
                        ur: "یہ اسرار آمیز حروف ہیں جو قرآن کی کچھ سورتوں کے شروع میں آتے ہیں۔ ان کا صحیح مطلب صرف اللہ جانتا ہے۔"
                    }
                },
                {
                    number: 2,
                    arabic: "ذَٰلِكَ الْكِتَابُ لَا رَيْبَ ۛ فِيهِ ۛ هُدًى لِّلْمُتَّقِينَ",
                    translations: {
                        en: "This is the Book about which there is no doubt, a guidance for those conscious of Allah -",
                        ur: "یہ وہ کتاب ہے جس میں کوئی شک نہیں، پرہیزگاروں کے لیے ہدایت ہے۔",
                        ar: "ذَٰلِكَ الْكِتَابُ لَا رَيْبَ ۛ فِيهِ ۛ هُدًى لِّلْمُتَّقِينَ",
                        fr: "C'est le Livre au sujet duquel il n'y a aucun doute, c'est un guide pour les pieux,",
                        es: "Este es el Libro exento de dudas, guía para los temerosos de Alá,"
                    },
                    tafseer: {
                        en: "This verse establishes the Quran as a book of absolute truth without any doubt or error. It serves as guidance specifically for the Muttaqeen - those who are conscious of Allah and strive to avoid His displeasure.",
                        ur: "یہ آیت قرآن کو مطلق سچائی کی کتاب قرار دیتی ہے جس میں کوئی شک یا خرابی نہیں۔ یہ خاص طور پر متقین کے لیے ہدایت ہے۔"
                    }
                }
            ]
        },
        {
            number: 3,
            name: "Ali 'Imran",
            arabicName: "آل عمران",
            englishName: "Family of Imran",
            verses: 200,
            revelationType: "Medinan",
            verses: [
                {
                    number: 1,
                    arabic: "الم",
                    translations: {
                        en: "Alif, Lam, Meem.",
                        ur: "الف، لام، میم۔",
                        ar: "الم",
                        fr: "Alif, Lam, Mim.",
                        es: "Alif, Lam, Mim."
                    },
                    tafseer: {
                        en: "Like in Surah Al-Baqarah, these mysterious letters appear at the beginning, emphasizing the miraculous nature of the Quran's composition.",
                        ur: "سورہ بقرہ کی طرح، یہ اسرار آمیز حروف شروع میں آتے ہیں، قرآن کی معجزانہ ترکیب پر زور دیتے ہوئے۔"
                    }
                }
            ]
        }
    ]
};

// Application State
let currentSurah = null;
let currentLanguage = 'en';
let showTranslation = true;
let searchResults = [];

// DOM Elements
const elements = {
    // Navigation
    navLinks: document.querySelectorAll('.nav-link'),
    mobileMenuToggle: document.getElementById('mobileMenuToggle'),
    nav: document.getElementById('nav'),
    
    // Theme
    themeToggle: document.getElementById('themeToggle'),
    
    // Language
    languageSelect: document.getElementById('languageSelect'),
    
    // Surah List
    surahSelect: document.getElementById('surahSelect'),
    surahList: document.getElementById('surahList'),
    surahItems: document.getElementById('surahItems'),
    surahSearch: document.getElementById('surahSearch'),
    sidebarToggle: document.getElementById('sidebarToggle'),
    closeSidebar: document.getElementById('