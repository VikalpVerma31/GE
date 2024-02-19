const questions = [
    {
        question:"एनोमी का तात्पर्य है",
        answers: [
            { text: "एक निर्माण, या एक बना हुआ मॉडल जो मापने वाली छड़ी के रूप में कार्य करता है जिसके विरुद्ध वास्तविक मामलों का मूल्यांकन किया जा सकता है।", correct: false},
            { text: "छोटे समूहों का अध्ययन.", correct: false},
            { text: "	मानकों और मूल्यों के टूटने या उद्देश्य या आदर्शों की कमी के कारण उत्पन्न अस्थिरता की स्थिति", correct: true},
            { text: "	कथनों का एक समूह जो समस्याओं, कार्यों या व्यवहार की व्याख्या करना चाहता है", correct: false},
        ] 
    },

    {
        question:"दुर्खीम ने अपने अध्ययन में 'एनोमी' की अवधारणा पेश की",
        answers: [
            { text: "आत्मघाती", correct: true},
            { text: "सामाजिक नियंत्रण", correct: false},
            { text: "सामाजिक प्रगति", correct: false},
            { text: "आधुनिकीकरण", correct: false},
        ] 
    },

    {
        question:"रूल्स ऑफ सोशियोलॉजिकल मेथड की प्रसिद्ध कृति है",
        answers: [
            { text: "हर्बर्ट स्पेंसर", correct: false},
            { text: "अगस्टे कॉम्टे", correct: false},
            { text: "टैल्कॉट पार्सन्स", correct: false},
            { text: "एमाइल दुर्खीम", correct: true},
        ] 
    },

    {
        question:"    डर्कहेम के अनुसार, विसंगति किसके कारण होती है?",
        answers: [
            { text: "श्रम का विभाजन और पारंपरिक से आधुनिक समाज में तेजी से सामाजिक परिवर्तन", correct: true},
            { text: "राज्य की ओर से बहुत ज्यादा दबाव", correct: false},
            { text: "जब किसी समाज से गरीबी मिट जाती है", correct: false},
            { text: "	किसी समाज में किसी समूह की उच्च शैक्षिक उपलब्धि", correct: false},
        ] 
    },

    {
        question:"समाज के अध्ययन में 'एनोमी' शब्द का प्रचलन किसने किया?",
        answers: [
            { text: "हर्बर्ट स्पेंसर", correct: false},
            { text: "अगस्टे कॉम्टे", correct: false},
            { text: "	मैक्स वेबर", correct: false},
            { text: "एमाइल दुर्खीम", correct: true},
        ] 
    },

    {
        question:"दुर्खीम ने तर्क दिया कि समाजशास्त्र का कार्य ___ का अध्ययन होना चाहिए",
        answers: [
            { text: "सामाजिक प्रगति", correct: false},
            { text: "सामाजिक तथ्य", correct: true},
            { text: "	एनोमी", correct: false},
            { text: "चेतना", correct: false},
        ] 
    },

    {
        question:"दुर्खीम के अनुसार धर्म का सबसे सरल एवं बुनियादी स्वरूप है",
        answers: [
            { text: "पवित्र", correct: false},
            { text: "जीववाद", correct: false},
            { text: "अपवित्र", correct: false},
            { text: "	गण चिन्ह वाद", correct: true},
        ] 
    },

    {
        question:"आत्महत्या वर्ष में प्रकाशित हुई थी",
        answers: [
            { text: "1897", correct: true},
            { text: "1987", correct: false},
            { text: "1798", correct: false},
            { text: "1879", correct: false},
        ] 
    },

    {
        question:"धार्मिक जीवन के प्राथमिक रूप किसके द्वारा लिखे गए हैं?",
        answers: [
            { text: "काल मार्क्स", correct: false},
            { text: "एमाइल दुर्खीम", correct: true},
            { text: "अगस्टे कॉम्टे", correct: false},
            { text: "मैक्स वेबर", correct: false},
        ] 
    },

    {
        question:"अपने कार्य 'द एलीमेंट्री फॉर्म्स ऑफ रिलिजियस लाइफ' में दुर्खीम ने धर्म के विकास को जिम्मेदार ठहराया है",
        answers: [
            { text: "एनोमी के विकास के लिए", correct: false},
            { text: "सामुदायिक जीवन के माध्यम से प्राप्त भावनात्मक सुरक्षा के लिए", correct: true},
            { text: "आत्महत्या की उच्च दर के लिए", correct: false},
            { text: "ऊपर के सभी", correct: false},
        ] 
    },

    {
        question:"समाजशास्त्रीय पद्धति के नियम किस वर्ष प्रकाशित हुए थे?",
        answers: [
            { text: "1895", correct: true},
            { text: "1795", correct: false},
            { text: "1869", correct: false},
            { text: "1879", correct: false},
        ] 
    },

    {
        question:"एमिल दुर्खीम का जन्म वर्ष में हुआ था",
        answers: [
            { text: "1868", correct: false},
            { text: "1857", correct: false},
            { text: "1856", correct: false},
            { text: "1858", correct: true},
        ] 
    },

    {
        question:"वर्ष में एमिल दुर्खीम की मृत्यु हो गई",
        answers: [
            { text: "1916", correct: false},
            { text: "1918", correct: false},
            { text: "1917", correct: true},
            { text: "1919", correct: false},
        ] 
    },

    {
        question:"एमिल दुर्खीम के अनुसार धर्म की केन्द्रीय विशेषता थी",
        answers: [
            { text: "पवित्र-अपवित्र द्वंद्व", correct: true},
            { text: "मौत के बाद जीवन", correct: false},
            { text: "अत्यधिक अंधविश्वासी", correct: false},
            { text: "सभी प्रकार के भेदभाव का उन्मूलन", correct: false},
        ] 
    },

    {
        question:"दुर्खीम द्वारा किसी समाज की सांप्रदायिक मान्यताओं, नैतिकता और दृष्टिकोण को इंगित करने के लिए इस शब्द का उपयोग किया गया था",
        answers: [
            { text: "सामूहिक नैतिकता", correct: false},
            { text: "सामूहिक चेतना", correct: false},
            { text: "सामूहिक व्यवहार", correct: false},
            { text: "सामूहिक विवेक", correct: true},
        ] 
    },

    {
        question:"किसने कहा कि समाज एक 'वास्तविकता सुई जेनरिस' है?",
        answers: [
            { text: "अगस्टे कॉम्टे", correct: false},
            { text: "हर्बर्ट स्पेंसर", correct: false},
            { text: "एमाइल दुर्खीम", correct: true},
            { text: "	मैक्स वेबर", correct: false},
        ] 
    },

    {
        question:"एमिल दुर्खीम के अनुसार, सोचने, महसूस करने और कार्य करने के सामूहिक तरीकों को कहा जाता है",
        answers: [
            { text: "	सामजिक एकता", correct: false},
            { text: "सामाजिक समन्वय", correct: false},
            { text: "सामाजिक आदर्श", correct: false},
            { text: "सामाजिक तथ्य", correct: true},
        ] 
    },

    {
        question:"एमिल दुर्खीम के अनुसार एनोमिक आत्महत्या तब होती है जब",
        answers: [
            { text: "व्यक्ति समाज के साथ बहुत अधिक एकीकृत हो जाता है", correct: false},
            { text: "सामाजिक एकता के अभाव के कारण व्यक्ति समाज से कटा हुआ महसूस करता है", correct: true},
            { text: "	व्यक्ति स्वयं को समाज से पूर्णतः अलग-थलग महसूस करता है", correct: false},
            { text: "एक व्यक्ति अत्यधिक सामाजिक विनियमन महसूस करता है जिसके परिणामस्वरूप दमनकारी स्थितियाँ उत्पन्न होती हैं", correct: false},
        ] 
    },

    {
        question:"इन्हें अत्यधिक सामाजिक एकीकरण के परिणामस्वरूप होने वाली आत्महत्या के रूप में जाना जाता है",
        answers: [
            { text: "अनोमिक आत्महत्या", correct: false},
            { text: "घातक आत्महत्या", correct: false},
            { text: "अहंकारपूर्ण आत्महत्या", correct: false},
            { text: "परोपकारी आत्महत्या", correct: true},
        ] 
    },

    {
        question:"___________ परोपकारी आत्महत्या के सामाजिक एकीकरण के विपरीत ध्रुव पर है",
        answers: [
            { text: "अहंकारपूर्ण आत्महत्या", correct: true},
            { text: "अनोमिक आत्महत्या", correct: false},
            { text: "घातक आत्महत्या", correct: false},
            { text: "ऊपर के सभी", correct: false},
        ] 
    },

    {
        question:"हर्बर्ट स्पेंसर द्वारा प्रतिपादित निम्नलिखित में से कौन सा सबसे आदिम समाज है?",
        answers: [
            { text: "सरल समाज", correct: true},
            { text: "	यौगिक समाज", correct: false},
            { text: "दोगुना मिश्रित समाज", correct: false},
            { text: "ट्रेबली कंपाउंड सोसायटी", correct: false},
        ] 
    },

    {
        question:"हर्बर्ट स्पेंसर के अनुसार, विकास आगे बढ़ता है",
        answers: [
            { text: "	सैन्य समाज से मिश्रित समाज", correct: false},
            { text: "औद्योगिक समाज से सैन्य समाज तक", correct: false},
            { text: "सैन्य समाज से औद्योगिक समाज तक", correct: true},
            { text: "मिश्रित समाज से सैन्य समाज तक", correct: false},
        ] 
    },

    {
        question:"निम्नलिखित में से कौन सी विशेषता हर्बर्ट स्पेंसर की 'औद्योगिक समाज' की समझ में फिट नहीं बैठती है?",
        answers: [
            { text: "व्यवसाय का लचीलापन", correct: false},
            { text: "स्वैच्छिक सहयोग", correct: false},
            { text: "राज्य का अस्तित्व व्यक्ति के लाभ के लिए है", correct: false},
            { text: "राज्य की केंद्रीकृत संरचना", correct: true},
        ] 
    },

    {
        question:"सामाजिक डार्विनवाद का सिद्धांत किसने प्रतिपादित किया?",
        answers: [
            { text: "हर्बर्ट स्पेंसर", correct: true},
            { text: "संत-साइमन", correct: false},
            { text: "अगस्टे कॉम्टे", correct: false},
            { text: "काल मार्क्स", correct: false},
        ] 
    },

    {
        question:"स्पेंसर ________ के अनुरूप समाज के विकास का अध्ययन करते हैं",
        answers: [
            { text: "जैविक जीव", correct: true},
            { text: "भौतिक विज्ञान", correct: false},
            { text: "बिग बैंग थ्योरी", correct: false},
            { text: "इनमे से कोई भी नहीं", correct: false},
        ] 
    },

    {
        question:"हर्बर्ट स्पेंसर द्वारा लिखित समाजशास्त्र के सिद्धांत में प्रकाशित किया गया था",
        answers: [
            { text: "चार खंड", correct: false},
            { text: "तीन खंड", correct: true},
            { text: "पांच खंड", correct: false},
            { text: "दो खंड", correct: false},
        ] 
    },

    {
        question:"आदिम समाज में व्यक्ति और समाज को जोड़ने वाली शक्ति माना जाता है",
        answers: [
            { text: "विवेक सामूहिक", correct: true},
            { text: "गण चिन्ह वाद", correct: false},
            { text: "सामाजिक तथ्य", correct: false},
            { text: "आत्मघाती", correct: false},
        ] 
    },

    {
        question:"	दुर्खीम ने आत्महत्या को ________ प्रकारों में विभाजित किया है",
        answers: [
            { text: "तीन", correct: false},
            { text: "चार", correct: true},
            { text: "पाँच", correct: false},
            { text: "दो", correct: false},
        ] 
    },

    {
        question:"सामाजिक नियमन की अधिकता के कारण होने वाली आत्महत्या के प्रकार को कहा जाता है",
        answers: [
            { text: "परोपकारी आत्महत्या", correct: false},
            { text: "अनोमिक आत्महत्या", correct: false},
            { text: "घातक आत्महत्या", correct: true},
            { text: "अहंकारपूर्ण आत्महत्या", correct: false},
        ] 
    },

    {
        question:"समाजशास्त्रीय प्रतिमान जो इस बात पर ध्यान केंद्रित करता है कि समाज का प्रत्येक भाग समग्र योगदान देने के लिए एक साथ कैसे कार्य करता है, कहलाता है",
        answers: [
            { text: "संरचनावाद", correct: false},
            { text: "संरचनात्मक-कार्यात्मकता", correct: true},
            { text: "संघर्ष सिद्धांत", correct: false},
            { text: "स्यंबोलीक इंटेरक्तिओनिस्म", correct: false},
        ] 
    },

    {
        question:"कार्ल मार्क्स का जन्म इसी वर्ष हुआ था",
        answers: [
            { text: "1818", correct: true},
            { text: "1819", correct: false},
            { text: "1918", correct: false},
            { text: "1817", correct: false},
        ] 
    },

    {
        question:"कम्युनिस्ट घोषणापत्र वर्ष में लिखा गया था",
        answers: [
            { text: "1848", correct: true},
            { text: "1838", correct: false},
            { text: "1845", correct: false},
            { text: "1854", correct: false},
        ] 
    },

    {
        question:"पूंजीवाद में पूंजी का स्वामी और नियंत्रण कौन करता है?",
        answers: [
            { text: "गुलाम", correct: false},
            { text: "सर्वहारा", correct: false},
            { text: "पूंजीपति", correct: true},
            { text: "कृषिदास", correct: false},
        ] 
    },

    {
        question:"मार्क्स भूमि, जानवर, औजार, मशीनरी आदि को इसके उदाहरण बताते हैं",
        answers: [
            { text: "उत्पादन का तरीका", correct: false},
            { text: "उत्पादन की शक्तियाँ", correct: false},
            { text: "उत्पादन के साधन", correct: true},
            { text: "उत्पादन के संबंध", correct: false},
        ] 
    },

    {
        question:"कार्ल मार्क्स ने शासक वर्ग को किस शब्द से सम्बोधित किया?",
        answers: [
            { text: "सर्वहारा", correct: false},
            { text: "पूंजीपति वर्ग", correct: true},
            { text: "जमींदारों", correct: false},
            { text: "एकाधिकारी", correct: false},
        ] 
    },

    {
        question:"कार्ल मार्क्स के अनुसार, वर्तमान राज्य होगा",
        answers: [
            { text: "लंबे समय तक जारी रखें", correct: false},
            { text: "मुरझा देना", correct: true},
            { text: "समय बीतने के साथ सामान वितरित करें", correct: false},
            { text: "धीरे-धीरे श्रमिकों को लाभ पहुंचाएं", correct: false},
        ] 
    },

    {
        question:"मार्क्सवादी सिद्धांत के बारे में निम्नलिखित में से कौन सा सत्य नहीं है?",
        answers: [
            { text: "	पूंजी चोरी है", correct: false},
            { text: "राज्य ख़त्म हो जायेगा", correct: false},
            { text: "राज्य सभी के हितों को बढ़ावा देता है", correct: true},
            { text: "राज्य अमीरों का पक्ष लेता है, गरीबों का नहीं", correct: false},
        ] 
    },

    {
        question:"निजी संपत्ति के उद्भव द्वारा विशेषता उत्पादन का तरीका_______ है",
        answers: [
            { text: "उत्पादन की प्राचीन पद्धति", correct: true},
            { text: "पूंजीवादी उत्पादन पद्धति", correct: false},
            { text: "	उत्पादन की सामंती पद्धति", correct: false},
            { text: "उत्पादन की एशियाई पद्धति", correct: false},
        ] 
    },

    {
        question:"पूंजीवादी समाज में वर्ग का विभाजन आधारित है",
        answers: [
            { text: "संपत्ति का स्वामित्व", correct: true},
            { text: "	रिश्तों में बदलाव", correct: false},
            { text: "	रिश्तों में बदलाव", correct: false},
            { text: "अधिशेष मूल्य", correct: false},
        ] 
    },

    {
        question:"सामंती समाज में सामंत शोषण करते हैं",
        answers: [
            { text: "गुलाम", correct: false},
            { text: "सर्वहारा", correct: false},
            { text: "पूंजीपति", correct: false},
            { text: "कृषिदास", correct: true},
        ] 
    },

    {
        question:"कार्ल मार्क्स द्वंद्वात्मक पद्धति से प्रेरित थे",
        answers: [
            { text: "सेंट साइमन", correct: false},
            { text: "हेगेल", correct: true},
            { text: "एंजेल", correct: false},
            { text: "वेबर", correct: false},
        ] 
    },

    {
        question:"मार्क्सवादी सिद्धांत में श्रमिक वर्ग को कहा जाता है",
        answers: [
            { text: "सर्वहारा वर्ग", correct: true},
            { text: "पूंजीपति", correct: false},
            { text: "	पूंजीपतियों", correct: false},
            { text: "वामपंथियों", correct: false},
        ] 
    },

    {
        question:"मार्क्सवाद का सैद्धांतिक आधार कहा जाता है",
        answers: [
            { text: "	द्वंद्वात्मक भौतिकवाद", correct: true},
            { text: "	ऐतिहासिक भौतिकवाद", correct: false},
            { text: "	वर्ग संघर्ष", correct: false},
            { text: "	वर्ग चेतना", correct: false},
        ] 
    },

    {
        question:"उत्पादन की प्राचीन पद्धति की प्रणाली में, 'उत्पीड़ित' थे",
        answers: [
            { text: "गुलाम", correct: true},
            { text: "जमींदारों", correct: false},
            { text: "किसानों", correct: false},
            { text: "किरायेदारों", correct: false},
        ] 
    },

    {
        question:"जब कोई व्यक्ति मानव सामाजिक समुदाय से अलग हो जाता है तो उसे कहा जाता है",
        answers: [
            { text: "उत्पाद गतिविधि से अलगाव", correct: false},
            { text: "उत्पाद से अलगाव", correct: false},
            { text: "प्रजाति से अलगाव", correct: false},
            { text: "साथी मनुष्यों से अलगाव.", correct: true},
        ] 
    },

    {
        question:"कार्ल मार्क्स के अनुसार, जब श्रमिक अपने द्वारा उत्पादित वस्तुओं से विमुख हो जाते हैं, तो इसे कहा जाता है",
        answers: [
            { text: "उत्पाद गतिविधि से अलगाव", correct: false},
            { text: "उत्पाद से अलगाव", correct: true},
            { text: "प्रजाति से अलगाव", correct: false},
            { text: "साथियों से अलगाव", correct: false},
        ] 
    },

    {
        question:"	कार्ल मार्क्स का मानना ​​था कि पूंजीवाद के विनाश से पूंजीवाद का निर्माण होगा",
        answers: [
            { text: "सामंतवाद", correct: false},
            { text: "कृषि व्यवस्था", correct: false},
            { text: "समाजवाद", correct: true},
            { text: "धर्मनिरपेक्षता", correct: false},
        ] 
    },

    {
        question:"कार्ल मार्क्स के अनुसार वर्ग संघर्ष के उद्भव के साथ होता है",
        answers: [
            { text: "प्रतियोगिता", correct: false},
            { text: "सहयोग", correct: false},
            { text: "विभागीकरण", correct: false},
            { text: "वर्ग चेतना", correct: true},
        ] 
    },

    {
        question:"निम्नलिखित में से कौन पूंजीवादी समाजों में अलगाव का एक पहलू नहीं है?",
        answers: [
            { text: "उत्पाद गतिविधि से अलगाव", correct: false},
            { text: "उत्पादों से अलगाव", correct: false},
            { text: "प्रजातियों से अलगाव", correct: false},
            { text: "मजदूरी से अलगाव", correct: true},
        ] 
    },

    {
        question:"कार्ल मार्क्स के अनुसार शोषण अधिशेष मूल्य का रूप ले लेता है",
        answers: [
            { text: "सामंतवादी समाज", correct: false},
            { text: "पूंजीवादी समाज", correct: true},
            { text: "	प्राचीन समाज", correct: false},
            { text: "आदिम-साम्यवादी समाज", correct: false},
        ] 
    },





];


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    });
} 

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct ==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "start quiz again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz(); 