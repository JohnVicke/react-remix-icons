import React from "react";
import { Icon, IconProps } from "../Icon";

export type LinkUnlinkProps = Omit<IconProps, "name">;

export const LinkUnlink = (props: LinkUnlinkProps) => (
  <Icon name="link-unlink" {...props} />
);
