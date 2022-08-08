import React from "react";
import { Icon, IconProps } from "../Icon";

export type ZoomOutLineProps = Omit<IconProps, "name">;

export const ZoomOutLine = (props: ZoomOutLineProps) => (
  <Icon name="zoom-out-line" {...props} />
);
