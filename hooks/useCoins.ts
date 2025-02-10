import { useEffect, useState } from "react";
import type { Datum } from "@/src/entities/datum.entity";

import * as UseCases from "../src/use-case";
import { coinsDBFetcher } from "@/src/http/coinsDB.adapter";

export const useCoins = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [coinsPoints, setCoinsPoints] = useState<Datum[]>([]);

  // ✅ Mueve la función antes del useEffect
  const initialLoad = async () => {
    try {
      const nowCoin = await UseCases.getCoinsUseCase(coinsDBFetcher);
      setCoinsPoints(nowCoin); // ✅ Guarda los datos en el estado
    } catch (error) {
      console.error("Error al obtener monedas:", error);
    } finally {
      setIsLoading(false); // ✅ Finaliza la carga
    }
  };

  useEffect(() => {
    initialLoad();
  }, []);

  // ✅ Devuelve los datos y el estado de carga
  return { coinsPoints, isLoading };
};
