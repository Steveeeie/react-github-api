import styled from 'styled-components';

const Tag = styled.div`
  background-color: ${({ color, theme }) => color || theme.colors.white};
  border-radius: 20px;
  box-shadow: ${({ theme }) => theme.bevel.small};
  display: inline-flex;
  font-size: 14px;
  padding: 4px 12px;
`;

export const TagGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -4px;

  ${Tag} {
    margin: 4px;
  }
`;

export default Tag;
