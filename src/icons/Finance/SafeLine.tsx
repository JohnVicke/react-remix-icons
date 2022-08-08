import React from "react";
import { Icon, IconProps } from "../Icon";

export type SafeLineProps = Omit<IconProps, "name">;

export const SafeLine = (props: SafeLineProps) => (
  <Icon name="safe-line" {...props} />
);
