import React from "react";
import { Icon, IconProps } from "../Icon";

export type AsteriskProps = Omit<IconProps, "name">;

export const Asterisk = (props: AsteriskProps) => (
  <Icon name="asterisk" {...props} />
);
