import React from "react";
import { Icon, IconProps } from "../Icon";

export type AppStoreLineProps = Omit<IconProps, "name">;

export const AppStoreLine = (props: AppStoreLineProps) => (
  <Icon name="app-store-line" {...props} />
);
