import { Button } from "@mantine/core";
import { ReactNode } from "react";
import { JsxAttribute } from "typescript";

type TButton = {
  children: ReactNode;
  rounded?: string | number;
  bg?: string;
  size?: string;
  color?: string;
  w?: string | number;
  my?: string | number;
  variant?: string;
  type?: any;
  px?: string;
  onClick?: () => void;
};

const ButtonInterface = ({
  children,
  onClick,
  bg,
  rounded,
  size,
  color,
  px,
  w,
  my,
  type,
  variant,
  ...props
}: TButton) => {
  return (
    <>
      <Button
        size={size ? size : "md"}
        c={color ? color : ""}
        color={bg ? bg : "red"}
        radius={rounded ? rounded : "xl"}
        fz={"sm"}
        px={px ? px : ""}
        onClick={onClick}
        style={{ width: w, margin: my }}
        type={type ? type : ""}
        variant={variant ? variant : "filled"}
        {...props}
      >
        {children}
      </Button>
    </>
  );
};

export default ButtonInterface;
