import Papa from "papaparse";

import { ExcelProduct } from "types";

export const useUtils = () => {
  const fetchProducts = async () => {
    const {
      data: res,
      error,
      refresh,
    } = await useFetch(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vR65nl0AWQR-eSgLzYv0Au5B-CwBQuimpZSrThC5CXEWLQKeEynEcFnCrPtzNtgaCjTMZmFFJvfIsO0/pub?output=csv"
    );
    const data = (await toRaw(res.value)) as string;

    const parsed = await new Promise<ExcelProduct[]>((resolve, reject) => {
      Papa.parse<ExcelProduct>(data, {
        header: true,
        complete: (result) => resolve(result.data),
        error: reject,
      });
    });

    const productList = parsed.map((product) => ({
      ...product,
      variedades: product.variedades ? product.variedades.split(",") : [],
      variedades2: product.variedades2 ? product.variedades2.split(",") : [],
    }));

    return productList;
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
      maximumSignificantDigits: 12,
    }).format(price);
  };

  return {
    formatPrice,
    fetchProducts,
  };
};
