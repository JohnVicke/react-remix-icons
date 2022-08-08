import React from "react";
import { Icon, IconProps } from "../Icon";

export type CameraLensLineProps = Omit<IconProps, "name">;

export const CameraLensLine = (props: CameraLensLineProps) => (
  <Icon name="camera-lens-line" {...props} />
);
