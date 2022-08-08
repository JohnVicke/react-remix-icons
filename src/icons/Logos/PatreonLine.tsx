import React from "react";
import { Icon, IconProps } from "../Icon";

export type PatreonLineProps = Omit<IconProps, "name">;

export const PatreonLine = (props: PatreonLineProps) => (
  <Icon name="patreon-line" {...props} />
);
