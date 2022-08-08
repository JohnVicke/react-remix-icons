import React from "react";
import { Icon, IconProps } from "../Icon";

export type InvisionLineProps = Omit<IconProps, "name">;

export const InvisionLine = (props: InvisionLineProps) => (
  <Icon name="invision-line" {...props} />
);
