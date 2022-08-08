import React from "react";
import { Icon, IconProps } from "../Icon";

export type TextProps = Omit<IconProps, "name">;

export const Text = (props: TextProps) => <Icon name="text" {...props} />;
