import React from "react";
import { Icon, IconProps } from "../Icon";

export type MedalFillProps = Omit<IconProps, "name">;

export const MedalFill = (props: MedalFillProps) => (
  <Icon name="medal-fill" {...props} />
);
