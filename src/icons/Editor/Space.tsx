import React from "react";
import { Icon, IconProps } from "../Icon";

export type SpaceProps = Omit<IconProps, "name">;

export const Space = (props: SpaceProps) => <Icon name="space" {...props} />;
