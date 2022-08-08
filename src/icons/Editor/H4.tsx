import React from "react";
import { Icon, IconProps } from "../Icon";

export type H4Props = Omit<IconProps, "name">;

export const H4 = (props: H4Props) => <Icon name="h-4" {...props} />;
