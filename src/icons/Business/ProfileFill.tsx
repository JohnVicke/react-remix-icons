import React from "react";
import { Icon, IconProps } from "../Icon";

export type ProfileFillProps = Omit<IconProps, "name">;

export const ProfileFill = (props: ProfileFillProps) => (
  <Icon name="profile-fill" {...props} />
);
