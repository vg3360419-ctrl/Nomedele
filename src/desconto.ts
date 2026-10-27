export function calcularPrecoFinal(
  valor: number,
  descontoPercentual: number
): number {
  if (valor < 0) {
    throw new Error("valor nao pode ser negativo");
  }

  if (descontoPercentual < 0 || descontoPercentual > 100) {
    throw new Error("descontoPercentual deve estar entre 0 e 100");
  }

  const desconto = valor * (descontoPercentual / 100);
  return valor - desconto;
}
