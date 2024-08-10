// src/components/FlowDiagram/index.js
import React from 'react';
import ReactFlow, { ReactFlowProvider, MiniMap, Controls } from 'react-flow-renderer';

const CustomNode = ({ data }) => {
  return (
    <div style={{ border: '1px solid #222', borderRadius: '5px', padding: '10px' }}>
      <strong>{data.label}</strong>
      <div>{data.description}</div>
    </div>
  );
};

const FlowDiagram = () => {
  const elements = [
    {
      id: '1',
      type: 'custom',
      data: { label: 'Main Node', description: 'This is the main node.' },
      position: { x: 250, y: 5 },
    },
  ];

  return (
    <ReactFlowProvider>
      <ReactFlow elements={elements} nodeTypes={{ custom: CustomNode }} style={{ width: '100%', height: '400px' }}>
        <MiniMap />
        <Controls />
      </ReactFlow>
    </ReactFlowProvider>
  );
};

export default FlowDiagram;
