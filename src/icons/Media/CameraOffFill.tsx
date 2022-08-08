import React from "react";
import { Icon, IconProps } from "../Icon";

export type CameraOffFillProps = Omit<IconProps, "name">;

export const CameraOffFill = (props: CameraOffFillProps) => (
  <Icon name="camera-off-fill" {...props} />
);
