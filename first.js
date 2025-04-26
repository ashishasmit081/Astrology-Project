const zodiacSigns = ["Aries","Taurus","Gemini","Cancer","Leo","Virgo","Libra","Scorpio","Sagittarius",
                    "Capricorn","Aquarius","Pisces"];

// faltu me taarif krne wale compliments array [size: 31]
const compliments = [
    "You have an incredible sense of intuition.",
    "Your energy lights up every room you enter.",
    "You have a heart full of gold.",
    "Your creativity knows no bounds.",
    "You radiate positivity and warmth.",
    "You are a natural-born leader.",
    "Your dreams are valid and powerful.",
    "You have a magnetic personality.",
    "Your kindness is your superpower.",
    "You are deeply admired for your resilience.",
    "You inspire those around you effortlessly.",
    "Your smile is contagious and uplifting.",
    "You are brave, bold, and brilliant.",
    "You possess a mind full of beautiful ideas.",
    "You bring out the best in people.",
    "Your determination moves mountains.",
    "You are a shining example of compassion.",
    "You make the world a better place.",
    "You are a beacon of hope and happiness.",
    "Your strength is truly inspiring.",
    "You have a brilliant and beautiful mind.",
    "Your passion fuels greatness.",
    "You are a masterpiece in progress.",
    "Your laughter is pure magic.",
    "You have a rare and beautiful soul.",
    "You are a ray of sunshine on cloudy days.",
    "Your confidence is empowering.",
    "You have the power to achieve anything.",
    "Your heart understands others deeply.",
    "You are a treasure to everyone who knows you.",
    "Your presence is a gift to the world."
    ];

// bewakoof banane wale messages jo users ko chipkane hote hain wala array [size: 20]
const astrologyMessages = [
    "You often carry burdens that were never yours to hold.",
    "You are destined to rise from the ashes stronger than ever.",
    "Not everyone around you celebrates your victories — protect your energy.",
    "Your soul has walked through fire to gain its wisdom.",
    "You give endlessly, yet not everyone has pure intentions towards you.",
    "Your journey is not meant to be easy; it is meant to be legendary.",
    "Sometimes the universe delays your blessings to test your patience.",
    "You are not responsible for healing those who refuse to heal themselves.",
    "Your intuition has saved you from silent betrayals more than once.",
    "Your light irritates those still trapped in darkness.",
    "You are often misunderstood because your spirit speaks a language few understand.",
    "You have karmic ties that you are slowly breaking free from.",
    "The ones you help the most often forget you first — stay graceful anyway.",
    "There are silent battles you've won that no one will ever know about.",
    "Sometimes your biggest challenge is learning when to walk away.",
    "You attract both blessings and burdens — know which is which.",
    "Your kindness is a weapon and a wound — choose wisely whom you arm.",
    "The universe removes people from your path to protect you from unseen harm.",
    "Your greatest transformations often come from your deepest pains.",
    "You are not just surviving — you are preparing for a destiny bigger than you imagine."
];

// jhuti advice jisse bla tal jaye user ke upar se [size: 30]
const goodKarmaRecommendations = [
    "Feed a stray animal today.",
    "Donate food to a temple or shelter.",
    "Light a diya (lamp) in your home in the evening.",
    "Offer water to a Peepal tree.",
    "Help someone selflessly without expecting anything in return.",
    "Feed birds with grains in the morning.",
    "Chant a mantra that resonates with you.",
    "Give sweets to children or the needy.",
    "Water a plant and nurture it daily.",
    "Offer prayers to the Sun at sunrise.",
    "Smile at strangers and spread positivity.",
    "Plant a tree for future generations.",
    "Donate old clothes that are in good condition.",
    "Respect elders and seek their blessings.",
    "Meditate for at least 10 minutes in silence.",
    "Offer milk to Lord Shiva on a Monday.",
    "Help a student by sharing knowledge or books.",
    "Write down five things you are grateful for.",
    "Offer bananas to monkeys if possible.",
    "Donate stationery to underprivileged children.",
    "Recite Hanuman Chalisa for protection.",
    "Visit a temple or holy place with pure intention.",
    "Cook and share a meal with someone needy.",
    "Feed cows with jaggery and wheat flour balls.",
    "Help clean a public place or community area.",
    "Offer black sesame seeds in flowing water.",
    "Give respect and kindness to service workers.",
    "Do charity anonymously without seeking attention.",
    "Share a positive story or compliment someone genuinely.",
    "Spend time with your parents or grandparents today."
  ];

//zhuuti tasalli ki result aacha hoga, shaadi ho jayegi, blah blah [size: 20]
const futurePredictions = [
    "Excellent academic results are aligning in your favor if you have recently given an exam. — stay confident.",
    "A rewarding job opportunity is on the horizon if you are looking for a job — keep searching.",
    "Your dedication to studies will soon bring you delightful news.",
    "The universe is aligning to bless you with the career you deserve.",
    "If you are seeking a life partner, a caring soul is about to cross your path.",
    "Good news related to your career will arrive unexpectedly.",
    "Your knowledge and patience are about to be recognized.",
    "A disciplined and loving partner may soon enter your life.",
    "The stars favor your ambitions — continue moving forward.",
    "If you’ve been waiting for marriage, the timing is turning auspicious.",
    "Trust that your soulmate is being prepared for you as you read this.",
    "Your career is stepping into a phase of rapid growth and stability.",
    "A beautiful new beginning in your personal life is approaching.",
    "Someone with a pure heart and strong values is destined to meet you.",
    "A breakthrough moment in your career is closer than you think.",
    "If you are a student, new academic achievements will make you and your loved ones proud.",
    "If marriage is on your mind, positive talks may begin soon.",
    "Opportunities in work and love are both opening for you at once.",
    "Success is finding its way to you — trust the process.",
    "The right time for personal and professional blossoming is now."
  ];
  
//REAL LOGIC OPERATION STARTS FROM HERE

const form = document.querySelector('form');
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    //picking the value entered in all 4 fields
    const name = document.querySelector('#name').value;
    const surname = document.querySelector('#surname').value;
    const date = Number(document.querySelector('#date').value); //converted to number
    const month = Number(document.querySelector('#month').value);
    const year = Number(document.querySelector('#year').value);

    const result = document.getElementById('result');
    const first_message  = `Hello ${name} ${surname}.`

    let sign = "";
    //LOGIC FOR FINDING ZODIAC SIGN IS PRESENT 
    {
    if ((month === 3 && date >= 21) || (month === 4 && date <= 19)) {
    sign = "Aries";
    } else if ((month === 4 && date >= 20) || (month === 5 && date <= 20)) {
    sign = "Taurus";
    } else if ((month === 5 && date >= 21) || (month === 6 && date <= 20)) {
    sign = "Gemini";
    } else if ((month === 6 && date >= 21) || (month === 7 && date <= 22)) {
    sign = "Cancer";
    } else if ((month === 7 && date >= 23) || (month === 8 && date <= 22)) {
    sign = "Leo";
    } else if ((month === 8 && date >= 23) || (month === 9 && date <= 22)) {
    sign = "Virgo";
    } else if ((month === 9 && date >= 23) || (month === 10 && date <= 22)) {
    sign = "Libra";
    } else if ((month === 10 && date >= 23) || (month === 11 && date <= 21)) {
    sign = "Scorpio";
    } else if ((month === 11 && date >= 22) || (month === 12 && date <= 21)) {
    sign = "Sagittarius";
    } else if ((month === 12 && date >= 22) || (month === 1 && date <= 19)) {
    sign = "Capricorn";
    } else if ((month === 1 && date >= 20) || (month === 2 && date <= 18)) {
    sign = "Aquarius";
    } else if ((month === 2 && date >= 19) || (month === 3 && date <= 20)) {
    sign = "Pisces";
    }
    }
    const second_message = `Your Zodiac sign is ${sign}.`;
    //random compliment date ke hissab se (idx 0 se start to for date = 1, 0th index)
    const third_message = compliments[date-1];
    const fourth_message = astrologyMessages[Math.floor(Math.random() * astrologyMessages.length)];
    //as per size_of_name * size_of_surname * year % (size of astrologyMessages)
    const fifth_message = goodKarmaRecommendations[(name.length*surname.length*year)%30];
    //logic: date * month * year % 20
    const sixth_message = futurePredictions[(date * month * year ) % 20];

    // Show the final result
    result.innerHTML = `
        <h1>${first_message}</h1><br>
        ${second_message}<br><br>
        🌟 ${third_message}<br>
        🔮 ${fourth_message}<br>
        🧘‍♂️ ${fifth_message}<br>
        ✨ ${sixth_message}
    `;
    
})