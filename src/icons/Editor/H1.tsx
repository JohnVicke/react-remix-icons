import React from "react";
import { Icon, IconProps } from "../Icon";

export type H1Props = Omit<IconProps, "name">;

export const H1 = (props: H1Props) => <Icon name="h-1" {...props} />;
