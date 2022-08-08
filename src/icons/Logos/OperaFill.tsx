import React from "react";
import { Icon, IconProps } from "../Icon";

export type OperaFillProps = Omit<IconProps, "name">;

export const OperaFill = (props: OperaFillProps) => (
  <Icon name="opera-fill" {...props} />
);
