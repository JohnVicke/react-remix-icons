import React from "react";
import { Icon, IconProps } from "../Icon";

export type Focus3LineProps = Omit<IconProps, "name">;

export const Focus3Line = (props: Focus3LineProps) => (
  <Icon name="focus-3-line" {...props} />
);
