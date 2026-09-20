export const stateManagersQuestions = [
  {
    id: 1,
    question: 'Redux / Redux Toolkit / RTK Query?',
    answer: `— configureStore — создаёт и настраивает Redux store.
— createSlice — создаёт reducer + actions для определённой части state.
— useSelector — читает данные из store и подписывает компонент на изменения.
— useDispatch — получает функцию dispatch для отправки actions.

Основной поток Redux:
UI → dispatch(action) → middleware → reducer → store → UI
— Action — объект, описывающий произошедшее событие.
— Reducer — функция, которая получает state и action и определяет следующее состояние.
— Immer — позволяет в createSlice писать код в мутабельном стиле (state.count++), сохраняя immutable обновления.
— createAsyncThunk — используется для асинхронной логики и создаёт lifecycle actions: pending, fulfilled, rejected.

RTK Query — часть Redux Toolkit для работы с server state/API. Решает задачи caching, loading/error states, deduplication, refetching и cache invalidation.
— Query — получение данных.
— Mutation — изменение данных.
— RTK Query кэширует данные на основе endpoint + arguments.
— Cache invalidation: providesTags указывает, какие данные предоставляет query; invalidatesTags указывает, какие данные mutation делает устаревшими.`,
  },
  {
    id: 2,
    question: 'Zustand',
    answer: `Основной поток Zustand: UI → action → set() → store → подписанные компоненты
В отличие от Redux, Zustand не требует reducers, actions objects и dispatch — actions обычно являются обычными функциями внутри store.
— set() — обновляет состояние.
— get() — позволяет получить актуальное состояние внутри action.
— middleware — расширяют поведение store, например persist и devtools.
— persist — позволяет сохранять состояние, например в localStorage.
— devtools — интеграция с Redux DevTools.
    `,
  },
  {
    id: 3,
    question: 'Zustand',
    answer: `Основной поток Zustand: UI → action → set() → store → подписанные компоненты
В отличие от Redux, Zustand не требует reducers, actions objects и dispatch — actions обычно являются обычными функциями внутри store.
— set() — обновляет состояние.
— get() — позволяет получить актуальное состояние внутри action.
— middleware — расширяют поведение store, например persist и devtools.
— persist — позволяет сохранять состояние, например в localStorage.
— devtools — интеграция с Redux DevTools.
    `,
  },
];
