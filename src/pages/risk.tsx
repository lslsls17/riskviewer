import React from "react";

import { AllocationPanel } from "../panels/AllocationPanel";

export function Dashboard() {
  return (
    <div className="panels">
      <div className="panel-allocation">
        <AllocationPanel />
      </div>
    </div>
  );
}
export default Dashboard;
