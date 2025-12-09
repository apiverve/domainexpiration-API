declare module '@apiverve/domainexpiration' {
  export interface domainexpirationOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface domainexpirationResponse {
    status: string;
    error: string | null;
    data: DomainExpirationData;
    code?: number;
  }


  interface DomainExpirationData {
      domain:              string;
      expirationDate:      Date;
      daysToExpiration:    number;
      createdDate:         Date;
      lastUpdatedDate:     Date;
      daysSinceLastUpdate: number;
      domainAgeDays:       number;
  }

  export default class domainexpirationWrapper {
    constructor(options: domainexpirationOptions);

    execute(callback: (error: any, data: domainexpirationResponse | null) => void): Promise<domainexpirationResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: domainexpirationResponse | null) => void): Promise<domainexpirationResponse>;
    execute(query?: Record<string, any>): Promise<domainexpirationResponse>;
  }
}
