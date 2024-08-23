$(document).ready(function () {
  // Объединённый объект с переводами
  const translations = {
    en: {
      title: "Panska Sadiba",
      restaurantName: "Panska Sadiba",
      home: "Home",
      menu: "Menu",
      welcome: "Welcome to the Panska Sadyba restaurant",
      description:
        "It is rightfully considered one of the most interesting and richest in the world specifically Ukrainian cuisine. Ukrainian cuisine has been formed for many centuries. Some of her dishes have become widespread among other peoples, especially Slavic, both Eastern and Western.",
      about: "About Us",
      aboutText:
        "Restaurant Panska Sadyba is a unique place where tradition meets modernity. Every time we get together, we share the best and treat ourselves to the tastiest, from real natural ingredients - for the health of our friends and guests.",
      history: "Our History",
      historyText:
        "The original interior is stylized in accordance with Ukrainian traditions, where national symbols, embroidered towels, and elements of old life prevail. Home Ukrainian cuisine is on the menu. Among the signature dishes, you can highlight borscht with donuts, dumplings with various fillings, as well as meat and fish dishes cooked on an open fire. There is live music in the evenings. We are waiting for you in our institution!",
      team: "Our Team",
      teamText:
        "Our team consists of professional chefs, waiters and administration...",
      ourParties: "Our parties",
      ourText:
        "At the Manor House, we organize unforgettable parties with live music and delicious food.",
      feedback: "Leave Feedback",
      langEn: "EN",
      langUk: "UK",
      porkSteak: "Pork Steak",
      companyDish: "Company Dish",
      kebab: "Kebab",
      lardSpread: "Lard spread",
      mackerel: "Grilled Mackerel",
      cheeseCakes: "Cheese Cakes",
      bakedPotato: "Baked Potato with Cheese",
      frenchFries: "French Fries",
      weight: "Weight:",
      price: "Price:",
      contacts: "Contacts",
      address:
        "Address: 38 Vesnyana St., Donets, Kharkiv Region, Izyum District",
      phone: "Phone: 0508010447, 0660829823",
      email: "Email: info@panskasadiba.ua",
      wifi: "FREE WI-FI: 12345678",
      hours: "Working Hours",
      monday: "Monday-Sunday: 11:00 - 22:00",
      socialMedia: "Social Media",
      instagramLink: "Instagram",
      footer: "© 2024 Panska Sadiba Restaurant. All rights reserved.",
      feedbackTitle: "Leave Feedback",
      name: "Your Name",
      message: "Your Feedback",
      submit: "Submit",
      success: "Thank you for your feedback!",
      error: "There was an error. Please try again.",
    },
    uk: {
      title: "Панська Садиба",
      restaurantName: "Панська Садиба",
      home: "Головна",
      menu: "Меню",
      welcome: "Ласкаво просимо в ресторан української кухні Панська Садиба",
      description: `Однією з найцікавіших та найбагатших у світі по праву вважається
        саме українська кухня. Українська кухня складалася багато століть.
        Деякі її страви набули широкого поширення серед інших народів,
        особливо слов'янських, як східних, і західних.`,
      about: "Про нас",
      aboutText:
        "Ресторан Панська Садиба — це унікальне місце, де традиції зустрічаються з сучасністю. Кожного разу збираючись разом ми ділимося найкращим і пригощаємо найсмачнішим, зі справжніх приридних складових - на здоров’я друзям та гостям.",
      history: "Наша історія",
      historyText:
        "Відкритий у 2024 році, ресторан Панська Садиба швидко завоював любов місцевих жителів. Оригінальний інтер'єр стилізований з дотриманням українських традицій, де переважає національна символіка, вишиті рушники, елементи старовинного побуту. В меню домашня українська кухня. Серед фірмових страв можна виділити борщ з пампушками, вареники з різними начинками, а також страви з м'яса та риби що приготовані на відкритому вогнi. Вечорами звучить жива музика. Чекаємо Вас в нашому закладі!",
      team: "Наша команда",
      teamText:
        "Наша команда складається з професійних кухарів, офіціантів та адміністрації...",
      ourParties: "Наші вечірки",
      ourText:
        "У Панській Садибі ми організовуємо незабутні вечірки з живою музикою та смачною їжею.",
      feedback: "Залишити відгук",
      langEn: "EN",
      langUk: "UK",
      porkSteak: "Стейк зі свинини",
      companyDish: "Страва на компанію",
      kebab: "Люля ке баб",
      lardSpread: "Намазка з сала",
      mackerel: "Скумбрія на мангалі",
      cheeseCakes: "Сирники",
      bakedPotato: "Картопля запечена з сиром",
      frenchFries: "Картопля фрі",
      weight: "Вага:",
      price: "Ціна:",
      contacts: "Контакти",
      address:
        "Адреса: ул. Весняна, 38, смт. Донець, Харківська обл, Ізьмський р-н",
      phone: "Телефон: 0508010447, 0660829823",
      email: "Email: info@panskasadiba.ua",
      wifi: "FREE WI-FI: 12345678",
      hours: "Часи роботи",
      monday: "Понеділок-Неділя: 11:00 - 22:00",
      socialMedia: "Social Media",
      instagramLink: "Instagram",
      footer: "© 2024 Ресторан Панська Садиба. Всі права захищені.",
      feedbackTitle: "Залишити відгук",
      name: "Ваше ім'я",
      message: "Ваш відгук",
      submit: "Відправити",
      success: "Дякуємо за ваш відгук!",
      error: "Сталася помилка. Будь ласка, спробуйте ще раз.",
    },
  };

  // Функция для обновления текста на странице
  function updateText(language) {
    $("[data-i18n]").each(function () {
      const key = $(this).data("i18n");
      $(this).text(translations[language][key]);
    });

    // Обновляем заголовок страницы
    document.title = translations[language]["title"];
  }

  // Обработка клика по кнопке выбора языка
  $(".lang-button").click(function () {
    const lang = $(this).data("lang");
    document.documentElement.lang = lang;
    updateText(lang);
  });

  // Обработка формы обратной связи
  $("#feedbackForm").submit(function (event) {
    event.preventDefault();
    alert(translations[$(".lang-button.active").data("lang")].success);
    $(this).trigger("reset");
  });

  // Установка начального языка (например, украинский)
  document.documentElement.lang = "uk";
  updateText("uk");
});
