import * as S from "./styles";

const Button = ({
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
      width={width}
      padding={padding}
      color={color}
      border={border}
      background={background}
    >
      <button onClick={() => onClickFunction}>{children}</button>
    </S.Wrapper>
  );
};
export default Button;
