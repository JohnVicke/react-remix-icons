import React from "react";
import { Icon, IconProps } from "../Icon";

export type Focus2LineProps = Omit<IconProps, "name">;

export const Focus2Line = (props: Focus2LineProps) => (
  <Icon name="focus-2-line" {...props} />
);
