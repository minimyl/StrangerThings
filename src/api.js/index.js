const BASE_URL = "https://strangers-things.herokuapp.com";
const COHORT = "2209-FTB-ET-WEB-FT";

export async function fetchingPost() {
  try {
    const fetchedPost = await fetch(`${BASE_URL}/api/${COHORT}/posts`);
    const searchInfo = await fetchedPost.json();
    return searchInfo.data.posts;
  } catch (error) {
    console.error(err);
  }
}

// const response = await fetch(`${BASE_URL}/api/${COHORT}/users/register`, options)
// const result = await response.json()
// return result.data
