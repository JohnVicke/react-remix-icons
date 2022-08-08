import React from "react";
import { Icon, IconProps } from "../Icon";

export type RunFillProps = Omit<IconProps, "name">;

export const RunFill = (props: RunFillProps) => (
  <Icon name="run-fill" {...props} />
);
