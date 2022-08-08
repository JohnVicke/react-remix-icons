import React from "react";
import { Icon, IconProps } from "../Icon";

export type ScreenshotFillProps = Omit<IconProps, "name">;

export const ScreenshotFill = (props: ScreenshotFillProps) => (
  <Icon name="screenshot-fill" {...props} />
);
