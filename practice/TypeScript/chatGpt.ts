interface ActionPropsLink {
  mode: 'link';
  label: string;
  href: string;
  onClick?: never; // типо заблочить на всякий
}

interface ActionPropsButton {
  mode: 'button';
  label: string;
  onClick: () => void;
  href?: never; // типо заблочить на всякий
}

type ActionProps = ActionPropsLink | ActionPropsButton;

const one: ActionProps = {
  mode: 'link',
  label: 'Открыть',
  href: '/profile',
}; // OK

const b: ActionProps = {
  mode: 'button',
  label: 'Сохранить',
  onClick: () => {},
}; // OK

const c: ActionProps = {
  mode: 'link',
  label: 'Открыть',
}; // Ошибка: нет href

const d: ActionProps = {
  mode: 'button',
  label: 'Сохранить',
  onClick: () => {},
  href: '/profile',
}; // Ошибка: href запрещён

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const userTest = {
  id: 1,
  name: 'Victor',
  active: true,
};

const nameM = getProperty(userTest, 'name'); // string
const id = getProperty(userTest, 'id'); // number
const active = getProperty(userTest, 'active'); // boolean

getProperty(userTest, 'email'); // Ошибка TypeScript
