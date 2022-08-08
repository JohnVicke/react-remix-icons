import React from "react";
import { Icon, IconProps } from "../Icon";

export type H2Props = Omit<IconProps, "name">;

export const H2 = (props: H2Props) => <Icon name="h-2" {...props} />;
