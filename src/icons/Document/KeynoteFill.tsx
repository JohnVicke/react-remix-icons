import React from "react";
import { Icon, IconProps } from "../Icon";

export type KeynoteFillProps = Omit<IconProps, "name">;

export const KeynoteFill = (props: KeynoteFillProps) => (
  <Icon name="keynote-fill" {...props} />
);
