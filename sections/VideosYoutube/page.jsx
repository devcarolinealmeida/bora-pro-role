"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { env } from "../../env";

const BASE_URL = env.NEXT_PUBLIC_DATABASE_URL;
/* const channelID = env.NEXT_PUBLIC_CHANNEL_ID; */
const apiKey = env.NEXT_PUBLIC_API_KEY;
const playlistID = env.NEXT_PUBLIC_PLAYLIST_ID;

const VideosYoutube = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setTimeout(async () => {
          const response = await fetch(
            `${BASE_URL}?part=snippet%2CcontentDetails&playlistId=${playlistID}&maxResults=3&key=${apiKey}`
          );
          const videos = await response.json();
          console.log(videos);
          setData(videos);
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error("error fetching data:", error);
        setLoading(false);
      }
    };
    fetchVideos();
  }, []);

  return (
    <section className="bg-black py-12">
      <div className="container max-w-7xl">
        <div className="pb-12">
          <h4 className="text-4xl text-white mb-4">Scopri i nostri ultimi contenuti</h4>
          <p className="text-white">
            Siamo Cami e João e lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
        </div>
        {loading ? (
          <p className="text-white">Loading...</p>
        ) : (
          <ul className="flex flex-col md:flex-row gap-6">
            {data.items.map((video) => (
              <li
                key={video.videoId}
                className="hover:-translate-y-2 transition-transform ease-in-out">
                <Link
                target="_blank"
                  href={`https://www.youtube.com/watch?v=${video.contentDetails.videoId}`}>
                  <div className="relative">
                    <Image
                      className="rounded-[10px] border-2 border-black"
                      src={video.snippet.thumbnails.maxres.url}
                      alt="alt"
                      width={1290}
                      height={900}
                    />
                    <div className="w-full h-full absolute top-0 right-0 bg-gradient-to-r from-black to-transparent opacity-50 rounded-[10px]"></div>
                  </div>
                  <h4 className="font-asap-condens-500 text-white capitalize line-clamp-2 mt-2">{video.snippet.title}</h4>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default VideosYoutube;
