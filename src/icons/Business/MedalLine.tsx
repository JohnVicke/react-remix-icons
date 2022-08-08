import React from "react";
import { Icon, IconProps } from "../Icon";

export type MedalLineProps = Omit<IconProps, "name">;

export const MedalLine = (props: MedalLineProps) => (
  <Icon name="medal-line" {...props} />
);
