import React from "react";
import { Icon, IconProps } from "../Icon";

export type H5Props = Omit<IconProps, "name">;

export const H5 = (props: H5Props) => <Icon name="h-5" {...props} />;
