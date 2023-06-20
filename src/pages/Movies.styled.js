import { FiSearch } from 'react-icons/fi';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  /* padding: 24px; */
  display: inline-flex;
  align-items: center;
  position: relative;
  margin-bottom: 16px;
  margin-left: 10px;
  text-transform: uppercase;
`;

export const DebounceInput = styled.input`
  padding: 8px 32px 8px 8px;
  border-radius: 4px;
  font: inherit;
`;

export const Icon = styled(FiSearch)`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 6px;
`;
