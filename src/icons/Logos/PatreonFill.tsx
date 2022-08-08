import React from "react";
import { Icon, IconProps } from "../Icon";

export type PatreonFillProps = Omit<IconProps, "name">;

export const PatreonFill = (props: PatreonFillProps) => (
  <Icon name="patreon-fill" {...props} />
);
