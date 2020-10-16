import styled, {StyledFunction} from 'styled-components';

const button: StyledFunction<any & React.HTMLProps<HTMLInputElement>> = styled.button;
const div: StyledFunction<any & React.HTMLProps<HTMLInputElement>> = styled.div;


export const Button = button`
  color:${(props) => props?.primary ? "palevioletred" : "palevioletred"} ;
  background-color:${(props) => props?.disabled ? "#f2f2f2" : "white"} ;
  cursor:${(props) => props?.disabled ? "not-allowed" : "pointer"} ;
  border: ${(props) => props?.primary ? "2px solid palevioletred" : "none"} ;
  font-weight: bold;
  font-size: 1em;
  margin:0.5em;
  padding: 0.25em 1em;
  width:8em;
  height:2em;
  border-radius: 3px;
  &:hover{
   background-color: palevioletred;
   color: white ;
  }
`;

export const NavigatorButton = button`
 cursor:${(props) => props?.disabled ? "not-allowed" : "pointer"} ;
 background-color:#f2f2f2;
 color:gray;
 border: none;
 margin:10px;
 height: 3em;
 width: 3em; 
 font-weight:bolder;
 border-radius: 5px;
 &:hover{
   background-color: gray;
   color: white ;
  }
`;

export const ButtonContainer = div`
  display:flex;
  justify-content:space-between;
  padding: 0.5em;
`;


export const Checkbox = styled.input`
 height:20px;
 width:20px;
 &:hover{
  cursor:pointer;
 }
`;


export const Table = styled.table`
 width: 100%;
 margin-bottom: 1rem;
 color: #212529;
 text-align: left;
`

export const Th = styled.th`
 padding: 0.75rem;
 vertical-align: top;
 border-top: 1px solid #dee2e6;
 text-align: inherit;
`

export const Td = styled.th`
 padding: 0.75rem;
 vertical-align: top;
 font-weight:normal;
 border-top: 1px solid #dee2e6;
`

export const StyledDiv = styled.div`
  background:#c3c3c3;
  width:20px;
  height:20px;
  display:block;
  margin:5px;
  border-radius:5px;
`

export const TableContainer = styled.div`
  padding: 1em 10em 5em 10em;
`
