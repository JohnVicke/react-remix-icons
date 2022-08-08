import React from "react";
import { Icon, IconProps } from "../Icon";

export type Safe2LineProps = Omit<IconProps, "name">;

export const Safe2Line = (props: Safe2LineProps) => (
  <Icon name="safe-2-line" {...props} />
);
