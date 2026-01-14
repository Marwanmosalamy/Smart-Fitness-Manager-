// --- Configuration & Data ---

const translations = {
    ar: {
        heroTitle: "مصمم لياقتك البدنية <span class='highlight'>الذكـي</span>",
        heroSubtitle: "احصل على خطة غذائية وتدريبية متكاملة مبنية على أسس علمية في ثوانٍ.",
        genderLabel: "النوع",
        male: "ذكر",
        female: "أنثى",
        ageLabel: "العمر (سنة)",
        weightLabel: "الوزن (كجم)",
        heightLabel: "الطول (سم)",
        activityLabel: "مستوى النشاط اليومي",
        actSedentary: "خامل (لا رياضة / عمل مكتبي)",
        actLight: "نشاط خفيف (رياضة 1-3 أيام/أسبوع)",
        actModerate: "نشاط متوسط (رياضة 3-5 أيام/أسبوع)",
        actHeavy: "نشاط عالي (رياضة 6-7 أيام/أسبوع)",
        actAthlete: "نشاط عالي جداً (رياضة مكثفة + عمل شاق)",
        goalLabel: "الهدف",
        goalLose: "خسارة الوزن (تنشيف)",
        goalMaintain: "الحفاظ على الوزن",
        goalGain: "زيادة الوزن (تضخيم)",
        daysLabel: "عدد أيام التدريب المتاحة أسبوعياً",
        days3: "3 أيام",
        days4: "4 أيام",
        days5: "5 أيام",
        days6: "6 أيام",
        submitBtn: "أحصل على خطتك الآن",
        resultsTitle: "نتائج تحليلك الشخصي",
        caloriesLabel: "احتياجك اليومي من السعرات",
        caloriesUnit: "سعرة حرارية",
        dietTitle: "🍽️ الخطة الغذائية",
        protein: "بروتين",
        carbs: "كاربوهيدرات",
        fats: "دهون",
        dailyMeals: "وجباتك اليومية المقترحة:",
        tipsTitle: "نصائح غذائية:",
        workoutTitle: "💪 النظام التدريبي المقترح",
        splitLabel: "نظام التقسيم:",
        langBtn: "🇺🇸 English",
        themeBtn: "☀️ Light Mode"
    },
    en: {
        heroTitle: "Smart <span class='highlight'>Fitness</span> Designer",
        heroSubtitle: "Get a scientifically-based diet and training plan in seconds.",
        genderLabel: "Gender",
        male: "Male",
        female: "Female",
        ageLabel: "Age (years)",
        weightLabel: "Weight (kg)",
        heightLabel: "Height (cm)",
        activityLabel: "Daily Activity Level",
        actSedentary: "Sedentary (No sport / Office job)",
        actLight: "Light Active (1-3 days/week)",
        actModerate: "Moderately Active (3-5 days/week)",
        actHeavy: "Very Active (6-7 days/week)",
        actAthlete: "Extra Active (Physical job + Training)",
        goalLabel: "Goal",
        goalLose: "Weight Loss (Cut)",
        goalMaintain: "Maintain Weight",
        goalGain: "Weight Gain (Bulk)",
        daysLabel: "Training Days per Week",
        days3: "3 Days",
        days4: "4 Days",
        days5: "5 Days",
        days6: "6 Days",
        submitBtn: "Get Your Plan Now",
        resultsTitle: "Your Personal Results",
        caloriesLabel: "Daily Calorie Needs",
        caloriesUnit: "Calories",
        dietTitle: "🍽️ Nutrition Plan",
        protein: "Protein",
        carbs: "Carbs",
        fats: "Fats",
        dailyMeals: "Suggested Daily Meals:",
        tipsTitle: "Nutrition Tips:",
        workoutTitle: "💪 Training Plan",
        splitLabel: "Split System:",
        langBtn: "🇪🇬 عربي",
        themeBtn: "🌙 Dark Mode"
    }
};

const mealData = {
    lose: {
        ar: [
            { 
                name: "الإفطار (اختر خياراً واحداً)", 
                desc: "<ul><li><strong>الخيار 1:</strong> شوفان (50ج) + حليب خالي الدسم + معلقة عسل + قرفة.</li><li><strong>الخيار 2:</strong> 3 بياض بيض + بيضة كاملة مسلوقة + رغيف سن + خيار.</li><li><strong>الخيار 3:</strong> جبنة قريش (100ج) + طماطم + زيت زيتون + توست أسمر.</li></ul>", 
                prep: "نوع بين المصادر يومياً لكسر الملل. اهتم بشرب كوبين ماء قبل الأكل." 
            },
            { 
                name: "الغداء (اختر خياراً واحداً)", 
                desc: "<ul><li><strong>الخيار 1:</strong> صدر دجاج مشوي (150ج) + 5 ملاعق أرز بسمتي + خضار سوتيه.</li><li><strong>الخيار 2:</strong> سمك مشوي (200ج) + نصف رغيف بلدي + سلطة خضراء.</li><li><strong>الخيار 3:</strong> علبة تونة (مصفاة) + بطاطس مسلوقة (150ج) + سلطة.</li></ul>", 
                prep: "استخدم التوابل (كمون، فلفل، بابريكا) بدلاً من الملح الزائد. الشوي أو السلق هما الأفضل." 
            },
            { 
                name: "وجبة خفيفة", 
                desc: "<ul><li>ثمرة فاكهة (تفاح / برتقال / جوافة).</li><li>أو كوب زبادي يوناني (بدون سكر).</li><li>أو حفنة لوز ني (10 حبات).</li></ul>", 
                prep: "تناولها عند الشعور بالجوع بين الوجبات الرئيسية." 
            },
            { 
                name: "العشاء", 
                desc: "<ul><li><strong>الخيار 1:</strong> سلطة خضراء كبيرة مع قطعة جبن قريش.</li><li><strong>الخيار 2:</strong> 2 بيضة مسلوقة + خيار وخس.</li><li><strong>الخيار 3:</strong> زبادي لايت مع عصرة ليمون (لزيادة الحرق).</li></ul>", 
                prep: "حاول أن يكون العشاء قبل النوم بـ 2-3 ساعات لراحة المعدة." 
            }
        ],
        en: [
            { 
                name: "Breakfast (Choose one)", 
                desc: "<ul><li><strong>Option 1:</strong> Oats (50g) + Skim Milk + Honey + Cinnamon.</li><li><strong>Option 2:</strong> 3 Egg Whites + 1 Whole Egg + Whole Wheat Toast + Cucumber.</li><li><strong>Option 3:</strong> Cottage Cheese (100g) + Tomato + Olive Oil + Brown Toast.</li></ul>", 
                prep: "Rotate between options daily. Drink 2 cups of water before eating." 
            },
            { 
                name: "Lunch (Choose one)", 
                desc: "<ul><li><strong>Option 1:</strong> Grilled Chicken Breast (150g) + 5 tbsp Basmati Rice + Sautéed Veggies.</li><li><strong>Option 2:</strong> Grilled Fish (200g) + 1/2 Brown Bread + Green Salad.</li><li><strong>Option 3:</strong> Tuna Can (Drained) + Boiled Potato (150g) + Salad.</li></ul>", 
                prep: "Use spices instead of excess salt. Grilling or boiling is best." 
            },
            { 
                name: "Snack", 
                desc: "<ul><li>One Fruit (Apple / Orange / Guava).</li><li>OR Greek Yogurt (Plain).</li><li>OR Handful of Raw Almonds (10 nuts).</li></ul>", 
                prep: "Eat when feeling hungry between main meals." 
            },
            { 
                name: "Dinner", 
                desc: "<ul><li><strong>Option 1:</strong> Large Green Salad with Cottage Cheese.</li><li><strong>Option 2:</strong> 2 Boiled Eggs + Lettuce & Cucumber.</li><li><strong>Option 3:</strong> Light Yogurt with Lemon juice.</li></ul>", 
                prep: "Try to eat dinner 2-3 hours before sleep." 
            }
        ]
    },
    gain: {
        ar: [
            { 
                name: "الإفطار (طاقة عالية)", 
                desc: "<ul><li><strong>الخيار 1:</strong> أومليت (3 بيضات) بزيت زيتون + 2 توست + عصير برتقال.</li><li><strong>الخيار 2:</strong> شوفان بالموز، الحليب كامل الدسم، وزبدة الفول السوداني.</li></ul>", 
                prep: "لا تفوت وجبة الإفطار فهي أساس الطاقة." 
            },
            { 
                name: "وجبة خفيفة 1", 
                desc: "<ul><li>ساندوتش زبدة فول سوداني ومربى.</li><li>أو بروتين شيك مع مكسرات.</li></ul>", 
                prep: "-" 
            },
            { 
                name: "الغداء (بروتين وكارب)", 
                desc: "<ul><li><strong>الخيار 1:</strong> مكرونة باللحم المفروم (200ج) + سلطة.</li><li><strong>الخيار 2:</strong> دجاج بانيه (في الفرن) + أرز بالخلطة + خضار.</li><li><strong>الخيار 3:</strong> ستيك لحم + بطاطس مهروسة بالزبدة.</li></ul>", 
                prep: "ركز على الكميات الكبيرة قليلاً، وأضف الدهون الصحية (زيت زيتون)." 
            },
            { 
                name: "العشاء", 
                desc: "<ul><li><strong>الخيار 1:</strong> تونة بالمكرونة والمايونيز اللايت.</li><li><strong>الخيار 2:</strong> جبن شيدر/فلمنك + خبز فينو + عصير.</li></ul>", 
                prep: "يمكنك إضافة وجبة خفيفة قبل النوم (كازين) مثل الجبن القريش." 
            }
        ],
        en: [
            { 
                name: "Breakfast (High Energy)", 
                desc: "<ul><li><strong>Option 1:</strong> 3-Egg Omelet with Olive Oil + 2 Toast + Orange Juice.</li><li><strong>Option 2:</strong> Oats with Banana, Whole Milk, and Peanut Butter.</li></ul>", 
                prep: "Never skip breakfast, it's your fuel foundation." 
            },
            { 
                name: "Snack 1", 
                desc: "<ul><li>PB&J Sandwich.</li><li>OR Protein Shake with Nuts.</li></ul>", 
                prep: "-" 
            },
            { 
                name: "Lunch", 
                desc: "<ul><li><strong>Option 1:</strong> Pasta with Minced Meat (200g) + Salad.</li><li><strong>Option 2:</strong> Baked Breaded Chicken + Rice + Veggies.</li><li><strong>Option 3:</strong> Steak + Mashed Potatoes with Butter.</li></ul>", 
                prep: "Focus on slightly larger portions and healthy fats." 
            },
            { 
                name: "Dinner", 
                desc: "<ul><li><strong>Option 1:</strong> Tuna Pasta with Light Mayo.</li><li><strong>Option 2:</strong> Cheddar Cheese Sandwich + Juice.</li></ul>", 
                prep: "You can add a pre-sleep snack like Cottage Cheese." 
            }
        ]
    },
    maintain: {
        ar: [
            { 
                name: "الإفطار", 
                desc: "<ul><li><strong>الخيار 1:</strong> 2 بيضة مسلوقة + نصف رغيف + ثمرة فاكهة.</li><li><strong>الخيار 2:</strong> كورن فليكس (حبوب كاملة) بحليب قليل الدسم.</li></ul>", 
                prep: "توازن معتدل بدون حرمان." 
            },
            { 
                name: "الغداء", 
                desc: "<ul><li><strong>الخيار 1:</strong> سمك سنجاري + أرز + سلطة.</li><li><strong>الخيار 2:</strong> فاصوليا بيضاء/لوبيا + لحم قليل الدسم + أرز.</li></ul>", 
                prep: "الطبق يجب أن يكون: ربع بروتين، ربع كارب، نصف خضار." 
            },
            { 
                name: "العشاء", 
                desc: "<ul><li>فواكه مشكلة (سلطة فواكه).</li><li>أو سندوتش جبن رومي/بيضاء صغير.</li></ul>", 
                prep: "عشاء خفيف لتنام مرتاحاً." 
            }
        ],
        en: [
            { 
                name: "Breakfast", 
                desc: "<ul><li><strong>Option 1:</strong> 2 Boiled Eggs + 1/2 Bread + Fruit.</li><li><strong>Option 2:</strong> Whole Grain Cereal with Low-fat Milk.</li></ul>", 
                prep: "Moderate balance without deprivation." 
            },
            { 
                name: "Lunch", 
                desc: "<ul><li><strong>Option 1:</strong> Grilled Fish + Rice + Salad.</li><li><strong>Option 2:</strong> Beans/Legumes + Lean Meat + Rice.</li></ul>", 
                prep: "Plate Rule: 1/4 Protein, 1/4 Carbs, 1/2 Veggies." 
            },
            { 
                name: "Dinner", 
                desc: "<ul><li>Fruit Salad.</li><li>OR Small Cheese Sandwich.</li></ul>", 
                prep: "Light dinner for better sleep." 
            }
        ]
    }
};

const exerciseData = {
    fullbody: {
        days: [
            { name: { ar: "يوم 1: تمرين كامل الجسم A (قوة)", en: "Day 1: Full Body A (Power)" }, exercises: ["Barbell Squat", "Bench Press", "Bent Over Row", "Overhead Press", "Dumbbell Lunges", "Plank"] },
            { name: { ar: "يوم 2: راحة", en: "Day 2: Rest" }, exercises: [] },
            { name: { ar: "يوم 3: تمرين كامل الجسم B (ضخامة)", en: "Day 3: Full Body B (Hypertrophy)" }, exercises: ["Deadlift", "Incline Dumbbell Press", "Lat Pulldown", "Leg Press", "Lateral Raises", "Bicep Curls"] },
            { name: { ar: "يوم 4: راحة", en: "Day 4: Rest" }, exercises: [] },
            { name: { ar: "يوم 5: تمرين كامل الجسم C (تحمل)", en: "Day 5: Full Body C (Endurance)" }, exercises: ["Goblet Squat", "Push Ups", "Pull Ups", "Romanian Deadlift", "Face Pulls", "Tricep Dips"] },
            { name: { ar: "يوم 6-7: راحة", en: "Day 6-7: Rest" }, exercises: [] }
        ]
    },
    upper_lower: {
        days: [
            { name: { ar: "يوم 1: علوي (تركيز قوة)", en: "Day 1: Upper Power" }, exercises: ["Bench Press", "Barbell Row", "Overhead Press", "Pull Ups", "Dips", "Barbell Curls"] },
            { name: { ar: "يوم 2: سفلي (تركيز قوة)", en: "Day 2: Lower Power" }, exercises: ["Squat", "Romanian Deadlift", "Leg Press", "Standing Calf Raises", "Hanging Leg Raise"] },
            { name: { ar: "يوم 3: راحة", en: "Day 3: Rest" }, exercises: [] },
            { name: { ar: "يوم 4: علوي (تركيز ضخامة)", en: "Day 4: Upper Hypertrophy" }, exercises: ["Incline Dumbbell Press", "Lat Pulldown", "Lateral Raise", "One Arm Dumbbell Row", "Tricep Pushdown", "Hammer Curls"] },
            { name: { ar: "يوم 5: سفلي (تركيز ضخامة)", en: "Day 5: Lower Hypertrophy" }, exercises: ["Front Squat", "Lunges", "Leg Extensions", "Leg Curls", "Seated Calf Raises", "Plank"] },
             { name: { ar: "يوم 6-7: راحة", en: "Day 6-7: Rest" }, exercises: [] }
        ]
    },
    split_5: {
        days: [
            { name: { ar: "يوم 1: علوي (صدر/ظهر)", en: "Day 1: Upper (Chest/Back)" }, exercises: ["Bench Press", "Barbell Row", "Incline Dumbbell Press", "Lat Pulldown", "Chest Fly", "Face Pulls"] },
            { name: { ar: "يوم 2: سفلي (أرجل)", en: "Day 2: Lower" }, exercises: ["Squat", "Leg Press", "Romanian Deadlift", "Leg Extensions", "Calf Raises"] },
            { name: { ar: "يوم 3: راحة", en: "Day 3: Rest" }, exercises: [] },
            { name: { ar: "يوم 4: دفع (صدر/كتف/تراي)", en: "Day 4: Push" }, exercises: ["Overhead Press", "Dips", "Lateral Raises", "Tricep Pushdown", "Skullcrushers"] },
            { name: { ar: "يوم 5: سحب (ظهر/باي/كتف خلفي)", en: "Day 5: Pull" }, exercises: ["Pull Ups", "Seated Cable Row", "Barbell Curls", "Hammer Curls", "Rear Delt Fly"] },
            { name: { ar: "يوم 6: أرجل وبطن", en: "Day 6: Legs & Abs" }, exercises: ["Deadlift", "Lunges", "Leg Curls", "Seated Calf Raises", "Cable Crunch"] }
        ]
    },
    ppl: {
        days: [
            { name: { ar: "يوم 1: دفع A", en: "Day 1: Push A" }, exercises: ["Bench Press", "Overhead Press", "Incline Dumbbell Press", "Lateral Raises", "Tricep Dips", "Tricep Pushdown"] },
            { name: { ar: "يوم 2: سحب A", en: "Day 2: Pull A" }, exercises: ["Deadlift", "Pull Ups", "Barbell Row", "Face Pulls", "Barbell Curls", "Hammer Curls"] },
            { name: { ar: "يوم 3: أرجل A", en: "Day 3: Legs A" }, exercises: ["Squat", "Leg Press", "Leg Extensions", "Romanian Deadlift", "Calf Raises"] },
            { name: { ar: "يوم 4: دفع B", en: "Day 4: Push B" }, exercises: ["Dumbbell Shoulder Press", "Incline Bench Press", "Cable Fly", "Lateral Raises", "Skullcrushers", "Tricep Kickback"] },
            { name: { ar: "يوم 5: سحب B", en: "Day 5: Pull B" }, exercises: ["Lat Pulldown", "Seated Cable Row", "T-Bar Row", "Preacher Curls", "Concentration Curls", "Shrugs"] },
            { name: { ar: "يوم 6: أرجل B", en: "Day 6: Legs B" }, exercises: ["Front Squat", "Lunges", "Leg Curls", "Seated Calf Raises", "Hanging Leg Raise", "Plank"] }
        ]
    }
};

const exerciseTranslations = {
    "Barbell Squat": { ar: "سكوات بالبار (Squat)", en: "Barbell Squat" },
    "Bench Press": { ar: "بينش برس (Bench Press)", en: "Bench Press" },
    "Bent Over Row": { ar: "تجديف بالبار (Bent Over Row)", en: "Bent Over Row" },
    "Overhead Press": { ar: "ضغط أكتاف بالبار (Overhead Press)", en: "Overhead Press" },
    "Dumbbell Lunges": { ar: "طعن بالدمبل (Lunges)", en: "Dumbbell Lunges" },
    "Plank": { ar: "تمرين البلانك (Plank)", en: "Plank" },
    "Deadlift": { ar: "ديدليفت (Deadlift)", en: "Deadlift" },
    "Incline Dumbbell Press": { ar: "ضغط صدر عالي بالدمبل", en: "Incline Dumbbell Press" },
    "Lat Pulldown": { ar: "سحب عالي (Lat Pulldown)", en: "Lat Pulldown" },
    "Leg Press": { ar: "دفع أرجل (Leg Press)", en: "Leg Press" },
    "Lateral Raises": { ar: "رفرفة جانبي (Lateral Raises)", en: "Lateral Raises" },
    "Bicep Curls": { ar: "بايسيبس بالبار", en: "Bicep Curls" },
    "Goblet Squat": { ar: "جوبلت سكوات", en: "Goblet Squat" },
    "Push Ups": { ar: "ضغط (Push Ups)", en: "Push Ups" },
    "Pull Ups": { ar: "عقلة (Pull Ups)", en: "Pull Ups" },
    "Romanian Deadlift": { ar: "ديدليفت روماني", en: "Romanian Deadlift" },
    "Face Pulls": { ar: "سحب للوجه (Face Pulls)", en: "Face Pulls" },
    "Tricep Dips": { ar: "متوازي (Dips)", en: "Tricep Dips" },
    "Barbell Row": { ar: "تجديف بالبار", en: "Barbell Row" },
    "Dips": { ar: "متوازي", en: "Dips" },
    "Barbell Curls": { ar: "بايسيبس بالبار", en: "Barbell Curls" },
    "Squat": { ar: "سكوات", en: "Squat" },
    "Standing Calf Raises": { ar: "سمانة واقف", en: "Standing Calf Raises" },
    "Hanging Leg Raise": { ar: "رفع أرجل (بطن)", en: "Hanging Leg Raise" },
    "Lateral Raise": { ar: "رفرفة جانبي", en: "Lateral Raise" },
    "One Arm Dumbbell Row": { ar: "منشار بالدمبل", en: "One Arm Dumbbell Row" },
    "Tricep Pushdown": { ar: "تراي سحب كابل", en: "Tricep Pushdown" },
    "Hammer Curls": { ar: "بايسيبس هامر", en: "Hammer Curls" },
    "Front Squat": { ar: "سكوات أمامي", en: "Front Squat" },
    "Lunges": { ar: "طعن (Lunges)", en: "Lunges" },
    "Leg Extensions": { ar: "رفرفة أرجل أمامي", en: "Leg Extensions" },
    "Leg Curls": { ar: "رفرفة أرجل خلفي", en: "Leg Curls" },
    "Seated Calf Raises": { ar: "سمانة جالس", en: "Seated Calf Raises" },
    "Chest Fly": { ar: "تجميع (فراشة)", en: "Chest Fly" },
    "Skullcrushers": { ar: "تراي بار (Skullcrushers)", en: "Skullcrushers" },
    "Seated Cable Row": { ar: "سحب أرضي", en: "Seated Cable Row" },
    "Rear Delt Fly": { ar: "رفرفة خلفي", en: "Rear Delt Fly" },
    "Cable Crunch": { ar: "بطن بالكابل", en: "Cable Crunch" },
    "Dumbbell Shoulder Press": { ar: "ضغط أكتاف بالدمبل", en: "Dumbbell Shoulder Press" },
    "Incline Bench Press": { ar: "ضغط صدر عالي بالبار", en: "Incline Bench Press" },
    "Cable Fly": { ar: "تجميع بالكابل", en: "Cable Fly" },
    "Tricep Kickback": { ar: "تراي كيك باك", en: "Tricep Kickback" },
    "T-Bar Row": { ar: "تجديف T-Bar", en: "T-Bar Row" },
    "Preacher Curls": { ar: "بايسيبس حصان", en: "Preacher Curls" },
    "Concentration Curls": { ar: "بايسيبس ارتكاز", en: "Concentration Curls" },
    "Shrugs": { ar: "ترابيس (Shrugs)", en: "Shrugs" },
    "Calf Raises": { ar: "سمانة", en: "Calf Raises" }
};

// State
let currentLang = 'ar';
let currentTheme = 'dark';
let lastCalculatedData = null;

// --- Initialization ---

document.addEventListener('DOMContentLoaded', () => {
    // Buttons
    document.getElementById('langToggle').addEventListener('click', toggleLanguage);
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);
    
    // Form
    document.getElementById('fitnessForm').addEventListener('submit', handleFormSubmit);

    // Initial Translation
    updateLanguageUI();
});

// --- Logic Functions ---

function toggleLanguage() {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    
    updateLanguageUI();
    
    // Update Button Text Logic
    const langBtn = document.getElementById('langToggle');
    langBtn.textContent = translations[currentLang].langBtn;

    // Rerender results if they exist (to translate them)
    if (lastCalculatedData) {
        displayResults(
            lastCalculatedData.targetCalories,
            lastCalculatedData.proteinGrams,
            lastCalculatedData.carbGrams,
            lastCalculatedData.fatGrams,
            lastCalculatedData.mealPlan,
            lastCalculatedData.workoutPlan,
            lastCalculatedData.goal
        );
    }
}

function updateLanguageUI() {
    // Static Text
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            el.innerHTML = translations[currentLang][key]; // innerHTML to support <span class="highlight">
        }
    });

    // Update Form Inputs direction/placeholder if needed (optional)
}

function toggleTheme() {
    document.body.classList.toggle('light-theme');
    const isLight = document.body.classList.contains('light-theme');
    const themeBtn = document.getElementById('themeToggle');
    
    if (isLight) {
        themeBtn.textContent = "🌙 Dark Mode";
        if (currentLang === 'ar') themeBtn.textContent = "Dark Mode🌙";
    } else {
        themeBtn.textContent = "☀️ Light Mode";
        if (currentLang === 'ar') themeBtn.textContent = "Light Mode☀️";
    }
}

function handleFormSubmit(e) {
    e.preventDefault();

    // 1. Gather Input
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const age = parseInt(document.getElementById('age').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const activityMultiplier = parseFloat(document.getElementById('activity').value);
    const goal = document.getElementById('goal').value;
    const trainingDays = parseInt(document.getElementById('days').value);

    // 2. Calculations (BMR & TDEE)
    let bmr = (10 * weight) + (6.25 * height) - (5 * age);
    if (gender === 'male') bmr += 5;
    else bmr -= 161;

    let tdee = bmr * activityMultiplier;
    let targetCalories = tdee;

    if (goal === 'lose') targetCalories -= 500;
    else if (goal === 'gain') targetCalories += 400;
    
    targetCalories = Math.round(targetCalories);

    // 3. Macros
    let proteinGrams = Math.round(weight * 2);
    let fatGrams = Math.round(weight * 0.9);
    let proteinCals = proteinGrams * 4;
    let fatCals = fatGrams * 9;
    let carbCals = targetCalories - (proteinCals + fatCals);
    if (carbCals < 400) carbCals = 400; // Safety floor
    let carbGrams = Math.round(carbCals / 4);

    // 4. Generate Plans (Using new data structures)
    const mealPlan = generateMealPlan(goal);
    const workoutPlan = generateWorkoutPlan(trainingDays);

    // 5. Save State & Display Results
    lastCalculatedData = {
        targetCalories,
        proteinGrams,
        carbGrams,
        fatGrams,
        mealPlan,
        workoutPlan,
        goal
    };

    displayResults(targetCalories, proteinGrams, carbGrams, fatGrams, mealPlan, workoutPlan, goal);
}

function generateMealPlan(goal) {
    // Fallback to maintain if goal not found (shouldn't happen)
    const key = (goal === 'lose' || goal === 'gain') ? goal : 'maintain';
    return mealData[key];
}

function generateWorkoutPlan(days) {
    if (days === 3) return { type: "Full Body", data: exerciseData.fullbody };
    if (days === 4) return { type: "Upper / Lower", data: exerciseData.upper_lower };
    if (days === 5) return { type: "Hybrid Split", data: exerciseData.split_5 };
    return { type: "Push Pull Legs", data: exerciseData.ppl };
}

function displayResults(cals, pro, carb, fat, mealsObj, workoutObj, goal) {
    const resultsSection = document.getElementById('results');
    resultsSection.classList.remove('hidden');
    resultsSection.scrollIntoView({ behavior: 'smooth' });

    // Animate Calories
    const calEl = document.getElementById('targetCalories');
    calEl.textContent = cals; 

    // Macros
    document.getElementById('proteinVal').textContent = pro + 'g';
    document.getElementById('carbsVal').textContent = carb + 'g';
    document.getElementById('fatsVal').textContent = fat + 'g';

    // --- Render Meals ---
    const mealContainer = document.getElementById('dailyMealsList');
    mealContainer.innerHTML = '';
    
    // Get meals for current language
    const currentMeals = mealsObj[currentLang];
    
    currentMeals.forEach(meal => {
        const div = document.createElement('div');
        div.className = 'meal-card';
        div.innerHTML = `
            <h5>${meal.name}</h5>
            <div style="font-size:0.9rem; margin-bottom:8px;">${meal.desc}</div>
            <p style="font-size:0.85rem; color:var(--text-dim);">💡 <strong>${currentLang === 'ar' ? 'نصيحة:' : 'Tip:'}</strong> ${meal.prep}</p>
        `;
        mealContainer.appendChild(div);
    });

    // --- Render Workout ---
    const workoutContainer = document.getElementById('workoutSchedule');
    workoutContainer.innerHTML = '';
    
    // Split Type Name
    const splitKey = workoutObj.type; // Simple label, can also be translated if mapped
    document.getElementById('splitType').textContent = splitKey; 

    // Render Days
    const schedule = workoutObj.data.days;
    schedule.forEach(day => {
        const dayDiv = document.createElement('div');
        dayDiv.className = 'day-item';
        
        const dayTitle = day.name[currentLang];
        
        let exercisesHtml = '';
        if (day.exercises.length > 0) {
            day.exercises.forEach(ex => {
                const videoUrl = `https://www.youtube.com/results?search_query=how+to+do+${ex.replace(/\s/g, '+')}+exercise`;
                
                // Get translated name or fallback to original
                let exName = ex;
                if (exerciseTranslations[ex] && exerciseTranslations[ex][currentLang]) {
                    exName = exerciseTranslations[ex][currentLang];
                }

                exercisesHtml += `
                    <div class="exercise-item">
                        <div class="exercise-info">
                            <span class="exercise-name">${exName}</span>
                            <span class="exercise-sets">3 Sets x 10-12 Reps</span>
                        </div>
                        <a href="${videoUrl}" target="_blank" class="video-link">
                             ${currentLang === 'ar' ? 'شاهد فيديو 📺' : 'Watch Video 📺'}
                        </a>
                    </div>
                `;
            });
        } else {
            exercisesHtml = `<p style="color:var(--text-dim); text-align:center;">${currentLang === 'ar' ? 'استشفاء عضلي 🧘' : 'Active Recovery 🧘'}</p>`;
        }

        dayDiv.innerHTML = `
            <div style="margin-bottom:10px; font-weight:bold; color:var(--secondary-color); border-bottom:1px solid var(--border-color); padding-bottom:5px;">
                ${dayTitle}
            </div>
            ${exercisesHtml}
        `;
        workoutContainer.appendChild(dayDiv);
    });

    // --- Nutrition Tips (Static for now, based on goal) ---
    const tipsList = document.getElementById('nutritionTips');
    tipsList.innerHTML = '';
    let tips = [];
    if (goal === 'lose') {
        tips = currentLang === 'ar' 
            ? ["شرب الماء قبل كل وجبة", "زيادة البروتين للشبع", "تقليل السكريات"]
            : ["Drink water before meals", "Increase protein for satiety", "Reduce sugar"];
    } else {
        tips = currentLang === 'ar'
            ? ["تناول سعرات أكثر من احتياجك", "ركز على الكربوهيدرات حول التمرين", "النوم الجيد أساس البناء"]
            : ["Eat in a surplus", "Carbs around workout", "Sleep is key for growth"];
    }
    
    tips.forEach(t => {
        const li = document.createElement('li');
        li.textContent = t;
        tipsList.appendChild(li);
    });
}
