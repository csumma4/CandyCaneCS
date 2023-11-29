import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [userInput, setUserInput] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [chatHistory, setChatHistory] = useState([]);

  const chatbotResponses = {
    greeting: {
      English: "Chatbot: Hello! How can I help you?",
      Spanish: "Chatbot: ¡Hola! ¿En qué puedo ayudarte?",
      Arabic: "Chatbot: السلام عليكم! كيف يمكنني مساعدتك؟",
      Hebrew: "Chatbot: שלום! איך אני יכול לעזור לך?",
      German: "Chatbot: Hallo! Wie kann ich Ihnen helfen?",
      Korean: "Chatbot: 안녕하세요! 어떻게 도와 드릴까요?",
      Bengali: "Chatbot: হ্যালো! কিভাবে আমি আপনাকে সাহায্য করতে পারি?",
      Vietnamese: "Chatbot: Xin chào! Làm thế nào tôi có thể giúp bạn?",
      MandarinChinese: "Chatbot: 你好！我能帮你什么忙？",
      Telugu: "Chatbot: హలో! నేను మీకు ఎలా సహాయం చేయగలను?",
      Portuguese: "Chatbot: Olá! Como posso ajudar você?",
      Japanese: "Chatbot: こんにちは！どのようにお手伝いできますか？",
      Chinese: "Chatbot: 你好！我能帮你什么忙？",
      Turkish: "Chatbot: Merhaba! Size nasıl yardımcı olabilirim?",
      Dutch: "Chatbot: Hallo! Hoe kan ik u helpen?",
      Tamil: "Chatbot: வணக்கம்! நான் உங்களுக்கு எப்படி உதவ முடியும்?",
      Marathi: "Chatbot: नमस्कार! मला तुमची कशी मदत करू शकतो?",
      Russian: "Chatbot: Привет! Как я могу вам помочь?",
      Italian: "Chatbot: Ciao! Come posso aiutarti?",
      Hindi: "Chatbot: नमस्ते! मैं आपकी कैसे सहायता कर सकता हूँ?",
      Indonesian: "Chatbot: Halo! Bagaimana saya bisa membantu Anda?",
      Urdu: "Chatbot: ہیلو! میں آپ کی کس طرح مدد کر سکتا ہوں؟",
      Malay: "Chatbot: Hello! Bagaimana saya boleh membantu anda?",
      Amharic: "Chatbot: ሰላም! እባኮትን እንደ ምን እንመለከታለን?",
      // Add responses for other languages
      // ...
    },
    thanks: {
      English: "Chatbot: You're welcome!",
      Spanish: "Chatbot: De nada",
      Arabic: "Chatbot: على الرحب والسعة",
      Hebrew: "Chatbot: בבקשה",
      German: "Chatbot: Gern geschehen!",
      Korean: "Chatbot: 천만에요!",
      Bengali: "Chatbot: অভিনন্দন!",
      Vietnamese: "Chatbot: Không có gì!",
      MandarinChinese: "Chatbot: 不客气",
      Telugu: "Chatbot: దయచేసి",
      Portuguese: "Chatbot: De nada",
      Japanese: "Chatbot: どういたしまして",
      Chinese: "Chatbot: 不客气",
      Turkish: "Chatbot: Rica ederim!",
      Dutch: "Chatbot: Graag gedaan!",
      Tamil: "Chatbot: வாழ்க நண்பர்!",
      Marathi: "Chatbot: स्वागत!",
      Russian: "Chatbot: Пожалуйста",
      Italian: "Chatbot: Prego!",
      Hindi: "Chatbot: स्वागत है!",
      Indonesian: "Chatbot: Sama-sama",
      Urdu: "Chatbot: خوش آمدید",
      Malay: "Chatbot: Sama-sama",
      Amharic: "Chatbot: እንደአንድ ነው",
      // Add responses for other languages
      // ...
    },
    weather: {
      English: "Chatbot: The weather is great today!",
      Spanish: "Chatbot: El clima está genial hoy",
      Arabic: "Chatbot: الطقس رائع اليوم!",
      Hebrew: "Chatbot: המזג אוויר נהדר היום!",
      German: "Chatbot: Das Wetter ist heute großartig!",
      Korean: "Chatbot: 오늘 날씨가 좋아요!",
      Bengali: "Chatbot: আজ আবহাওয়া ভাল!",
      Vietnamese: "Chatbot: Thời tiết hôm nay tuyệt vời!",
      MandarinChinese: "Chatbot: 今天天气很好!",
      Telugu: "Chatbot: ఈ రోజు ఆకాశవాణి అంగడలా ఉంది!",
      Portuguese: "Chatbot: O clima está ótimo hoje!",
      Japanese: "Chatbot: 今日の天気は素晴らしいです!",
      Chinese: "Chatbot: 今天天气很好!",
      Turkish: "Chatbot: Bugün hava harika!",
      Dutch: "Chatbot: Het weer is vandaag geweldig!",
      Tamil: "Chatbot: இன்று எனக்கு எப்படி இனிப்பு என்று தெரியுமா?",
      Marathi: "Chatbot: आज हवामान सुंदर आहे!",
      Russian: "Chatbot: Сегодня прекрасная погода!",
      Italian: "Chatbot: Il tempo è fantastico oggi!",
      Hindi: "Chatbot: आज मौसम शानदार है!",
      Indonesian: "Chatbot: Cuaca hari ini bagus!",
      Urdu: "Chatbot: آج موسم بہت خوبصورت ہے!",
      Malay: "Chatbot: Cuaca hari ini sangat baik!",
      Amharic: "Chatbot: ዛሬ አሁኑን አዲስ ነገር ላይ ይገናኛል!",
      // Add responses for other languages
      // ...
    },
    movies: {
      English: "Chatbot: I recommend watching 'Interstellar'.",
      Spanish: "Chatbot: Te recomiendo ver 'Interstellar'.",
      Arabic: "Chatbot: أنصح بمشاهدة 'Interstellar'.",
      Hebrew: "Chatbot: אני ממליץ לצפות ב-'Interstellar'.",
      German: "Chatbot: Ich empfehle 'Interstellar' anzuschauen.",
      Korean: "Chatbot: '인터스텔라'를 시청하는 것을 추천합니다.",
      Bengali: "Chatbot: 'Interstellar' দেখার জন্য আমি শীর্ষ করছি।",
      Vietnamese: "Chatbot: Tôi khuyên bạn nên xem 'Interstellar'.",
      MandarinChinese: "Chatbot: 我建议你观看'Interstellar'。",
      Telugu: "Chatbot: 'Interstellar' చూడడానికి నా సూజిపోస్తుంది.",
      Portuguese: "Chatbot: Eu recomendo assistir 'Interstellar'.",
      Japanese: "Chatbot: 'インターステラー'を観ることをお勧めします。",
      Chinese: "Chatbot: 我建议你观看'Interstellar'。",
      Turkish: "Chatbot: 'Interstellar' izlemenizi öneririm.",
      Dutch: "Chatbot: Ik raad aan om 'Interstellar' te kijken.",
      Tamil: "Chatbot: 'Interstellar' பார்க்க எனக்கு பரிந்துரைக்கின்றேன்.",
      Marathi: "Chatbot: 'Interstellar' पाहायचं असं मला सुचतं.",
      Russian: "Chatbot: Я рекомендую посмотреть 'Interstellar'.",
      Italian: "Chatbot: Ti consiglio di guardare 'Interstellar'.",
      Hindi: "Chatbot: मैं 'Interstellar' देखने की सिफारिश करता हूँ।",
      Indonesian: "Chatbot: Saya menyarankan untuk menonton 'Interstellar'.",
      Urdu: "Chatbot: میں 'Interstellar' دیکھنے کا تجویز کرتا ہوں۔",
      Malay: "Chatbot: Saya mencadangkan untuk menonton 'Interstellar'.",
      Amharic: "Chatbot: እኔ 'Interstellar' እንደምን አደርጋለን።",
      // Add responses for other languages
      // ...
    },
    songs: {
      English: "Chatbot: How about listening to 'Bohemian Rhapsody'?",
      Spanish: "Chatbot: ¿Qué tal si escuchas 'Bohemian Rhapsody'?",
      Arabic: "Chatbot: ماذا عن الاستماع إلى 'Bohemian Rhapsody'؟",
      Hebrew: "Chatbot: מה דעתך להאזין ל-'Bohemian Rhapsody'?",
      German: "Chatbot: Wie wäre es mit dem Hören von 'Bohemian Rhapsody'?",
      Korean: "Chatbot: 'Bohemian Rhapsody' 듣는 건 어떨까요?",
      Bengali: "Chatbot: 'Bohemian Rhapsody' শোনতে কেমন হবে?",
      Vietnamese: "Chatbot: Nghe 'Bohemian Rhapsody' thì sao?",
      MandarinChinese: "Chatbot: 试试听 'Bohemian Rhapsody' 怎么样？",
      Telugu: "Chatbot: 'Bohemian Rhapsody' వినిపించాలా?",
      Portuguese: "Chatbot: Que tal ouvir 'Bohemian Rhapsody'?",
      Japanese: "Chatbot: 'Bohemian Rhapsody' を聴くのはどうですか？",
      Chinese: "Chatbot: 试试听 'Bohemian Rhapsody' 怎么样？",
      Turkish: "Chatbot: 'Bohemian Rhapsody' dinlemeye ne dersin?",
      Dutch: "Chatbot: Wat dacht je van het luisteren naar 'Bohemian Rhapsody'?",
      Tamil: "Chatbot: 'Bohemian Rhapsody' கேட்க எப்படி?",
      Marathi: "Chatbot: 'Bohemian Rhapsody' ऐकण्यास कसं आहे?",
      Russian: "Chatbot: Как насчет прослушивания 'Bohemian Rhapsody'?",
      Italian: "Chatbot: Che ne dici di ascoltare 'Bohemian Rhapsody'?",
      Hindi: "Chatbot: 'Bohemian Rhapsody' सुनने का क्या ख्याल है?",
      Indonesian: "Chatbot: Bagaimana kalau mendengarkan 'Bohemian Rhapsody'?",
      Urdu: "Chatbot: 'Bohemian Rhapsody' سننے کا کیا خیال ہے؟",
      Malay: "Chatbot: Bagaimana kalau mendengar 'Bohemian Rhapsody'?",
      Amharic: "Chatbot: 'Bohemian Rhapsody' አስታውቀኝ፣ ምን እንደምን ተስፋ አደርግ?",
      // Add responses for other languages
      // ...
    },
    food: {
      English: "Chatbot: Do you want me to look up restaurants near you?",
      Spanish: "Chatbot: ¿Quieres que busque restaurantes cerca de ti?",
      Arabic: "Chatbot: هل ترغب في البحث عن مطاعم بالقرب منك؟",
      Hebrew: "Chatbot: האם ברצונך שאחפש לך מסעדות בקרבת מקום?",
      German: "Chatbot: Möchtest du, dass ich Restaurants in deiner Nähe suche?",
      Korean: "Chatbot: 근처의 음식점을 찾아볼까요?",
      Bengali: "Chatbot: আপনি কি আপনার কাছে রেস্তোরাঁ খুঁজতে চান?",
      Vietnamese: "Chatbot: Bạn có muốn tôi tìm nhà hàng gần bạn không?",
      MandarinChinese: "Chatbot: 你想让我查找附近的餐馆吗？",
      Telugu: "Chatbot: మీరు మీ ఆసనం సమీపంలో ఉండిన అడవిలో చేరాలా?",
      Portuguese: "Chatbot: Quer que eu procure restaurantes perto de você?",
      Japanese: "Chatbot: あなたの近くのレストランを検索しますか？",
      Chinese: "Chatbot: 你想让我查找附近的餐馆吗？",
      Turkish: "Chatbot: Yakınındaki restoranları aramamı ister misin?",
      Dutch: "Chatbot: Wil je dat ik restaurants bij jou in de buurt zoek?",
      Tamil: "Chatbot: உங்களுக்கு எங்கும் சுற்றுலா உணவு கடைகளை தேடுவதாக?",
      Marathi: "Chatbot: मला तुमच्या जवळ एकंत्र शोधायचं का?",
      Russian: "Chatbot: Хотите, чтобы я нашел рестораны поблизости?",
      Italian: "Chatbot: Vuoi che io cerchi ristoranti vicino a te?",
      Hindi: "Chatbot: क्या आप चाहते हैं कि मैं आपके नजदीकी रेस्तरां की खोज करूं?",
      Indonesian: "Chatbot: Apakah kamu ingin aku mencari restoran di dekatmu?",
      Urdu: "Chatbot: کیا آپ چاہتے ہیں کہ میں آپ کے قریبی ریستوراں تلاش کروں؟",
      Malay: "Chatbot: Mahukah saya mencari restoran berdekatan dengan anda?",
      Amharic: "Chatbot: እስኪ ምን እንመነጫለን?",
      // Add responses for other languages
      // ...
    },
    default: {
      English: "Chatbot: I'm not sure how to respond to that.",
      Spanish: "Chatbot: No estoy seguro de cómo responder a eso.",
      Arabic: "Chatbot: لست متأكدًا من كيفية الرد على ذلك.",
      Hebrew: "Chatbot: אני לא בטוח איך להגיב לזה.",
      German: "Chatbot: Ich bin mir nicht sicher, wie ich darauf reagieren soll.",
      Korean: "Chatbot: 어떻게 대답해야 할지 모르겠어.",
      Bengali: "Chatbot: এর উত্তর দেওয়ার পথে আমি নিশ্চিত নই।",
      Vietnamese: "Chatbot: Tôi không chắc làm thế nào để đáp lại điều đó.",
      MandarinChinese: "Chatbot: 我不确定该如何回应。",
      Telugu: "Chatbot: అది ఎలా స్పష్టంగా ప్రతిస్పందించాలి అనే నా అభిప్రాయం లేదు.",
      Portuguese: "Chatbot: Não tenho certeza de como responder a isso.",
      Japanese: "Chatbot: それにどう答えるかわかりません。",
      Chinese: "Chatbot: 我不确定该如何回应。",
      Turkish: "Chatbot: Buna nasıl cevap vereceğimi bilmiyorum.",
      Dutch: "Chatbot: Ik weet niet zeker hoe ik daarop moet reageren.",
      Tamil: "Chatbot: அதிகாரத்தில் எப்படி பதிலளிக்க வேண்டும் என்று நான் அநிருப்தமாக உள்ளேன்.",
      Marathi: "Chatbot: मला हे कसे प्रतिसाद द्यायचं ते मला कळत नाही.",
      Russian: "Chatbot: Я не уверен, как на это ответить.",
      Italian: "Chatbot: Non sono sicuro di come rispondere a questo.",
      Hindi: "Chatbot: मुझे इसका कैसे जवाब देना चाहिए यह मुझे नहीं पता।",
      Indonesian: "Chatbot: Saya tidak yakin bagaimana cara merespons itu.",
      Urdu: "Chatbot: مجھے اس پر کیسے جواب دینا چاہئے یہ مجھے نہیں معلوم۔",
      Malay: "Chatbot: Saya tidak pasti bagaimana untuk memberikan respons kepada itu.",
      Amharic: "Chatbot: እኔ ይህን አልተቀበልም እናመሰግናለን ለማለት አልፈልግም።",
      // Add responses for other languages
      // ...
    },
  };

  const handleUserInput = () => {
    if (userInput.trim() === '') {
      // Do not process empty input
      return;
    }

    // Update chat history with user input
    const updatedHistory = [...chatHistory, { user: true, message: userInput }];

    // Get chatbot response based on user input and selected language
    const responseKey = getChatbotResponseKey(userInput);
    const botResponse = chatbotResponses[responseKey][selectedLanguage] || chatbotResponses.default[selectedLanguage];

    // Update chat history with chatbot response
    setChatHistory([...updatedHistory, { user: false, message: botResponse }]);

    // Clear the user input field
    setUserInput('');
  };

  const getChatbotResponseKey = (userInput) => {
    // Simple logic to determine chatbot response based on user input
    if (userInput.toLowerCase().includes('hello') || userInput.toLowerCase().includes('hi')) {
      return 'greeting';
    } else if (userInput.toLowerCase().includes('thanks') || userInput.toLowerCase().includes('thank you')) {
      return 'thanks';
    } else {
      return 'default';
    }
  };

  // Simulate a chatbot greeting when the component mounts
  useEffect(() => {
    setChatHistory([{ user: false, message: chatbotResponses.greeting[selectedLanguage] }]);
  }, [selectedLanguage]); // Re-run the effect when the selected language changes

  return (
    <div className="chat-container">
      <div className="chat-history">
        {chatHistory.map((entry, index) => (
          <div key={index} className={entry.user ? 'user-message' : 'chatbot-message'}>
            {entry.message}
          </div>
        ))}
      </div>
      <div className="input-container">
        <select
          value={selectedLanguage}
          onChange={(e) => setSelectedLanguage(e.target.value)}
        >
          <option value="English">English</option>
          <option value="Spanish">Spanish</option>
          <option value="Arabic">Arabic</option>
          <option value="Hebrew">Hebrew</option>
          <option value="German">German</option>
          <option value="Korean">Korean</option>
          <option value="Bengali">Bengali</option>
          <option value="Vietnamese">Vietnamese</option>
          <option value="MandarinChinese">Mandarin Chinese</option>
          <option value="Telugu">Telugu</option>
          <option value="Portuguese">Portuguese</option>
          <option value="Japanese">Japanese</option>
          <option value="Chinese">Chinese</option>
          <option value="Turkish">Turkish</option>
          <option value="Dutch">Dutch</option>
          <option value="Tamil">Tamil</option>
          <option value="Marathi">Marathi</option>
          <option value="Russian">Russian</option>
          <option value="Italian">Italian</option>
          <option value="Hindi">Hindi</option>
          <option value="Indonesian">Indonesian</option>
          <option value="Urdu">Urdu</option>
          <option value="Malay">Malay</option>
          <option value="Amharic">Amharic</option>
          {/* Add options for other languages */}
          {/* ... */}
        </select>
        <input
          type="text"
          placeholder="Type your message..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button onClick={handleUserInput}>Send</button>
      </div>
    </div>
  );
}

export default App;
