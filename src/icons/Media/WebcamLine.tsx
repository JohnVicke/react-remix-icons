import React from "react";
import { Icon, IconProps } from "../Icon";

export type WebcamLineProps = Omit<IconProps, "name">;

export const WebcamLine = (props: WebcamLineProps) => (
  <Icon name="webcam-line" {...props} />
);
