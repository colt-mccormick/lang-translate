//main.js

function writeToDom(string, id) {
  document.getElementById(id).innerHTML = "<h3>Translation: " + string + "</h3>";
}

var engWords =
  ["happy",
    "birthday",
    "best",
    "wish",
    "good",
    "luck",
    "this",
    "year",
    "health",
    "life",
    "happiness",
    "i",
    "you",
    "in",
    "and",
    "lots",
    "fun",
    "joy",
    "love",
    "enjoy"
  ]

var russianWords =
  {
    happy: "счастливого",
    birthday: "дня рождения",
    best: "хорошего",
    wish: "желаю",
    good: "хорошего",
    luck: "везения",
    this: "в этом",
    year: "год",
    health: "здоровья",
    life: "жизни",
    happiness: "счастья",
    i: "Я",
    you: "тебе",
    in: "в",
    and: "и",
    lots: "много",
    fun: "весело",
    joy: "радость",
    love: "люблю",
    enjoy: "наслаждаться"
  }

var amharicWords = {
  happy: "መልካም",
  birthday: "ልደት", 
  best: "ምርጥ",
  wish: "ምኞት",
  good: "ጥሩ",
  luck: "ዕድል",
  this: "በዚህ" ,
  year: "ዓመት",
  health: "ጤና",
  life:"ሕይወት",
  happiness:"ደስታ",
  i: "እኔ",
  in: "ውስጥ",
  you: "ለአንተ",
  and: "እና",
  lots:"ብዙ",
  fun: "አዝናኝ",
  love: "ፍቅር",
  enjoy: "ይደሰቱ"
}

var danishWords = {
  happy: "lykkelig",
  birthday: "fødselsdag",
  best: "bedst",
  wish: "ønske",
  good: "godt",
  luck: "held",
  this: "det her",
  year: "år ",
  health: "sundhed",
  life: "liv",
  happiness: "lykke",
  i: "jeg",
  you: "du",
  in: "i",
  and: "og",
  lots:"masser",
  fun:"sjovt",
  love: "elsker",
  enjoy: "god fornøjelse"
  }

