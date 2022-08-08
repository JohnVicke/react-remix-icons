import React from "react";
import { Icon, IconProps } from "../Icon";

export type Save3FillProps = Omit<IconProps, "name">;

export const Save3Fill = (props: Save3FillProps) => (
  <Icon name="save-3-fill" {...props} />
);
