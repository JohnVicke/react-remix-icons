import React from "react";
import { Icon, IconProps } from "../Icon";

export type ChromeLineProps = Omit<IconProps, "name">;

export const ChromeLine = (props: ChromeLineProps) => (
  <Icon name="chrome-line" {...props} />
);
