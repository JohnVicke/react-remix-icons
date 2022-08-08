import React from "react";
import { Icon, IconProps } from "../Icon";

export type ScreenshotLineProps = Omit<IconProps, "name">;

export const ScreenshotLine = (props: ScreenshotLineProps) => (
  <Icon name="screenshot-line" {...props} />
);
