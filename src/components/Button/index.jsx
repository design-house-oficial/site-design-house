import * as S from "./styles";

const Button = ({
  className,
  gap = false,
  width = false,
  padding = false,
  color = false,
  border = false,
  background = false,
  onClickFunction,
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
    >
      <button onClick={() => onClickFunction}>{children}</button>
    </S.Wrapper>
  );
};
export default Button;
