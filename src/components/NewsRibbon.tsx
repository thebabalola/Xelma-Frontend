import { useState } from "react";
import "./NewsRibbon.css";

const newsItems = [
  "Many coins, including Bitcoin, saw a significant drop in price. It's a reminder of how sensitive the market can be to news and events!",
  "Stellar transactions settle in ~5 seconds with fees under $0.00001 – perfect for real-world use.",
  "Bitcoin ETFs are reshaping institutional investment in crypto. Stay informed to make better predictions!",
];

export interface NewsRibbonProps {
  onClose?: () => void;
}

export function NewsRibbon({ onClose }: NewsRibbonProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const handleClose = () => {
    setIsVisible(false);
    onClose?.();
  };

  if (!isVisible) return null;

  // Duplicate items for seamless loop
  const scrollContent = [...newsItems, ...newsItems];

  return (
    <div
      className="news-ribbon"
      role="region"
      aria-label="News updates"
    >
      <div className="news-ribbon__container">
        <span className="news-ribbon__icon" aria-hidden>
          📰
        </span>
        
        <div 
          className="news-ribbon__track"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div 
            className={`news-ribbon__scroll ${isPaused ? "news-ribbon__scroll--paused" : ""}`}
          >
            {scrollContent.map((item, idx) => (
              <span key={idx} className="news-ribbon__message">
                {item}
                <span className="news-ribbon__separator">•</span>
              </span>
            ))}
          </div>
        </div>

        {/* Close button */}
        <button
          className="news-ribbon__close"
          onClick={handleClose}
          aria-label="Close news ribbon"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 4L4 12M4 4L12 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default NewsRibbon;
