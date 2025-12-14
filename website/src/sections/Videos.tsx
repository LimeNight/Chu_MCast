import VideoGrid from "../components/VideoGrid"

const Videos = () => {
  return (
    <div id="videos" className="mt-24 max-w-6xl mx-auto">

      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Videos
        </h2>
      </div>

      <VideoGrid />

    </div>
  )
}


export default Videos