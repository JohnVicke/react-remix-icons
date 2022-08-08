import React from "react";
import { Icon, IconProps } from "../Icon";

export type GhostSmileFillProps = Omit<IconProps, "name">;

export const GhostSmileFill = (props: GhostSmileFillProps) => (
  <Icon name="ghost-smile-fill" {...props} />
);
