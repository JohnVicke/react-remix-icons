import React from "react";
import { Icon, IconProps } from "../Icon";

export type AndroidFillProps = Omit<IconProps, "name">;

export const AndroidFill = (props: AndroidFillProps) => (
  <Icon name="android-fill" {...props} />
);
