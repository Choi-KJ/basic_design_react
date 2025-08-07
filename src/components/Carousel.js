import React, { useState, useRef } from "react";
import theme from "../theme";
import Icon from "./Icon";

const carouselStyles = {
  container: {
    position: "relative",
    width: "100%",
    overflow: "hidden",
    borderRadius: theme.borderRadius.lg,
    background: theme.colors.primary.surface,
    border: `1px solid ${theme.colors.primary.border}`
  },
  track: {
    display: "flex",
    transition: "transform 0.3s ease-out",
    height: "100%"
  },
  item: {
    flex: "0 0 auto",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative"
  },
  navigation: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 10,
    background: "rgba(0, 0, 0, 0.6)",
    border: "none",
    borderRadius: theme.borderRadius.full,
    width: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    color: theme.colors.primary.text,
    backdropFilter: "blur(10px)",
    transition: "all 0.2s ease",
    opacity: 0.8
  },
  navigationHover: {
    opacity: 1,
    background: "rgba(0, 0, 0, 0.8)"
  },
  prevButton: {
    left: theme.spacing.md
  },
  nextButton: {
    right: theme.spacing.md
  },
  indicators: {
    position: "absolute",
    bottom: theme.spacing.md,
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    gap: theme.spacing.sm,
    zIndex: 10
  },
  indicator: {
    width: "8px",
    height: "8px",
    borderRadius: theme.borderRadius.full,
    background: "rgba(255, 255, 255, 0.3)",
    cursor: "pointer",
    transition: "all 0.2s ease",
    border: "none"
  },
  indicatorActive: {
    background: theme.colors.primary.accent,
    transform: "scale(1.2)"
  },
  controls: {
    position: "absolute",
    bottom: `-${theme.spacing.xl}`,
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    gap: theme.spacing.sm,
    alignItems: "center",
    zIndex: 10
  },
  controlButton: {
    background: "rgba(255, 255, 255, 0.08)",
    border: `1px solid ${theme.colors.primary.border}`,
    borderRadius: theme.borderRadius.sm,
    color: theme.colors.primary.text,
    padding: "6px 12px",
    fontSize: theme.typography.fontSize.xs,
    fontWeight: theme.typography.fontWeight.medium,
    cursor: "pointer",
    transition: "all 0.2s ease",
    display: "flex",
    alignItems: "center",
    gap: "6px"
  },
  controlButtonActive: {
    background: theme.colors.primary.accent,
    color: "#fff"
  },
  controlButtonHover: {
    background: "rgba(255, 255, 255, 0.12)"
  }
};

const Carousel = ({ 
  children, 
  autoPlay = false, 
  autoPlayInterval = 4000,
  showNavigation = true,
  showIndicators = true,
  showControls = false,
  height = "300px",
  style,
  ...props 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const trackRef = useRef(null);

  const items = React.Children.toArray(children);
  const totalItems = items.length;

  React.useEffect(() => {
    if (!isPlaying || isHovered || totalItems <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalItems);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isPlaying, autoPlayInterval, isHovered, totalItems]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const stopCarousel = () => {
    setIsPlaying(false);
    setCurrentIndex(0);
  };

  const trackStyle = {
    ...carouselStyles.track,
    transform: `translateX(-${currentIndex * 100}%)`
  };

  return (
    <div style={{ position: "relative" }}>
      <div
        style={{ 
          ...carouselStyles.container, 
          height,
          ...style 
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      >
        <div ref={trackRef} style={trackStyle}>
          {items.map((item, index) => (
            <div key={index} style={carouselStyles.item}>
              {item}
            </div>
          ))}
        </div>

        {showNavigation && totalItems > 1 && (
          <>
            <button
              style={{
                ...carouselStyles.navigation,
                ...carouselStyles.prevButton,
                ...(isHovered ? carouselStyles.navigationHover : {})
              }}
              onClick={goToPrevious}
              aria-label="Previous slide"
            >
              <Icon name="chevron-left" size={20} />
            </button>
            <button
              style={{
                ...carouselStyles.navigation,
                ...carouselStyles.nextButton,
                ...(isHovered ? carouselStyles.navigationHover : {})
              }}
              onClick={goToNext}
              aria-label="Next slide"
            >
              <Icon name="chevron-right" size={20} />
            </button>
          </>
        )}

        {showIndicators && totalItems > 1 && (
          <div style={carouselStyles.indicators}>
            {items.map((_, index) => (
              <button
                key={index}
                style={{
                  ...carouselStyles.indicator,
                  ...(index === currentIndex ? carouselStyles.indicatorActive : {})
                }}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {showControls && totalItems > 1 && (
        <div style={carouselStyles.controls}>
          <button
            style={{
              ...carouselStyles.controlButton,
              ...(isPlaying ? carouselStyles.controlButtonActive : {})
            }}
            onClick={togglePlayPause}
            onMouseEnter={(e) => {
              if (!isPlaying) {
                e.target.style.background = carouselStyles.controlButtonHover.background;
              }
            }}
            onMouseLeave={(e) => {
              if (!isPlaying) {
                e.target.style.background = carouselStyles.controlButton.background;
              }
            }}
            aria-label={isPlaying ? "Pause carousel" : "Play carousel"}
          >
            <Icon name={isPlaying ? "pause" : "play"} size={14} />
            {isPlaying ? "일시정지" : "재생"}
          </button>
          <button
            style={carouselStyles.controlButton}
            onClick={stopCarousel}
            onMouseEnter={(e) => {
              e.target.style.background = carouselStyles.controlButtonHover.background;
            }}
            onMouseLeave={(e) => {
              e.target.style.background = carouselStyles.controlButton.background;
            }}
            aria-label="Stop carousel"
          >
            <Icon name="x" size={14} />
            멈춤
          </button>
        </div>
      )}
    </div>
  );
};

export default Carousel;