function fat (n: number): number {
    return n > 1 ? n * fat (n - 1): 1
}

export default fat