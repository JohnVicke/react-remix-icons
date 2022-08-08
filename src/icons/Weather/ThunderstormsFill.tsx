import React from "react";
import { Icon, IconProps } from "../Icon";

export type ThunderstormsFillProps = Omit<IconProps, "name">;

export const ThunderstormsFill = (props: ThunderstormsFillProps) => (
  <Icon name="thunderstorms-fill" {...props} />
);
