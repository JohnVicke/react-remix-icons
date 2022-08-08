import React from "react";
import { Icon, IconProps } from "../Icon";

export type HotspotFillProps = Omit<IconProps, "name">;

export const HotspotFill = (props: HotspotFillProps) => (
  <Icon name="hotspot-fill" {...props} />
);
