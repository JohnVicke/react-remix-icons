import React from "react";
import { Icon, IconProps } from "../Icon";

export type RunLineProps = Omit<IconProps, "name">;

export const RunLine = (props: RunLineProps) => (
  <Icon name="run-line" {...props} />
);
