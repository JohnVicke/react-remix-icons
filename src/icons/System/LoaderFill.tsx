import React from "react";
import { Icon, IconProps } from "../Icon";

export type LoaderFillProps = Omit<IconProps, "name">;

export const LoaderFill = (props: LoaderFillProps) => (
  <Icon name="loader-fill" {...props} />
);
