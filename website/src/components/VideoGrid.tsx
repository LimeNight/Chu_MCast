import { useState, useEffect } from "react"
import VideoCard from "./VideoCard"
import VideoSkeleton from "./VideoSkeleton"
import { videos } from "../data/videos"

const ITEMS_PER_PAGE = 6

export default function VideoGrid() {
  const [page, setPage] = useState(0)
  const [loading, setLoading] = useState(true)

  const totalPages = Math.ceil(videos.length / ITEMS_PER_PAGE)
  const start = page * ITEMS_PER_PAGE
  const end = start + ITEMS_PER_PAGE
  const visibleVideos = videos.slice(start, end)

  const canPrev = page > 0
  const canNext = page < totalPages - 1

  // Szimulált loading (pl. fetch API esetén itt jönne)
  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => setLoading(false), 800) // 0.8s delay
    return () => clearTimeout(timer)
  }, [page])

  return (
    <section id="videos" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Videos</h2>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {loading
            ? Array(ITEMS_PER_PAGE)
              .fill(0)
              .map((_, idx) => <VideoSkeleton key={idx} />)
            : visibleVideos.map(video => <VideoCard key={video.id} video={video} />)}
        </div>

        {/* Pagination */}
        <div className="mt-12 flex justify-center items-center gap-6">
          <button
            disabled={!canPrev}
            onClick={() => setPage(p => p - 1)}
            className={`w-12 h-12 rounded-full flex items-center justify-center border border-white/20 transition-all duration-300 ${canPrev ? "hover:bg-white/10 hover:scale-110" : "opacity-30 cursor-not-allowed"
              }`}
          >
            ←
          </button>
          <button
            disabled={!canNext}
            onClick={() => {setPage(p => p + 1)}}
            className={`w-12 h-12 rounded-full flex items-center justify-center border border-white/20 transition-all duration-300 ${canNext ? "hover:bg-white/10 hover:scale-110" : "opacity-30 cursor-not-allowed"
              }`}
          >
            →
          </button>
        </div>
        
        {/* Pagination-numbers */}
        <div className="text-center">
          <p className="opacity-70">
            Pagina {page + 1} / {totalPages}
          </p>
        </div>
      </div>
    </section>
  )
}
