import React from "react";
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
  }
};

const Card = ({ 
  children, 
  image, 
  imageAlt = "",
  imageHeight = "200px",
  style, 
  ...props 
}) => {
  const hasImage = Boolean(image);
  
  const cardStyle = {
    ...cardStyles.base,
    ...(hasImage ? cardStyles.withImage : cardStyles.withoutImage),
    ...style
  };

  const imageStyle = {
    ...cardStyles.image,
    height: imageHeight
  };

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