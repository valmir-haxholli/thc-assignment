import styled from "styled-components";
export const Tabs = styled.div`
  overflow: hidden;
`;

export const Tab = styled.button`
  outline: none;
  cursor: pointer;
  width: 240px;
  position: relative;
  font-size: 12px;
  font-family: Gotham Medium;
  text-transform: uppercase;
  height: ${props => (props.active ? "57px" : "45px")};
  color: ${props => (props.active ? "#fff" : "#181818")};
  border: ${props => (props.active ? "none" : "1px solid #E7E7E7")};
  border-radius: ${props => (props.active ? "4px 4px 0px 0px" : "0")};
  border-bottom: none;
  background-color: ${props => (props.active ? "#0077B5" : "#ffff")};
  transition: 0.3s all;
`;
export const Content = styled.div`
  ${props => (props.active ? "" : "display:none")}
`;
