import React from "react";
import { Icon, IconProps } from "../Icon";

export type MeteorLineProps = Omit<IconProps, "name">;

export const MeteorLine = (props: MeteorLineProps) => (
  <Icon name="meteor-line" {...props} />
);
