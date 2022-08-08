import React from "react";
import { Icon, IconProps } from "../Icon";

export type More2FillProps = Omit<IconProps, "name">;

export const More2Fill = (props: More2FillProps) => (
  <Icon name="more-2-fill" {...props} />
);
