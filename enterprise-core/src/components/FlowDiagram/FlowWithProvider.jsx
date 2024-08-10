import React from "react";
import { ReactFlowProvider } from "@xyflow/react";

import FlowDiagram from "./FlowDiagram";

import "@xyflow/react/dist/style.css";

const FlowWithProvider = (props) => (
  <ReactFlowProvider>
    <FlowDiagram {...props} />
  </ReactFlowProvider>
);

export default FlowWithProvider;
