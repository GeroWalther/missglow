"use client";
import { DiscountType } from "@/app/admin/_actions/getDiscounts";
import React from "react";

interface DiscountContextProps {
  discount: DiscountType;
  setDiscount: React.Dispatch<React.SetStateAction<DiscountType>>;
}

export const DiscountContext = React.createContext<
  DiscountContextProps | undefined
>(undefined);

interface DiscountProviderProps {
  children: React.ReactNode;
  discountDetails: DiscountType;
}

export const DiscountProvider: React.FC<DiscountProviderProps> = ({
  children,
  discountDetails,
}) => {
  const [discount, setDiscount] = React.useState(discountDetails);

  return (
    <DiscountContext.Provider value={{ discount, setDiscount }}>
      {children}
    </DiscountContext.Provider>
  );
};

export const useDiscount = () => {
  const context = React.useContext(DiscountContext);
  if (!context) {
    throw new Error("useDiscount must be used within a DiscountProvider");
  }
  return context;
};
