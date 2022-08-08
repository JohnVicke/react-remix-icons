import React from "react";
import { Icon, IconProps } from "../Icon";

export type CameraFillProps = Omit<IconProps, "name">;

export const CameraFill = (props: CameraFillProps) => (
  <Icon name="camera-fill" {...props} />
);
