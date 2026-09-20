import { browserAndCommonQuestions } from './data/browserAndCommonQuestions';
import { htmlAndCssQuestions } from './data/htmlAndCssQuestions';
import { javaScriptQuestions } from './data/javaScriptQuestions';
import { typeScriptQuestions } from './data/typeScriptQuestions';
import { reactQuestions } from './data/reactQuestions';
import { stateManagersQuestions } from './data/stateManagersQuestions';
import { vueQuestions } from './data/vueQuestions';

export const interviewSections = [
  {
    id: 'browserQuestions',
    title: 'Общие вопросы / Браузер',
    questions: browserAndCommonQuestions,
  },
  {
    id: 'htmlAndCssQuestions',
    title: 'Вопросы по HTML и CSS',
    questions: htmlAndCssQuestions,
  },
  {
    id: 'javaScriptQuestions',
    title: 'JavaScript',
    questions: javaScriptQuestions,
  },
  {
    id: 'typeScriptQuestions',
    title: 'TypeScript',
    questions: typeScriptQuestions,
  },
  {
    id: 'reactQuestions',
    title: 'React',
    questions: reactQuestions,
  },
  {
    id: 'stateManagers',
    title: 'State managers',
    questions: stateManagersQuestions,
  },
  {
    id: 'vueQuestions',
    title: 'Vue 2 and Vue 3',
    questions: vueQuestions,
  },
];
