export const stateManagersQuestions = [
  {
    id: 1,
    question: 'Redux / Redux Toolkit / RTK Query?',
    answer: `— configureStore — создаёт и настраивает Redux store.
— createSlice — создаёт reducer + actions для определённой части state.
— useSelector — читает данные из store и подписывает компонент на изменения.
— useDispatch — получает функцию dispatch для отправки actions.

Основной поток Redux:
UI → dispatch(action) → middleware → reducer → store → UI (Flux - однонаправленный поток данных)
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
    question: 'React Query / TanStack Query?',
    answer: `React Query (TanStack Query) — библиотека для работы с server state: получение, кэширование, синхронизация и обновление данных с API.

— useQuery — получение данных (GET) + управление loading/error/data состояниями.
— useMutation — изменение данных (POST / PUT / PATCH / DELETE).
— QueryClient — объект, который управляет кэшем и запросами.
— QueryClientProvider — предоставляет QueryClient всему React-приложению.
— queryKey — уникальный ключ запроса и его данных в кэше.
— queryFn — функция, которая непосредственно выполняет запрос.

Пример:
useQuery({
  queryKey: ['users', userId],
  queryFn: () => getUser(userId),
})

Кэширование:
— React Query хранит полученные server data в кэше по queryKey.
— Если несколько компонентов используют одинаковый queryKey, они работают с одними закэшированными данными.
— staleTime — сколько времени данные считаются свежими.
— gcTime — сколько неиспользуемые данные остаются в кэше перед удалением.

Состояния:
— isPending — первоначальный запрос ещё выполняется и данных пока нет.
— isFetching — запрос выполняется прямо сейчас, включая background refetch.
— isError — запрос завершился ошибкой.
— data — полученные данные.
— error — ошибка запроса.

Refetch:
— refetch — позволяет вручную повторить запрос.
— React Query также умеет автоматически обновлять устаревшие данные при определённых событиях, например при повторном монтировании компонента или возвращении фокуса на страницу.

Mutation:
useMutation({
  mutationFn: createUser,
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ['users'] })
  },
})

— mutationFn — функция изменения данных.
— onSuccess — вызывается после успешной mutation.
— onError — вызывается при ошибке.
— onSettled — вызывается после завершения mutation независимо от результата.

Cache invalidation:
— invalidateQueries помечает подходящие данные как устаревшие и может привести к их refetch.
— Обычно используется после mutation, чтобы синхронизировать UI с сервером.

Основной поток:
Component
→ useQuery
→ проверка cache по queryKey
→ queryFn / API
→ cache
→ Component

После изменения:
Component
→ useMutation
→ API
→ invalidateQueries
→ данные становятся stale
→ refetch активных query
→ UI обновляется

Важное отличие от Redux:
— Redux обычно используют для client/global state.
— React Query — для server state.
— React Query не заменяет Redux полностью: они решают разные задачи и могут использоваться вместе.

Что даёт React Query:
— caching
— request deduplication
— loading/error states
— background refetch
— cache invalidation
— retry запросов
— pagination / infinite queries
— optimistic updates

Главное для собеседования:
React Query — это не просто библиотека для fetch-запросов. Она управляет жизненным циклом server state: кэширует данные, определяет их актуальность, синхронизирует их с сервером и автоматически обновляет UI.`,
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
