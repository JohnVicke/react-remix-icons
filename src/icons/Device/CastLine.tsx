import React from "react";
import { Icon, IconProps } from "../Icon";

export type CastLineProps = Omit<IconProps, "name">;

export const CastLine = (props: CastLineProps) => (
  <Icon name="cast-line" {...props} />
);
