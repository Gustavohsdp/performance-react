import { List, ListRowRenderer } from "react-virtualized";

import { ProductItem } from "./ProductItem";

interface SearchResultsProps {
  totalPrice: number;
  results: Array<{
    id: number;
    price: number;
    priceFormatted: string;
    title: string;
  }>;
  onAddToWishList: (id: number) => void;
}

export function SearchResults({
  results,
  onAddToWishList,
  totalPrice,
}: SearchResultsProps) {
  const rowRenderer: ListRowRenderer = ({ index, key, style }) => {
    return (
      <div key={key} style={style}>
        <ProductItem
          product={results[index]}
          onAddToWishList={onAddToWishList}
        />
      </div>
    );
  };

  return (
    <div>
      <h2>{totalPrice}</h2>
      <List
        height={300}
        rowHeight={300}
        width={900}
        overscanRowCount={5}
        rowCount={results.length}
        rowRenderer={rowRenderer}
      />
      {/* 
      {results.map((product) => {
        return (
          <ProductItem
            key={product.id}
            product={product}
            onAddToWishList={onAddToWishList}
          />
        );
      })} */}
    </div>
  );
}

//1. Criar uma nova versão do componente
//2. Comparar com a versão anterior
//3. Se houverem alteralções, vai atualizar o que alterou

//SITUAÇÕES PARA SEREM UTILIZADAS O MEMO

//1. Pure Functional Components
//2. Renders too often
//3. Re-renders with same props
//4. Medium to big size

//SITUAÇÕES PARA SEREM UTILIZADAS O HOOK useMemo

//1. Calculos pesados
//2. Igualdade referencial(quando passamos uma informação para um componente filho)
