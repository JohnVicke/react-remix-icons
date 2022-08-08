import React from "react";
import { Icon, IconProps } from "../Icon";

export type WebcamFillProps = Omit<IconProps, "name">;

export const WebcamFill = (props: WebcamFillProps) => (
  <Icon name="webcam-fill" {...props} />
);
