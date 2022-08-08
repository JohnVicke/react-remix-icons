import React from "react";
import { Icon, IconProps } from "../Icon";

export type AppStoreFillProps = Omit<IconProps, "name">;

export const AppStoreFill = (props: AppStoreFillProps) => (
  <Icon name="app-store-fill" {...props} />
);
