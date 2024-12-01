// Savollar va javoblar
const questions = [
    { question: "LAN tarmog‘i nima?", answer: "Mahalliy tarmoq" },
    { question: "WAN tarmog‘i nima?", answer: "Global tarmoq" },
    { question: "Internetning asosiy protokoli nima?", answer: "TCP/IP" },
    { question: "IP-manzilning to‘liq nomi nima?", answer: "Internet Protocol Address" },
    { question: "Internet tarmog‘iga ulanishni tashkil etuvchi asosiy qurilma nima?", answer: "Router" },
    { question: "Wi-Fi qanday texnologiyaga asoslangan?", answer: "Simsiz aloqa" },
    { question: "DNS nima?", answer: "Domain Name System" },
    { question: "WWW (World Wide Web) ixtirochisi kim?", answer: "Tim Berners-Lee" },
    { question: "Kompyuterning asosiy qismlaridan biri bo‘lib, barcha hisoblash ishlarini bajaruvchi qurilma nima?", answer: "Protsessor" },
    { question: "Kompyuterning vaqtinchalik xotirasi nima deb ataladi?", answer: "Operativ xotira" },
    { question: "Kompyuterda axborotni saqlash uchun ishlatiladigan asosiy qurilma nima?", answer: "Qattiq disk" },
    { question: "Kompyuterning grafik ma’lumotlarni ekranda ko‘rsatadigan qismi nima?", answer: "Videokarta" },
    { question: "Kompyuterning asosiy tizimini boshqaradigan dastur nima?", answer: "Operatsion tizim" },
    { question: "Internetga ulanish uchun ishlatiladigan qurilma nima?", answer: "Modem" },
    { question: "Kompyuterga buyruqlar berish uchun ishlatiladigan qurilma nima?", answer: "Klaviatura" },
    { question: "Kompyuterning asosiy platasi qanday nomlanadi?", answer: "Ona plata" },
    { question: "Kompyuterning dasturlarni ishlatishda asosiy tezligini belgilovchi komponent nima?", answer: "Protsessor" },
    { question: "Hujjatlarni chop etish uchun ishlatiladigan qurilma nima?", answer: "Printer" },
    { question: "Algoritmning asosiy turlari nechta?", answer: "3" },
    { question: "Axborotning asosiy o‘lchov birligi nima?", answer: "Bit" },
    { question: "Raqamli axborotlarni ifodalash uchun qaysi sanoq tizimi ishlatiladi?", answer: "Ikkilik" },
    { question: "Kompyuter xotirasining o‘lchov birligi bo‘lgan 1 GB nechta baytga teng?", answer: "1073741824" },
    { question: "Kompyuter dasturlarining bajarilish tartibini belgilovchi tuzilma nima deyiladi?", answer: "Algoritm" },
    { question: "Faylni internetdan yuklab olish uchun qaysi turdagi protokol ishlatiladi?", answer: "HTTP" },
    { question: "Kompyuterlarning bir-biriga ulanishi uchun qanday tarmoqdan foydalaniladi?", answer: "Internet" },
    { question: "Qaysi dastur tili web sahifalarni yaratishda ishlatiladi?", answer: "HTML" },
    { question: "Biror jarayonni bosqichma-bosqich tushuntiruvchi ko‘rsatmalar majmuasi nima?", answer: "Algoritm" },
    { question: "O‘zbek tilida dasturlash tili yaratilgan bo‘lsa, uning nomi nima?", answer: "Algorithmic" },
];


// Tasodifiy tartibga solish (shuffle)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Savollarni aralashtirish
shuffleArray(questions);

// HTML elementlarini olish
const questionBox = document.getElementById("question-box");
const inputField = document.getElementById("answer-input");
const submitButton = document.getElementById("submit-btn");
const resultBox = document.getElementById("result");
const scoreBox = document.getElementById("score-box");

// To'g'ri va noto'g'ri javoblarni hisoblash uchun o'zgaruvchilar
let correctCount = 0;
let incorrectCount = 0;
let currentQuestionIndex = 0;

// Savolni yangilash funksiyasi
function updateQuestion() {
    if (currentQuestionIndex < questions.length) {
        questionBox.textContent = questions[currentQuestionIndex].question;
        inputField.value = "";
        resultBox.textContent = "";
    } else {
        // O'yin tugadi
        questionBox.textContent = "O'yin tugadi! Natijalaringiz:";
        resultBox.innerHTML = `
            <span class="correct">To'g'ri javoblar: ${correctCount}</span><br>
            <span class="incorrect">Noto'g'ri javoblar: ${incorrectCount}</span>
        `;
        inputField.style.display = "none";
        submitButton.style.display = "none";
    }
}

// Javobni tekshirish funksiyasi
function checkAnswer() {
    const userAnswer = inputField.value.trim();
    const correctAnswer = questions[currentQuestionIndex].answer;

    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        correctCount++;
        resultBox.textContent = "To'g'ri javob!";
        resultBox.className = "correct";
    } else {
        incorrectCount++;
        resultBox.textContent = `Noto'g'ri javob! To'g'ri javob: ${correctAnswer}`;
        resultBox.className = "incorrect";
    }

    currentQuestionIndex++;
    updateScore();
    updateQuestion();
}

// Natijalarni yangilash funksiyasi
function updateScore() {
    scoreBox.textContent = `To'g'ri: ${correctCount} | Noto'g'ri: ${incorrectCount}`;
}

// Dastur ishlashini boshlash
submitButton.addEventListener("click", checkAnswer);
updateQuestion();