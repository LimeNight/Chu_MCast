const VideoSkeleton = () => {
  return (
    <div className="rounded-xl overflow-hidden bg-gray-800 animate-pulse">
      {/* Video placeholder */}
      <div className="aspect-video w-full bg-gray-700" />
      {/* Title placeholder */}
      <div className="p-4">
        <div className="h-4 bg-gray-600 rounded mb-2 w-3/4"></div>
        <div className="h-3 bg-gray-600 rounded w-1/2"></div>
      </div>
    </div>
  )
}

export default VideoSkeleton