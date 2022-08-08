import React from "react";
import { Icon, IconProps } from "../Icon";

export type CommunityLineProps = Omit<IconProps, "name">;

export const CommunityLine = (props: CommunityLineProps) => (
  <Icon name="community-line" {...props} />
);
