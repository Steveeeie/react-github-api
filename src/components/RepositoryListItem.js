import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import Tag, { TagGroup } from './Tag';

const animationIn = keyframes`
    0% {
        opacity: 0;
        transform: scale(0.8) translateZ(0);
    }
    100% {
        opacity: 1;
        transform: scale(1) translateZ(0);
    }
`;

const Wrapper = styled(Link)`
  animation: ${animationIn} linear 300ms forwards;
  animation-delay: ${({ index }) => `${50 * index}ms`};
  background: #35363a;
  border-radius: 12px;
  border: 1px solid transparent;
  box-shadow: ${({ theme }) => theme.bevel.small};
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 24px;
  opacity: 0;
  padding: 24px;
  text-decoration: none;
  transform: scale(0.8) translateZ(0);
  transition: all 150ms linear;
  width: 100%;

  &:not(:disabled):focus,
  &:not(:disabled):hover {
    border-color: ${({ theme }) => theme.colors.blue};
    box-shadow: ${({ theme }) => theme.focus};
    outline: none;
  }
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 16px;
  word-wrap: break-word;
  width: 100%;
`;

function RepositoryListItem({
  index,
  item: { id, nameWithOwner, primaryLanguage, stargazers, watchers }
}) {
  return (
    <Wrapper to={nameWithOwner} key={id} index={index} data-testid="respository-list-item">
      <Title>{nameWithOwner}</Title>
      <TagGroup>
        <Tag>Stars: {stargazers.totalCount}</Tag>
        <Tag>Watchers: {watchers.totalCount}</Tag>
        {primaryLanguage && <Tag color={primaryLanguage.color}>{primaryLanguage.name}</Tag>}
      </TagGroup>
    </Wrapper>
  );
}

export default RepositoryListItem;
