getJson('/json/1')
  .then(json => {
    if (json.key) {
      return getJson('/json/2');
    }

    throw new Error('No key');
  })
  .then(json => {
    return json.key2;
  })
  .catch(error => {
    console.error(error);
  });

async function fetchJson() {
  try {
    const json = await getJson('/json/1');

    if (!json.key) {
      throw new Error('No key');
    }

    const json2 = await getJson('/json/2');
    return json2.key;
  } catch (error) {
    console.log(error);
  }
}
