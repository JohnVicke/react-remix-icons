import React from "react";
import { Icon, IconProps } from "../Icon";

export type HotspotLineProps = Omit<IconProps, "name">;

export const HotspotLine = (props: HotspotLineProps) => (
  <Icon name="hotspot-line" {...props} />
);
