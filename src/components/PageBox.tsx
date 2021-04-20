import * as React from "react";
import styled from "styled-components";

const Frame = styled.div`
  background-color: #fff;
  padding: 1rem 1rem 1rem 1rem;
  margin-bottom: 1rem;
`;

const FlexSplit = styled.div`
    display:flex;
    flex-direction":row;
    justify-content:space-between;
    color:grey;
`;

export const PageBox = ({
  title,
  children,
  link,
}: {
  title: string;
  children: React.ReactNode;
  link?: React.ReactElement;
}): React.ReactElement => {
  const showMore = link ? <span className="header">{link}</span> : null;
  return (
    <Frame>
      <FlexSplit>
        <div>
          <span className="header">{title}</span>
        </div>
        <div>{showMore}</div>
      </FlexSplit>
      <div>{children}</div>
    </Frame>
  );
};
PageBox.displayName = "PageBox";
