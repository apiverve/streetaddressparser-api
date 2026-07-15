declare module '@apiverve/streetaddressparser' {
  export interface streetaddressparserOptions {
    api_key: string;
    secure?: boolean;
  }

  /**
   * Describes fields the current plan does not unlock. Locked fields arrive as null
   * in `data`; `locked_fields` names them, using dot paths for nested fields.
   * Absent when the plan unlocks everything.
   */
  export interface PremiumInfo {
    message: string;
    upgrade_url: string;
    locked_fields: string[];
  }

  export interface streetaddressparserResponse {
    status: string;
    error: string | null;
    data: StreetAddressParserData;
    code?: number;
    premium?: PremiumInfo;
  }


  interface StreetAddressParserData {
      address: null | string;
      parsed:  Parsed;
  }
  
  interface Parsed {
      streetNumber:  null | string;
      streetType:    null | string;
      streetAddress: null | string;
      cityName:      null | string;
      stateName:     null | string;
      zipCode:       null | string;
  }

  export default class streetaddressparserWrapper {
    constructor(options: streetaddressparserOptions);

    execute(callback: (error: any, data: streetaddressparserResponse | null) => void): Promise<streetaddressparserResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: streetaddressparserResponse | null) => void): Promise<streetaddressparserResponse>;
    execute(query?: Record<string, any>): Promise<streetaddressparserResponse>;
  }
}
