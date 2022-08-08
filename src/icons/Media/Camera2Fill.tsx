import React from "react";
import { Icon, IconProps } from "../Icon";

export type Camera2FillProps = Omit<IconProps, "name">;

export const Camera2Fill = (props: Camera2FillProps) => (
  <Icon name="camera-2-fill" {...props} />
);
