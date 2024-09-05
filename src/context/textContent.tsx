import { useLanguage } from "./LanguageContext";

type TextContent = {
  [key: string]: {
    [key: string]: {
      pl: string;
      en: string;
    };
  };
};

export const textContent: TextContent = {
  answerCheck: {
    correct: {
      pl: "Poprawna odpowiedź",
      en: "Correct answer",
    },
    incorrect: {
      pl: "Niepoprawna odpowiedź",
      en: "Incorrect answer",
    },
  },
  buttonText: {
    goBack: {
      pl: "Kliknij, aby wrócić",
      en: "Click to go back",
    },
    goBackToMenu: {
      pl: "Kliknij, aby wrócić do menu",
      en: "Click to return to the menu",
    },
    goForward: {
      pl: "Kliknij, aby przejść dalej",
      en: "Click to go forward",
    },
    start: {
      pl: "Rozpocznij",
      en: "Start",
    },
    close: {
      pl: "Zamknij",
      en: "Close",
    },
    selectCategory: {
      pl: "Wybierz kategorię: ",
      en: "Select a category: ",
    },
    next: {
      pl: "Dalej",
      en: "Next",
    },
    repeatQuiz: {
      pl: "Powtórz quiz",
      en: "Repeat quiz",
    },
  },
  headings: {
    menu: {
      pl: "10 pytań / 5 kategorii",
      en: "10 questions / 5 categories"
    },
    yourScore: {
      pl: "Twój wynik",
      en: "Your score",
    },
    selectedCategory: {
      pl: "Wybrana kategoria:",
      en: "Selected category:",
    },
    select: {
      pl: "Wybierz poprawną odpowiedź",
      en: "Select the correct answer",
    },
    dnd: {
      pl: "Przeciągnij i upuść",
      en: "Drag and drop",
    },
    pio: {
      pl: "Ułóż w poprawnej kolejności",
      en: "Put in the correct order",
    },
  },
  error: {
    heading: {
      pl: "404 - Strona nie znaleziona",
      en: "404 - Page not found",
    },
    message: {
      pl: "Przepraszamy, strona, której szukasz, nie istnieje.",
      en: "Sorry, the page you are looking for does not exist.",
    },
  },
};

export const useTextContent = (key: string) => {
    const { language } = useLanguage(); // Get the current language from context
    const keys = key.split(".");
    let text = textContent as any;
  
    for (const k of keys) {
      text = text[k];
      if (!text) return "";
    }
  
    return text[language] || "";
  };