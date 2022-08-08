import React from "react";
import { Icon, IconProps } from "../Icon";

export type CameraLensFillProps = Omit<IconProps, "name">;

export const CameraLensFill = (props: CameraLensFillProps) => (
  <Icon name="camera-lens-fill" {...props} />
);
