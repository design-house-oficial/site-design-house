import * as S from "./styles";

const Button = ({
  className = null,
  gap = null,
  width = null,
  padding = null,
  color = null,
  border = null,
  background = null,
  onClick,
  children,
}) => {
  return (
    <S.Wrapper
      className={className && className}
      width={width}
      padding={padding}
      color={color}
      border={border}
      background={background}
      gap={gap}
      onClick={onClick}
    >
      {children}
    </S.Wrapper>
  );
};
export default Button;
