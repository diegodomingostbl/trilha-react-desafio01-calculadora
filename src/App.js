import Input from "./components/Input";
import Button from "./components/Button";

import { Container, Content, Row } from "./styles";
import { useState } from "react";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [firstNumber, setFirstNumber] = useState(null);
  const [operation, setOperation] = useState(null);

  const handleOnClear = () => {
    setCurrentNumber("0");
    setFirstNumber(null);
    setOperation(null);
  };

  const handleAddNumber = (num) => {
    setCurrentNumber((prev) => (prev === "0" ? num : prev + num));
  };

  const handleDecimal = () => {
    if (!currentNumber.includes(".")) {
      setCurrentNumber(currentNumber + ".");
    }
  };

  const startOperation = (op) => {
    if (currentNumber !== "0") {
      setFirstNumber(currentNumber);
      setCurrentNumber("0");
      setOperation(op);
    }
  };

  const handleEquals = () => {
    if (!firstNumber || !operation) return;

    const num1 = Number(firstNumber);
    const num2 = Number(currentNumber);

    let result = 0;

    switch (operation) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        if (num2 === 0) {
          setCurrentNumber("Erro");
          return;
        }
        result = num1 / num2;
        break;
    }

    setCurrentNumber(String(result));
    setFirstNumber(null);
    setOperation(null);
  };

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="x" onClick={() => startOperation("*")} />
          <Button label="/" onClick={() => startOperation("/")} />
          <Button label="C" onClick={handleOnClear} />
          <Button label="." onClick={handleDecimal} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber("7")} />
          <Button label="8" onClick={() => handleAddNumber("8")} />
          <Button label="9" onClick={() => startOperation("-")} />
          <Button label="-" onClick={() => startOperation("-")} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber("4")} />
          <Button label="5" onClick={() => handleAddNumber("5")} />
          <Button label="6" onClick={() => handleAddNumber("6")} />
          <Button label="+" onClick={() => startOperation("+")} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber("1")} />
          <Button label="2" onClick={() => handleAddNumber("2")} />
          <Button label="3" onClick={() => handleAddNumber("3")} />
          <Button label="=" onClick={handleEquals} />
        </Row>
        <Row>
          <Button label="0" onClick={() => handleAddNumber("0")} />
        </Row>
      </Content>
    </Container>
  );
};

export default App;
