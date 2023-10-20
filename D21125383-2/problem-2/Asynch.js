// fetch('https://jsonplaceholder.typicode.com/posts')
//       .then(response => response.json())
//       .then(json => console.log(json))

const retrievePost = async ()=>{
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  console.log(data)
  return data;
}



// retrievePost();

 async function aPG6W () {
  const post = await retrievePost();//calling fetch to get data 
  const post_data = post//for refined data
    //splitting all titles apart to make them individual and filtering out the ones longer than 6 characters in length
    .filter(post => post.title.split(' ').length > 6)
    //creating the new array given the last change to the data by a function
    .map(post => post.title);
  console.log(post_data)
}

aPG6W();

async function WFM(){
  const posts = await retrievePost();//get data
  const bodyText = posts.map(post => post.body).join(' ');//join all bodies together but seperate by a space
  const words = bodyText.split(/\s+/); //split using whitespace to divide all words

  //checks the words array and adds words to frequency map and set its count to 1, if its not there add it otherwise add to the word count
  const wordFrequencyMap = words.reduce((map, word) => {
    map[word] = (map[word] || 0) + 1;
    return map;//returns map object
  }, {});//stored

  console.log(wordFrequencyMap);

}

WFM();
      


