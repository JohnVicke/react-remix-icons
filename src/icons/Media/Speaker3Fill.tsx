import React from "react";
import { Icon, IconProps } from "../Icon";

export type Speaker3FillProps = Omit<IconProps, "name">;

export const Speaker3Fill = (props: Speaker3FillProps) => (
  <Icon name="speaker-3-fill" {...props} />
);
