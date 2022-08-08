import React from "react";
import { Icon, IconProps } from "../Icon";

export type UnsplashFillProps = Omit<IconProps, "name">;

export const UnsplashFill = (props: UnsplashFillProps) => (
  <Icon name="unsplash-fill" {...props} />
);
