import { useState } from "react";
import "./treeview.css";
import TreeItem from "@material-ui/lab/TreeItem";
import TreeView from "@material-ui/lab/TreeView";

import {
  FolderAddIcon,
  FolderRemoveIcon,
  DocumentIcon,
} from "@heroicons/react/outline";

const renderTree = (nodes) => (
  <TreeItem
    className="con"
    key={nodes.name}
    nodeId={nodes.name}
    label={nodes.name}
  >
    {Array.isArray(nodes.children)
      ? nodes.children.map((node) => renderTree(node))
      : null}
  </TreeItem>
);
const Tree = (props) => {
  let { data } = props;

  return (
    <div className="treeview-root">
      <p>Here you should implement the component</p>
      <TreeView
        style={{
          height: 264,
          maxWidth: 400,
          flexGrow: 1,
          overflowY: "auto",
        }}
        defaultExpandIcon={<FolderAddIcon />}
        defaultCollapseIcon={<FolderRemoveIcon />}
        defaultEndIcon={<DocumentIcon />}
      >
        {renderTree(data)}
      </TreeView>
    </div>
  );
};

export default Tree;
