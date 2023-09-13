"use client"
import styled from "@emotion/styled"

export function PageSkeleton() {
  return (
    <>
      <List className="skeleton-list reaction-list">
        <Content className="skeleton-content"></Content>
      </List>
      <List className="skeleton-list reaction-list">
        <Content className="skeleton-content"></Content>
      </List>
      <List className="skeleton-list reaction-list">
        <Content className="skeleton-content"></Content>
      </List>
    </>
  )
}

const List = styled.div`
  margin-bottom: 10px;
  position: relative;
  box-shadow: 0 9px 33px rgba(0, 0, 0, 0.07);
  display: flex;
  background: rgb(57, 58, 60);
  border: 1px solid rgb(91, 91, 91);
  border-radius: 4px;
  padding: 20px;
  width: 500px;
  height: 162px;

  :nth-of-type(2) {
    width: 360px;
  }
  :last-of-type {
    width: 360px;
  }
`
const Content = styled.div`
  background-color: #434040;
  height: 100px;
`
