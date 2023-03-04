function row(score: number, win: Boolean = true): number {
  const result = score * 1.5
  return win ? Math.ceil(result) : Math.floor(result)
}

function breakRow(score: number, win: Boolean = true): number {
  const result = score / 2
  return win ? Math.ceil(result) : Math.floor(result)
}

export {row, breakRow}
