type QuizQuestionsContent = {
    questionText1 : string,
    questionText2? : string,
    questionText3? : string,
    questionType : 'select' | 'tf' | 'dnd' | 'pio',
    answerOptions : Array<{answerText : string, isCorrect? : boolean}>,
    answerCorrect? : Array <{answerText : string}>,
}
type QuizQuestionsListType = {
    [key: string] : Array<{
        questionId : string,
        pl: QuizQuestionsContent,
        en: QuizQuestionsContent,
    }>;
};

const quizQuestionsList : QuizQuestionsListType = {
    historia: [
        {
            questionId: 'q_h-1',
            pl: {
                questionText1: 'Który z poniższych toksycznych składników wykorzystywany był na przestrzeni dziejów do produkcji kosmetyków lub środków do makijażu?',
                questionType: 'select',
                answerOptions: [
                    { answerText: 'A. Ołów', isCorrect: false },
                    { answerText: 'B. Rtęć', isCorrect: false },
                    { answerText: 'C. Arszenik', isCorrect: false },
                    { answerText: 'D. Ołów, rtęć i arszenik', isCorrect: true },
                    { answerText: 'E. Żaden z wymienionych', isCorrect: false },
                ],
            },
            en: {
                questionText1: 'Which of the following toxic ingredients was used throughout history in the production of cosmetics or makeup?',
                questionType: 'select',
                answerOptions: [
                    { answerText: 'A. Lead', isCorrect: false },
                    { answerText: 'B. Mercury', isCorrect: false },
                    { answerText: 'C. Arsenic', isCorrect: false },
                    { answerText: 'D. Lead, mercury, and arsenic', isCorrect: true },
                    { answerText: 'E. None of the above', isCorrect: false },
                ],
            },
        },
        {
            questionId: 'q_h-2',
            pl: {
                questionText1: 'Z jakim zwierzęciem australijska armia prowadziła wojnę w 1932 roku?',
                questionType: 'select',
                answerOptions: [
                    { answerText: 'A. Z kangurami', isCorrect: false },
                    { answerText: 'B. Ze strusiami emu', isCorrect: true },
                    { answerText: 'C. Z królikami', isCorrect: false },
                    { answerText: 'D. Z krokodylami', isCorrect: false },
                    { answerText: 'E. Z krowami', isCorrect: false },
                ],
            },
            en: {
                questionText1: 'Which animal did the Australian army wage war against in 1932?',
                questionType: 'select',
                answerOptions: [
                    { answerText: 'A. Kangaroos', isCorrect: false },
                    { answerText: 'B. Emus', isCorrect: true },
                    { answerText: 'C. Rabbits', isCorrect: false },
                    { answerText: 'D. Crocodiles', isCorrect: false },
                    { answerText: 'E. Cows', isCorrect: false },
                ],
            },
        },
        {
            questionId: 'q_h-3',
            pl: {
                questionText1: 'Jak miała na imię żona Sokratesa?',
                questionType: 'select',
                answerOptions: [
                    { answerText: 'A. Eunice', isCorrect: false },
                    { answerText: 'B. Agapita', isCorrect: false },
                    { answerText: 'C. Ksantypa', isCorrect: true },
                    { answerText: 'D. Lidia', isCorrect: false },
                    { answerText: 'E. Sokrates nie miał żony', isCorrect: false },
                ],
            },
            en: {
                questionText1: 'What was the name of Socrates’ wife?',
                questionType: 'select',
                answerOptions: [
                    { answerText: 'A. Eunice', isCorrect: false },
                    { answerText: 'B. Agapita', isCorrect: false },
                    { answerText: 'C. Xanthippe', isCorrect: true },
                    { answerText: 'D. Lydia', isCorrect: false },
                    { answerText: 'E. Socrates did not have a wife', isCorrect: false },
                ],
            },
        },
        {
            questionId: 'q_h-4',
            pl: {
                questionText1: 'Komu zaproponowano w 1952 roku prezydenturę Izraela?',
                questionType: 'select',
                answerOptions: [
                    { answerText: 'A. Charliemu Chaplinowi', isCorrect: false },
                    { answerText: 'B. Albertowi Einsteinowi', isCorrect: true },
                    { answerText: 'C. Erichowi von Stroheimowi', isCorrect: false },
                    { answerText: 'D. Alfredowi Noblowi', isCorrect: false },
                    { answerText: 'E. Kazimierzowi Funk', isCorrect: false },
                ],
            },
            en: {
                questionText1: 'Who was offered the presidency of Israel in 1952?',
                questionType: 'select',
                answerOptions: [
                    { answerText: 'A. Charlie Chaplin', isCorrect: false },
                    { answerText: 'B. Albert Einstein', isCorrect: true },
                    { answerText: 'C. Erich von Stroheim', isCorrect: false },
                    { answerText: 'D. Alfred Nobel', isCorrect: false },
                    { answerText: 'E. Casimir Funk', isCorrect: false },
                ],
            },
        },
        {
            questionId: 'q_h-5',
            pl: {
                questionText1: 'Prawda czy mit?',
                questionText2: 'Wśród wojowników wikingów popularne były rogate hełmy.',
                questionType: 'tf',
                answerOptions: [
                    { answerText: 'A. Prawda', isCorrect: false },
                    { answerText: 'B. Mit', isCorrect: true },
                ],
            },
            en: {
                questionText1: 'True or myth?',
                questionText2: 'Viking warriors commonly wore horned helmets.',
                questionType: 'tf',
                answerOptions: [
                    { answerText: 'A. True', isCorrect: false },
                    { answerText: 'B. Myth', isCorrect: true },
                ],
            },
        },
        {
            questionId: 'q_h-6',
            pl: {
                questionText1: 'Prawda czy fałsz?',
                questionText2: 'W Rosji za panowania Piotra I Wielkiego obowiązywał podatek od brody.',
                questionType: 'tf',
                answerOptions: [
                    { answerText: 'A. Prawda', isCorrect: true },
                    { answerText: 'B. Fałsz', isCorrect: false },
                ],
            },
            en: {
                questionText1: 'True or false?',
                questionText2: 'In Russia, during the reign of Peter the Great, there was a beard tax.',
                questionType: 'tf',
                answerOptions: [
                    { answerText: 'A. True', isCorrect: true },
                    { answerText: 'B. False', isCorrect: false },
                ],
            },
        },
        {
            questionId: 'q_h-7',
            pl: {
                questionText1: 'Uzupełnij zdanie:',
                questionText2: ' W czasie... ',
                questionText3: ' ...Polacy zakłócali przekazy radiowe Armii Czerwonej poprzez nadawanie... ',
                questionType: 'dnd',
                answerOptions: [
                    { answerText: 'A. I wojny światowej'},
                    { answerText: 'B. wojny polsko-bolszewickiej'},
                    { answerText: 'C. wszystkich części Dziadów'},
                    { answerText: 'D. Pisma Świętego'},
                    { answerText: 'E. Pana Tadeusza'},
                ],
                answerCorrect: [
                    { answerText: 'B. wojny polsko-bolszewickiej'},
                    { answerText: 'D. Pisma Świętego'}
                ],
            },
            en: {
                questionText1: 'Complete the sentence:',
                questionText2: ' During the... ',
                questionText3: ' ...Poles disrupted Red Army radio transmissions by broadcasting... ',
                questionType: 'dnd',
                answerOptions: [
                    { answerText: 'A. World War I'},
                    { answerText: 'B. Polish-Soviet War'},
                    { answerText: 'C. all parts of Dziady (Forefathers’ Eve)'},
                    { answerText: 'D. the Bible'},
                    { answerText: 'E. Pan Tadeusz'},
                ],
                answerCorrect: [
                    { answerText: 'B. Polish-Soviet War'},
                    { answerText: 'D. the Bible'}
                ],
            },
        },
        {
            questionId: 'q_h-8',
            pl: {
                questionText1: 'Uzupełnij zdanie: ',
                questionText2: ' Reprezentacja... ',
                questionText3: ' ...dotarła spóźniona na Igrzyska Olimpijskie w Londynie w 1908 roku, ponieważ... ',
                questionType: 'dnd',
                answerOptions: [
                    { answerText: 'A. Rosji'},
                    { answerText: 'B. Chin'},
                    { answerText: 'C. została aresztowana na granicy'},
                    { answerText: 'D. zaplanowali wyjazd według innego kalendarza'},
                    { answerText: 'E. ich wyjazd sabotowali rewolucjoniści'},
                ],
                answerCorrect: [
                    { answerText: 'A. Rosji'},
                    { answerText: 'D. zaplanowali wyjazd według innego kalendarza'}
                ],
            },
            en: {
                questionText1: 'Complete the sentence:',
                questionText2: ' The team from... ',
                questionText3: ' ...arrived late to the 1908 Olympic Games in London because... ',
                questionType: 'dnd',
                answerOptions: [
                    { answerText: 'A. Russia'},
                    { answerText: 'B. China'},
                    { answerText: 'C. they were arrested at the border'},
                    { answerText: 'D. they planned their trip according to a different calendar'},
                    { answerText: 'E. their departure was sabotaged by revolutionaries'},
                ],
                answerCorrect: [
                    { answerText: 'A. Russia'},
                    { answerText: 'D. they planned their trip according to a different calendar'}
                ],
            },
        },
        {
            questionId: 'q_h-9',
            pl: {
                questionText1: 'Ułóż wydarzenia w kolejności chronologicznej:',
                questionType: 'pio',
                answerOptions: [
                    { answerText: 'A. Powstanie NRD'}, 
                    { answerText: 'B. Powstanie RFN'}, 
                    { answerText: 'C. Powstanie Unii Europejskiej'}, 
                    { answerText: 'D. Powstanie państwa Izrael'}, 
                    { answerText: 'E. Wyzwolenie Indii'}
                ],
                answerCorrect: [
                    { answerText: 'E. Wyzwolenie Indii'}, 
                    { answerText: 'D. Powstanie państwa Izrael'}, 
                    { answerText: 'B. Powstanie RFN'}, 
                    { answerText: 'A. Powstanie NRD'}, 
                    { answerText: 'C. Powstanie Unii Europejskiej'}
                ],
            },
            en: {
                questionText1: 'Arrange the events in chronological order:',
                questionType: 'pio',
                answerOptions: [
                    { answerText: 'A. The establishment of East Germany (GDR)'}, 
                    { answerText: 'B. The establishment of West Germany (FRG)'}, 
                    { answerText: 'C. The formation of the European Union'}, 
                    { answerText: 'D. The establishment of the State of Israel'}, 
                    { answerText: 'E. The independence of India'}
                ],
                answerCorrect: [
                    { answerText: 'E. The independence of India'}, 
                    { answerText: 'D. The establishment of the State of Israel'}, 
                    { answerText: 'B. The establishment of West Germany (FRG)'}, 
                    { answerText: 'A. The establishment of East Germany (GDR)'}, 
                    { answerText: 'C. The formation of the European Union'}
                ],
            },
        },
        {
            questionId: 'q_h-10',
            pl: {
                questionText1: 'Ułóż w kolejności chronologicznej wydarzenia związane z historią narodu żydowskiego:',
                questionType: 'pio',
                answerOptions: [
                    { answerText: 'A. Panowanie Saula'}, 
                    { answerText: 'B. Wyjście z Egiptu'}, 
                    { answerText: 'C. Okres patriarchów'}, 
                    { answerText: 'D. Niewola egipska'}, 
                    { answerText: 'E. Niewola babilońska'}
                ],
                answerCorrect: [
                    { answerText: 'C. Okres patriarchów'}, 
                    { answerText: 'D. Niewola egipska'}, 
                    { answerText: 'B. Wyjście z Egiptu'}, 
                    { answerText: 'A. Panowanie Saula'}, 
                    { answerText: 'E. Niewola babilońska'}
                ],
            },
            en: {
                questionText1: 'Arrange the events related to the history of the Jewish people in chronological order:',
                questionType: 'pio',
                answerOptions: [
                    { answerText: 'A. The reign of Saul'}, 
                    { answerText: 'B. The Exodus from Egypt'}, 
                    { answerText: 'C. The period of the Patriarchs'}, 
                    { answerText: 'D. Egyptian bondage'}, 
                    { answerText: 'E. Babylonian exile'}
                ],
                answerCorrect: [
                    { answerText: 'C. The period of the Patriarchs'}, 
                    { answerText: 'D. Egyptian bondage'}, 
                    { answerText: 'B. The Exodus from Egypt'}, 
                    { answerText: 'A. The reign of Saul'}, 
                    { answerText: 'E. Babylonian exile'}
                ],
            },
        },
    ],
    programming: [
        {
            "questionId": "q_p-1",
            "pl": {
                "questionText1": "Czym jest inkrementacja?",
                "questionType": "select",
                "answerOptions": [
                    { "answerText": "A. Zmniejszenie wartości o n", "isCorrect": false },
                    { "answerText": "B. Zmniejszenie wartości o 1", "isCorrect": false },
                    { "answerText": "C. Zmniejszenie wartości o n, gdzie n>=2", "isCorrect": false },
                    { "answerText": "D. Zwiększenie wartości o 1", "isCorrect": true },
                    { "answerText": "E. Zwiększenie wartości o n, gdzie n>=2", "isCorrect": false }
                ]
            },
            "en": {
                "questionText1": "What is incrementation?",
                "questionType": "select",
                "answerOptions": [
                    { "answerText": "A. Decreasing the value by n", "isCorrect": false },
                    { "answerText": "B. Decreasing the value by 1", "isCorrect": false },
                    { "answerText": "C. Decreasing the value by n, where n>=2", "isCorrect": false },
                    { "answerText": "D. Increasing the value by 1", "isCorrect": true },
                    { "answerText": "E. Increasing the value by n, where n>=2", "isCorrect": false }
                ]
            }
        },
        {
            "questionId": "q_p-2",
            "pl": {
                "questionText1": "Do czego odnoszą się modyfikatory public, private i protected?",
                "questionType": "select",
                "answerOptions": [
                    { "answerText": "A. Do dziedziczenia", "isCorrect": true },
                    { "answerText": "B. Do uprawnień folderów", "isCorrect": false },
                    { "answerText": "C. Do przestrzeni nazw", "isCorrect": false },
                    { "answerText": "D. Do polimorfizmu", "isCorrect": false },
                    { "answerText": "E. Nie ma takich modyfikatorów", "isCorrect": false }
                ]
            },
            "en": {
                "questionText1": "To what do the modifiers public, private, and protected refer?",
                "questionType": "select",
                "answerOptions": [
                    { "answerText": "A. Inheritance", "isCorrect": true },
                    { "answerText": "B. Folder permissions", "isCorrect": false },
                    { "answerText": "C. Namespaces", "isCorrect": false },
                    { "answerText": "D. Polymorphism", "isCorrect": false },
                    { "answerText": "E. These modifiers do not exist", "isCorrect": false }
                ]
            }
        },
        {
            "questionId": "q_p-3",
            "pl": {
                "questionText1": "Co oznacza znak podwójnej równości == w językach pochodnych od języka C?",
                "questionType": "select",
                "answerOptions": [
                    { "answerText": "A. Przypisanie wartości zmiennej", "isCorrect": false },
                    { "answerText": "B. Porównanie wartości zmiennych", "isCorrect": true },
                    { "answerText": "C. Przypisanie wartości true", "isCorrect": true },
                    { "answerText": "D. Ten znak jest niepoprawny", "isCorrect": false },
                    { "answerText": "E. Żadne z wymienionych", "isCorrect": false }
                ]
            },
            "en": {
                "questionText1": "What does the double equals sign == mean in languages derived from C?",
                "questionType": "select",
                "answerOptions": [
                    { "answerText": "A. Assigning a value to a variable", "isCorrect": false },
                    { "answerText": "B. Comparing the values of variables", "isCorrect": true },
                    { "answerText": "C. Assigning the value true", "isCorrect": true },
                    { "answerText": "D. This sign is incorrect", "isCorrect": false },
                    { "answerText": "E. None of the above", "isCorrect": false }
                ]
            }
        },
        {
            "questionId": "q_p-4",
            "pl": {
                "questionText1": "Tzw. notacja dużego O używana jest do...",
                "questionType": "select",
                "answerOptions": [
                    { "answerText": "A. opisu złożoności obliczeniowej algorytmu.", "isCorrect": true },
                    { "answerText": "B. opisu ilości wątków używanych przez program.", "isCorrect": false },
                    { "answerText": "C. opisu ilości wątków używanych przez system.", "isCorrect": true },
                    { "answerText": "D. opisu minimalnych wymagań systemowych do uruchomienia programu.", "isCorrect": false },
                    { "answerText": "E. opisu minimalnych wymagań systemowych do uruchomienia systemu.", "isCorrect": true }
                ]
            },
            "en": {
                "questionText1": "The so-called Big O notation is used for...",
                "questionType": "select",
                "answerOptions": [
                    { "answerText": "A. Describing the computational complexity of an algorithm.", "isCorrect": true },
                    { "answerText": "B. Describing the number of threads used by a program.", "isCorrect": false },
                    { "answerText": "C. Describing the number of threads used by a system.", "isCorrect": true },
                    { "answerText": "D. Describing the minimum system requirements to run a program.", "isCorrect": false },
                    { "answerText": "E. Describing the minimum system requirements to run a system.", "isCorrect": true }
                ]
            }
        },
        {
            "questionId": "q_p-5",
            "pl": {
                "questionText1": "Prawda czy fałsz?",
                "questionText2": "W schematach blokowych, blok rombu oznacza instrukcję warunkową.",
                "questionType": "tf",
                "answerOptions": [
                    { "answerText": "A. Prawda", "isCorrect": true },
                    { "answerText": "B. Fałsz", "isCorrect": false }
                ]
            },
            "en": {
                "questionText1": "True or false?",
                "questionText2": "In flowcharts, a diamond block represents a conditional statement.",
                "questionType": "tf",
                "answerOptions": [
                    { "answerText": "A. True", "isCorrect": true },
                    { "answerText": "B. False", "isCorrect": false }
                ]
            }
        },
        {
            "questionId": "q_p-6",
            "pl": {
                "questionText1": "Prawda czy fałsz?",
                "questionText2": "Polimorfizm umożliwia stworzenie wielu, niczym nieróżniących się funkcji (o takich samych nazwach, zwracanych typach i parametrach).",
                "questionType": "tf",
                "answerOptions": [
                    { "answerText": "A. Prawda", "isCorrect": false },
                    { "answerText": "B. Fałsz", "isCorrect": true }
                ]
            },
            "en": {
                "questionText1": "True or false?",
                "questionText2": "Polymorphism allows the creation of many identical functions (with the same names, return types, and parameters).",
                "questionType": "tf",
                "answerOptions": [
                    { "answerText": "A. True", "isCorrect": false },
                    { "answerText": "B. False", "isCorrect": true }
                ]
            }
        },
        {
            "questionId": "q_p-7",
            "pl": {
                "questionText1": "Uzupełnij zdanie: ",
                "questionText2": "Tzw. IDE to... ",
                "questionText3": "...a C++ to... ",
                "questionType": "dnd",
                "answerOptions": [
                    { "answerText": "A. środowisko programistyczne" },
                    { "answerText": "B. system operacyjny" },
                    { "answerText": "C. aplikacja programistyczna" },
                    { "answerText": "D. biblioteka funkcji" },
                    { "answerText": "E. język programowania" }
                ],
                "answerCorrect": [
                    { "answerText": "A. środowisko programistyczne" },
                    { "answerText": "E. język programowania" }
                ]
            },
            "en": {
                "questionText1": "Complete the sentence: ",
                "questionText2": "The so-called IDE is... ",
                "questionText3": "...and C++ is... ",
                "questionType": "dnd",
                "answerOptions": [
                    { "answerText": "A. a development environment" },
                    { "answerText": "B. an operating system" },
                    { "answerText": "C. a programming application" },
                    { "answerText": "D. a function library" },
                    { "answerText": "E. a programming language" }
                ],
                "answerCorrect": [
                    { "answerText": "A. a development environment" },
                    { "answerText": "E. a programming language" }
                ]
            }
        },
        {
            "questionId": "q_p-8",
            "pl": {
                "questionText1": "Uzupełnij zdanie: ",
                "questionText2": "Proces inicjalizacji zmiennej to... ",
                "questionText3": "...a iteracja to... ",
                "questionType": "dnd",
                "answerOptions": [
                    { "answerText": "A. przypisanie wartości początkowej zmiennej" },
                    { "answerText": "B. przypisanie wartości końcowej zmiennej" },
                    { "answerText": "C. utworzenie drugiej zmiennej, o takiej samej nazwie co pierwsza" },
                    { "answerText": "D. usunięcie zmiennej o podanej nazwie" },
                    { "answerText": "E. czynność powtarzania tej samej operacji w pętli z góry określoną liczbę razy lub aż do spełnienia określonego warunku" }
                ],
                "answerCorrect": [
                    { "answerText": "A. przypisanie wartości początkowej zmiennej" },
                    { "answerText": "E. czynność powtarzania tej samej operacji w pętli z góry określoną liczbę razy lub aż do spełnienia określonego warunku" }
                ]
            },
            "en": {
                "questionText1": "Complete the sentence: ",
                "questionText2": "The process of variable initialization is... ",
                "questionText3": "...and iteration is... ",
                "questionType": "dnd",
                "answerOptions": [
                    { "answerText": "A. assigning an initial value to the variable" },
                    { "answerText": "B. assigning a final value to the variable" },
                    { "answerText": "C. creating a second variable with the same name as the first" },
                    { "answerText": "D. deleting a variable with a given name" },
                    { "answerText": "E. the act of repeating the same operation in a loop a predetermined number of times or until a certain condition is met" }
                ],
                "answerCorrect": [
                    { "answerText": "A. assigning an initial value to the variable" },
                    { "answerText": "E. the act of repeating the same operation in a loop a predetermined number of times or until a certain condition is met" }
                ]
            }
        },
        {
            "questionId": "q_p-9",
            "pl": {
                "questionText1": "Ułóż w kolejności od najstarszego do najnowszego systemu:",
                "questionType": "pio",
                "answerOptions": [
                    { "answerText": "A. Windows XP" }, 
                    { "answerText": "B. Windows Vista" }, 
                    { "answerText": "C. Windows 7" }, 
                    { "answerText": "D. Windows 10" }, 
                    { "answerText": "E. Windows 8/8.1" }
                ],
                "answerCorrect": [
                    { "answerText": "A. Windows XP" }, 
                    { "answerText": "B. Windows Vista" }, 
                    { "answerText": "C. Windows 7" }, 
                    { "answerText": "E. Windows 8/8.1" }, 
                    { "answerText": "D. Windows 10" }
                ]
            },
            "en": {
                "questionText1": "Arrange in order from the oldest to the newest system:",
                "questionType": "pio",
                "answerOptions": [
                    { "answerText": "A. Windows XP" }, 
                    { "answerText": "B. Windows Vista" }, 
                    { "answerText": "C. Windows 7" }, 
                    { "answerText": "D. Windows 10" }, 
                    { "answerText": "E. Windows 8/8.1" }
                ],
                "answerCorrect": [
                    { "answerText": "A. Windows XP" }, 
                    { "answerText": "B. Windows Vista" }, 
                    { "answerText": "C. Windows 7" }, 
                    { "answerText": "E. Windows 8/8.1" }, 
                    { "answerText": "D. Windows 10" }
                ]
            }
        },
        {
            "questionId": "q_p-10",
            "pl": {
                "questionText1": "Ułóż w kolejności od najstarszego do najnowszego systemu:",
                "questionType": "pio",
                "answerOptions": [
                    { "answerText": "A. Windows Me" }, 
                    { "answerText": "B. Windows 1" }, 
                    { "answerText": "C. Windows 95" }, 
                    { "answerText": "D. Windows 3.0/3.1" }, 
                    { "answerText": "E. Windows 98" }
                ],
                "answerCorrect": [
                    { "answerText": "B. Windows 1" }, 
                    { "answerText": "D. Windows 3.0/3.1" }, 
                    { "answerText": "C. Windows 95" }, 
                    { "answerText": "E. Windows 98" }, 
                    { "answerText": "A. Windows Me" }
                ]
            },
            "en": {
                "questionText1": "Arrange in order from the oldest to the newest system:",
                "questionType": "pio",
                "answerOptions": [
                    { "answerText": "A. Windows Me" }, 
                    { "answerText": "B. Windows 1" }, 
                    { "answerText": "C. Windows 95" }, 
                    { "answerText": "D. Windows 3.0/3.1" }, 
                    { "answerText": "E. Windows 98" }
                ],
                "answerCorrect": [
                    { "answerText": "B. Windows 1" }, 
                    { "answerText": "D. Windows 3.0/3.1" }, 
                    { "answerText": "C. Windows 95" }, 
                    { "answerText": "E. Windows 98" }, 
                    { "answerText": "A. Windows Me" }
                ]
            }
        }
    ],
    
        "technologia": [
            {
                "questionId": "q_t-1",
                "pl": {
                    "questionText1": "W którym roku firma Apple wprowadziła do sprzedaży pierwszy komputer?",
                    "questionType": "select",
                    "answerOptions": [
                        { "answerText": "A. 1974", "isCorrect": false },
                        { "answerText": "B. 1984", "isCorrect": false },
                        { "answerText": "C. 1876", "isCorrect": false },
                        { "answerText": "D. 1976", "isCorrect": true },
                        { "answerText": "E. 1990", "isCorrect": false }
                    ]
                },
                "en": {
                    "questionText1": "In which year did Apple release its first computer?",
                    "questionType": "select",
                    "answerOptions": [
                        { "answerText": "A. 1974", "isCorrect": false },
                        { "answerText": "B. 1984", "isCorrect": false },
                        { "answerText": "C. 1876", "isCorrect": false },
                        { "answerText": "D. 1976", "isCorrect": true },
                        { "answerText": "E. 1990", "isCorrect": false }
                    ]
                }
            },
            {
                "questionId": "q_t-2",
                "pl": {
                    "questionText1": "Która firma wywodzi swoją nazwę od mitologicznego stworzenia?",
                    "questionType": "select",
                    "answerOptions": [
                        { "answerText": "A. BlackBerry", "isCorrect": false },
                        { "answerText": "B. ASUS", "isCorrect": true },
                        { "answerText": "C. Samsung", "isCorrect": false },
                        { "answerText": "D. Apple", "isCorrect": false },
                        { "answerText": "E. HTC", "isCorrect": false }
                    ]
                },
                "en": {
                    "questionText1": "Which company derives its name from a mythological creature?",
                    "questionType": "select",
                    "answerOptions": [
                        { "answerText": "A. BlackBerry", "isCorrect": false },
                        { "answerText": "B. ASUS", "isCorrect": true },
                        { "answerText": "C. Samsung", "isCorrect": false },
                        { "answerText": "D. Apple", "isCorrect": false },
                        { "answerText": "E. HTC", "isCorrect": false }
                    ]
                }
            },
            {
                "questionId": "q_t-3",
                "pl": {
                    "questionText1": "Skąd wzięła się nazwa mobilnego systemu operacyjnego Android?",
                    "questionType": "select",
                    "answerOptions": [
                        { "answerText": "A. Od pseudonimu ojca Androida - Andyiego Rubina", "isCorrect": true },
                        { "answerText": "B. Została wybrana losowo przez zespół zajmujący się marketingiem", "isCorrect": false },
                        { "answerText": "C. Od zamiłowania Larryego Pagea do filmu 'Łowca Androidów'", "isCorrect": false },
                        { "answerText": "D. Przyśniła się Sergeyowi Brinowi", "isCorrect": false },
                        { "answerText": "E. Przyśniła się żonie Sergeya Brinowa", "isCorrect": false }
                    ]
                },
                "en": {
                    "questionText1": "Where does the name of the Android operating system come from?",
                    "questionType": "select",
                    "answerOptions": [
                        { "answerText": "A. From the nickname of Android's father - Andy Rubin", "isCorrect": true },
                        { "answerText": "B. It was randomly chosen by the marketing team", "isCorrect": false },
                        { "answerText": "C. From Larry Page's love for the movie 'Blade Runner'", "isCorrect": false },
                        { "answerText": "D. It came to Sergey Brin in a dream", "isCorrect": false },
                        { "answerText": "E. It came to Sergey Brin's wife in a dream", "isCorrect": false }
                    ]
                }
            },
            {
                "questionId": "q_t-4",
                "pl": {
                    "questionText1": "W którym roku powstał pierwszy zestaw ikon emoji?",
                    "questionType": "select",
                    "answerOptions": [
                        { "answerText": "A. 1998", "isCorrect": false },
                        { "answerText": "B. 1999", "isCorrect": true },
                        { "answerText": "C. 1990", "isCorrect": false },
                        { "answerText": "D. 2001", "isCorrect": false },
                        { "answerText": "E. 2000", "isCorrect": false }
                    ]
                },
                "en": {
                    "questionText1": "In which year was the first set of emoji icons created?",
                    "questionType": "select",
                    "answerOptions": [
                        { "answerText": "A. 1998", "isCorrect": false },
                        { "answerText": "B. 1999", "isCorrect": true },
                        { "answerText": "C. 1990", "isCorrect": false },
                        { "answerText": "D. 2001", "isCorrect": false },
                        { "answerText": "E. 2000", "isCorrect": false }
                    ]
                }
            },
            {
                "questionId": "q_t-5",
                "pl": {
                    "questionText1": "Prawda czy Fałsz?",
                    "questionText2": "Google zawdzięcza swoją nazwę literówce.",
                    "questionType": "tf",
                    "answerOptions": [
                        { "answerText": "A. Prawda", "isCorrect": true },
                        { "answerText": "B. Fałsz", "isCorrect": false }
                    ]
                },
                "en": {
                    "questionText1": "True or False?",
                    "questionText2": "Google owes its name to a typo.",
                    "questionType": "tf",
                    "answerOptions": [
                        { "answerText": "A. True", "isCorrect": true },
                        { "answerText": "B. False", "isCorrect": false }
                    ]
                }
            },
            {
                "questionId": "q_t-6",
                "pl": {
                    "questionText1": "Prawda czy Fałsz?",
                    "questionText2": "Nokia wzięła swoją nazwę od nazwy fińskiej rzeki.",
                    "questionType": "tf",
                    "answerOptions": [
                        { "answerText": "A. Prawda", "isCorrect": true },
                        { "answerText": "B. Fałsz", "isCorrect": false }
                    ]
                },
                "en": {
                    "questionText1": "True or False?",
                    "questionText2": "Nokia took its name from a Finnish river.",
                    "questionType": "tf",
                    "answerOptions": [
                        { "answerText": "A. True", "isCorrect": true },
                        { "answerText": "B. False", "isCorrect": false }
                    ]
                }
            },
            {
                "questionId": "q_t-7",
                "pl": {
                    "questionText1": "Uzupełnij zdanie:",
                    "questionText2": "Nazwa firmy Xiaomi odnosi się do...",
                    "questionText3": "...natomiast firmy Huawei -",
                    "questionType": "dnd",
                    "answerOptions": [
                        { "answerText": "A. wolności obywatelskiej" },
                        { "answerText": "B. chińskiego osiągnięcia" },
                        { "answerText": "C. narodu" },
                        { "answerText": "D. tradycji" },
                        { "answerText": "E. pojedynczego ziarna ryżu" }
                    ],
                    "answerCorrect": [
                        { "answerText": "E. pojedynczego ziarna ryżu" },
                        { "answerText": "B. chińskiego osiągnięcia" }
                    ]
                },
                "en": {
                    "questionText1": "Complete the sentence:",
                    "questionText2": "The name Xiaomi refers to...",
                    "questionText3": "...while the name Huawei refers to...",
                    "questionType": "dnd",
                    "answerOptions": [
                        { "answerText": "A. civil liberty" },
                        { "answerText": "B. Chinese achievement" },
                        { "answerText": "C. the nation" },
                        { "answerText": "D. tradition" },
                        { "answerText": "E. a single grain of rice" }
                    ],
                    "answerCorrect": [
                        { "answerText": "E. a single grain of rice" },
                        { "answerText": "B. Chinese achievement" }
                    ]
                }
            },
            {
                "questionId": "q_t-8",
                "pl": {
                    "questionText1": "Uzupełnij zdanie:",
                    "questionText2": "Sieć T-Mobile nazywała się wcześniej...",
                    "questionText3": "...a poprzedniczka sieci Orange to...",
                    "questionType": "dnd",
                    "answerOptions": [
                        { "answerText": "A. Idea" },
                        { "answerText": "B. Era" },
                        { "answerText": "C. Tangerine" },
                        { "answerText": "D. Polska Telekomunikacja Głosowa" },
                        { "answerText": "E. Heyah" }
                    ],
                    "answerCorrect": [
                        { "answerText": "B. Era" },
                        { "answerText": "A. Idea" }
                    ]
                },
                "en": {
                    "questionText1": "Complete the sentence:",
                    "questionText2": "T-Mobile was previously called...",
                    "questionText3": "...while the predecessor of Orange was...",
                    "questionType": "dnd",
                    "answerOptions": [
                        { "answerText": "A. Idea" },
                        { "answerText": "B. Era" },
                        { "answerText": "C. Tangerine" },
                        { "answerText": "D. Polish Voice Telecommunications" },
                        { "answerText": "E. Heyah" }
                    ],
                    "answerCorrect": [
                        { "answerText": "B. Era" },
                        { "answerText": "A. Idea" }
                    ]
                }
            },
            {
                "questionId": "q_t-9",
                "pl": {
                    "questionText1": "Ułóż w kolejności od najstarszego do najnowszego modelu:",
                    "questionType": "pio",
                    "answerOptions": [
                        { "answerText": "A. iPhone 3G" },
                        { "answerText": "B. iPhone 5s" },
                        { "answerText": "C. iPhone 1. generacji" },
                        { "answerText": "D. iPhone 4" },
                        { "answerText": "E. iPhone 5" }
                    ],
                    "answerCorrect": [
                        { "answerText": "C. iPhone 1. generacji" },
                        { "answerText": "A. iPhone 3G" },
                        { "answerText": "D. iPhone 4" },
                        { "answerText": "E. iPhone 5" },
                        { "answerText": "B. iPhone 5s" }
                    ]
                },
                "en": {
                    "questionText1": "Arrange in order from the oldest to the newest model:",
                    "questionType": "pio",
                    "answerOptions": [
                        { "answerText": "A. iPhone 3G" },
                        { "answerText": "B. iPhone 5s" },
                        { "answerText": "C. iPhone 1st generation" },
                        { "answerText": "D. iPhone 4" },
                        { "answerText": "E. iPhone 5" }
                    ],
                    "answerCorrect": [
                        { "answerText": "C. iPhone 1st generation" },
                        { "answerText": "A. iPhone 3G" },
                        { "answerText": "D. iPhone 4" },
                        { "answerText": "E. iPhone 5" },
                        { "answerText": "B. iPhone 5s" }
                    ]
                }
            },
            {
                "questionId": "q_t-10",
                "pl": {
                    "questionText1": "Ułóż w kolejności od najstarszego do najnowszego modelu:",
                    "questionType": "pio",
                    "answerOptions": [
                        { "answerText": "A. iPhone 7/7 Plus" },
                        { "answerText": "B. iPhone XS" },
                        { "answerText": "C. iPhone X" },
                        { "answerText": "D. iPhone SE" },
                        { "answerText": "E. iPhone 8/8 Plus" }
                    ],
                    "answerCorrect": [
                        { "answerText": "D. iPhone SE" },
                        { "answerText": "A. iPhone 7/7 Plus" },
                        { "answerText": "E. iPhone 8/8 Plus" },
                        { "answerText": "C. iPhone X" },
                        { "answerText": "B. iPhone XS" }
                    ]
                },
                "en": {
                    "questionText1": "Arrange in order from the oldest to the newest model:",
                    "questionType": "pio",
                    "answerOptions": [
                        { "answerText": "A. iPhone 7/7 Plus" },
                        { "answerText": "B. iPhone XS" },
                        { "answerText": "C. iPhone X" },
                        { "answerText": "D. iPhone SE" },
                        { "answerText": "E. iPhone 8/8 Plus" }
                    ],
                    "answerCorrect": [
                        { "answerText": "D. iPhone SE" },
                        { "answerText": "A. iPhone 7/7 Plus" },
                        { "answerText": "E. iPhone 8/8 Plus" },
                        { "answerText": "C. iPhone X" },
                        { "answerText": "B. iPhone XS" }
                    ]
                }
            }
        ],
    

        motoryzacja: [
            {
                questionId: 'q_m-1',
                pl: {
                    questionText1: '"Bandzior" to...',
                    questionType: 'select',
                    answerOptions: [
                        { answerText: 'A. Fiat 124p', isCorrect: false },
                        { answerText: 'B. Fiat 125p', isCorrect: true },
                        { answerText: 'C. Fiat 126p', isCorrect: false },
                        { answerText: 'D. Polonez', isCorrect: false },
                        { answerText: 'E. Ford', isCorrect: false },
                    ],
                },
                en: {
                    questionText1: '"Bandzior" is...',
                    questionType: 'select',
                    answerOptions: [
                        { answerText: 'A. Fiat 124p', isCorrect: false },
                        { answerText: 'B. Fiat 125p', isCorrect: true },
                        { answerText: 'C. Fiat 126p', isCorrect: false },
                        { answerText: 'D. Polonez', isCorrect: false },
                        { answerText: 'E. Ford', isCorrect: false },
                    ],
                },
            },
            {
                questionId: 'q_m-2',
                pl: {
                    questionText1: '"Pszczółka" to...',
                    questionType: 'select',
                    answerOptions: [
                        { answerText: 'A. Star 266', isCorrect: false },
                        { answerText: 'B. Star 1142', isCorrect: false },
                        { answerText: 'C. Star 660', isCorrect: true },
                        { answerText: 'D. Galaxy S', isCorrect: false },
                        { answerText: 'E. Galaxy S mini', isCorrect: false },
                    ],
                },
                en: {
                    questionText1: '"Pszczółka" is...',
                    questionType: 'select',
                    answerOptions: [
                        { answerText: 'A. Star 266', isCorrect: false },
                        { answerText: 'B. Star 1142', isCorrect: false },
                        { answerText: 'C. Star 660', isCorrect: true },
                        { answerText: 'D. Galaxy S', isCorrect: false },
                        { answerText: 'E. Galaxy S mini', isCorrect: false },
                    ],
                },
            },
            {
                questionId: 'q_m-3',
                pl: {
                    questionText1: '"Akwarium" to rodzaj...',
                    questionType: 'select',
                    answerOptions: [
                        { answerText: 'A. Autosana', isCorrect: false },
                        { answerText: 'B. Poloneza', isCorrect: true },
                        { answerText: 'C. Jelcza', isCorrect: false },
                        { answerText: 'D. Warszawy', isCorrect: false },
                        { answerText: 'E. Nysy', isCorrect: false },
                    ],
                },
                en: {
                    questionText1: '"Akwarium" is a type of...',
                    questionType: 'select',
                    answerOptions: [
                        { answerText: 'A. Autosana', isCorrect: false },
                        { answerText: 'B. Polonez', isCorrect: true },
                        { answerText: 'C. Jelcz', isCorrect: false },
                        { answerText: 'D. Warszawa', isCorrect: false },
                        { answerText: 'E. Nysa', isCorrect: false },
                    ],
                },
            },
            {
                questionId: 'q_m-4',
                pl: {
                    questionText1: '"Mydelniczka" to...',
                    questionType: 'select',
                    answerOptions: [
                        { answerText: 'A. Trabant', isCorrect: true },
                        { answerText: 'B. Nysa', isCorrect: false },
                        { answerText: 'C. Mikrus', isCorrect: false },
                        { answerText: 'D. Zaporożec', isCorrect: false },
                        { answerText: 'E. Jelcz', isCorrect: false },
                    ],
                },
                en: {
                    questionText1: '"Mydelniczka" is...',
                    questionType: 'select',
                    answerOptions: [
                        { answerText: 'A. Trabant', isCorrect: true },
                        { answerText: 'B. Nysa', isCorrect: false },
                        { answerText: 'C. Mikrus', isCorrect: false },
                        { answerText: 'D. Zaporozhets', isCorrect: false },
                        { answerText: 'E. Jelcz', isCorrect: false },
                    ],
                },
            },
            {
                questionId: 'q_m-5',
                pl: {
                    questionText1: 'Prawda czy Fałsz?',
                    questionText2: 'Fiat 125p potocznie znany jest jako "Skarpeta".',
                    questionType: 'tf',
                    answerOptions: [
                        { answerText: 'A. Prawda', isCorrect: false },
                        { answerText: 'B. Fałsz', isCorrect: true },
                    ],
                },
                en: {
                    questionText1: 'True or False?',
                    questionText2: 'The Fiat 125p is commonly known as "Skarpeta".',
                    questionType: 'tf',
                    answerOptions: [
                        { answerText: 'A. True', isCorrect: false },
                        { answerText: 'B. False', isCorrect: true },
                    ],
                },
            },
            {
                questionId: 'q_m-6',
                pl: {
                    questionText1: 'Prawda czy Fałsz?',
                    questionText2: '"Kaczka" to rodzaj Mercedesa.',
                    questionType: 'tf',
                    answerOptions: [
                        { answerText: 'A. Prawda', isCorrect: true },
                        { answerText: 'B. Fałsz', isCorrect: false },
                    ],
                },
                en: {
                    questionText1: 'True or False?',
                    questionText2: '"Kaczka" is a type of Mercedes.',
                    questionType: 'tf',
                    answerOptions: [
                        { answerText: 'A. True', isCorrect: true },
                        { answerText: 'B. False', isCorrect: false },
                    ],
                },
            },
            {
                questionId: 'q_m-7',
                pl: {
                    questionText1: 'Uzupełnij zdanie: ',
                    questionText2: '"Sto małych błędów" to potoczna nazwa... ',
                    questionText3: '...a "Kanciak" -... ',
                    questionType: 'dnd',
                    answerOptions: [
                        { answerText: 'A. Fiata 125p' },
                        { answerText: 'B. Nysy' },
                        { answerText: 'C. Mercedesa' },
                        { answerText: 'D. Autosana' },
                        { answerText: 'E. Jelcza' },
                    ],
                    answerCorrect: [
                        { answerText: 'C. Mercedesa' },
                        { answerText: 'A. Fiata 125p' }
                    ],
                },
                en: {
                    questionText1: 'Complete the sentence: ',
                    questionText2: '"Sto małych błędów" is a common name for... ',
                    questionText3: '...and "Kanciak" is... ',
                    questionType: 'dnd',
                    answerOptions: [
                        { answerText: 'A. Fiat 125p' },
                        { answerText: 'B. Nysa' },
                        { answerText: 'C. Mercedes' },
                        { answerText: 'D. Autosan' },
                        { answerText: 'E. Jelcz' },
                    ],
                    answerCorrect: [
                        { answerText: 'C. Mercedes' },
                        { answerText: 'A. Fiat 125p' }
                    ],
                },
            },
            {
                questionId: 'q_m-8',
                pl: {
                    questionText1: 'Uzupełnij zdanie: ',
                    questionText2: '"Garbata" to potoczna nazwa... ',
                    questionText3: '...a "Borewicz" -... ',
                    questionType: 'dnd',
                    answerOptions: [
                        { answerText: 'A. Warszawy' },
                        { answerText: 'B. Garbusa' },
                        { answerText: 'C. Poloneza' },
                        { answerText: 'D. Malucha' },
                        { answerText: 'E. Mercedesa' },
                    ],
                    answerCorrect: [
                        { answerText: 'A. Warszawy' },
                        { answerText: 'C. Poloneza' }
                    ],
                },
                en: {
                    questionText1: 'Complete the sentence: ',
                    questionText2: '"Garbata" is a common name for... ',
                    questionText3: '...and "Borewicz" is... ',
                    questionType: 'dnd',
                    answerOptions: [
                        { answerText: 'A. Warszawa' },
                        { answerText: 'B. Beetle' },
                        { answerText: 'C. Polonez' },
                        { answerText: 'D. Maluch' },
                        { answerText: 'E. Mercedes' },
                    ],
                    answerCorrect: [
                        { answerText: 'A. Warszawa' },
                        { answerText: 'C. Polonez' }
                    ],
                },
            },
            {
                questionId: 'q_m-9',
                pl: {
                    questionText1: 'Ułóż w kolejności chronologicznej:',
                    questionType: 'pio',
                    answerOptions: [
                        { answerText: 'A. Pierwszy samochód z silnikiem spalinowym' },
                        { answerText: 'B. Pierwszy seryjny samochód' }, 
                        { answerText: 'C. Pierwsze radio samochodowe' }, 
                        { answerText: 'D. Pierwszy złodziej samochodowy' }, 
                        { answerText: 'E. Pierwsze tablice rejestracyjne' }
                    ],
                    answerCorrect: [
                        { answerText: 'A. Pierwszy samochód z silnikiem spalinowym' }, 
                        { answerText: 'E. Pierwsze tablice rejestracyjne' }, 
                        { answerText: 'D. Pierwszy złodziej samochodowy' }, 
                        { answerText: 'B. Pierwszy seryjny samochód' }, 
                        { answerText: 'C. Pierwsze radio samochodowe' }
                    ],
                },
                en: {
                    questionText1: 'Arrange in chronological order:',
                    questionType: 'pio',
                    answerOptions: [
                        { answerText: 'A. First car with a combustion engine' },
                        { answerText: 'B. First mass-produced car' }, 
                        { answerText: 'C. First car radio' }, 
                        { answerText: 'D. First car thief' }, 
                        { answerText: 'E. First license plates' }
                    ],
                    answerCorrect: [
                        { answerText: 'A. First car with a combustion engine' }, 
                        { answerText: 'E. First license plates' }, 
                        { answerText: 'D. First car thief' }, 
                        { answerText: 'B. First mass-produced car' }, 
                        { answerText: 'C. First car radio' }
                    ],
                },
            },
            {
                questionId: 'q_m-10',
                pl: {
                    questionText1: 'Ułóż w kolejności chronologicznej:',
                    questionType: 'pio',
                    answerOptions: [
                        { answerText: 'A. Pierwsza ofiara wypadku samochodowego' }, 
                        { answerText: 'B. Pierwsza sygnalizacja świetlna' }, 
                        { answerText: 'C. Pierwsze znaki drogowe' }, 
                        { answerText: 'D. Pierwszy parkomat' },
                        { answerText: 'E. Pierwsze trzypunktowe pasy bezpieczeństwa' }
                    ],
                    answerCorrect: [
                        { answerText: 'B. Pierwsza sygnalizacja świetlna' }, 
                        { answerText: 'C. Pierwsze znaki drogowe' }, 
                        { answerText: 'A. Pierwsza ofiara wypadku samochodowego' }, 
                        { answerText: 'D. Pierwszy parkomat' }, 
                        { answerText: 'E. Pierwsze trzypunktowe pasy bezpieczeństwa' }
                    ],
                },
                en: {
                    questionText1: 'Arrange in chronological order:',
                    questionType: 'pio',
                    answerOptions: [
                        { answerText: 'A. First car accident fatality' }, 
                        { answerText: 'B. First traffic light' }, 
                        { answerText: 'C. First road signs' }, 
                        { answerText: 'D. First parking meter' },
                        { answerText: 'E. First three-point seat belts' }
                    ],
                    answerCorrect: [
                        { answerText: 'B. First traffic light' }, 
                        { answerText: 'C. First road signs' }, 
                        { answerText: 'A. First car accident fatality' }, 
                        { answerText: 'D. First parking meter' }, 
                        { answerText: 'E. First three-point seat belts' }
                    ],
                },
            },
        ],
        
        kultura: [
            {
                questionId: 'q_c-1',
                pl: {
                    questionText1: 'Jak miał na imię galijski druid, przyjaciel Asterixa i Obelixa?',
                    questionType: 'select',
                    answerOptions: [
                        { answerText: 'A. Pamabobuseix', isCorrect: false },
                        { answerText: 'B. Pepperonix', isCorrect: false },
                        { answerText: 'C. Paranoix', isCorrect: false },
                        { answerText: 'D. Panoptikumgrozimix', isCorrect: false },
                        { answerText: 'E. Panoramix', isCorrect: true },
                    ],
                },
                en: {
                    questionText1: 'What was the name of the Gallic druid, friend of Asterix and Obelix?',
                    questionType: 'select',
                    answerOptions: [
                        { answerText: 'A. Pamabobuseix', isCorrect: false },
                        { answerText: 'B. Pepperonix', isCorrect: false },
                        { answerText: 'C. Paranoix', isCorrect: false },
                        { answerText: 'D. Panoptikumgrozimix', isCorrect: false },
                        { answerText: 'E. Panoramix', isCorrect: true },
                    ],
                },
            },
            {
                questionId: 'q_c-2',
                pl: {
                    questionText1: 'Jak miał na imię pomocnik Gajusza Ceplusa?',
                    questionType: 'select',
                    answerOptions: [
                        { answerText: 'A. Softwarus', isCorrect: false },
                        { answerText: 'B. Twardydyskus', isCorrect: false },
                        { answerText: 'C. Antywirus', isCorrect: true },
                        { answerText: 'D. Panelerkus', isCorrect: false },
                        { answerText: 'E. Sezam', isCorrect: false },
                    ],
                },
                en: {
                    questionText1: 'What was the name of Gaius Ceplus’s assistant?',
                    questionType: 'select',
                    answerOptions: [
                        { answerText: 'A. Softwarus', isCorrect: false },
                        { answerText: 'B. Twardydyskus', isCorrect: false },
                        { answerText: 'C. Antywirus', isCorrect: true },
                        { answerText: 'D. Panelerkus', isCorrect: false },
                        { answerText: 'E. Sezam', isCorrect: false },
                    ],
                },
            },
            {
                questionId: 'q_c-3',
                pl: {
                    questionText1: 'Jak miał na imię rywal Numernabisa?',
                    questionType: 'select',
                    answerOptions: [
                        { answerText: 'A. Komis', isCorrect: false },
                        { answerText: 'B. Imhotep', isCorrect: false },
                        { answerText: 'C. Szczękościsk', isCorrect: false },
                        { answerText: 'D. Marnypopis', isCorrect: true },
                        { answerText: 'E. Krótkopis', isCorrect: false },
                    ],
                },
                en: {
                    questionText1: 'What was the name of Numernabis’s rival?',
                    questionType: 'select',
                    answerOptions: [
                        { answerText: 'A. Komis', isCorrect: false },
                        { answerText: 'B. Imhotep', isCorrect: false },
                        { answerText: 'C. Szczękościsk', isCorrect: false },
                        { answerText: 'D. Marnypopis', isCorrect: true },
                        { answerText: 'E. Krótkopis', isCorrect: false },
                    ],
                },
            },
            {
                questionId: 'q_c-4',
                pl: {
                    questionText1: 'Dokończ cytat:',
                    questionText2: '- To napój magiczny?',
                    questionText3: '- Nie, ...',
                    questionType: 'select',
                    answerOptions: [
                        { answerText: 'A. rosół', isCorrect: false },
                        { answerText: 'B. kalafiorowa', isCorrect: true },
                        { answerText: 'C. barszczyk', isCorrect: false },
                        { answerText: 'D. pomidorowa', isCorrect: false },
                        { answerText: 'E. ogórkowa', isCorrect: false },
                    ],
                },
                en: {
                    questionText1: 'Complete the quote:',
                    questionText2: '- Is it a magic potion?',
                    questionText3: '- No, ...',
                    questionType: 'select',
                    answerOptions: [
                        { answerText: 'A. broth', isCorrect: false },
                        { answerText: 'B. cauliflower', isCorrect: true },
                        { answerText: 'C. borscht', isCorrect: false },
                        { answerText: 'D. tomato soup', isCorrect: false },
                        { answerText: 'E. cucumber', isCorrect: false },
                    ],
                },
            },
            {
                questionId: 'q_c-5',
                pl: {
                    questionText1: 'Mucha siada czy nie siada?',
                    questionType: 'tf',
                    answerOptions: [
                        { answerText: 'A. Siada', isCorrect: false },
                        { answerText: 'B. Nie siada', isCorrect: true },
                    ],
                },
                en: {
                    questionText1: 'Does the fly sit or not sit?',
                    questionType: 'tf',
                    answerOptions: [
                        { answerText: 'A. Sits', isCorrect: false },
                        { answerText: 'B. Does not sit', isCorrect: true },
                    ],
                },
            },
            {
                questionId: 'q_c-6',
                pl: {
                    questionText1: 'Co langusta by jadła, gdyby mogła?',
                    questionType: 'tf',
                    answerOptions: [
                        { answerText: 'A. Dżem', isCorrect: true },
                        { answerText: 'B. Masło orzechowe', isCorrect: false },
                    ],
                },
                en: {
                    questionText1: 'What would the lobster eat if it could?',
                    questionType: 'tf',
                    answerOptions: [
                        { answerText: 'A. Jam', isCorrect: true },
                        { answerText: 'B. Peanut butter', isCorrect: false },
                    ],
                },
            },
            {
                questionId: 'q_c-7',
                pl: {
                    questionText1: 'Dopasuj cytat do osoby: ',
                    questionText2: 'Obelix - ',
                    questionText3: 'Otis - ',
                    questionType: 'dnd',
                    answerOptions: [
                        { answerText: 'A. "No szczekam sobie. Miałem nic nie mówić, to szczekam"' },
                        { answerText: 'B. "Dziwna ta wasza podłoga… Nie daje oparcia"' },
                        { answerText: 'C. "No jasne, kolejna faktura. Dosyć mam tej papirusowej roboty!"' },
                        { answerText: 'D. "Zimno tu w tej Galurii... Conajmniej minus siedmset..."' },
                        { answerText: 'E. "Ze względu na drastyczny charakter tej sceny postanowiliśmy zastąpić ją materiałem poświęconym languście"' },
                    ],
                    answerCorrect: [
                        { answerText: 'A. "No szczekam sobie. Miałem nic nie mówić, to szczekam"' },
                        { answerText: 'C. "No jasne, kolejna faktura. Dosyć mam tej papirusowej roboty!"' }
                    ],
                },
                en: {
                    questionText1: 'Match the quote to the person: ',
                    questionText2: 'Obelix - ',
                    questionText3: 'Otis - ',
                    questionType: 'dnd',
                    answerOptions: [
                        { answerText: 'A. "Well, I’m barking. I was supposed to say nothing, so I’m barking"' },
                        { answerText: 'B. "This floor of yours is strange… It doesn’t provide support"' },
                        { answerText: 'C. "Oh great, another invoice. I’ve had enough of this papyrus work!"' },
                        { answerText: 'D. "It’s cold here in Galuria... At least minus seven hundred..."' },
                        { answerText: 'E. "Due to the drastic nature of this scene, we decided to replace it with material dedicated to the lobster"' },
                    ],
                    answerCorrect: [
                        { answerText: 'A. "Well, I’m barking. I was supposed to say nothing, so I’m barking"' },
                        { answerText: 'C. "Oh great, another invoice. I’ve had enough of this papyrus work!"' }
                    ],
                },
            },
            {
                questionId: 'q_c-8',
                pl: {
                    questionText1: 'Dopasuj cytat do osoby: ',
                    questionText2: 'Marnypopis - ',
                    questionText3: 'Numernabis - ',
                    questionType: 'dnd',
                    answerOptions: [
                        { answerText: 'A. "Lew nie sprzymierza się z kojotem!"' },
                        { answerText: 'B. "Letnie kołnierze z polotem"' },
                        { answerText: 'C. "Co to za wielkie rodzynki?"' },
                        { answerText: 'D. "Tak się zastanawiam, czy przemoc to dobre rozwiązanie?"' },
                        { answerText: 'E. "Ten grobowiec będzie waszym grobowcem!"' },
                    ],
                    answerCorrect: [
                        { answerText: 'A. "Lew nie sprzymierza się z kojotem!"' },
                        { answerText: 'B. "Letnie kołnierze z polotem"' }
                    ],
                },
                en: {
                    questionText1: 'Match the quote to the person: ',
                    questionText2: 'Marnypopis - ',
                    questionText3: 'Numernabis - ',
                    questionType: 'dnd',
                    answerOptions: [
                        { answerText: 'A. "A lion does not ally with a coyote!"' },
                        { answerText: 'B. "Summer collars with flair"' },
                        { answerText: 'C. "What are those big raisins?"' },
                        { answerText: 'D. "I’m wondering if violence is a good solution?"' },
                        { answerText: 'E. "This tomb will be your tomb!"' },
                    ],
                    answerCorrect: [
                        { answerText: 'A. "A lion does not ally with a coyote!"' },
                        { answerText: 'B. "Summer collars with flair"' }
                    ],
                },
            },
            {
                questionId: 'q_c-9',
                pl: {
                    questionText1: 'Ułóż filmy z serii Asterix i Obelix od najstarszego do najnowszego (wg daty premiery):',
                    questionType: 'pio',
                    answerOptions: [
                        { answerText: 'A. Asterix i Obelix: W służbie Jej Królewskiej Mości' },
                        { answerText: 'B. Asterix i Obelix kontra Cezar' },
                        { answerText: 'C. Asterix i Obelix: Misja Kleopatra' },
                        { answerText: 'D. Asterix na olimpiadzie' },
                        { answerText: 'E. Asterix i wikingowie' }
                    ],
                    answerCorrect: [
                        { answerText: 'B. Asterix i Obelix kontra Cezar' },
                        { answerText: 'C. Asterix i Obelix: Misja Kleopatra' },
                        { answerText: 'E. Asterix i wikingowie' },
                        { answerText: 'D. Asterix na olimpiadzie' },
                        { answerText: 'A. Asterix i Obelix: W służbie Jej Królewskiej Mości' }
                    ],
                },
                en: {
                    questionText1: 'Arrange the Asterix and Obelix films from the oldest to the newest (by release date):',
                    questionType: 'pio',
                    answerOptions: [
                        { answerText: 'A. Asterix and Obelix: God Save the Queen' },
                        { answerText: 'B. Asterix and Obelix vs. Caesar' },
                        { answerText: 'C. Asterix and Obelix: Mission Cleopatra' },
                        { answerText: 'D. Asterix at the Olympic Games' },
                        { answerText: 'E. Asterix and the Vikings' }
                    ],
                    answerCorrect: [
                        { answerText: 'B. Asterix and Obelix vs. Caesar' },
                        { answerText: 'C. Asterix and Obelix: Mission Cleopatra' },
                        { answerText: 'E. Asterix and the Vikings' },
                        { answerText: 'D. Asterix at the Olympic Games' },
                        { answerText: 'A. Asterix and Obelix: God Save the Queen' }
                    ],
                },
            },
            {
                questionId: 'q_c-10',
                pl: {
                    questionText1: 'Ułóż cytat w odpowiedniej kolejności:',
                    questionType: 'pio',
                    answerOptions: [
                        { answerText: 'A. "A bez budulca nie ma pałacu"' },
                        { answerText: 'B. "..."' },
                        { answerText: 'C. "Nie ma pałacu"' },
                        { answerText: 'D. "A bez pałacu"' },
                        { answerText: 'E. "Bez kamieni nie ma budulca"' }
                    ],
                    answerCorrect: [
                        { answerText: 'E. "Bez kamieni nie ma budulca"' },
                        { answerText: 'A. "A bez budulca nie ma pałacu"' },
                        { answerText: 'D. "A bez pałacu"' },
                        { answerText: 'B. "..."' },
                        { answerText: 'C. "Nie ma pałacu"' }
                    ],
                },
                en: {
                    questionText1: 'Arrange the quote in the correct order:',
                    questionType: 'pio',
                    answerOptions: [
                        { answerText: 'A. "And without the building material, there is no palace"' },
                        { answerText: 'B. "..."' },
                        { answerText: 'C. "There is no palace"' },
                        { answerText: 'D. "And without the palace"' },
                        { answerText: 'E. "Without stones, there is no building material"' }
                    ],
                    answerCorrect: [
                        { answerText: 'E. "Without stones, there is no building material"' },
                        { answerText: 'A. "And without the building material, there is no palace"' },
                        { answerText: 'D. "And without the palace"' },
                        { answerText: 'B. "..."' },
                        { answerText: 'C. "There is no palace"' }
                    ],
                },
            },
        ],        
}

export default quizQuestionsList;