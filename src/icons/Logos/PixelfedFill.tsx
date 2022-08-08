import React from "react";
import { Icon, IconProps } from "../Icon";

export type PixelfedFillProps = Omit<IconProps, "name">;

export const PixelfedFill = (props: PixelfedFillProps) => (
  <Icon name="pixelfed-fill" {...props} />
);
