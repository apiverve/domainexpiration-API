declare module '@apiverve/domainexpiration' {
  export interface domainexpirationOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface domainexpirationResponse {
    status: string;
    error: string | null;
    data: any;
    code?: number;
  }

  export default class domainexpirationWrapper {
    constructor(options: domainexpirationOptions);

    execute(callback: (error: any, data: domainexpirationResponse | null) => void): Promise<domainexpirationResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: domainexpirationResponse | null) => void): Promise<domainexpirationResponse>;
    execute(query?: Record<string, any>): Promise<domainexpirationResponse>;
  }
}
