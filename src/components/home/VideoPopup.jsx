import { FaX } from "react-icons/fa6";

export default function VideoPopup({ isOpen, onClose, videoSrc }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 z-10 rounded-full bg-white px-3 py-1"
        >
          ✕
        </button>

        <iframe
          className="aspect-video w-full rounded-xl"
          src={videoSrc}
          title="Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}
