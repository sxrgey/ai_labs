import { useNavigate } from "react-router-dom";
import LabButton from "./styles/LabButton";
import List from "./styles/List";
import Wrapper from "./styles/Wrapper";

export const MainPage = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <List>
        <LabButton variant="contained" onClick={() => navigate("/lab1")}>
          Лабораторная работа №1
        </LabButton>
        <LabButton variant="contained" onClick={() => navigate("/lab2")}>
          Лабораторная работа №2
        </LabButton>
      </List>
    </Wrapper>
  );
};
