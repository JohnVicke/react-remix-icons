import React from "react";
import { Icon, IconProps } from "../Icon";

export type Camera3FillProps = Omit<IconProps, "name">;

export const Camera3Fill = (props: Camera3FillProps) => (
  <Icon name="camera-3-fill" {...props} />
);
