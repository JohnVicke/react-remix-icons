import React from "react";
import { Icon, IconProps } from "../Icon";

export type OperaLineProps = Omit<IconProps, "name">;

export const OperaLine = (props: OperaLineProps) => (
  <Icon name="opera-line" {...props} />
);
