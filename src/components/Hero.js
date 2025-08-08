import React, { useState, useRef, useEffect } from "react";
import theme from "../theme";
import Button from "./Button";
import Badge from "./Badge";
import Icon from "./Icon";

const heroStyles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "500px",
    padding: `${theme.spacing["4xl"]} ${theme.spacing.lg}`,
    textAlign: "center",
    position: "relative",
    overflow: "hidden"
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center",
    zIndex: -2
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0, 0, 0, 0.5)",
    zIndex: -1
  },
  content: {
    maxWidth: "800px",
    margin: "0 auto",
    zIndex: 1
  },
  badge: {
    marginBottom: theme.spacing.md
  },
  title: {
    fontSize: theme.typography.headings.h1.fontSize,
    fontWeight: theme.typography.headings.h1.fontWeight,
    lineHeight: theme.typography.headings.h1.lineHeight,
    letterSpacing: theme.typography.headings.h1.letterSpacing,
    color: theme.typography.headings.h1.color,
    marginBottom: theme.spacing.lg,
    margin: 0
  },
  subtitle: {
    fontSize: theme.typography.paragraph.fontSize,
    fontWeight: theme.typography.paragraph.fontWeight,
    lineHeight: theme.typography.paragraph.lineHeight,
    letterSpacing: theme.typography.paragraph.letterSpacing,
    color: theme.typography.paragraph.color,
    marginBottom: theme.spacing["2xl"],
    margin: `0 0 ${theme.spacing["2xl"]} 0`
  },
  actions: {
    display: "flex",
    gap: theme.spacing.md,
    justifyContent: "center",
    flexWrap: "wrap"
  },
  variants: {
    default: {
      background: theme.colors.primary.background,
      border: "none"
    },
    gradient: {
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      border: "none"
    },
    image: {
      background: "transparent",
      border: "none"
    }
  },
  carousel: {
    position: "relative",
    width: "100%",
    overflow: "hidden"
  },
  carouselTrack: {
    display: "flex",
    transition: "transform 0.5s ease-in-out",
    height: "100%",
    width: "100%"
  },
  carouselItem: {
    flex: "0 0 100%",
    width: "100%",
    height: "100%",
    position: "relative"
  },
  navigation: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 20,
    background: "rgba(0, 0, 0, 0.8)",
    border: "2px solid rgba(255, 255, 255, 0.2)",
    borderRadius: theme.borderRadius.full,
    width: "56px",
    height: "56px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    color: "#fff",
    backdropFilter: "blur(10px)",
    transition: "all 0.3s ease",
    opacity: 0.9,
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)"
  },
  navigationHover: {
    opacity: 1,
    background: "rgba(255, 255, 255, 0.15)",
    borderColor: "rgba(255, 255, 255, 0.4)",
    transform: "translateY(-50%) scale(1.1)"
  },
  prevButton: {
    left: theme.spacing.xl
  },
  nextButton: {
    right: theme.spacing.xl
  },
  indicators: {
    position: "absolute",
    bottom: theme.spacing["2xl"],
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    gap: theme.spacing.md,
    zIndex: 20,
    background: "rgba(0, 0, 0, 0.3)",
    padding: "12px 20px",
    borderRadius: theme.borderRadius.full,
    backdropFilter: "blur(10px)"
  },
  indicator: {
    width: "14px",
    height: "14px",
    borderRadius: theme.borderRadius.full,
    background: "rgba(255, 255, 255, 0.4)",
    cursor: "pointer",
    transition: "all 0.3s ease",
    border: "none",
    position: "relative"
  },
  indicatorActive: {
    background: "#fff",
    transform: "scale(1.3)",
    boxShadow: "0 0 0 4px rgba(255, 255, 255, 0.2)"
  }
};

const Hero = ({
  badge,
  title,
  subtitle,
  primaryAction,
  secondaryAction,
  backgroundImage,
  variant = "default",
  minHeight = "500px",
  style,
  children,
  // 롤링 히어로용 props
  slides,
  autoPlay = false,
  autoPlayInterval = 5000,
  showNavigation = true,
  showIndicators = true,
  ...props
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const trackRef = useRef(null);
  
  const isCarousel = slides && slides.length > 0;
  const totalSlides = isCarousel ? slides.length : 1;

  // 자동 재생 기능
  useEffect(() => {
    if (!isCarousel || !autoPlay || isHovered || totalSlides <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isCarousel, autoPlay, autoPlayInterval, isHovered, totalSlides]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const containerStyle = {
    ...heroStyles.container,
    ...heroStyles.variants[variant],
    minHeight,
    ...style
  };

  // 단일 히어로 콘텐츠 렌더링
  const renderHeroContent = (slideData = {}) => {
    const {
      badge: slideBadge = badge,
      title: slideTitle = title,
      subtitle: slideSubtitle = subtitle,
      primaryAction: slidePrimaryAction = primaryAction,
      secondaryAction: slideSecondaryAction = secondaryAction,
      backgroundImage: slideBackgroundImage = backgroundImage,
      children: slideChildren = children
    } = slideData;

    return (
      <>
        {slideBackgroundImage && (
          <>
            <div 
              style={{ 
                ...heroStyles.backgroundImage, 
                backgroundImage: `url(${slideBackgroundImage})` 
              }} 
            />
            <div style={heroStyles.overlay} />
          </>
        )}
        
        <div style={heroStyles.content}>
          {slideBadge && (
            <div style={heroStyles.badge}>
              {typeof slideBadge === "string" ? (
                <Badge variant="primary">{slideBadge}</Badge>
              ) : (
                slideBadge
              )}
            </div>
          )}
          
          {slideTitle && (
            <h1 style={heroStyles.title}>
              {slideTitle}
            </h1>
          )}
          
          {slideSubtitle && (
            <p style={heroStyles.subtitle}>
              {slideSubtitle}
            </p>
          )}
          
          {slideChildren}
          
          {(slidePrimaryAction || slideSecondaryAction) && (
            <div style={heroStyles.actions}>
              {slidePrimaryAction && (
                typeof slidePrimaryAction === "string" ? (
                  <Button variant="primary">{slidePrimaryAction}</Button>
                ) : (
                  slidePrimaryAction
                )
              )}
              {slideSecondaryAction && (
                typeof slideSecondaryAction === "string" ? (
                  <Button variant="ghost">{slideSecondaryAction}</Button>
                ) : (
                  slideSecondaryAction
                )
              )}
            </div>
          )}
        </div>
      </>
    );
  };

  if (isCarousel) {
    const trackStyle = {
      ...heroStyles.carouselTrack,
      transform: `translateX(-${currentIndex * 100}%)`
    };

    return (
      <section 
        style={{
          ...containerStyle,
          ...heroStyles.carousel
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      >
        <div ref={trackRef} style={trackStyle}>
          {slides.map((slide, index) => (
            <div key={index} style={{
              ...heroStyles.carouselItem,
              ...containerStyle
            }}>
              {renderHeroContent(slide)}
            </div>
          ))}
        </div>

        {showNavigation && totalSlides > 1 && (
          <>
            <button
              style={{
                ...heroStyles.navigation,
                ...heroStyles.prevButton,
                ...(isHovered ? heroStyles.navigationHover : {})
              }}
              onClick={goToPrevious}
              aria-label="Previous slide"
            >
              <Icon name="chevron-left" size={24} />
            </button>
            <button
              style={{
                ...heroStyles.navigation,
                ...heroStyles.nextButton,
                ...(isHovered ? heroStyles.navigationHover : {})
              }}
              onClick={goToNext}
              aria-label="Next slide"
            >
              <Icon name="chevron-right" size={24} />
            </button>
          </>
        )}

        {showIndicators && totalSlides > 1 && (
          <div style={heroStyles.indicators}>
            {slides.map((_, index) => (
              <button
                key={index}
                style={{
                  ...heroStyles.indicator,
                  ...(index === currentIndex ? heroStyles.indicatorActive : {})
                }}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </section>
    );
  }

  // 기본 단일 히어로
  return (
    <section style={containerStyle} {...props}>
      {renderHeroContent()}
    </section>
  );
};

export default Hero;