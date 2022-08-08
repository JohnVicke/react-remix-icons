import React from "react";
import { Icon, IconProps } from "../Icon";

export type Plug2LineProps = Omit<IconProps, "name">;

export const Plug2Line = (props: Plug2LineProps) => (
  <Icon name="plug-2-line" {...props} />
);
