import { BASE_URL, CreateDBResponse, GetDBResponse, QueryResponse } from "./consts";

export default class D1Wrapper {
    private key;
    private headers: HeadersInit;

    constructor(apiKey: string) {
        this.key = apiKey;
        this.headers = [
            [ 'Content-Type', 'application/json' ],
            [ 'Authorization', 'Bearer ' + this.key ]
        ];
    }

    async createDatabase(
        account_id: string,
        database_name: string
    ): Promise<CreateDBResponse> {
        const res = await fetch(
            `${BASE_URL}/accounts/${account_id}/d1/database`,
            {
                method: 'POST',
                headers: this.headers,
                body: JSON.stringify({ name: database_name })
            }
        );

        return res.json();
    }

    async getDatabase(
        account_id: string, 
        database_id: string
    ): Promise<GetDBResponse> {
        const res = await fetch(
            `${BASE_URL}/accounts/${account_id}/d1/database/${database_id}`,
            { 
                method: 'GET',
                headers: this.headers 
            }
        );

        return res.json();
    }

    async getQueryResponse<T>(
        account_id: string, 
        database_id: string, 
        query: string, 
        params?: string[]
    ): Promise<QueryResponse<T>> {
        const res = await fetch(
            `${BASE_URL}/accounts/${account_id}/d1/database/${database_id}/query`,
            {
                method: 'POST',
                headers: this.headers,
                body: JSON.stringify({
                    params: params ?? [],
                    sql: query
                })
            }
        );

        return res.json();
    }
}