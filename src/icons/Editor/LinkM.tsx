import React from "react";
import { Icon, IconProps } from "../Icon";

export type LinkMProps = Omit<IconProps, "name">;

export const LinkM = (props: LinkMProps) => <Icon name="link-m" {...props} />;
