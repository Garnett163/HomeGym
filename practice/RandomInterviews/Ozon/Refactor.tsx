import { ClientType as _ClientType } from './root';

export function getData(state) {
  const response = fetch('/api/companies', {
    method: 'POST',
    body: JSON.stringify({
      id: state.client.id,
      type: _ClientType.company,
    }),
  });

  return response;
}

export const ClientType = _ClientType;

import * as React from 'react';
import { getData, ClientType } from './dataService';

function Component(props) {
  const { store } = props;
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const response = getData(store.getState());

      const data = await response.json();

      setItems(data.items);
    })();
  }, [store]);

  return (
    <div>
      {items.map(item => (
        <div key={item.id} className={`item item_type_${item.type}`}>
          {item.type === ClientType.person ? (
            <span>
              {item.id}: {item.name}
            </span>
          ) : (
            <span>Компания {item.id}</span>
          )}
          <button
            onClick={() => {
              console.log(item.id);
            }}
          >
            choose
          </button>
        </div>
      ))}
    </div>
  );
}

export default Component;

import * as React from 'react';
import Component from './component';
import store from './store';

export const ClientType = {
  company: 'company',
  person: 'person',
};

function Root() {
  return <Component store={store} />;
}

export default Root;

import * as React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';

ReactDOM.render(<Root />, document.querySelector('#app'));

import React from 'react';

const ClientType = {
  company: 'company',
  person: 'person',
};

async function getData(client, signal) {
  const response = await fetch('/api/companies', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: client.id,
      type: client.type,
    }),
    signal,
  });

  if (!response.ok) {
    throw new Error(`Failed to load clients: ${response.status}`);
  }

  return response.json();
}

function ClientItem({ item, onChoose }) {
  const isPerson = item.type === ClientType.person;

  return (
    <div className={`item item_type_${item.type}`}>
      <span>{isPerson ? `${item.id}: ${item.name}` : `Компания ${item.id}`}</span>

      <button type="button" onClick={() => onChoose(item.id)}>
        choose
      </button>
    </div>
  );
}

function ClientList({ items, onChoose }) {
  return (
    <ul>
      {items.map(item => (
        <ClientItem key={item.id} item={item} onChoose={onChoose} />
      ))}
    </ul>
  );
}

function Component({ store }) {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const controller = new AbortController();

    async function loadItems() {
      try {
        setIsLoading(true);
        setError(null);

        const { client } = store.getState();

        const data = await getData(client, controller.signal);

        setItems(data.items);
      } catch (error) {
        if (error.name !== 'AbortError') {
          setError(error);
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    }

    loadItems();

    return () => {
      controller.abort();
    };
  }, [store]);

  const handleChoose = id => {
    console.log(id);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Failed to load clients</div>;
  }

  if (items.length === 0) {
    return <div>No clients found</div>;
  }

  return <ClientList items={items} onChoose={handleChoose} />;
}

export default Component;
