export type TableNames =
    | 'brands'
    | 'cities'
    | 'diets'
    | 'dishtypes'

export type DataType = {
    id: number
    name: string
}

export type DataTypeWithSource = {
    id: number
    name: string
    source: TableNames
}

export type MappedDataType = Record<TableNames, DataType[]>

export type DataMapType = Record<TableNames, DataType>