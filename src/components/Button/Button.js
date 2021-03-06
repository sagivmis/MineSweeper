import "./Button.css";
const Button = ({
    content,
    onClick,
    classN = "",
    color = "black",
    fontColor = "white",
    size,
}) => {
    let paddingSide;
    let margin;
    let fontSize;
    let fontWeight;
    let borderRadius;
    let zIndex;
    let padding;
    switch (size) {
        case "big":
            padding = ("2rem", "2.5rem");
            paddingSide = "3rem";
            margin = "3.5px";
            fontSize = "26px";
            fontWeight = 300;
            borderRadius = "5px";
            break;
        case "small":
            padding = ("1rem", "1rem");
            margin = "3.5px";
            fontSize = "16px";
            fontWeight = 300;
            borderRadius = "5px";
            break;
        case "wide":
            padding = "2rem";
            paddingSide = "18rem";
            margin = "3.5px";
            fontSize = "26px";
            fontWeight = 300;
            borderRadius = "5px";
            zIndex = 1000;
            break;
        default:
            padding = ("1rem", "1.5rem");
            margin = "3.5px";
            fontSize = "22px";
            fontWeight = 300;
            borderRadius = "5px";
            zIndex = 1000;
    }
    const style = size
        ? {
              color: fontColor,
              backgroundColor: color,
              padding: padding ? padding : "",
              paddingRight: paddingSide ? paddingSide : "",
              paddingLeft: paddingSide ? paddingSide : "",
              margin: margin,
              fontSize: fontSize,
              fontWeight: fontWeight,
              borderRadius: borderRadius,
              zIndex: zIndex,
          }
        : null;
    return (
        <button onClick={onClick} className={`btn ${classN}`} style={style}>
            {content}
        </button>
    );
};

export default Button;
