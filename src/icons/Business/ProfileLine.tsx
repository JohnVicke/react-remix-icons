import React from "react";
import { Icon, IconProps } from "../Icon";

export type ProfileLineProps = Omit<IconProps, "name">;

export const ProfileLine = (props: ProfileLineProps) => (
  <Icon name="profile-line" {...props} />
);
