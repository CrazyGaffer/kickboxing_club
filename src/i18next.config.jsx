import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            navbar: {
                home: "Home",
                about: "About",
                pricing: "Pricing",
                contact: "Contact"
            },
            home: {
                heading: "NOT JUST ANOTHER JAPANESE RESTAURANT",
                subtitle: "Experience Fusion Flavors",
                content: "While our inspiration draws from various Asian influences, we pride ourselves on being much more than just a japanese restaurant. Our culinary artisans weave together a rich tapestry of flavors, celebrating the diversity of asia and european culinary traditions, to create a truly unique dinning experience.",
                bookATable: "Reserve a Table",
                orderNow: "Order Takeaway"
            },
            contact: {
                heading: "Get in Touch",
                subheading: "Have a question or need a reservation? We’d love to hear from you!",
                subtitle: "Contact Us",
                location: {
                    title: "Our Location",
                    address: "Sakura Resto \n Pärnu mnt. 32 \n 10141 Tallinn"
                },
                email: {
                    title: "Email Us",
                    address: "info@sakuraresto.ee"
                },
                phone: {
                    title: "Call Us",
                    number: "+372 5486 0852"
                }
            },
            parking: {
                title: "Customer Parking",
                description: "Start parking at X6 Pärnu mnt 43A using the Snabb app and enter the promo code SAKURA15 to automatically receive a 15% discount."
            },
            footer: {
                workingHours: "Working Hours",
                monThu: "Mon-Thu: 11 AM – 11 PM",
                fri: "Fri: 11 AM – 12 AM",
                sat: "Sat: 12 PM – 12 AM",
                sun: "Sun: 12 PM – 10 PM",
                contact: "Contact",
                email: "info@sakuraresto.ee",
                phone: "+372 5486 0852",
                address: "Pärnu mnt 32, Tallinn",
                followUs: "Follow Us",
                quickLinks: "Quick Links",
                home: "Home",
                menu: "Menu",
                about: "About",
                events: "Events",
                rightsReserved: "All rights reserved | Developed by CrazyGaffer"
            }
        }
    },
    et: {
        translation: {
            navbar: {
                home: "Avaleht",
                about: "Meist",
                pricing: "Hinnakiri",
                contact: "Võta ühendust"
            },
            home: {
                heading: "MITTE LIHTSALT JAAPANI RESTORAN",
                subtitle: "Koge fusioonmaitseid",
                content: "Kuigi meie inspiratsioon ammutab mõjutusi erinevatest Aasia köökidest, oleme uhked, et oleme palju enamat kui lihtsalt jaapani restoran. Meie kulinaariameistrid põimivad rikkaliku maitsete kanga, tähistades nii Aasia kui ka Euroopa kulinaarseid traditsioone, et luua tõeliselt ainulaadset einestamiskogemus.",
                bookATable: "Broneeri",
                orderNow: "Telli"
            },
            contact: {
                heading: "Võta ühendust",
                subheading: "Kas sul on küsimus või vajad broneeringut? Meil oleks hea meel sinust kuulda!",
                subtitle: "Võta meiega ühendust",
                location: {
                    title: "Meie asukoht",
                    address: "Sakura Resto \n Pärnu mnt. 32 \n 10141 Tallinn"
                },
                email: {
                    title: "Kirjuta meile",
                    address: "info@sakuraresto.ee"
                },
                phone: {
                    title: "Helista meile",
                    number: "+372 5486 0852"
                }
            },
            parking: {
                title: "Kliendi parkimine",
                description: "Alusta parkimist X6 Pärnu mnt 43A parklas Snabb'i rakenduse kaudu ning sisesta promokood SAKURA15, et saada automaatselt 15% soodustust."
            },
            footer: {
                workingHours: "Tööaeg",
                monThu: "E-N: 11:00 – 23:00",
                fri: "R: 11:00 – 00:00",
                sat: "L: 12:00 – 00:00",
                sun: "P: 12:00 – 22:00",
                contact: "Võta ühendust",
                email: "info@sakuraresto.ee",
                phone: "+372 5486 0852",
                address: "Pärnu mnt 32, Tallinn",
                followUs: "Jälgi meid",
                quickLinks: "Kiirlinkid",
                home: "Avaleht",
                menu: "Menüü",
                about: "Meist",
                events: "Üritused",
                rightsReserved: "Kõik õigused kaitstud | Developed by CrazyGaffer"
            }
        }
    },
    ru: {
        translation: {
            navbar: {
                home: "Главная",
                about: "О нас",
                pricing: "Цены",
                contact: "Контакт"
            },
            home: {
                heading: "НЕ ПРОСТО ЯПОНСКИЙ РЕСТОРАН",
                subtitle: "Открой для себя фьюжн-вкусы",
                content: "Несмотря на то, что источником вдохновения для нас служат различные Азиатские влияния, мы гордимся тем, что являемся не просто японским рестораном. Наши мастера кулинарного искусства обьединяют богатую смесь вкусов, которая отражает азиатские и европейские кулинарные влияния.",
                bookATable: "Забронировать",
                orderNow: "Заказать сейчас"
            },
            contact: {
                heading: "Свяжитесь с нами",
                subheading: "Есть вопрос или нужна бронь? Мы будем рады услышать вас!",
                subtitle: "Свяжитесь с нами",
                location: {
                    title: "Наше местоположение",
                    address: "Sakura Resto \n Pärnu mnt. 32 \n 10141 Tallinn"
                },
                email: {
                    title: "Напишите нам",
                    address: "info@sakuraresto.ee"
                },
                phone: {
                    title: "Позвоните нам",
                    number: "+372 5486 0852"
                }
            },
            parking: {
                title: "Парковка для клиентов",
                description: "Начните парковку на X6 Pärnu mnt 43A через приложение Snabb и введите промокод SAKURA15, чтобы автоматически получить 15% скидку."
            },
            footer: {
                workingHours: "Режим работы",
                monThu: "Пн-Чт: 11:00 – 23:00",
                fri: "Пт: 11:00 – 00:00",
                sat: "Сб: 12:00 – 00:00",
                sun: "Вс: 12:00 – 22:00",
                contact: "Контакты",
                email: "info@sakuraresto.ee",
                phone: "+372 5486 0852",
                address: "Пярну mnt 32, Таллин",
                followUs: "Подписывайтесь",
                quickLinks: "Быстрые ссылки",
                home: "Главная",
                menu: "Меню",
                about: "О нас",
                events: "События",
                rightsReserved: "Все права защищены | Developed by CrazyGaffer"
            }
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "et",
        fallbackLng: "en",
        interpolation: { escapeValue: false }
    })
    .then(() => {
        console.log("i18n initialized");
    });

export default i18n;