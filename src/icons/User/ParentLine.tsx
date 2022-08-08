import React from "react";
import { Icon, IconProps } from "../Icon";

export type ParentLineProps = Omit<IconProps, "name">;

export const ParentLine = (props: ParentLineProps) => (
  <Icon name="parent-line" {...props} />
);
