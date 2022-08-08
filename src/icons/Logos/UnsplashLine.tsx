import React from "react";
import { Icon, IconProps } from "../Icon";

export type UnsplashLineProps = Omit<IconProps, "name">;

export const UnsplashLine = (props: UnsplashLineProps) => (
  <Icon name="unsplash-line" {...props} />
);
