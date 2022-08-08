import React from "react";
import { Icon, IconProps } from "../Icon";

export type TabletLineProps = Omit<IconProps, "name">;

export const TabletLine = (props: TabletLineProps) => (
  <Icon name="tablet-line" {...props} />
);
