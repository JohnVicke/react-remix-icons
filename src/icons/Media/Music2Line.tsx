import React from "react";
import { Icon, IconProps } from "../Icon";

export type Music2LineProps = Omit<IconProps, "name">;

export const Music2Line = (props: Music2LineProps) => (
  <Icon name="music-2-line" {...props} />
);
