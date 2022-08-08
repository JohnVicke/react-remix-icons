import React from "react";
import { Icon, IconProps } from "../Icon";

export type IeFillProps = Omit<IconProps, "name">;

export const IeFill = (props: IeFillProps) => (
  <Icon name="ie-fill" {...props} />
);
