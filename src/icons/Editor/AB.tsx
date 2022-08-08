import React from "react";
import { Icon, IconProps } from "../Icon";

export type ABProps = Omit<IconProps, "name">;

export const AB = (props: ABProps) => <Icon name="a-b" {...props} />;
