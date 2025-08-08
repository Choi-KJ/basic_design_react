import React, { useState } from "react";
import theme from "../theme";

const cardStyles = {
  base: {
    background: theme.components.card.background,
    border: theme.components.card.border,
    borderRadius: theme.components.card.borderRadius,
    backdropFilter: theme.components.card.backdropFilter,
    overflow: "hidden",
    display: "flex",
    flexDirection: "column"
  },
  withImage: {
    padding: 0
  },
  withoutImage: {
    padding: theme.components.card.padding
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    display: "block"
  },
  content: {
    padding: theme.components.card.padding,
    flex: 1
  },
  flipContainer: {
    perspective: "1000px",
    cursor: "pointer",
    minHeight: "350px",
    height: "auto"
  },
  flipCard: {
    position: "relative",
    width: "100%",
    height: "100%",
    minHeight: "350px",
    transformStyle: "preserve-3d",
    transition: "transform 0.6s ease-in-out"
  },
  flipCardFlipped: {
    transform: "rotateY(180deg)"
  },
  flipSide: {
    position: "absolute",
    width: "100%",
    height: "100%",
    minHeight: "350px",
    backfaceVisibility: "hidden",
    borderRadius: theme.components.card.borderRadius,
    overflow: "hidden"
  },
  flipFront: {
    zIndex: 2
  },
  flipBack: {
    transform: "rotateY(180deg)",
    background: theme.components.card.background,
    border: theme.components.card.border,
    backdropFilter: theme.components.card.backdropFilter,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.components.card.padding,
    textAlign: "center"
  }
};

const Card = ({ 
  children, 
  image, 
  imageAlt = "",
  imageHeight = "200px",
  style,
  // 뒤집기 카드용 props
  flipCard = false,
  backContent,
  onFlip,
  ...props 
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const hasImage = Boolean(image);
  
  const handleFlip = (e) => {
    // 버튼 클릭 시 이벤트 버블링 방지
    if (e && e.target && (e.target.tagName === 'BUTTON' || e.target.closest('button'))) {
      return;
    }
    
    if (flipCard) {
      setIsFlipped(!isFlipped);
      if (onFlip) {
        onFlip(!isFlipped);
      }
    }
  };
  
  const cardStyle = {
    ...cardStyles.base,
    ...(hasImage ? cardStyles.withImage : cardStyles.withoutImage),
    ...style
  };

  const imageStyle = {
    ...cardStyles.image,
    height: imageHeight
  };

  if (flipCard) {
    return (
      <div 
        style={{
          ...cardStyles.flipContainer,
          ...style
        }}
        onClick={handleFlip}
        {...props}
      >
        <div 
          style={{
            ...cardStyles.flipCard,
            ...(isFlipped ? cardStyles.flipCardFlipped : {})
          }}
        >
          {/* 앞면 */}
          <div style={{
            ...cardStyles.flipSide,
            ...cardStyles.flipFront,
            ...cardStyle
          }}>
            {hasImage && (
              <img 
                src={image} 
                alt={imageAlt}
                style={imageStyle}
              />
            )}
            {hasImage ? (
              <div style={cardStyles.content}>
                {children}
              </div>
            ) : (
              children
            )}
          </div>
          
          {/* 뒷면 */}
          <div style={{
            ...cardStyles.flipSide,
            ...cardStyles.flipBack
          }}>
            {backContent || (
              <div>
                <h3 style={{
                  color: theme.typography.headings.h3.color,
                  fontSize: theme.typography.headings.h3.fontSize,
                  fontWeight: theme.typography.headings.h3.fontWeight,
                  marginBottom: theme.spacing.md
                }}>뒷면 내용</h3>
                <p style={{
                  color: theme.typography.paragraph.color,
                  fontSize: theme.typography.paragraph.fontSize,
                  lineHeight: theme.typography.paragraph.lineHeight
                }}>클릭하여 다시 뒤집어보세요!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // 기본 카드
  return (
    <div style={cardStyle} {...props}>
      {hasImage && (
        <img 
          src={image} 
          alt={imageAlt}
          style={imageStyle}
        />
      )}
      {hasImage ? (
        <div style={cardStyles.content}>
          {children}
        </div>
      ) : (
        children
      )}
    </div>
  );
};

export default Card;