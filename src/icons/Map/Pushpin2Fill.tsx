import React from "react";
import { Icon, IconProps } from "../Icon";

export type Pushpin2FillProps = Omit<IconProps, "name">;

export const Pushpin2Fill = (props: Pushpin2FillProps) => (
  <Icon name="pushpin-2-fill" {...props} />
);
