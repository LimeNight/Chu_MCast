import { useEffect, useState } from "react"
import { fetchVideos } from "../lib/youtube"
import type { YouTubeVideo } from "../lib/youtube"

export default function VideoGrid() {
  const [videos, setVideos] = useState<YouTubeVideo[]>([])
  const [nextPage, setNextPage] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadVideos()
  }, [])

  async function loadVideos(token?: string) {
    setLoading(true)
    const data = await fetchVideos(token)
    console.log(data)
    setVideos(prev => [...prev, ...data.items])
    setNextPage(data.nextPageToken || null)
    setLoading(false)
  }

  return (
    <section id="videos" className="py-28 px-6 bg-[#050814]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-10">
          Recente video’s
        </h2>

        {/* GRID */}
        <div className="grid gap-8 md:grid-cols-3">
          {videos.map(video => (
            <div
              key={video.id.videoId}
              className="
                bg-[#0f1117]
                border border-cyan-400/30
                rounded-xl overflow-hidden
                hover:border-cyan-400 transition
              "
            >
              <iframe
                className="w-full aspect-video"
                src={`https://www.youtube.com/embed/${video.id.videoId}`}
                allowFullScreen
              />

              <div className="p-4 text-white/80">
                <h3 className="font-semibold text-sm line-clamp-2">
                  {video.snippet.title}
                </h3>
              </div>
            </div>
          ))}

          {/* SKELETON */}
          {loading &&
            Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="animate-pulse rounded-xl bg-[#0f1117] h-[220px]"
              />
            ))}
        </div>

        {/* LOAD MORE */}
        {nextPage && (
          <div className="text-center mt-12">
            <button
              onClick={() => loadVideos(nextPage)}
              className="
                px-8 py-3 rounded-full
                bg-cyan-400 text-black font-semibold
                hover:bg-cyan-300 transition
              "
            >
              Meer laden
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
