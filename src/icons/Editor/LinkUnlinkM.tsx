import React from "react";
import { Icon, IconProps } from "../Icon";

export type LinkUnlinkMProps = Omit<IconProps, "name">;

export const LinkUnlinkM = (props: LinkUnlinkMProps) => (
  <Icon name="link-unlink-m" {...props} />
);
