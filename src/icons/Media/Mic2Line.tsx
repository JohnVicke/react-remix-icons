import React from "react";
import { Icon, IconProps } from "../Icon";

export type Mic2LineProps = Omit<IconProps, "name">;

export const Mic2Line = (props: Mic2LineProps) => (
  <Icon name="mic-2-line" {...props} />
);
