type QuizQuestionsListType = {
    [key: string] : Array<{
        questionId : string,
        questionText1 : string,
        questionText2? : string,
        questionText3? : string,
        questionType : string,
        answerOptions : Array<{answerText : string, isCorrect? : boolean}>,
        answerCorrect? : Array <{answerText : string}>,
    }>;
};

const quizQuestionsList : QuizQuestionsListType = {
    historia: [
        {
            questionId: 'q_h-1',
            questionText1: 'Który z poniższych toksycznych składników wykorzystywany był na przestrzeni dziejów do produkcji kosmetyków lub środków do makijażu?',
            questionType: 'select',
            answerOptions: [
                { answerText: 'A. Ołów', isCorrect: false },
                { answerText: 'B. Rtęć', isCorrect: false },
                { answerText: 'C. Arszenik', isCorrect: false },
                { answerText: 'D. Ołów, rtęć i arszenik', isCorrect: true },
                { answerText: 'E. Żaden z wymienionych', isCorrect: true },
            ],
        },
        {
            questionId: 'q_h-2',
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
        {
            questionId: 'q_h-3',
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
        {
            questionId: 'q_h-4',
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
        {
            questionId: 'q_h-5',
            questionText1: 'Prawda czy mit?',
            questionText2: 'Wśród wojowników wikingów popularne były rogate hełmy.',
            questionType: 'tf',
            answerOptions: [
                { answerText: 'A. Prawda', isCorrect: false },
                { answerText: 'B. Mit', isCorrect: true },
            ],
        },
        {
            questionId: 'q_h-6',
            questionText1: 'Prawda czy fałsz?',
            questionText2: 'W Rosji za panowania Piotra I Wielkiego obowiązywał podatek od brody.',
            questionType: 'tf',
            answerOptions: [
                { answerText: 'A. Prawda', isCorrect: true },
                { answerText: 'B. Fałsz', isCorrect: false },
            ],
        },
        {
            questionId: 'q_h-7',
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
        {
            questionId: 'q_h-8',
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
        {
            questionId: 'q_h-9',
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
        {
            questionId: 'q_h-10',
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
                { answerText: 'E.Niewola babilońska'}
            ],
        },
    ],

    programowanie: [
        {
            questionId: 'q_p-1',
            questionText1: 'Czym jest inkrementacja?',
            questionType: 'select',
            answerOptions: [
                { answerText: 'A. Zmniejszenie wartości o n', isCorrect: false },
                { answerText: 'B. Zmniejszenie wartości o 1', isCorrect: false },
                { answerText: 'C. Zmniejszenie wartości o n, gdzie n>=2', isCorrect: false },
                { answerText: 'D. Zwiększenie wartości o 1', isCorrect: true },
                { answerText: 'E. Zwiększenie wartości o n, gdzie n>=2', isCorrect: false },
            ],
        },
        {
            questionId: 'q_p-2',
            questionText1: 'Do czego odnoszą się modyfikatory public, private i protected?',
            questionType: 'select',
            answerOptions: [
                { answerText: 'A. Do dziedziczenia', isCorrect: true },
                { answerText: 'B. Do uprawnień folderów', isCorrect: false },
                { answerText: 'C. Do przestrzeni nazw', isCorrect: false },
                { answerText: 'D. Do polimorfizmu', isCorrect: false },
                { answerText: 'E. Nie ma takich modyfikatorów', isCorrect: false },
            ],
        },
        {
            questionId: 'q_p-3',
            questionText1: 'Co oznacza znak podwójnej równości == w językach pochodnych od języka C?',
            questionType: 'select',
            answerOptions: [
                { answerText: 'A. Przypisanie wartości zmiennej', isCorrect: false },
                { answerText: 'B. Porównanie wartości zmiennych', isCorrect: true },
                { answerText: 'C. Przypisanie wartości true', isCorrect: true },
                { answerText: 'D. Ten znak jest niepoprawny', isCorrect: false },
                { answerText: 'E. Żadne z wymienionych', isCorrect: false },
            ],
        },
        {
            questionId: 'q_p-4',
            questionText1: 'Tzw. notacja dużego O używana jest do...',
            questionType: 'select',
            answerOptions: [
                { answerText: 'A. opisu złożoności obliczeniowej algorytmu.', isCorrect: true },
                { answerText: 'B. opisu ilości wątków używanych przez program.', isCorrect: false },
                { answerText: 'C. opisu ilości wątków używanych przez system.', isCorrect: true },
                { answerText: 'D. opisu minimalnych wymagań systemowych do uruchomienia programu.', isCorrect: false },
                { answerText: 'E. opisu minimalnych wymagań systemowych do uruchomienia systemu.', isCorrect: true }
            ],
        },
        {
            questionId: 'q_p-5',
            questionText1: 'Prawda czy fałsz?',
            questionText2: 'W schematach blokowych, blok rombu oznacza instrukcję warunkową.',
            questionType: 'tf',
            answerOptions: [
                { answerText: 'A. Prawda', isCorrect: true },
                { answerText: 'B. Fałsz', isCorrect: false },
            ],
        },
        {
            questionId: 'q_p-6',
            questionText1: 'Prawda czy fałsz?',
            questionText2: 'Polimorfizm umożliwia stworzenie wielu, niczym nieróżniących się funkcji (o takich samych nazwach, zwracanych typach i parametrach).',
            questionType: 'tf',
            answerOptions: [
                { answerText: 'A. Prawda', isCorrect: false },
                { answerText: 'B. Fałsz', isCorrect: true },
            ],
        },
        {
            questionId: 'q_p-7',
            questionText1: 'Uzupełnij zdanie: ',
            questionText2: 'Tzw. IDE to... ',
            questionText3: '...a C++ to... ',
            questionType: 'dnd',
            answerOptions: [
                { answerText: 'A. środowisko programistyczne'},
                { answerText: 'B. system operacyjny'},
                { answerText: 'C. aplikacja programistyczna'},
                { answerText: 'D. biblioteka funkcji'},
                { answerText: 'E. język programowania'},
            ],
            answerCorrect: [
                { answerText: 'A. środowisko programistyczne'},
                { answerText: 'E. język programowania'}
            ],
        },
        {
            questionId: 'q_p-8',
            questionText1: 'Uzupełnij zdanie: ',
            questionText2: 'Proces inicjalizacji zmiennej to... ',
            questionText3: '...a iteracja to... ',
            questionType: 'dnd',
            answerOptions: [
                { answerText: 'A. przypisanie wartości początkowej zmiennej'},
                { answerText: 'B. przypisanie wartości końcowej zmiennej'},
                { answerText: 'C. utworzenie drugiej zmiennej, o takiej samej nazwie co pierwsza'},
                { answerText: 'D. usunięcie zmiennej o podanej nazwie'},
                { answerText: 'E. czynność powtarzania tej samej operacji w pętli z góry określoną liczbę razy lub aż do spełnienia określonego warunku'},
            ],
            answerCorrect: [
                { answerText: 'A. przypisanie wartości początkowej zmiennej'},
                { answerText: 'E. czynność powtarzania tej samej operacji w pętli z góry określoną liczbę razy lub aż do spełnienia określonego warunku'}
            ],
        },
        {
            questionId: 'q_p-9',
            questionText1: 'Ułóż w kolejności od najstarszego do najnowszego systemu:',
            questionType: 'pio',
            answerOptions: [
                { answerText: 'A. Windows XP'}, 
                { answerText: 'B. Windows Vista'}, 
                { answerText: 'C. Windows 7'}, 
                { answerText: 'D. Windows 10'}, 
                { answerText: 'E. Windows 8/8.1'}
            ],
            answerCorrect: [
                { answerText: 'A. Windows XP'}, 
                { answerText: 'B. Windows Vista'}, 
                { answerText: 'C. Windows 7'}, 
                { answerText: 'E. Windows 8/8.1'}, 
                { answerText: 'D. Windows 10'}
            ],
        },
        {
            questionId: 'q_p-10',
            questionText1: 'Ułóż w kolejności od najstarszego do najnowszego systemu:',
            questionType: 'pio',
            answerOptions: [
                { answerText: 'A. Windows Me'}, 
                { answerText: 'B. Windows 1'}, 
                { answerText: 'C. Windows 95'}, 
                { answerText: 'D. Windows 3.0/3.1'}, 
                { answerText: 'E. Windows 98'}
            ],
            answerCorrect: [
                { answerText: 'B. Windows 1'}, 
                { answerText: 'D. Windows 3.0/3.1'}, 
                { answerText: 'C. Windows 95'}, 
                { answerText: 'E. Windows 98'}, 
                { answerText: 'A. Windows Me'}
            ],
        }
    ],

    technologia: [
        {
            questionId: 'q_t-1',
            questionText1: 'W którym roku firma Apple wprowadziła do sprzedaży pierwszy komputer?',
            questionType: 'select',
            answerOptions: [
                { answerText: 'A. 1974', isCorrect: false },
                { answerText: 'B. 1984', isCorrect: false },
                { answerText: 'C. 1876', isCorrect: false },
                { answerText: 'D. 1976', isCorrect: true },
                { answerText: 'E. 1990', isCorrect: false },
            ],
        },
        {
            questionId: 'q_t-2',
            questionText1: 'Która firma wywodzi swoją nazwę od mitologicznego stworzenia?',
            questionType: 'select',
            answerOptions: [
                { answerText: 'A. BlackBerry ', isCorrect: false },
                { answerText: 'B. ASUS ', isCorrect: true },
                { answerText: 'C. Samsung', isCorrect: false },
                { answerText: 'D. Apple', isCorrect: false },
                { answerText: 'E. HTC', isCorrect: false },
            ],
        },
        {
            questionId: 'q_t-3',
            questionText1: 'Skąd wzięła się nazwa mobilnego systemu operacyjnego Android?',
            questionType: 'select',
            answerOptions: [
                { answerText: 'A. Od pseudonimu ojca Androida - Andyiego Rubina', isCorrect: true },
                { answerText: 'B. Została wybrana losowo przez zespół zajmujący się marketingiem', isCorrect: false },
                { answerText: 'C. Od zamiłowania Larryego Pagea do filmu "Łowca Androidów"', isCorrect: false },
                { answerText: 'D. Przyśniła się Sergeyowi Brinowi', isCorrect: false },
                { answerText: 'E. Przyśniła się żonie Sergeya Brinowa', isCorrect: false },
            ],
        },
        {
            questionId: 'q_t-4',
            questionText1: 'W którym roku powstał pierwszy zestaw ikon emoji?',
            questionType: 'select',
            answerOptions: [
                { answerText: 'A. 1998', isCorrect: false },
                { answerText: 'B. 1999', isCorrect: true },
                { answerText: 'C. 1990', isCorrect: false },
                { answerText: 'D. 2001', isCorrect: false },
                { answerText: 'E. 2000', isCorrect: false },
            ],
        },
        {
            questionId: 'q_t-5',
            questionText1: 'Prawda czy Fałsz?',
            questionText2: 'Google zawdzięcza swoją nazwę literówce.',
            questionType: 'tf',
            answerOptions: [
                { answerText: 'A. Prawda', isCorrect: true },
                { answerText: 'B. Fałsz', isCorrect: false },
            ],
        },
        {
            questionId: 'q_t-6',
            questionText1: 'Prawda czy Fałsz?',
            questionText2: 'Nokia wzięła swoją nazwę od nazwy fińskiej rzeki.',
            questionType: 'tf',
            answerOptions: [
                { answerText: 'A. Prawda', isCorrect: true },
                { answerText: 'B. Fałsz', isCorrect: false },
            ],
        },
        {
            questionId: 'q_t-7',
            questionText1: 'Uzupełnij zdanie: ',
            questionText2: 'Nazwa firmy Xiaomi odnosi się do... ',
            questionText3: '...natomiast firmy Huawei - ',
            questionType: 'dnd',
            answerOptions: [
                { answerText: 'A. wolności obywatelskiej'},
                { answerText: 'B. chińskiego osiągnięcia'},
                { answerText: 'C. narodu'},
                { answerText: 'D. tradycji'},
                { answerText: 'E. pojedynczego ziarna ryżu'},
            ],
            answerCorrect: [
                { answerText: 'E. pojedynczego ziarna ryżu'},
                { answerText: 'B. chińskiego osiągnięcia'}
            ],
        },
        {
            questionId: 'q_t-8',
            questionText1: 'Uzupełnij zdanie: ',
            questionText2: 'Sieć T-Mobile nazywała się wcześniej... ',
            questionText3: '...a poprzedniczka sieci Orange to... ',
            questionType: 'dnd',
            answerOptions: [
                { answerText: 'A. Idea'},
                { answerText: 'B. Era'},
                { answerText: 'C. Tangerine'},
                { answerText: 'D. Polska Telekomunikacja Głosowa'},
                { answerText: 'E. Heyah'},
            ],
            answerCorrect: [
                { answerText: 'B. Era'},
                { answerText: 'A. Idea'}
            ],
        },
        {
            questionId: 'q_t-9',
            questionText1: 'Ułóż w kolejności od najstarszego do najnowszego modelu:',
            questionType: 'pio',
            answerOptions: [
                { answerText: 'A. iPhone 3G'}, 
                { answerText: 'B. iPhone 5s'}, 
                { answerText: 'C. iPhone 1. generacji'}, 
                { answerText: 'D. iPhone 4'}, 
                { answerText: 'E. iPhone 5'}
            ],
            answerCorrect: [
                { answerText: 'C. iPhone 1. generacji'}, 
                { answerText: 'A. iPhone 3G'}, 
                { answerText: 'D. iPhone 4'}, 
                { answerText: 'E. iPhone 5'}, 
                { answerText: 'B. iPhone 5s'}
            ],
        },
        {
            questionId: 'q_t-10',
            questionText1: 'Ułóż w kolejności od najstarszego do najnowszego modelu:',
            questionType: 'pio',
            answerOptions: [
               { answerText: 'A. iPhone 7/7 Plus'}, 
               { answerText: 'B. iPhone XS'}, 
               { answerText: 'C. iPhone X'}, 
               { answerText: 'D. iPhone SE'}, 
               { answerText: 'E. iPhone 8/8 Plus'}
            ],
            answerCorrect: [
               { answerText: 'D. iPhone SE'}, 
               { answerText: 'A. iPhone 7/7 Plus'}, 
               { answerText: 'E. iPhone 8/8 Plus'}, 
               { answerText: 'C. iPhone X'}, 
               { answerText: 'B. iPhone XS'}
            ],
        }
    ],

    motoryzacja: [
        {
            questionId: 'q_m-1',
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
        {
            questionId: 'q_m-2',
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
        {
            questionId: 'q_m-3',
            questionText1: '"Akwarium" to rodzaj...',
            questionType: 'select',
            answerOptions: [
                { answerText: 'A. Autosana', isCorrect: false },
                { answerText: 'B. Poloneza', isCorrect: true },
                { answerText: 'C. Jelcza', isCorrect: false },
                { answerText: 'D. Warszawy', isCorrect: true },
                { answerText: 'E. Nysy', isCorrect: false },
            ],
        },
        {
            questionId: 'q_m-4',
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
        {
            questionId: 'q_m-5',
            questionText1: 'Prawda czy Fałsz?',
            questionText2: 'Fiat 125p potocznie znany jest jako "Skarpeta".',
            questionType: 'tf',
            answerOptions: [
                { answerText: 'A. Prawda', isCorrect: false },
                { answerText: 'B. Fałsz', isCorrect: true },
            ],
        },
        {
            questionId: 'q_m-6',
            questionText1: 'Prawda czy Fałsz?',
            questionText2: '"Kaczka" to rodzaj Mercedesa.',
            questionType: 'tf',
            answerOptions: [
                { answerText: 'A. Prawda', isCorrect: true },
                { answerText: 'B. Fałsz', isCorrect: false },
            ],
        },
        {
            questionId: 'q_m-7',
            questionText1: 'Uzupełnij zdanie: ',
            questionText2: '"Sto małych błędów" to potoczna nazwa... ',
            questionText3:'...a "Kanciak" -... ',
            questionType: 'dnd',
            answerOptions: [
                { answerText: 'A. Fiata 125p'},
                { answerText: 'B. Nysy'},
                { answerText: 'C. Mercedesa'},
                { answerText: 'D. Autosana'},
                { answerText: 'E. Jelcza'},
            ],
            answerCorrect: [
                { answerText: 'C. Mercedesa'},
                { answerText: 'A. Fiata 125p'}
            ]
        },
        {
            questionId: 'q_m-8',
            questionText1: 'Uzupełnij zdanie: ',
            questionText2: '"Garbata" to potoczna nazwa... ',
            questionText3: '...a "Borewicz" -... ',
            questionType: 'dnd',
            answerOptions: [
                { answerText: 'A. Warszawy'},
                { answerText: 'B. Garbusa'},
                { answerText: 'C. Poloneza'},
                { answerText: 'D. Malucha'},
                { answerText: 'E. Mercedesa'},
            ],
            answerCorrect: [
                { answerText: 'A. Warszawy'},
                { answerText: 'C. Poloneza'}
            ],
        },
        {
        	questionId: 'q_m-9',
        	questionText1: 'Ułóż w kolejności chronologicznej:',
        	questionType: 'pio',
        	answerOptions: [
                { answerText: 'A. Pierwszy samochód z silnikiem spalinowym'},
                { answerText: 'B. Pierwszy seryjny samochód'}, 
                { answerText: 'C. Pierwsze radio samochodowe'}, 
                { answerText: 'D. Pierwszy złodziej samochodowy'}, 
                { answerText: 'E. Pierwsze tablice rejestracyjne'}
            ],
        	answerCorrect: [
                { answerText: 'A. Pierwszy samochód z silnikiem spalinowym'}, 
                { answerText: 'E. Pierwsze tablice rejestracyjne'}, 
                { answerText: 'D. Pierwszy złodziej samochodowy'}, 
                { answerText: 'B. Pierwszy seryjny samochód'}, 
                { answerText: 'C. Pierwsze radio samochodowe'}
            ],
        },
        {
        	questionId: 'q_m-10',
        	questionText1: 'Ułóż w kolejności chronologicznej:',
        	questionType: 'pio',
        	answerOptions: [
                { answerText: 'A. Pierwsza ofiara wypadku samochodowego'}, 
                { answerText: 'B. Pierwsza sygnalizacja świetlna'}, 
                { answerText: 'C. Pierwsze znaki drogowe'}, 
                { answerText: 'D. Pierwszy parkomat'},
                { answerText: 'E. Pierwsze trzypunktowe pasy bezpieczeństwa'}
            ],
        	answerCorrect: [
                { answerText: 'B. Pierwsza sygnalizacja świetlna'}, 
                { answerText: 'C. Pierwsze znaki drogowe'}, 
                { answerText: 'A. Pierwsza ofiara wypadku samochodowego'}, 
                { answerText: 'D. Pierwszy parkomat'}, 
                { answerText: 'E. Pierwsze trzypunktowe pasy bezpieczeństwa'}
            ],
        },
    ],

    kultura: [
        {
            questionId: 'q_c-1',
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
        {
            questionId: 'q_c-2',
            questionText1: 'Jak miał na imię pomocnik Gajusza Ceplusa? ',
            questionType: 'select',
            answerOptions: [
                { answerText: 'A. Softwarus', isCorrect: false },
                { answerText: 'B. Twardydyskus', isCorrect: false },
                { answerText: 'C. Antywirus', isCorrect: true },
                { answerText: 'D. Panelerkus', isCorrect: false },
                { answerText: 'E. Sezam', isCorrect: false },
            ],
        },
        {
            questionId: 'q_c-3',
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
        {
            questionId: 'q_c-4',
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
        {
            questionId: 'q_c-5',
            questionText1: 'Mucha siada czy nie siada?',
            questionType: 'tf',
            answerOptions: [
                { answerText: 'A. Siada', isCorrect: false },
                { answerText: 'B. Nie siada', isCorrect: true },
            ],
        },
        {
            questionId: 'q_c-6',
            questionText1: 'Co langusta by jadła, gdyby mogła?',
            questionType: 'tf',
            answerOptions: [
                { answerText: 'A. Dżem', isCorrect: true },
                { answerText: 'B. Masło orzechowe', isCorrect: false },
            ],
        },
        {
            questionId: 'q_c-7',
            questionText1: 'Dopasuj cytat do osoby: ',
            questionText2: 'Obelix - ',
            questionText3: 'Otis - ',
            questionType: 'dnd',
            answerOptions: [
                { answerText: 'A. "No szczekam sobie. Miałem nic nie mówić, to szczekam"'},
                { answerText: 'B. "Dziwna ta wasza podłoga… Nie daje oparcia"'},
                { answerText: 'C. "No jasne, kolejna faktura. Dosyć mam tej papirusowej roboty!"'},
                { answerText: 'D. "Zimno tu w tej Galurii... Conajmniej minus siedmset..."'},
                { answerText: 'E. "Ze względu na drastyczny charakter tej sceny postanowiliśmy zastąpić ją materiałem poświęconym languście"'},
            ],
            answerCorrect: [
                { answerText: 'A. "No szczekam sobie. Miałem nic nie mówić, to szczekam"'},
                { answerText: 'C. "No jasne, kolejna faktura. Dosyć mam tej papirusowej roboty!"'}
            ],
        },
        {
            questionId: 'q_c-8',            
            questionText1: 'Dopasuj cytat do osoby: ',
            questionText2: 'Marnypopis - ',
            questionText3: 'Numernabis - ',
            questionType: 'dnd',
            answerOptions: [
                { answerText: 'A. "Lew nie sprzymierza się z kojotem!"'},
                { answerText: 'B. "Letnie kołnierze z polotem"'},
                { answerText: 'C. "Co to za wielkie rodzynki?"'},
                { answerText: 'D. "Tak się zastanawiam, czy przemoc to dobre rozwiązanie?"'},
                { answerText: 'E. "Ten grobowiec będzie waszym grobowcem!"'},
            ],
            answerCorrect: [
                { answerText: 'A. "Lew nie sprzymierza się z kojotem!"'},
                { answerText: 'B. "Letnie kołnierze z polotem"'}
            ],
        },
        {
            questionId: 'q_c-9',
            questionText1: 'Ułóż filmy z serii Asterix i Obelix od najstarszego do najnowszego (wg daty premiery):',
            questionType: 'pio',
            answerOptions: [
                { answerText: 'A. Asterix i Obelix: W służbie Jej Królewskiej Mości'}, 
                { answerText: 'B. Asterix i Obelix kontra Cezar'}, 
                { answerText: 'C. Asterix i Obelix: Misja Kleopatra'}, 
                { answerText: 'D. Asterix na olimpiadzie'},
                { answerText: 'E. Asterix i wikingowie'} 
            ],
            answerCorrect: [
                { answerText: 'B. Asterix i Obelix kontra Cezar'}, 
                { answerText: 'C. Asterix i Obelix: Misja Kleopatra'}, 
                { answerText: 'E. Asterix i wikingowie'},
                { answerText: 'D. Asterix na olimpiadzie'}, 
                { answerText: 'A. Asterix i Obelix: W służbie Jej Królewskiej Mości'} 
            ],
        },
        {
            questionId: 'q_c-10',
            questionText1: 'Ułóż cytat w odpowiedniej kolejności:',
            questionType: 'pio',
            answerOptions: [
                { answerText: 'A. "A bez budulca nie ma pałacu"'},
                { answerText: 'B. "..."'},
                { answerText: 'C. "Nie ma pałacu"'}, 
                { answerText: 'D. "A bez pałacu"'}, 
                { answerText: 'E. "Bez kamieni nie ma budulca"'} 
            ],
            answerCorrect: [
                { answerText: 'E. "Bez kamieni nie ma budulca"'}, 
                { answerText: 'A. "A bez budulca nie ma pałacu"'},
                { answerText: 'D. "A bez pałacu"'}, 
                { answerText: 'B. "..."'},
                { answerText: 'C. "Nie ma pałacu"'}
            ],
        },
    ],
}

export default quizQuestionsList;