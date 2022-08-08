import React from "react";
import { Icon, IconProps } from "../Icon";

export type Scales2LineProps = Omit<IconProps, "name">;

export const Scales2Line = (props: Scales2LineProps) => (
  <Icon name="scales-2-line" {...props} />
);
