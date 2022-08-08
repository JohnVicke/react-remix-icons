import React from "react";
import { Icon, IconProps } from "../Icon";

export type CastFillProps = Omit<IconProps, "name">;

export const CastFill = (props: CastFillProps) => (
  <Icon name="cast-fill" {...props} />
);
