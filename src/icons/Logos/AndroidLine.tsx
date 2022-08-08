import React from "react";
import { Icon, IconProps } from "../Icon";

export type AndroidLineProps = Omit<IconProps, "name">;

export const AndroidLine = (props: AndroidLineProps) => (
  <Icon name="android-line" {...props} />
);
