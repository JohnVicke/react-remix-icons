import React from "react";
import { Icon, IconProps } from "../Icon";

export type OmegaProps = Omit<IconProps, "name">;

export const Omega = (props: OmegaProps) => <Icon name="omega" {...props} />;
