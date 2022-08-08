import React from "react";
import { Icon, IconProps } from "../Icon";

export type Scales2FillProps = Omit<IconProps, "name">;

export const Scales2Fill = (props: Scales2FillProps) => (
  <Icon name="scales-2-fill" {...props} />
);
