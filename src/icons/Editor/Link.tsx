import React from "react";
import { Icon, IconProps } from "../Icon";

export type LinkProps = Omit<IconProps, "name">;

export const Link = (props: LinkProps) => <Icon name="link" {...props} />;
