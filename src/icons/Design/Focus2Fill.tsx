import React from "react";
import { Icon, IconProps } from "../Icon";

export type Focus2FillProps = Omit<IconProps, "name">;

export const Focus2Fill = (props: Focus2FillProps) => (
  <Icon name="focus-2-fill" {...props} />
);
