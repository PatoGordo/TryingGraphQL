import { createProductUseCase } from "@/useCases/CreateProduct";
import { findAllProductsUseCase } from "@/useCases/FindAllProducts";

export function graphQLRoutes() {
  return {
    hello: () => "Hello World",
    products() {
      return findAllProductsUseCase.execute();
    },
    createProduct({
      name,
      price,
      inventoryAvailability
    }: {
      name: string;
      price: number;
      inventoryAvailability: number;
    }) {
      return createProductUseCase.execute({
        name,
        price,
        inventoryAvailability
      });
    }
  };
}
