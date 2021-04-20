import * as React from "react";
import styled from "styled-components";

const MetricSectionDiv = styled.div`
  margin-bottom: 2rem;
  page-breadk-inside: avoid;
`;
const MetricSectionTitle = styled.div`
  padding: 0.75rem 0.75rem 0.25rem;
  font-size: 1rem;
  font-weight: 300;
  background-color: hsl(215 100% 99% / 1);
  color: hsl(0 0% 50% / 1);
  line-height: 1.25rem;
  border-bottom: 1px solid #ddd;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  & > div {
    flex-grow: 0;
  }
`;

const MetricStyled = styled.div`
  display: grid;
  grid-template-areas:
    "label value"
    "icon value"
    "secondaryLabel secondaryLabel";
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr min-content;
  align-content: center;
  background-color: white;
  padding: 0.25rem 0.5rem 0;
  height: 4rem;
  box-shadow: 1px 1px 3px 1px #eee;
  margin: 0.125rem 0.125rem;
  &.metric-centered {
    grid-template-areas:
      "label"
      "icon"
      "secondaryLabel";
    grid-template-columns: auto;
    grid-template-rows: min-content min-content 1fr 1rem;
    height: 10rem;
    align-items: stretch;
    padding-top: 0.5rem;
    font-size: large;
    & > div,
    > div.value {
      justify-self: center;
      text-align: center;
    }
  }
  &.metric-with-secondary-label {
    grid-template-rows: 1fr min-content 1 rem;
  }
  & > div.label {
    grid-area: label;
    line-height: 1rem;
    font-size: 1rem;
    letter-spacing: -0.5px;
    color: #888;
    align-self: center;
  }
  & > div.icon {
    grid-area: icon;
    color: dim-grey;
  }
  & > div.value {
    grid-area: value;
    align-self: center;
    justify-self: right;
    font-weight: 300;
    font-size: 1.5rem;
    letter-spacing: -1px;
    color: #555;
  }
  & > div.secondaryLabel {
    grid-area: secondaryLabel;
    color: #888;
    justify-self: stretch;
    text-align: center;
    font-size: 0.75rem;
    margin-left: -0.375rem;
    margin-right: -0.375rem;
    line-height: 1rem;
    border-top: 1px solid rgba(0, 0, 0, 0.05);
  }
`;

const MetricSectionChildren = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
`;

export const MetricSection = ({
  title,
  children,
  fixedColumns,
}: {
  title: string;
  children: React.ReactNode;
  fixedColumns?: number;
}): React.ReactElement => {
  const style: React.CSSProperties = fixedColumns
    ? { gridTemplateColumns: `repeat(${fixedColumns},minmax(180px,1fr))` }
    : {};
  return (
    <MetricSectionDiv>
      <MetricSectionTitle>
        <div>title</div>
      </MetricSectionTitle>
      <MetricSectionTitle>{children}</MetricSectionTitle>
    </MetricSectionDiv>
  );
};

export interface MetricProps {
  label: string;
  key?: string;
  children: React.ReactNode;
  type: string;
  icon?: string;
  iconStyle?: React.CSSProperties;
  secondaryLabel?: string | React.ReactNode;
}

export const Metric = ({
  label,
  key,
  children,
  type,
  icon,
  iconStyle,
  secondaryLabel,
}: MetricProps): React.ReactElement => {
  const style: { backgroundColor?: string } = {};
  const secondaryStyle: { backgroundColor?: string } = {};
  const valueId = `value_${key || label}`.replace(/[&-,]/g, "");
  const secondaryValueId = `secondaryValue_${key || label}`.replace(
    /[&-,]/g,
    ""
  );
  return (
    <MetricStyled
      key={key || label}
      style={style}
      className={
        type == "md"
          ? "metric-centered"
          : secondaryLabel
          ? "metric-with-secondary-label"
          : undefined
      }
    >
      <div className="label">{label}</div>
      {icon ? (
        <div className="icon" style={iconStyle}>
          <i material-icon={icon} />
        </div>
      ) : null}
      <div className="value" id={valueId}>
        {children}
      </div>
      {secondaryLabel ? (
        <div
          className="secondaryLabel"
          style={secondaryStyle}
          id={secondaryValueId}
        >
          {secondaryLabel}
        </div>
      ) : null}
    </MetricStyled>
  );
};
