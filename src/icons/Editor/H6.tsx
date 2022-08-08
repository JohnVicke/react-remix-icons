import React from "react";
import { Icon, IconProps } from "../Icon";

export type H6Props = Omit<IconProps, "name">;

export const H6 = (props: H6Props) => <Icon name="h-6" {...props} />;
