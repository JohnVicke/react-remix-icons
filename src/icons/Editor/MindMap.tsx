import React from "react";
import { Icon, IconProps } from "../Icon";

export type MindMapProps = Omit<IconProps, "name">;

export const MindMap = (props: MindMapProps) => (
  <Icon name="mind-map" {...props} />
);
