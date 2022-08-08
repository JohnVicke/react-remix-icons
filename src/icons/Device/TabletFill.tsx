import React from "react";
import { Icon, IconProps } from "../Icon";

export type TabletFillProps = Omit<IconProps, "name">;

export const TabletFill = (props: TabletFillProps) => (
  <Icon name="tablet-fill" {...props} />
);
