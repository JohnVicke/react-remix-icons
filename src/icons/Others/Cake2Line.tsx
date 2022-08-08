import React from "react";
import { Icon, IconProps } from "../Icon";

export type Cake2LineProps = Omit<IconProps, "name">;

export const Cake2Line = (props: Cake2LineProps) => (
  <Icon name="cake-2-line" {...props} />
);
