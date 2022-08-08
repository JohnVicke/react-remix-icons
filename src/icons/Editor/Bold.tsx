import React from "react";
import { Icon, IconProps } from "../Icon";

export type BoldProps = Omit<IconProps, "name">;

export const Bold = (props: BoldProps) => <Icon name="bold" {...props} />;
