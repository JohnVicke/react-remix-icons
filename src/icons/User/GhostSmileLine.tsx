import React from "react";
import { Icon, IconProps } from "../Icon";

export type GhostSmileLineProps = Omit<IconProps, "name">;

export const GhostSmileLine = (props: GhostSmileLineProps) => (
  <Icon name="ghost-smile-line" {...props} />
);
