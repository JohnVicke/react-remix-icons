import React from "react";
import { Icon, IconProps } from "../Icon";

export type Speaker3LineProps = Omit<IconProps, "name">;

export const Speaker3Line = (props: Speaker3LineProps) => (
  <Icon name="speaker-3-line" {...props} />
);
