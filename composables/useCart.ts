import { Product } from "types";

const useCart = () => {
  const cart = useState<Product[]>("cart", () => []);

  const addToCart = (product: Product) => {
    if (cart.value && cart.value.find((item) => product.id === item.id)) {
      return;
    }

    if (cart.value && cart.value?.length > 0) {
      return (cart.value = [...cart.value, product]);
    }

    return (cart.value = [product]);
  };

  const removeFromCart = (productId: number) => {
    if (!cart.value) return;
    cart.value = cart.value?.filter((product) => product.id !== productId);
  };

  const emptyCart = () => {
    cart.value = [];
  };

  return {
    cart,
    addToCart,
    removeFromCart,
    emptyCart,
  };
};

export default useCart;
