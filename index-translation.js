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
        "One of the most interesting and richest cuisines in the world is rightfully considered to be Ukrainian cuisine...",
      about: "About Us",
      aboutText:
        "The Panska Sadyba restaurant is a unique place where traditions meet modernity...",
      history: "Our History",
      historyText:
        "Opened in 2024, the Panska Sadyba restaurant quickly won the love of locals and visitors...",
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
      description:
        "Однією з найцікавіших та найбагатших у світі по праву вважається українська кухня...",
      about: "Про нас",
      aboutText:
        "Ресторан Панська Садиба — це унікальне місце, де традиції зустрічаються з сучасністю...",
      history: "Наша історія",
      historyText:
        "Відкритий у 2024 році, ресторан Панська Садиба швидко завоював любов місцевих жителів...",
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
