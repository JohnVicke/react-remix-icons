import React from "react";
import { Icon, IconProps } from "../Icon";

export type ItalicProps = Omit<IconProps, "name">;

export const Italic = (props: ItalicProps) => <Icon name="italic" {...props} />;
