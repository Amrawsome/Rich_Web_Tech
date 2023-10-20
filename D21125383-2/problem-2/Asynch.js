// fetch('https://jsonplaceholder.typicode.com/posts')
//       .then(response => response.json())
//       .then(json => console.log(json))

async function retrievePost(){
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  console.log(data);
}

retrievePost();
      

// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then((response) => response.json())
//   .then((json) => console.log(json));

const fetchPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error('Failed to fetch posts.');
    }
  };

  const listPostTitlesWithMoreThanSixWords = async () => {
    try {
      const posts = await fetchPosts();
      const titlesWithMoreThanSixWords = posts
        .filter(post => post.title.split(' ').length > 6)
        .map(post => post.title);
  
      console.log(titlesWithMoreThanSixWords);
    } catch (error) {
      console.error(error);
    }
  };
  
  // Call the function to list post titles
  listPostTitlesWithMoreThanSixWords();

  // Function to create a word frequency map for the body contents of the posts
 async function createWordFrequencyMap(){
  try {
    const posts = await fetchPosts();
    const bodyText = posts.map(post => post.body).join(' ');

    const words = bodyText.split(/\s+/); // Split by whitespace to get words
    const wordFrequencyMap = words.reduce((map, word) => {
      map[word] = (map[word] || 0) + 1;
      return map;
    }, {});

    console.log(wordFrequencyMap);
  } catch (error) {
    console.error(error);
  }
};

// Call the function to create the word frequency map
createWordFrequencyMap();