const { Telegraf } = require("telegraf")
require("dotenv").config();
const { apiUrl } = require("../data/urls.json")

const bot = new Telegraf(process.env.token)

const janr = {
    "комедія": "https://rezka.ag/ua/films/comedy/72666-nenasytnye-lyudi-2024.html",
    "хоррор": "https://rezka.ag/ua/films/horror/71729-ulybka-2-2024.html",
    "боєвик": "https://rezka.ag/ua/films/action/47003-naemnik-2022.html",
    "фантастика": "https://rezka.ag/ua/films/fantasy/44985-fantasticheskie-tvari-tayny-dambldora-2022.html",
};

// Команда /start
bot.start((msg) => {
    msg.reply(
        "Привіт! Тут ви можете знайти фільм по жанру. Вам треба лише буде вписати жанр фільму, а ми самі вам підберемо його. У нас на вибір є: комедія, хоррор, боєвик, фантастика."
    );
});

// Обробка текстових повідомлень
bot.on("text", (msg) => {
    const genre = msg.message.text.toLowerCase();
    // toLowerCase() — метод, який перетворює всі літери рядка в нижній регістр (маленькі літери). Використовується для порівняння тексту незалежно від регістру.
    const link = janr[genre]; // genre — змінна, яка зберігає жанр, введений користувачем. Використовується для пошуку відповідного посилання у списку жанрів.

    if (link) {
        msg.reply(`Ось ваше посилання на жанр "${genre}": ${link}`);
    } else {
        msg.reply("На жаль, такого жанру немає. Спробуйте ще раз: комедія, хоррор, боєвик, фантастика.");
    }
});
bot.launch(() => console.log("start"))