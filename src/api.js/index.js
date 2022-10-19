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
// export async function returnedSearches() {
//     try {
//         const returnedSearchUrl = await fetch(`${BASE_URL}/api/${COHORT}/posts`);
//         const postFound = await returnedSearchUrl.json();
//         console.log(postFound)
//         return postFound.data
//     } catch (error) {
//         console.error(err)
//     }
// }


