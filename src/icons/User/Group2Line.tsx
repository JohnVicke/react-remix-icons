import React from "react";
import { Icon, IconProps } from "../Icon";

export type Group2LineProps = Omit<IconProps, "name">;

export const Group2Line = (props: Group2LineProps) => (
  <Icon name="group-2-line" {...props} />
);
