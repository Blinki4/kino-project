export const serializeParams = (params: URLSearchParams, name: string, values: string[]) => {
    values.forEach(value => {
        params.append(name, value)
    })
}