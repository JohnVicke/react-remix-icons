import React from "react";
import { Icon, IconProps } from "../Icon";

export type Camera3LineProps = Omit<IconProps, "name">;

export const Camera3Line = (props: Camera3LineProps) => (
  <Icon name="camera-3-line" {...props} />
);
