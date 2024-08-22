export type Category = 'historia' | 'kultura' | 'motoryzacja' | 'programowanie' | 'technologia';

export const answerCheck: {[key: string]: string} = {
    correct: "Poprawna odpowiedź",
    incorrect: "Niepoprawna odpowiedź"
}

export const buttonTextAlternatives: {[key: string]: string} = {
    goBack: "Kliknij, aby wrócić",
    goBackToMenu: "Kliknij, aby wrócić do menu",
    goForward: "Kliknij, aby przejść dalej",
    start: "Rozpocznij",
    close: "Zamknij",
    selectCategory: "Wybierz kategorię: ",
}