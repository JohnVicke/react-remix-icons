import React from "react";
import { Icon, IconProps } from "../Icon";

export type ZoomInLineProps = Omit<IconProps, "name">;

export const ZoomInLine = (props: ZoomInLineProps) => (
  <Icon name="zoom-in-line" {...props} />
);
