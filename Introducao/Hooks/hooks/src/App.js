import React, { useMemo, useCallback } from 'react';
import './App.css';

function App() {
  const variavel = '';
  // Usa o useMemo() quando precisamos
  // ouvir e fazer calculos para usar os
  // valores de uma variavel
  const t = useMemo(() => variavel.lenght, [variavel]);

  // Usa o useCallback() quando não queremos
  // que uma função seja remontada toda vez
  // gastando processamento
  const handleAdd = useCallback(() => {
    setStados(...);
  }, [var1, var2]);
  //var1 e var2 são ouvidas pelo useCallback
  // e se caso mudaram, apenas nesse caso
  // a função sera remontada novamente

  return <h1>oi</h1>;
}

export default App;
