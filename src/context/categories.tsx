export type CategoryPolish =
  | "historia"
  | "kultura"
  | "motoryzacja"
  | "programowanie"
  | "technologia";

export type CategoryEnglish =
  | "history"
  | "culture"
  | "motorization"
  | "programming"
  | "technology";

export type Category = CategoryPolish | CategoryEnglish;

export const categoriesPolishList: Array<CategoryPolish> = ["historia", "kultura", "motoryzacja", "programowanie", "technologia"];

export const categoriesEnglishList: Array<CategoryEnglish> = ["history", "culture", "motorization", "programming", "technology"];

export const categoriesList: Array<{ pl: CategoryPolish, en: CategoryEnglish }> = [
  { pl: 'historia', en: 'history' },
  { pl: 'kultura', en: 'culture' },
  { pl: 'motoryzacja', en: 'motorization' },
  { pl: 'programowanie', en: 'programming' },
  { pl: 'technologia', en: 'technology' },
];