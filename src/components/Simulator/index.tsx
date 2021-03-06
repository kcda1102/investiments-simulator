import { useSimulator } from "../../hooks/useSimulator";
import Income from "../Income";
import IndexingTypes from "../IndexingTypes";
import { Button, ButtonsContainer, Container, Content, Header } from "./styles";

export default function Simulator() {
  const { clearSimulator, simulate, incomeType, indexingType } = useSimulator();

  return (
    <Container>
      <Header>
        <h2>Simulador</h2>
      </Header>
      <Content>
        <Income />
        <IndexingTypes />
      </Content>
      <ButtonsContainer>
        <Button onClick={clearSimulator} type="button">
          Limpar Campos
        </Button>
        <Button
          type="button"
          className="simulate"
          onClick={() => simulate(incomeType, indexingType)}
        >
          Simular
        </Button>
      </ButtonsContainer>
    </Container>
  );
}
