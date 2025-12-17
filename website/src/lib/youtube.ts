const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY
const CHANNEL_ID = import.meta.env.VITE_YOUTUBE_CHANNEL_ID

const BASE_URL = "https://www.googleapis.com/youtube/v3"

export async function fetchVideos(pageToken?: string) {
    console.log(API_KEY)    
  const params = new URLSearchParams({
    key: API_KEY,
    channelId: CHANNEL_ID,
    part: "snippet",
    order: "date",
    maxResults: "6",
    type: "video",
    ...(pageToken && { pageToken })
  })

  const res = await fetch(`${BASE_URL}/search?${params}`)
  if (!res.ok) throw new Error("YouTube API error")

  const data = await res.json()
  return data
}

export type YouTubeVideo = {
  id: {
    videoId: string
  }
  snippet: {
    title: string
    description: string
    thumbnails: {
      high: {
        url: string
      }
    }
  }
}
