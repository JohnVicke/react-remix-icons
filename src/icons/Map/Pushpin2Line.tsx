import React from "react";
import { Icon, IconProps } from "../Icon";

export type Pushpin2LineProps = Omit<IconProps, "name">;

export const Pushpin2Line = (props: Pushpin2LineProps) => (
  <Icon name="pushpin-2-line" {...props} />
);
