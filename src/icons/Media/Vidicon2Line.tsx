import React from "react";
import { Icon, IconProps } from "../Icon";

export type Vidicon2LineProps = Omit<IconProps, "name">;

export const Vidicon2Line = (props: Vidicon2LineProps) => (
  <Icon name="vidicon-2-line" {...props} />
);
