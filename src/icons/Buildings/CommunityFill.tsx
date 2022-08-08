import React from "react";
import { Icon, IconProps } from "../Icon";

export type CommunityFillProps = Omit<IconProps, "name">;

export const CommunityFill = (props: CommunityFillProps) => (
  <Icon name="community-fill" {...props} />
);
