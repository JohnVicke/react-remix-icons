import React from "react";
import { Icon, IconProps } from "../Icon";

export type CameraLineProps = Omit<IconProps, "name">;

export const CameraLine = (props: CameraLineProps) => (
  <Icon name="camera-line" {...props} />
);
