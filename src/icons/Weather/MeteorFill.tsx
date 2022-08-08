import React from "react";
import { Icon, IconProps } from "../Icon";

export type MeteorFillProps = Omit<IconProps, "name">;

export const MeteorFill = (props: MeteorFillProps) => (
  <Icon name="meteor-fill" {...props} />
);
