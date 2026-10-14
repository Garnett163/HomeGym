import { useState } from 'react';

const ROW_HEIGHT = 40;
const CONTAINER_HEIGHT = 400;
const OVERSCAN = 5; // Дополнительные строки сверху и снизу

const items = Array.from({ length: 10_000 }, (_, index) => ({
  id: index,
  title: `Элемент ${index + 1}`,
}));

export default function VirtualList() {
  const [scrollTop, setScrollTop] = useState(0);

  // Начало видимой области с запасом сверху
  const startIndex = Math.max(0, Math.floor(scrollTop / ROW_HEIGHT) - OVERSCAN);

  // Конец видимой области с запасом снизу (не включительно)
  const endIndex = Math.min(items.length, Math.ceil((scrollTop + CONTAINER_HEIGHT) / ROW_HEIGHT) + OVERSCAN);

  const visibleItems = items.slice(startIndex, endIndex);

  return (
    <div>
      <p>
        Всего записей: {items.length}. В DOM: {visibleItems.length}.
      </p>

      <div
        onScroll={event => setScrollTop(event.currentTarget.scrollTop)}
        style={{
          height: CONTAINER_HEIGHT,
          overflowY: 'auto',
          border: '1px solid #ccc',
        }}
      >
        {/* Создаёт высоту и полосу прокрутки для всего списка */}
        <div
          style={{
            height: items.length * ROW_HEIGHT,
            position: 'relative',
          }}
        >
          {visibleItems.map((item, index) => {
            const actualIndex = startIndex + index;

            return (
              <div
                key={item.id}
                style={{
                  position: 'absolute',
                  top: actualIndex * ROW_HEIGHT,
                  left: 0,
                  right: 0,
                  height: ROW_HEIGHT,
                  boxSizing: 'border-box',
                  padding: '0 12px',
                  display: 'flex',
                  alignItems: 'center',
                  borderBottom: '1px solid #eee',
                }}
              >
                {item.title}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
