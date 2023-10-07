import axios from 'axios';
import { reducerCases } from '../../utils/Constants';

export async function fetchUserInfo(token, dispatch) {
  try {
    const { data } = await axios.get("https://api.spotify.com/v1/users/{user_id}", {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    });

    const userInfo = {
      userId: data.id,
      userUrl: data.external_urls.spotify,
      name: data.display_name,
    };

    dispatch({ type: reducerCases.SET_USER, userInfo });
  } catch (error) {
    // Handle errors
    console.log("Error fetching user info:", error);
  }
}
