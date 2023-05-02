import { useMediaQuery } from "@mantine/hooks";
import { useState, useEffect } from "react";

export const useSize = () => {


  const isMobile = useMediaQuery("(min-width: 768px)")

  return { isMobile };
 
};
