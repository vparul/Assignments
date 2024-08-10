// src/components/FlowDiagram/index.js
import React from 'react';
import ReactFlow, { ReactFlowProvider, addEdge, MiniMap, Controls } from 'react-flow-renderer';

// Custom node styles
const nodeStyles = {
  border: '1px solid #222',
  borderRadius: '5px',
  padding: '10px',
};

// Define a custom node type
const CustomNode = ({ data }) => {
  return (
    <div style={nodeStyles}>
      <strong>{data.label}</strong>
      <div>{data.description}</div>
      <button onClick={data.onClick}>Open Sub-Diagram</button>
    </div>
  );
};

// FlowDiagram component
const FlowDiagram = () => {
  // Initial elements for the flow
  const elements = [
    {
      id: '1',
      type: 'custom', // Custom node type
      data: {
        label: 'Main Node 1',
        description: 'This is the main node.',
        onClick: () => openSubDiagram('subDiagram1'), // Function to handle sub-diagram opening
      },
      position: { x: 250, y: 5 },
    },
    {
      id: '2',
      type: 'custom',
      data: {
        label: 'Main Node 2',
        description: 'This is another main node.',
        onClick: () => openSubDiagram('subDiagram2'),
      },
      position: { x: 100, y: 100 },
    },
    {
      id: '3',
      source: '1',
      target: '2',
    },
  ];

  // Function to open sub-diagram
  const openSubDiagram = (subDiagram) => {
    // Implement logic to load the sub-diagram, e.g., updating state to render it
    console.log(`Opening ${subDiagram}`);
  };

  return (
    <ReactFlowProvider>
      <ReactFlow
        elements={elements}
        nodeTypes={{ custom: CustomNode }} // Register custom node
        onConnect={(params) => addEdge(params, elements)}
        style={{ width: '100%', height: '100vh' }}
      >
        <MiniMap />
        <Controls />
      </ReactFlow>
    </ReactFlowProvider>
  );
};

export default FlowDiagram;
