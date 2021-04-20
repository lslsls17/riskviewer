import styled from "styled-components";
import * as React from "react";
import { Row, Col } from "react-bootstrap";
import { PageBox } from "../components/PageBox";
import { MetricSection, Metric } from "../components/Metrics";

const StyledRow = styled(Row)`
  padding-top: 0.5rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  &:last-child {
    padding-bottom: 1rem;
  }
`;

const StyledCol = styled(Col)`
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`;
const PortMetrics = (): React.ReactElement => {
  return (
    <div>
      <h3>Risk Viewer</h3>
      <MetricSection title={"Metrics"} fixedColumns={2}>
        <Metric type="md" label="MV" icon="local_atm">
          100000
        </Metric>
      </MetricSection>
      <StyledRow>
        <StyledCol lg="12" xl="12">
          <PageBox title={"perf"}>
            <div>Perf</div>
          </PageBox>
        </StyledCol>
        <StyledCol lg="12" xl="12">
          <PageBox title={"perf"}>
            <div>Perf</div>
          </PageBox>
        </StyledCol>
      </StyledRow>
    </div>
  );
};
export default PortMetrics;
