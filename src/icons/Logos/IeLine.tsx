import React from "react";
import { Icon, IconProps } from "../Icon";

export type IeLineProps = Omit<IconProps, "name">;

export const IeLine = (props: IeLineProps) => (
  <Icon name="ie-line" {...props} />
);
