import { Button, styled } from "@mui/material";

const Wrapper = styled(Button)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.2vw;
  background-color: white;
  color: black;

  &:hover {
    background-color: white;
  }
`;

export default Wrapper;
