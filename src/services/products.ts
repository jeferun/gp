import { productsEndpoint, productTypeEndpoint } from './endpoints';

export const getProducts = async () => {
  try {
    let service;
    const res = await fetch(productsEndpoint);
    const parsed: IProduct[] = await res.json();

    if (res.status === 200) {
      service = { success: true, data: parsed };
    } else {
      service = { success: false, data: [] };
    }

    return service;
  } catch (error) {
    return {
      success: false,
      data: [],
    };
  }
};

export const getProductTypes = async () => {
  try {
    let service;
    const res = await fetch(productTypeEndpoint);
    const parsed: IProductType[] = await res.json();

    if (res.status === 200) {
      service = { success: true, data: parsed };
    } else {
      service = { success: false, data: parsed };
    }

    return service;
  } catch (error) {
    return {
      success: false,
      data: [],
    };
  }
};
