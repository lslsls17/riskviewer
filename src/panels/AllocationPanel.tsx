import React from "react";
import {
  Chart,
  ChartLegend,
  ChartSeries,
  ChartSeriesItem,
  ChartSeriesLabels,
  ChartTitle,
  ChartTooltip,
} from "@progress/kendo-react-charts";

export const allocation = [
  { category: "Domestic", value: 48.5 },
  { category: "International", value: 14.4 },
  { category: "Bonds", value: 17.0 },
  { category: "Cash", value: 20.1 },
];
const labelContent = (e: any) => `${e.value}%`;

const renderTooltip = (e: any) => {
  return <div>{e.point ? e.point.category : ""}</div>;
};

export function AllocationPanel() {
  const data = allocation;

  return (
    <>
      <Chart style={{ opacity: data ? "1" : "0" }}>
        <ChartTitle text={"Asset Allocation"}></ChartTitle>
        <ChartSeries>
          <ChartSeriesItem type="donut" data={data}>
            <ChartSeriesLabels
              content={labelContent}
              background="none"
              color="#fff"
            />
          </ChartSeriesItem>
        </ChartSeries>
        <ChartLegend position={"bottom"} visible={true} />
        <ChartTooltip render={renderTooltip} />
      </Chart>
    </>
  );
}
