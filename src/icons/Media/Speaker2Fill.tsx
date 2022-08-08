import React from "react";
import { Icon, IconProps } from "../Icon";

export type Speaker2FillProps = Omit<IconProps, "name">;

export const Speaker2Fill = (props: Speaker2FillProps) => (
  <Icon name="speaker-2-fill" {...props} />
);
