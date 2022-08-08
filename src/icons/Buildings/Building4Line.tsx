import React from "react";
import { Icon, IconProps } from "../Icon";

export type Building4LineProps = Omit<IconProps, "name">;

export const Building4Line = (props: Building4LineProps) => (
  <Icon name="building-4-line" {...props} />
);
