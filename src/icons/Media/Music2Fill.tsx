import React from "react";
import { Icon, IconProps } from "../Icon";

export type Music2FillProps = Omit<IconProps, "name">;

export const Music2Fill = (props: Music2FillProps) => (
  <Icon name="music-2-fill" {...props} />
);
