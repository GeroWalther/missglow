"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/contexts/LanguageProvider";
import { useCart } from "@/hooks/use-cart-hook";
import useCartTotals from "@/hooks/use-to-pay";

export default function DiscountCodeInput({}) {
  const { language } = useLanguage();
  const { items } = useCart();
  const { setNewDiscount, totalCart, toPay } = useCartTotals(items);

  const testbutton = () => {
    setNewDiscount(500000);
  };

  return (
    <div>
      <Button onClick={testbutton}>Test</Button>
      <p>Total Cart: {totalCart}</p>
      <p>To Pay: {toPay}</p>
      <form className="space-y-1-5 text-sm m-5 flex gap-4">
        <Input
          type="text"
          placeholder={
            language == "de" ? "Gutscheincode eingeben" : "Enter discount code"
          }
          id="token"
          className="border border-pink-300 rounded-md px-3 py-2 w-"
        />
        <Button variant="outline">
          {language == "en" ? "Apply" : "Anwenden"}
        </Button>
      </form>
    </div>
  );
}
