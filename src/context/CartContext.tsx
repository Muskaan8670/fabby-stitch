"use client";

/**
 * TEMPORARY FRONTEND-ONLY CART IMPLEMENTATION
 * 
 * Note: This implementation uses browser localStorage for temporary persistence.
 * It provides a fully functional client-side cart experience for demo and testing.
 * When the backend API is ready, replace this localStorage provider with real API calls
 * to your backend/database endpoints (e.g. POST /api/cart, GET /api/cart, etc.).
 */

import React, { createContext, useContext, useState, useEffect } from "react";
import { Product } from "@/data/products";

export interface CartItem {
  variantId: string; // Unique key combining product ID, color, and size
  productId: string;
  slug: string;
  name: string;
  price: string;
  priceNum: number;
  imageSrc: string;
  imageAlt: string;
  color: string;
  size: string;
  quantity: number;
}

interface AddToCartOptions {
  product: Product;
  color?: string;
  size?: string;
  quantity?: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (options: AddToCartOptions) => void;
  removeFromCart: (variantId: string) => void;
  updateQuantity: (variantId: string, quantity: number) => void;
  clearCart: () => void;
  totalCount: number;
  subtotal: number;
  isInitialized: boolean;
}

const CART_STORAGE_KEY = "fabby-stitch-cart";

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isInitialized, setIsInitialized] = useState<boolean>(false);

  // 1. Initialize cart from localStorage safely on client mount (SSR hydration safe)
  useEffect(() => {
    try {
      const stored = localStorage.getItem(CART_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setItems(parsed);
        }
      }
    } catch (error) {
      console.error("Failed to load cart from localStorage:", error);
      setItems([]);
    } finally {
      setIsInitialized(true);
    }
  }, []);

  // 2. Persist cart to localStorage whenever items change (only after initial load)
  useEffect(() => {
    if (!isInitialized) return;
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    } catch (error) {
      console.error("Failed to save cart to localStorage:", error);
    }
  }, [items, isInitialized]);

  // 3. Add to cart function
  const addToCart = ({
    product,
    color,
    size,
    quantity = 1,
  }: AddToCartOptions) => {
    const selectedColor = color || product.colorNames[0] || "Default";
    const selectedSize = size || product.sizes[0] || "M";
    const variantId = `${product.id}-${selectedColor}-${selectedSize}`;
    const qtyToAdd = Math.max(1, quantity);

    setItems((prevItems) => {
      const existingIndex = prevItems.findIndex(
        (item) => item.variantId === variantId
      );

      if (existingIndex > -1) {
        // Update existing item quantity
        const updated = [...prevItems];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + qtyToAdd,
        };
        return updated;
      } else {
        // Add new cart item
        const newItem: CartItem = {
          variantId,
          productId: product.id,
          slug: product.slug,
          name: product.name,
          price: product.price,
          priceNum: product.priceNum,
          imageSrc: product.imageSrc,
          imageAlt: product.imageAlt || product.name,
          color: selectedColor,
          size: selectedSize,
          quantity: qtyToAdd,
        };
        return [...prevItems, newItem];
      }
    });
  };

  // 4. Remove item from cart
  const removeFromCart = (variantId: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.variantId !== variantId));
  };

  // 5. Update quantity of a cart item (minimum 1)
  const updateQuantity = (variantId: string, quantity: number) => {
    const newQty = Math.max(1, quantity);
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.variantId === variantId ? { ...item, quantity: newQty } : item
      )
    );
  };

  // 6. Clear entire cart
  const clearCart = () => {
    setItems([]);
  };

  // Calculated properties
  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce(
    (sum, item) => sum + item.priceNum * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalCount,
        subtotal,
        isInitialized,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
