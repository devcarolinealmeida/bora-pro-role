import { env } from "../../env";

const BASE_URL = env.NEXT_PUBLIC_DATABASE_URL;
/* const channelID = env.NEXT_PUBLIC_CHANNEL_ID; */
const apiKey = env.NEXT_PUBLIC_API_KEY;
const playlistID = env.NEXT_PUBLIC_PLAYLIST_ID;

export const getVideos = async () => {
  const response = await fetch(
    `${BASE_URL}?part=snippet%2CcontentDetails&playlistId=${playlistID}&maxResults=3&key=${apiKey}`
  );

  if (!response.ok) {
    throw new Error("Network response was not ok " + response.statusText);
  } 
  const data = await response.json();
  return data;
}

