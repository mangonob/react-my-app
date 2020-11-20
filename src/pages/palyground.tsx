import { Button, Select } from "antd";
import React, { useState } from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";

const { Option } = Select;

const Wrapper = styled.div`
  font-size: ${(props) => props.theme.fontSize};
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: ${(props) => props.theme.borderRadius};

  /* Color the border and text with theme.main */
  color: ${(props) => props.theme.main};
  border: 2px solid ${(props) => props.theme.main};

  transition: all ${(props) => props.theme.duration} ease-in;
`;

const GlobalStyle = createGlobalStyle<any>`
  .ant-select {
    transition: width ${(props) => props.theme.duration} ease-in;
    width: ${(props) => props.theme.inputWidth};
  }

  .ant-select:not(.ant-select-disabled):hover .ant-select-selector {
    border-color: ${(props) => props.theme.main};
  }

  .ant-select-focused.ant-select-single:not(.ant-select-customize-input)
    .ant-select-selector {
    border-color: ${(props) => props.theme.main};
  }

  .ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
      background-color: ${(props) => props.theme.main};
      color: white;
  }

  body {
    background-color: ${(props) => props.theme.body};
    transition: background-color ${(props) => props.theme.duration} ease-in;
  }
`;

// We are passing a default theme for Buttons that arent wrapped in the ThemeProvider
const palevioletred = {
  meta: {
    name: "palevioletred",
  },
  fontSize: "1em",
  main: "palevioletred",
  background: "mediumseagreen",
  borderRadius: "10px",
  body: "white",
  duration: "0.3s",
  inputWidth: "150px",
};

// Define what props.theme will look like
const mediumseagreen = {
  meta: {
    name: "mediumseagreen",
  },
  fontSize: "2em",
  main: "mediumseagreen",
  background: "palevioletred",
  borderRadius: "3px",
  body: "black",
  duration: "0.3s",
  inputWidth: "400px",
};

export function Playground() {
  const [theme, setTheme] = useState<any>(palevioletred);
  Object.assign(window, { setTheme });

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Button
        onClick={() => {
          setTheme(theme === palevioletred ? mediumseagreen : palevioletred);
        }}
      >
        {theme.meta.name}
      </Button>
      <Wrapper>
        <div>Styled</div>
        <div>Styled</div>
        <div>Styled</div>
        <div>Styled</div>
        <div>Styled</div>
        <Select defaultValue={0}>
          <Option value={0}>Option-0</Option>
          <Option value={1}>Option-1</Option>
          <Option value={2}>Option-2</Option>
          <Option value={3}>Option-3</Option>
        </Select>
      </Wrapper>
    </ThemeProvider>
  );
}
