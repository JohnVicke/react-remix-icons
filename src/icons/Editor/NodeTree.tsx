import React from "react";
import { Icon, IconProps } from "../Icon";

export type NodeTreeProps = Omit<IconProps, "name">;

export const NodeTree = (props: NodeTreeProps) => (
  <Icon name="node-tree" {...props} />
);
