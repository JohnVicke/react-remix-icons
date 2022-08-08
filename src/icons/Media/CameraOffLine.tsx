import React from "react";
import { Icon, IconProps } from "../Icon";

export type CameraOffLineProps = Omit<IconProps, "name">;

export const CameraOffLine = (props: CameraOffLineProps) => (
  <Icon name="camera-off-line" {...props} />
);
