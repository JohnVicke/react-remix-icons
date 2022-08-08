import React from "react";
import { Icon, IconProps } from "../Icon";

export type Focus3FillProps = Omit<IconProps, "name">;

export const Focus3Fill = (props: Focus3FillProps) => (
  <Icon name="focus-3-fill" {...props} />
);
