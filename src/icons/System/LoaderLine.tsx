import React from "react";
import { Icon, IconProps } from "../Icon";

export type LoaderLineProps = Omit<IconProps, "name">;

export const LoaderLine = (props: LoaderLineProps) => (
  <Icon name="loader-line" {...props} />
);
