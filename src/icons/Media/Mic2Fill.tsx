import React from "react";
import { Icon, IconProps } from "../Icon";

export type Mic2FillProps = Omit<IconProps, "name">;

export const Mic2Fill = (props: Mic2FillProps) => (
  <Icon name="mic-2-fill" {...props} />
);
