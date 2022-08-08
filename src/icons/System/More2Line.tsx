import React from "react";
import { Icon, IconProps } from "../Icon";

export type More2LineProps = Omit<IconProps, "name">;

export const More2Line = (props: More2LineProps) => (
  <Icon name="more-2-line" {...props} />
);
