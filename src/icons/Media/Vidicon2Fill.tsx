import React from "react";
import { Icon, IconProps } from "../Icon";

export type Vidicon2FillProps = Omit<IconProps, "name">;

export const Vidicon2Fill = (props: Vidicon2FillProps) => (
  <Icon name="vidicon-2-fill" {...props} />
);
