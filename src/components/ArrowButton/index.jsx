import * as S from "./styles";

const ArrowButton = ({
  direction = "right",
  width,
  height,
  border,
  padding,
  color,
  fontSize,
}) => {
  return (
    <S.Wrapper
      border={border}
      padding={padding}
      color={color}
      fontSize={fontSize}
      width={width}
      height={height}
    >
      {direction === "top" && <i class="fa-solid fa-arrow-up"></i>}
      {direction === "right" && <i class="fa-solid fa-arrow-right"></i>}
      {direction === "down" && <i class="fa-solid fa-arrow-down"></i>}
      {direction === "left" && <i class="fa-solid fa-arrow-left"></i>}
    </S.Wrapper>
  );
};
export default ArrowButton;
