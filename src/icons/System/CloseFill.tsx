import React from "react";
import { Icon, IconProps } from "../Icon";

export type CloseFillProps = Omit<IconProps, "name">;

export const CloseFill = (props: CloseFillProps) => (
  <Icon name="close-fill" {...props} />
);
