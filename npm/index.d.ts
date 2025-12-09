declare module '@apiverve/streetaddressparser' {
  export interface streetaddressparserOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface streetaddressparserResponse {
    status: string;
    error: string | null;
    data: StreetAddressParserData;
    code?: number;
  }


  interface StreetAddressParserData {
      address: string;
      parsed:  Parsed;
  }
  
  interface Parsed {
      streetNumber:  string;
      streetType:    string;
      streetAddress: string;
      cityName:      string;
      stateName:     string;
      zipCode:       string;
  }

  export default class streetaddressparserWrapper {
    constructor(options: streetaddressparserOptions);

    execute(callback: (error: any, data: streetaddressparserResponse | null) => void): Promise<streetaddressparserResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: streetaddressparserResponse | null) => void): Promise<streetaddressparserResponse>;
    execute(query?: Record<string, any>): Promise<streetaddressparserResponse>;
  }
}
