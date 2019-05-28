const axios = require('axios');
const fs = require('fs').promises;

const url = 'https://api.github.com/repos/chochinlu/blog/issues';
// const url =
//   'https://api.github.com/repos/chochinlu/blog/issues?page=1&per_page=1';

const fetchData = async () => {
  try {
    const result = await axios.get(url);

    await fs.writeFile(
      './src/articles.json',
      JSON.stringify(result.data, null, 2)
    );
    console.log('done');
  } catch (err) {
    console.log('[ERR]: ', err.message);
  }
};

fetchData();
