const BASE_URL = "https://strangers-things.herokuapp.com";
const COHORT = "2209-FTB-ET-WEB-FT";

export async function fetchingPost() {
  try {
    const fetchingPostUrl = await fetch(`${BASE_URL}/api/${COHORT}/posts`);
    const searchInfo = await fetchingPostUrl.json();
    return searchInfo.data.posts;
  } catch (error) {
    console.error(err);
  }
}
export async function deletePost(id,token) {
  const options = {
   method:'DELETE',
   headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
   } 
  }
  const response = await fetch(`${BASE_URL}/api/${COHORT}/posts/${id}`,options)
  const result = await response.json()
  return result.data
}
export async function updatePost(post, id, token) {
  const options = {
    method:'POST',
    headers: {
     'Content-Type': 'application/json',
     'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
      post
    })
   }
}

export async function createPost(token, title, description, price, willDeliver){
  fetch('https://strangers-things.herokuapp.com/api/COHORT-NAME/posts', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer TOKEN_STRING_HERE'
    },
    body: JSON.stringify({
      post: {
        title:title ,
        description:description ,
        price:price ,
        willDeliver:willDeliver
      }
    })
  }).then(response => response.json())
    .then(result => {
      console.log(result);
    })
    .catch(console.error);
}
