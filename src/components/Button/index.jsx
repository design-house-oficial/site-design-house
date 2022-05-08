import * as S from "./styles";

const Button = ({
  gap = null,
  width = null,
  padding = null,
  color = null,
  border = null,
  background = null,
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
      <button onClick={onClickFunction}>{children}</button>
    </S.Wrapper>
  );
};
export default Button;
