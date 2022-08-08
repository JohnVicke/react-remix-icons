import React from "react";
import { Icon, IconProps } from "../Icon";

export type Plug2FillProps = Omit<IconProps, "name">;

export const Plug2Fill = (props: Plug2FillProps) => (
  <Icon name="plug-2-fill" {...props} />
);
