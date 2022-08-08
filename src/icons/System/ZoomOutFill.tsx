import React from "react";
import { Icon, IconProps } from "../Icon";

export type ZoomOutFillProps = Omit<IconProps, "name">;

export const ZoomOutFill = (props: ZoomOutFillProps) => (
  <Icon name="zoom-out-fill" {...props} />
);
