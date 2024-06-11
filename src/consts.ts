interface QueryResponse<T> {
    result: {
        meta: {
            changed_db: boolean
            changes: number
            duration: number
            last_row_id: number
            rows_read: number
            rows_written: number
            size_after: number
        }
        results: T[]
        success: boolean
    }[]
    errors: Error[]
    messages: Message[]
    success: boolean
}

interface Error {
    code: number // >=1000
    message: string
}

interface Message {
    code: number // >=1000
    message: string
}