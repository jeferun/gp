interface IProductType {
  id: number,
  name: string,
}

interface IProduct {
  id: number;
  name: string;
  type: { id: number, name: string };
  colors: string;
  imgUrl: string;
}

