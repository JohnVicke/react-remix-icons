import React from "react";
import { Icon, IconProps } from "../Icon";

export type Camera2LineProps = Omit<IconProps, "name">;

export const Camera2Line = (props: Camera2LineProps) => (
  <Icon name="camera-2-line" {...props} />
);
