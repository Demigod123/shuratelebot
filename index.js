var TelegramBot = require('node-telegram-bot-api');
var token = '431023194:AAEXy8ZESAXLhoJH4f-xebzxA5o66jD-Fzk';
var opt = {polling: true};
var bot = new TelegramBot(token, opt);
bot.on('message', function(msg) {
  console.log(msg);
  const id = msg.chat.id,
        _text = msg.text,
        text = _text.toLowerCase();

  if (text.indexOf('/start') !==  -1) {
     bot.sendMessage(id, 'Привет пацаны я бот вместо Шуры Зильберфайна!');
  }

  if (text.indexOf('умеешь') !==  -1) {
    bot.sendMessage(id, 'Все покажу но не сразу');
  }
  if ((text.indexOf('когда') !==  -1) && (text.indexOf('будет') !==  -1)) {
    bot.sendMessage(id, 'Все будет но не сразу');
  }
    if ((text.indexOf('выпить') !==  -1) || (text.indexOf('бухнуть') !==  -1) || (text.indexOf('бахнуть') !==  -1)
  || (text.indexOf('бахнем') !==  -1) || (text.indexOf('бухнем') !==  -1)) {
    var ans1 = ['Всегда' , 'Конечно', 'Ну а как же'];
    var x = Math.floor(Math.random() * 4);
    bot.sendMessage(id, ans1[x]);
  }

});
