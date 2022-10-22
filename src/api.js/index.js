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
export async function deletePost(id, token) {
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await fetch(
    `${BASE_URL}/api/${COHORT}/posts/${id}`,
    options
  );
  const result = await response.json();
  return result;
}

// ------ i think we should delete this as its not a project requirement! ----------
// export async function updatePost(post, id, token) {
//   const options = {
//     method:'POST',
//     headers: {
//      'Content-Type': 'application/json',
//      'Authorization': `Bearer ${token}`
//     },
//     body: JSON.stringify({
//       post
//     })
//    }
// }

export async function createPost(
  token,
  title,
  description,
  price,
  willDeliver,
  userPosts,
  setUserPosts
) {
  fetch(`${BASE_URL}/api/${COHORT}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      post: {
        title: title,
        description: description,
        price: price,
        willDeliver: willDeliver,
      },
    }),
  })
    .then((response) => response.json())
    .then((result) => {
      // console.log(result);
      setUserPosts([...userPosts, result.data.post]);
    })
    .catch(console.error);
}

export async function createMessage(
  token,
  messageSubject,
  message,
  messages,
  setMessages
) {
  fetch(`${BASE_URL}/api/${COHORT}/users/me`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      messageSubject: messageSubject,
      message: message,
    }),
  })
    .then((response) => response.json())
    .then((result) => {
      console.log("logging Result in API", result);
      setMessages([...messages, result.data]);
    })
    .catch(console.error);
}
