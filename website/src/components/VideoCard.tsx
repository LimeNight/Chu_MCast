import type { Video } from "../data/videos"

type Props = {
  video: Video
}


const VideoCard = ({ video }: Props) => {
  return (
    <div className="
      group
      rounded-xl
      overflow-hidden
      bg-gray-900
      border border-white/10
      transition-all duration-300
      hover:scale-[1.02]
      hover:border-blue-500/40
    ">

      <div className="aspect-video w-full overflow-hidden">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1`}
          title={video.title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-sm mb-1 line-clamp-2">
          {video.title}
        </h3>
        <p className="text-xs opacity-60">
          {video.channel}
        </p>
      </div>
    </div>
  )
}


export default VideoCard