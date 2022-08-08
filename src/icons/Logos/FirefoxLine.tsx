import React from "react";
import { Icon, IconProps } from "../Icon";

export type FirefoxLineProps = Omit<IconProps, "name">;

export const FirefoxLine = (props: FirefoxLineProps) => (
  <Icon name="firefox-line" {...props} />
);
