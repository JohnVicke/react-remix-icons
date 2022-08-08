import React from "react";
import { Icon, IconProps } from "../Icon";

export type ZoomInFillProps = Omit<IconProps, "name">;

export const ZoomInFill = (props: ZoomInFillProps) => (
  <Icon name="zoom-in-fill" {...props} />
);
