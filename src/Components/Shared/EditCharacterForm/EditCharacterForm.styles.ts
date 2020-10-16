import styled from 'styled-components';

export const Form = styled.form`
  display: block;
  margin-top: 0em;
`;

export const Input = styled.input`
  display: block;
  width: 95%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;

export const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  display: inline-block;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
`;


export const TextRight = styled.div`
  text-align:right;
`;

export const EditButton = styled.button`
  text-transform:uppercase;
  color: palevioletred ;
  background-color:white;
  cursor:pointer;
  border: 2px solid palevioletred;
  font-weight: bold;
  font-size: 1em;
  margin-top:0.5em;
  padding: 0.25em 1em;
  width:8em;
  height:2em;
  border-radius: 3px;
  &:hover{
   background-color: palevioletred;
   color: white ;
  }
`;

export const ErrorMessage = styled.div`
  color: red;
  font-weight:bold;
`;

