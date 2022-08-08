import React from "react";
import { Icon, IconProps } from "../Icon";

export type H3Props = Omit<IconProps, "name">;

export const H3 = (props: H3Props) => <Icon name="h-3" {...props} />;
