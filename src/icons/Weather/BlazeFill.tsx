import React from "react";
import { Icon, IconProps } from "../Icon";

export type BlazeFillProps = Omit<IconProps, "name">;

export const BlazeFill = (props: BlazeFillProps) => (
  <Icon name="blaze-fill" {...props} />
);
