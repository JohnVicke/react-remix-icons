import React from "react";
import { Icon, IconProps } from "../Icon";

export type FirefoxFillProps = Omit<IconProps, "name">;

export const FirefoxFill = (props: FirefoxFillProps) => (
  <Icon name="firefox-fill" {...props} />
);
