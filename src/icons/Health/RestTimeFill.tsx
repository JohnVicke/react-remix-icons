import React from "react";
import { Icon, IconProps } from "../Icon";

export type RestTimeFillProps = Omit<IconProps, "name">;

export const RestTimeFill = (props: RestTimeFillProps) => (
  <Icon name="rest-time-fill" {...props} />
);
