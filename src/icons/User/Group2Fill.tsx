import React from "react";
import { Icon, IconProps } from "../Icon";

export type Group2FillProps = Omit<IconProps, "name">;

export const Group2Fill = (props: Group2FillProps) => (
  <Icon name="group-2-fill" {...props} />
);
