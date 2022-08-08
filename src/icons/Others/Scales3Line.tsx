import React from "react";
import { Icon, IconProps } from "../Icon";

export type Scales3LineProps = Omit<IconProps, "name">;

export const Scales3Line = (props: Scales3LineProps) => (
  <Icon name="scales-3-line" {...props} />
);
